import { useEffect, useState } from "react";
import CategoryForm from "./components/CategoryForm";
import CategoryList from "./components/CategoryList";
import { getCategories, createCategory, deleteCategory } from "./services/categoryService";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import { getProducts, createProduct, deleteProduct } from "./services/productService";
import OrderDashboard from "./components/OrderDashboard";
import CustomerHome from "./components/CustomerHome";
import AuthPage from "./components/AuthPage";
import CustomerList from "./components/CustomerList";
import AddCustomer from "./components/AddCustomer";
import UpdateCustomer from "./components/UpdateCustomer";
import "./App.css";

function App() {
  console.log("New Deploy Test");
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

  // ✅ Updated handleProductSave with error handling and refresh
  const handleProductSave = (formData) => {
    createProduct(formData)
      .then(() => {
        loadProducts(); // Refresh the product list immediately
      })
      .catch((err) => {
        console.error("Failed to save product:", err);
        alert("Failed to save product. Check console for details.");
      });
  };

  const handleProductDelete = (id) => {
    deleteProduct(id).then(loadProducts);
  };

  return (
    <>
    <div style={{padding:"10px", background:"#eee"}}>
  <a href="/">Home</a> | 
  <a href="/orders"> Orders</a> | 
  <a href="/customers"> Customers</a> | 
  <a href="/auth"> Login/Register</a>
</div>
    <Routes>
      <Route
        path="/"
        element={
          <div className="container">
            <h1>Category Management</h1>
            <CategoryForm onSave={handleSave} />
            <CategoryList
              categories={categories.filter(c => c.status)}
              onDelete={handleDelete}
            />

            <h1>Product Management</h1>
            <ProductForm onSave={handleProductSave} />
            <ProductList
              products={products.filter(p => p.status)}
              onDelete={handleProductDelete}
            />
          </div>
        }
      />
 <Route path="/auth" element={<AuthPage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/orders" element={<OrderDashboard />} />
     
      <Route path="/customers" element={<CustomerList />} />
      <Route path="/shop" element={<CustomerHome/>} />
<Route path="/add-customer" element={<AddCustomer />} />
<Route path="/update-customer/:id" element={<UpdateCustomer />} />
    </Routes>
    </>
  );
  
}

export default App;