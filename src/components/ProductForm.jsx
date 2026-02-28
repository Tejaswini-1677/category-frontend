import { useState, useEffect } from "react";
import { getCategories } from "../services/categoryService";

const ProductForm = ({ onSave }) => {
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

    onSave({
      productName,
      description,
      price,
      inventoryCount,
      category: { categoryId }
    });

    setProductName("");
    setDescription("");
    setPrice("");
    setInventoryCount("");
    setCategoryId("");
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

      <button type="submit">Save</button>
    </form>
  );
};

export default ProductForm;


