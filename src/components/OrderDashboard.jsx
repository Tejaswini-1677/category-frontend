import { useEffect, useState } from "react";
import {
  getOrders,
  updateOrderStatus,
  cancelOrder,
} from "../services/orderService";
import "./Orders.css";

const OrderDashboard = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const res = await getOrders();
    setOrders(res.data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleStatusChange = async (id, status) => {
    await updateOrderStatus(id, status);
    fetchOrders();
  };

  const handleCancel = async (id) => {
    await cancelOrder(id);
    fetchOrders();
  };

  return (
    <div className="order-container">
      <h2>Order Management</h2>

      <table className="order-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Status</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.customerId}</td>
              <td>₹ {order.totalAmount}</td>

              <td>
                <select
                  value={order.orderStatus}
                  onChange={(e) =>
                    handleStatusChange(order.orderId, e.target.value)
                  }
                >
                  <option value="Pending">Pending</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </td>

              <td>{order.shippingAddress}</td>

              <td>
                <button
                  className="cancel-btn"
                  onClick={() => handleCancel(order.orderId)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDashboard;