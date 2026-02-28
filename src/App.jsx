import { useEffect, useState } from "react";
import CategoryForm from "./components/CategoryForm";
import CategoryList from "./components/CategoryList";
import { getCategories, createCategory, deleteCategory } from "./services/categoryService";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import { getProducts, createProduct, deleteProduct } from "./services/productService";
import "./App.css";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const loadData = () => {
    getCategories().then((res) => setCategories(res.data));
  };

  useEffect(() => {
    loadData();
    loadProducts();
  }, []);

  const handleSave = (data) => {
    createCategory(data).then(loadData);
  };

  const handleDelete = (id) => {
    deleteCategory(id).then(loadData);
  };

  const loadProducts = () => {
    getProducts().then(res => setProducts(res.data));
  };

  const handleProductSave = (data) => {
    createProduct(data).then(loadProducts);
  };

  const handleProductDelete = (id) => {
    deleteProduct(id).then(loadProducts);
  };

  return (
    <div className="container">
      <h1>Category Management</h1>
      <CategoryForm onSave={handleSave} />
      <CategoryList categories={categories.filter(c => c.status)} onDelete={handleDelete} />

      <h1>Product Management</h1>
      <ProductForm onSave={handleProductSave} />
      <ProductList
        products={products.filter(p => p.status)}
        onDelete={handleProductDelete}
      />
    </div>


  );
}

export default App;

