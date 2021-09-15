import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const OrdersView = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrdersFromStorage()
  }, [])

  const getOrdersFromStorage = () => {
    // check to see if there are items in the local storage
    if (!localStorage.getItem('products')) return; // so if there are none, just return/exit out.
    const items = JSON.parse(localStorage.getItem('products'));
    setOrders(items);
  }

  // delete function by index rather than Id
  const deleteOrder = (index) => {
    const filtered = orders.filter((order, i) => {
      return i != index;
    })
    setOrders(filtered);
    localStorage.setItem('products', JSON.stringify(orders));
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
          {orders.length > 0 && orders.map((order, i) => (
            <tr key={i}>
              <td>{i+1}</td>
              <td>{order.name}</td>
              <td>
                <i 
                  onClick={() => deleteOrder(i)}
                  style={{color: 'red', cursor: "pointer", fontSize: '20px'}} 
                  className="bi bi-trash">
                </i>
              </td>
            </tr>
          ))}
          { orders.length <= 0 && 
            <tr>
              <h4>No Current Items in the Cart</h4>
            </tr>
          }
        </tbody>
      </Table>
    </div>
  )
}

export default OrdersView;