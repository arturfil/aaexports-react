import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const OrdersView = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrdersFromStorage()
  }, [])

  const getOrdersFromStorage = () => {
    const items = JSON.parse(localStorage.getItem('products'));
    setOrders(items);
  }

  const deleteOrder = (id) => {
    const filtered = orders.filter(order => {
      return order.id != id;
    })
    setOrders(filtered);
  }
  
  return (
    <div className="container mt-5">
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <tr key={i}>
              <td>{i+1}</td>
              <td>{order.name}</td>
              <td>
                <i 
                  onClick={() => deleteOrder(order._id)}
                  style={{color: 'red', cursor: "pointer", fontSize: '20px'}} 
                  className="bi bi-trash">
                </i>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default OrdersView;