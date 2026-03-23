import React, { useEffect, useState } from "react";
import { getCart, addToCart, deleteCart } from "../api/cartApi";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      const res = await getCart();
      setCart(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAdd = async () => {
    try {
      await addToCart({
        customerId: 1,
        productId: 1,
        quantity: 1,
        totalPrice: 100
      });
      alert("Item Added");
      loadCart();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteCart(id);
      alert("Item Removed");
      loadCart();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Cart Module</h2>

      <button onClick={handleAdd}>Add Item</button>

      <hr />

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item) => (
          <div key={item.cartId} style={{ marginBottom: "10px" }}>
            <p>Product ID: {item.productId}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total Price: ₹{item.totalPrice}</p>

            <button onClick={() => handleDelete(item.cartId)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;