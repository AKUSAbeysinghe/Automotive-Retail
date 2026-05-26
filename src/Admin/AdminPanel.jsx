import React, { useEffect, useState } from "react";

const API_BASE = "http://localhost/automotive_retail/api";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("accessories");
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [accessories, setAccessories] = useState([]);
  const [autoParts, setAutoParts] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  const [formData, setFormData] = useState({});

  const tabs = [
    { id: "accessories", label: "Accessories" },
    { id: "autoparts", label: "Auto Parts" },
    { id: "vehicles", label: "Vehicles" },
  ];

  // Fetch Data with better logging
  const fetchAllData = async () => {
    try {
      const [accRes, apRes, vehRes] = await Promise.all([
        fetch(`${API_BASE}/get_accessories.php`),
        fetch(`${API_BASE}/get_autoparts.php`),
        fetch(`${API_BASE}/get_vehicles.php`)
      ]);

      const accData = await accRes.json();
      const apData = await apRes.json();
      const vehData = await vehRes.json();

      if (accData.success) setAccessories(accData.data || []);
      if (apData.success) setAutoParts(apData.data || []);
      if (vehData.success) setVehicles(vehData.data || []);

      // Debug: You can remove these console logs later
      console.log("Accessories loaded:", accData.data);
      console.log("Auto Parts loaded:", apData.data);
    } catch (err) {
      console.error(err);
      setError("Cannot connect to server. Check API path.");
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const openForm = (item = null) => {
    setIsEditing(!!item);
    setEditId(item?.id || null);
    setFormData(item || {});
    setShowForm(true);
    setMessage("");
    setError("");
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setFormData(prev => ({ ...prev, image: files[0] }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setMessage("");

    let url = "";
    let isMultipart = activeTab === "vehicles";

    if (activeTab === "accessories") url = isEditing ? "update_accessory.php" : "add_accessory.php";
    else if (activeTab === "autoparts") url = isEditing ? "update_autopart.php" : "add_autopart.php";
    else if (activeTab === "vehicles") url = isEditing ? "update_vehicle.php" : "add_vehicle.php";

    try {
      let body;
      if (isMultipart) {
        const fd = new FormData();
        Object.keys(formData).forEach(key => {
          if (formData[key] !== undefined && formData[key] !== null) {
            fd.append(key, formData[key]);
          }
        });
        if (isEditing) fd.append("id", editId);
        body = fd;
      } else {
        body = JSON.stringify({ ...formData, id: editId });
      }

      const res = await fetch(`${API_BASE}/${url}`, { method: "POST", body });
      const result = await res.json();

      if (result.success) {
        setMessage(isEditing ? "✅ Updated successfully!" : "✅ Added successfully!");
        setShowForm(false);
        fetchAllData();   // Refresh table
      } else {
        setError(result.message || "Failed to save");
      }
    } catch (err) {
      setError("Server error occurred");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this?")) return;

    let endpoint = "";
    if (activeTab === "accessories") endpoint = "delete_accessory.php";
    else if (activeTab === "autoparts") endpoint = "delete_autopart.php";
    else if (activeTab === "vehicles") endpoint = "delete_vehicle.php";

    try {
      const res = await fetch(`${API_BASE}/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
      });
      const result = await res.json();
      if (result.success) {
        setMessage("✅ Deleted successfully!");
        fetchAllData();
      }
    } catch (err) {
      setError("Delete failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800 p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 bg-white rounded-xl shadow p-6">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
            M
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Motorhaus Admin</h1>
            <p className="text-gray-600">Automotive Retail Management</p>
            <p className="text-orange-600 font-semibold">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      {message && <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-800 rounded-xl">{message}</div>}
      {error && <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-800 rounded-xl">{error}</div>}

      {/* Tabs */}
      <div className="flex gap-2 mb-6 bg-white p-2 rounded-xl shadow w-fit">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-xl font-medium transition-all ${
              activeTab === tab.id ? "bg-orange-600 text-white" : "hover:bg-gray-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mb-6">
        <button
          onClick={() => openForm()}
          className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
        >
          + Add New {activeTab === "vehicles" ? "Vehicle" : activeTab === "autoparts" ? "Auto Part" : "Accessory"}
        </button>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold">
            {activeTab === "accessories" && "All Accessories"}
            {activeTab === "autoparts" && "All Auto Parts"}
            {activeTab === "vehicles" && "All Vehicles"}
          </h2>
        </div>

        <div className="overflow-x-auto">
          {activeTab === "vehicles" ? (
            <VehiclesTable data={vehicles} onEdit={openForm} onDelete={handleDelete} />
          ) : (
            <GenericTable 
              data={activeTab === "accessories" ? accessories : autoParts} 
              onEdit={openForm} 
              onDelete={handleDelete} 
              tab={activeTab}
            />
          )}
        </div>
      </div>

      {/* Form Modal */}
      {showForm && <FormModal 
        activeTab={activeTab} 
        formData={formData} 
        isEditing={isEditing}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onClose={() => setShowForm(false)}
        isSubmitting={isSubmitting}
      />}
    </div>
  );
}

// ====================== SUPPORTING COMPONENTS ======================

function GenericTable({ data, onEdit, onDelete, tab }) {
  return (
    <table className="min-w-full">
      <thead className="bg-gray-50">
        <tr>
          <th className="p-4 text-left">Title</th>
          <th className="p-4 text-left">Price</th>
          {tab === "autoparts" && <th className="p-4 text-left">SKUs</th>}
          <th className="p-4 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan="4" className="p-12 text-center text-gray-500">
              No records found. Try adding some items.
            </td>
          </tr>
        ) : (
          data.map(item => (
            <tr key={item.id} className="border-b hover:bg-gray-50">
              <td className="p-4 font-medium">
                {item.title || item.name || "No Title"}
              </td>
              <td className="p-4 font-medium text-orange-600">
                {item.price || "N/A"}
              </td>
              {tab === "autoparts" && (
                <td className="p-4 text-gray-600">
                  {item.skus || "-"}
                </td>
              )}
              <td className="p-4 space-x-3">
                <button 
                  onClick={() => onEdit(item)} 
                  className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700"
                >
                  Edit
                </button>
                <button 
                  onClick={() => onDelete(item.id)} 
                  className="bg-red-600 text-white px-5 py-2 rounded-full text-sm hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

function VehiclesTable({ data, onEdit, onDelete }) {
  const getImageUrl = (image_url) => {
    if (!image_url) return null;
    const base = "http://localhost/automotive_retail/";
    const path = image_url.startsWith('/') ? image_url.slice(1) : image_url;
    return base + path;
  };

  return (
    <table className="min-w-full">
      <thead className="bg-gray-50">
        <tr>
          <th className="p-4 text-left">Image</th>
          <th className="p-4 text-left">Name</th>
          <th className="p-4 text-left">Price</th>
          <th className="p-4 text-left">Year</th>
          <th className="p-4 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr><td colSpan="5" className="p-12 text-center text-gray-500">No vehicles found</td></tr>
        ) : (
          data.map(item => (
            <tr key={item.id} className="border-b hover:bg-gray-50">
              <td className="p-4">
                {item.image_url ? (
                  <img 
                    src={getImageUrl(item.image_url)} 
                    alt={item.name} 
                    className="w-20 h-16 object-cover rounded-lg border"
                    onError={(e) => e.target.src = "https://via.placeholder.com/80x60?text=No+Image"}
                  />
                ) : "No Image"}
              </td>
              <td className="p-4 font-medium">{item.name}</td>
              <td className="p-4">{item.price}</td>
              <td className="p-4">{item.year}</td>
              <td className="p-4 space-x-3">
                <button onClick={() => onEdit(item)} className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700">Edit</button>
                <button onClick={() => onDelete(item.id)} className="bg-red-600 text-white px-5 py-2 rounded-full text-sm hover:bg-red-700">Delete</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

function FormModal({ activeTab, formData, isEditing, onChange, onSubmit, onClose, isSubmitting }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <form onSubmit={onSubmit} className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8">
        <h3 className="text-2xl font-bold mb-6 text-center">
          {isEditing ? "Edit" : "Add New"} {activeTab === "autoparts" ? "Auto Part" : activeTab === "accessories" ? "Accessory" : "Vehicle"}
        </h3>

        {(activeTab === "accessories" || activeTab === "autoparts") && (
          <>
            <input name="title" placeholder="Title" value={formData.title || ""} onChange={onChange} className="w-full p-3 mb-4 border rounded-xl" required />
            <input name="price" placeholder="Price" value={formData.price || ""} onChange={onChange} className="w-full p-3 mb-4 border rounded-xl" required />
            {activeTab === "autoparts" && <input name="skus" placeholder="SKUs" value={formData.skus || ""} onChange={onChange} className="w-full p-3 mb-4 border rounded-xl" />}
          </>
        )}

        {activeTab === "vehicles" && (
          <>
            <input name="name" placeholder="Vehicle Name" value={formData.name || ""} onChange={onChange} className="w-full p-3 mb-4 border rounded-xl" required />
            <input name="price" placeholder="Price" value={formData.price || ""} onChange={onChange} className="w-full p-3 mb-4 border rounded-xl" required />
            <input name="year" placeholder="Year" value={formData.year || ""} onChange={onChange} className="w-full p-3 mb-4 border rounded-xl" />
            <input name="fuel" placeholder="Fuel Economy" value={formData.fuel || ""} onChange={onChange} className="w-full p-3 mb-4 border rounded-xl" />
            <input name="power" placeholder="Power" value={formData.power || ""} onChange={onChange} className="w-full p-3 mb-4 border rounded-xl" />

            <div className="mb-6">
              <label className="block mb-2 font-medium">Vehicle Image</label>
              <input type="file" name="image" accept="image/*" onChange={onChange} className="w-full" />
            </div>
          </>
        )}

        <div className="flex justify-end gap-4">
          <button type="button" onClick={onClose} className="px-6 py-3 bg-gray-200 rounded-xl">Cancel</button>
          <button type="submit" disabled={isSubmitting} className="px-8 py-3 bg-orange-600 text-white rounded-xl">
            {isSubmitting ? "Saving..." : isEditing ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
}