import { useState, useEffect } from "react";
import { getCategories } from "../services/categoryService";

const ProductForm = ({ onSave }) => {
  const [image, setImage] = useState(null);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [inventoryCount, setInventoryCount] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(res => setCategories(res.data.filter(c => c.status)));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("inventoryCount", inventoryCount);
    formData.append("categoryId", categoryId);
    formData.append("image", image);

    onSave(formData);

    setProductName("");
    setDescription("");
    setPrice("");
    setInventoryCount("");
    setCategoryId("");
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <h2>Add Product</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        required
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Inventory"
        value={inventoryCount}
        onChange={(e) => setInventoryCount(e.target.value)}
      />

      <select
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
        required
      >
        <option value="">Select Category</option>
        {categories.map(cat => (
          <option key={cat.categoryId} value={cat.categoryId}>
            {cat.categoryName}
          </option>
        ))}
      </select>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        required
      />

      <button type="submit">Save</button>
    </form>
  );
};

export default ProductForm;


