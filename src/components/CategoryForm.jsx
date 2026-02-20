import { useState } from "react";

const CategoryForm = ({ onSave }) => {
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ categoryName, description });
    setCategoryName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <h2>Add Category</h2>
      <input
        type="text"
        placeholder="Category Name"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default CategoryForm;
