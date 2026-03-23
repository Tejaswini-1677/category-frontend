import { useEffect, useState } from "react";
import { getWishlist, removeFromWishlist } from "../services/wishlistService";

export default function Wishlist() {
  const [items, setItems] = useState([]);
  const customerId = 1; // static for now

  const load = () => {
    getWishlist(customerId).then(res => setItems(res.data));
  };

  useEffect(() => {
    load();
  }, []);

  const handleRemove = (id) => {
    removeFromWishlist(id).then(load);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>💖 Wishlist</h2>

      {items.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        items.map(item => (
          <div key={item.wishlistId} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <p>Product ID: {item.productId}</p>
            <button onClick={() => handleRemove(item.wishlistId)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}