import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./ProductDetails.css"; // We'll add CSS for card styling

const API_URL = "https://category-backend-wkzn.onrender.com/api/products";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="product-card">
      <img
        src={product.imageUrl}
        alt={product.productName}
        className="product-image"
      />
      <div className="product-info">
        <h2>{product.productName}</h2>
        <p className="product-category">
          Category: {product.category?.categoryName || "N/A"}
        </p>
        <p className="product-description">{product.description}</p>
        <p className="product-price">Price: ₹ {product.price}</p>
        <p className="product-stock">Stock: {product.inventoryCount}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;