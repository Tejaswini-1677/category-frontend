import { useEffect, useState } from "react";
import CategoryForm from "./components/CategoryForm";
import CategoryList from "./components/CategoryList";
import { getCategories, createCategory, deleteCategory } from "./services/categoryService";
import "./App.css";

function App() {
  const [categories, setCategories] = useState([]);

  const loadData = () => {
    getCategories().then((res) => setCategories(res.data));
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSave = (data) => {
    createCategory(data).then(loadData);
  };

  const handleDelete = (id) => {
    deleteCategory(id).then(loadData);
  };

  return (
    <div className="container">
      <h1>Category Management</h1>
      <CategoryForm onSave={handleSave} />
      <CategoryList categories={categories.filter(c => c.status)} onDelete={handleDelete} />
    </div>
  );
}

export default App;

