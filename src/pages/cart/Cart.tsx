import { useContext, useEffect } from "react";
import { Table } from "react-bootstrap";
import { GlobalContext } from "../../context/global.context";

interface CartProps {}

const Cart: React.FC<CartProps> = () => {
  const globalContext = useContext(GlobalContext);

  const getProduct = (productId: string) => {
    return globalContext.products.find((item) => item.productId === productId);
  };

  const handleRemove = (productId: string) => {
    globalContext.removeFromCart(productId);
  };

  const calculateCartTotal = () => {
    let total = 0;
    globalContext.cart.forEach((productId: string) => {
      let product = globalContext.products.find((item) => item.productId === productId);
      if (product) {
        total = total + product.productPrice;
      }
    });
    return total;
  };

  return (
    <>
      <h1>Cart</h1>
      <h3>Total price: {calculateCartTotal()}</h3>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Action</th>
          </tr>
        </thead>
        <tbody>
          {globalContext.cart.map((productId: string) => (
            <tr>
              <td>{getProduct(productId)?.productName}</td>
              <td>{getProduct(productId)?.productPrice}</td>
              <td>
                <button
                  onClick={() => {
                    handleRemove(productId);
                  }}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Cart;
