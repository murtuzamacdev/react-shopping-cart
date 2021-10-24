import { useContext, useEffect } from "react";
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
    return total
  };

  return (
    <>
      <h3>{calculateCartTotal()}</h3>
      {globalContext.cart.map((productId: string) => (
        <>
          <p>{getProduct(productId)?.productName}</p>
          <p>{getProduct(productId)?.productPrice}</p>
          <button
            onClick={() => {
              handleRemove(productId);
            }}>
            Remove
          </button>
        </>
      ))}
    </>
  );
};

export default Cart;
