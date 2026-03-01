import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://category-backend-wkzn.onrender.com/api/products";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div>
      <img
        src={product.imageUrl}
        alt={product.productName}
        style={{ width: "300px" }}
      />
      <h2>{product.productName}</h2>
      <p>{product.description}</p>
      <h3>₹ {product.price}</h3>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;