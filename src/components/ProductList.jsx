const ProductList = ({ products, onDelete }) => {
  return (
    <div className="grid">
      {products.map((prod) => (
        <div key={prod.productId} className="card">
          <h3>{prod.productName}</h3>
          <p>{prod.description}</p>
          <p>₹ {prod.price}</p>
          <p>Stock: {prod.inventoryCount}</p>
          <p>Category: {prod.category?.categoryName}</p>
          <button onClick={() => onDelete(prod.productId)}>
            Deactivate
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;