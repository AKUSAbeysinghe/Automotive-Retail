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

  const admin = {
    name: "Admin",
    email: "admin@sMotorhaus.lk",
    profilePic: "https://i.pravatar.cc/100?img=25",
  };

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
    <div className="min-h-screen bg-[#121416] text-white font-sans">
      {/* Header */}
      <div className="border-b border-neutral-800 bg-neutral-950 py-8 px-8 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-6">
            <img 
              src={admin.profilePic} 
              alt="admin" 
              className="w-20 h-20 rounded-2xl border-4 border-orange-500 object-cover" 
            />
            <div>
              <h1 className="text-4xl font-black tracking-tight">{admin.name}</h1>
              <p className="text-neutral-400">{admin.email}</p>
              <p className="text-orange-500 font-medium"> Motorhaus — Admin Panel</p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      {message && (
        <div className="max-w-7xl mx-auto mt-6 px-8">
          <div className="bg-green-900/30 border border-green-500 text-green-400 p-4 rounded-2xl">{message}</div>
        </div>
      )}
      {error && (
        <div className="max-w-7xl mx-auto mt-6 px-8">
          <div className="bg-red-900/30 border border-red-500 text-red-400 p-4 rounded-2xl">{error}</div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-black tracking-tight">Products Management</h2>
          <button
            onClick={() => { resetForm(); setShowForm(true); }}
            className="bg-orange-500 hover:bg-orange-600 text-black px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all"
          >
            + Add New Product
          </button>
        </div>

        {/* Products Table */}
        <div className="bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800">
          <table className="w-full">
            <thead className="bg-neutral-950 border-b border-neutral-800">
              <tr>
                <th className="px-8 py-5 text-left">Image</th>
                <th className="px-8 py-5 text-left">Product Name</th>
                <th className="px-8 py-5 text-left">Category</th>
                <th className="px-8 py-5 text-right">Price</th>
                <th className="px-8 py-5 text-center">Stock</th>
                <th className="px-8 py-5 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-neutral-800/50 transition-colors">
                  <td className="px-8 py-6">
                    {product.image_url ? (
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="w-20 h-20 object-cover rounded-2xl border border-neutral-700"
                        onError={(e) => { e.target.src = "https://via.placeholder.com/80?text=No+Image"; }}
                      />
                    ) : (
                      <div className="w-20 h-20 bg-neutral-800 rounded-2xl flex items-center justify-center text-xs text-neutral-500">
                        No Image
                      </div>
                    )}
                  </td>
                  <td className="px-8 py-6 font-semibold text-lg">{product.name}</td>
                  <td className="px-8 py-6 text-neutral-400">
                    {categories.find(c => c.id === product.category_id)?.name || '-'}
                  </td>
                  <td className="px-8 py-6 text-right font-bold text-orange-400">
                    Rs. {Number(product.price).toFixed(2)}
                  </td>
                  <td className="px-8 py-6 text-center font-medium">{product.stock}</td>
                  <td className="px-8 py-6 text-center space-x-6">
                    <button 
                      onClick={() => handleEdit(product)} 
                      className="text-orange-500 hover:text-orange-400 font-medium transition-colors"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => confirmDelete(product.id)} 
                      className="text-red-500 hover:text-red-400 font-medium transition-colors"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-20 text-neutral-500">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100] p-4">
          <div className="bg-neutral-900 rounded-3xl w-full max-w-2xl max-h-[95vh] overflow-y-auto border border-neutral-700">
            <div className="p-10">
              <h3 className="text-4xl font-black tracking-tight mb-10 text-center">
                {isEditing ? "Edit Product" : "Add New Product"}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <select 
                      name="category_id" 
                      value={formData.category_id} 
                      onChange={handleChange} 
                      className="w-full bg-neutral-950 border border-neutral-700 p-5 rounded-2xl focus:outline-none focus:border-orange-500"
                      required
                    >
                      <option value="">Select Category</option>
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <select 
                      name="sub_category_id" 
                      value={formData.sub_category_id} 
                      onChange={handleChange} 
                      className="w-full bg-neutral-950 border border-neutral-700 p-5 rounded-2xl focus:outline-none focus:border-orange-500"
                      required
                    >
                      <option value="">Select Subcategory</option>
                      {subCategories.map(sub => (
                        <option key={sub.id} value={sub.id}>{sub.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Product Name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      className="w-full bg-neutral-950 border border-neutral-700 p-5 rounded-2xl focus:outline-none focus:border-orange-500"
                      required 
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-3 text-neutral-400">Price (Rs.)</label>
                    <input 
                      type="number" 
                      name="price" 
                      step="0.01" 
                      value={formData.price} 
                      onChange={handleChange} 
                      className="w-full bg-neutral-950 border border-neutral-700 p-5 rounded-2xl focus:outline-none focus:border-orange-500"
                      required 
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-3 text-neutral-400">Stock</label>
                    <input 
                      type="number" 
                      name="stock" 
                      value={formData.stock} 
                      onChange={handleChange} 
                      className="w-full bg-neutral-950 border border-neutral-700 p-5 rounded-2xl focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm mb-3 text-neutral-400">Description</label>
                    <textarea 
                      name="description" 
                      placeholder="Product description..." 
                      value={formData.description} 
                      onChange={handleChange} 
                      className="w-full bg-neutral-950 border border-neutral-700 p-5 rounded-2xl h-32 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <input 
                    type="checkbox" 
                    name="popular" 
                    checked={formData.popular} 
                    onChange={handleChange} 
                    className="w-5 h-5 accent-orange-500"
                  />
                  <label className="font-medium text-neutral-300">Mark as Popular</label>
                </div>

                <div>
                  <label className="block mb-3 text-neutral-400 font-medium">Product Image</label>
                  <input 
                    type="file" 
                    name="image" 
                    accept="image/*" 
                    onChange={handleChange} 
                    className="w-full bg-neutral-950 border border-neutral-700 p-4 rounded-2xl file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:bg-orange-500 file:text-black cursor-pointer"
                  />
                  {imagePreview && (
                    <img src={imagePreview} alt="preview" className="mt-6 max-h-64 rounded-2xl border border-neutral-700" />
                  )}
                </div>

                <div className="flex justify-end gap-4 pt-6">
                  <button 
                    type="button" 
                    onClick={resetForm} 
                    className="px-10 py-4 border border-neutral-700 hover:bg-neutral-800 rounded-2xl transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="px-10 py-4 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-2xl transition-all"
                  >
                    {isSubmitting ? "Saving..." : isEditing ? "Update Product" : "Add Product"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[110]">
          <div className="bg-neutral-900 rounded-3xl p-10 max-w-sm w-full text-center border border-neutral-700">
            <h3 className="text-2xl font-bold mb-4">Confirm Delete</h3>
            <p className="mb-8 text-neutral-400">Are you sure you want to delete this product? This action cannot be undone.</p>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => setShowConfirmModal(false)} 
                className="px-8 py-4 border border-neutral-700 hover:bg-neutral-800 rounded-2xl"
              >
                Cancel
              </button>
              <button 
                onClick={handleDelete} 
                className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-2xl"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;