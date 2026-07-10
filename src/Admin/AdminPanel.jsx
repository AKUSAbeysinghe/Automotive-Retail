import React, { useEffect, useState } from "react";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("products");
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [formData, setFormData] = useState({
    category_id: "",
    sub_category_id: "",
    name: "",
    price: "",
    description: "",
    image: null,
    popular: false,
    stock: 0,
  });

  const [imagePreview, setImagePreview] = useState(null);

  const [admin] = useState({
    name: "Admin",
    email: "admin@sennelier.lk",
    profilePic: "https://i.pravatar.cc/100?img=25",
  });

  // Fetch functions
  const fetchCategories = async () => {
    try {
      const res = await fetch("http://localhost/Automative_DB/api/get_categories.php");
      const data = await res.json();
      if (data.success && data.data) {
        setCategories(data.data);
        if (data.data.length > 0) {
          const firstCatId = data.data[0].id;
          setFormData(prev => ({ ...prev, category_id: firstCatId }));
          fetchSubCategories(firstCatId);
        }
      }
    } catch (err) {
      setError("Cannot connect to server.");
    }
  };

  const fetchSubCategories = async (categoryId) => {
    if (!categoryId) return;
    try {
      const res = await fetch(`http://localhost/Automative_DB/api/get_subcategories.php?category_id=${categoryId}`);
      const data = await res.json();
      if (data.success) {
        setSubCategories(data.data || []);
        if (data.data?.length > 0 && !isEditing) {
          setFormData(prev => ({ ...prev, sub_category_id: data.data[0].id }));
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost/Automative_DB/api/get_products.php");
      const data = await res.json();
      if (data.success) {
        const fixedProducts = (data.data || []).map(p => ({
          ...p,
          image_url: p.image_url 
            ? (p.image_url.startsWith('http') 
                ? p.image_url 
                : `http://localhost/Automative_DB/${p.image_url.replace(/^\//, '')}`)
            : null
        }));
        setProducts(fixedProducts);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked
            : type === "file" ? files[0]
            : name === "price" || name === "stock" ? Number(value) || 0
            : value,
    }));

    if (name === "image" && files?.[0]) {
      setImagePreview(URL.createObjectURL(files[0]));
    }

    if (name === "category_id") {
      setFormData((prev) => ({ ...prev, sub_category_id: "" }));
      fetchSubCategories(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    setError("");

    const form = new FormData();
    form.append("category_id", formData.category_id);
    form.append("sub_category_id", formData.sub_category_id);
    form.append("name", formData.name);
    form.append("price", formData.price);
    form.append("description", formData.description || "");
    form.append("popular", formData.popular ? "1" : "0");
    form.append("stock", formData.stock);

    if (formData.image) form.append("image", formData.image);

    try {
      const url = isEditing
        ? `http://localhost/Automative_DB/api/update_product.php?id=${editId}`
        : "http://localhost/Automative_DB/api/add_product.php";

      const res = await fetch(url, { method: "POST", body: form });
      const data = await res.json();

      if (data.success) {
        setMessage(isEditing ? "Product updated successfully!" : "Product added successfully!");
        resetForm();
        fetchProducts();
        setTimeout(() => setMessage(""), 3000);
      } else {
        setError(data.message || "Operation failed.");
      }
    } catch (err) {
      setError("Failed to connect to server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      category_id: categories[0]?.id || "",
      sub_category_id: "",
      name: "",
      price: "",
      description: "",
      image: null,
      popular: false,
      stock: 0,
    });
    setImagePreview(null);
    setIsEditing(false);
    setEditId(null);
    setShowForm(false);
  };

  const handleEdit = (product) => {
    setFormData({
      category_id: product.category_id,
      sub_category_id: product.sub_category_id,
      name: product.name,
      price: product.price,
      description: product.description || "",
      image: null,
      popular: !!product.popular,
      stock: product.stock || 0,
    });
    setEditId(product.id);
    setIsEditing(true);
    setImagePreview(product.image_url);
    setShowForm(true);
    fetchSubCategories(product.category_id);
  };

  const confirmDelete = (id) => {
    setItemToDelete(id);
    setShowConfirmModal(true);
  };

  const handleDelete = async () => {
    if (!itemToDelete) return;
    try {
      const res = await fetch(`http://localhost/Automative_DB/api/delete_product.php?id=${itemToDelete}`, {
        method: "POST",
      });
      const data = await res.json();

      if (data.success) {
        setMessage("Product deleted successfully!");
        fetchProducts();
      } else {
        setError(data.message || "Delete failed.");
      }
    } catch (err) {
      setError("Failed to delete product.");
    } finally {
      setShowConfirmModal(false);
      setItemToDelete(null);
      setTimeout(() => setMessage(""), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] font-sans text-zinc-900 p-6 md:p-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 bg-white rounded-2xl shadow p-8 border border-zinc-100">
        <div className="flex items-center gap-6">
          <img 
            src={admin.profilePic} 
            alt="admin" 
            className="w-20 h-20 rounded-2xl border-4 border-amber-700 object-cover" 
          />
          <div>
            <h1 className="text-4xl font-serif italic font-medium text-zinc-900">{admin.name}</h1>
            <p className="text-zinc-600 mt-1">{admin.email}</p>
            <p className="text-amber-700 font-medium mt-1">Sennelier & Son — Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      {message && <div className="mb-6 p-4 bg-green-100 border border-green-300 text-green-800 rounded-2xl font-medium">{message}</div>}
      {error && <div className="mb-6 p-4 bg-red-100 border border-red-300 text-red-800 rounded-2xl font-medium">{error}</div>}

      <div className="mb-8">
        <button
          onClick={() => { resetForm(); setShowForm(true); }}
          className="bg-zinc-900 hover:bg-black text-white px-10 py-4 rounded-2xl font-medium shadow-lg transition-all"
        >
          + Add New Product
        </button>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-3xl shadow overflow-hidden border border-zinc-100">
        <table className="w-full">
          <thead className="bg-zinc-50 border-b">
            <tr>
              <th className="px-6 py-4 text-left">Image</th>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Category</th>
              <th className="px-6 py-4 text-right">Price</th>
              <th className="px-6 py-4 text-center">Stock</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-zinc-50">
                <td className="px-6 py-4">
                  {product.image_url ? (
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-xl border border-zinc-200"
                      onError={(e) => { e.target.src = "https://via.placeholder.com/64?text=No+Image"; }}
                    />
                  ) : (
                    <div className="w-16 h-16 bg-zinc-100 rounded-xl flex items-center justify-center text-xs text-zinc-400">
                      No Image
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 font-medium">{product.name}</td>
                <td className="px-6 py-4 text-zinc-600">
                  {categories.find(c => c.id === product.category_id)?.name || '-'}
                </td>
                <td className="px-6 py-4 text-right font-medium">
                  Rs. {Number(product.price).toFixed(2)}
                </td>
                <td className="px-6 py-4 text-center">{product.stock}</td>
                <td className="px-6 py-4 text-center space-x-4">
                  <button onClick={() => handleEdit(product)} className="text-amber-700 hover:underline">Edit</button>
                  <button onClick={() => confirmDelete(product.id)} className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-12 text-zinc-500">No products yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[100] p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[95vh] overflow-y-auto">
            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-serif italic font-medium mb-8 text-center">
                {isEditing ? "Edit Product" : "Add New Product"}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <select name="category_id" value={formData.category_id} onChange={handleChange} className="w-full p-4 border border-zinc-200 rounded-2xl" required>
                      <option value="">Select Category</option>
                      {categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <select name="sub_category_id" value={formData.sub_category_id} onChange={handleChange} className="w-full p-4 border border-zinc-200 rounded-2xl" required>
                      <option value="">Select Subcategory</option>
                      {subCategories.map(sub => <option key={sub.id} value={sub.id}>{sub.name}</option>)}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} className="w-full p-4 border border-zinc-200 rounded-2xl" required />
                  </div>

                  <div>
                    <label className="block text-sm mb-2">Price (Rs.)</label>
                    <input type="number" name="price" step="0.01" value={formData.price} onChange={handleChange} className="w-full p-4 border border-zinc-200 rounded-2xl" required />
                  </div>

                  <div>
                    <label className="block text-sm mb-2">Stock</label>
                    <input type="number" name="stock" value={formData.stock} onChange={handleChange} className="w-full p-4 border border-zinc-200 rounded-2xl" />
                  </div>

                  <div className="md:col-span-2">
                    <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="w-full p-4 border border-zinc-200 rounded-2xl h-28" />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <input type="checkbox" name="popular" checked={formData.popular} onChange={handleChange} className="w-5 h-5 accent-amber-700" />
                  <label className="font-medium">Mark as Popular</label>
                </div>

                <div>
                  <label className="block mb-2 font-medium">Product Image</label>
                  <input type="file" name="image" accept="image/*" onChange={handleChange} className="w-full" />
                  {imagePreview && (
                    <img src={imagePreview} alt="preview" className="mt-4 max-h-48 rounded-xl border" />
                  )}
                </div>

                <div className="flex justify-end gap-4 pt-6">
                  <button type="button" onClick={resetForm} className="px-8 py-3 border border-zinc-300 rounded-2xl hover:bg-gray-100 transition-colors">
                    Cancel
                  </button>
                  <button type="submit" disabled={isSubmitting} className="px-10 py-3 bg-amber-700 hover:bg-amber-800 text-white rounded-2xl font-medium transition-colors">
                    {isSubmitting ? "Saving..." : isEditing ? "Update Product" : "Add Product"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[110]">
          <div className="bg-white rounded-3xl p-10 max-w-sm w-full text-center">
            <h3 className="text-2xl font-medium mb-4">Confirm Delete</h3>
            <p className="mb-8 text-zinc-600">Are you sure you want to delete this product?</p>
            <div className="flex justify-center gap-4">
              <button onClick={() => setShowConfirmModal(false)} className="px-8 py-3 border border-zinc-300 rounded-2xl hover:bg-gray-100">
                Cancel
              </button>
              <button onClick={handleDelete} className="px-8 py-3 bg-red-600 text-white rounded-2xl hover:bg-red-700">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;