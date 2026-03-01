import { useNavigate } from "react-router-dom";

const ProductList = ({ products, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="grid">
      {products.map((prod) => (
        <div
          key={prod.productId}
          className="card"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/product/${prod.productId}`)}
        >
          <img
            src={prod.imageUrl}
            alt={prod.productName}
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
          <h3>{prod.productName}</h3>
          <p>{prod.description}</p>
          <p>₹ {prod.price}</p>
          <p>Stock: {prod.inventoryCount}</p>
          <p>Category: {prod.category?.categoryName}</p>
          {/* Removed JSON display */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(prod.productId);
            }}
          >
            Deactivate
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;