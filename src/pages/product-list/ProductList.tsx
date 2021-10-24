import { useContext, useEffect } from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/global.context";
import { ProductItem, InvetoryItem } from "../../data/products";

interface ProductListProps {}

const ProductList: React.FC<ProductListProps> = () => {
  const globalContext = useContext(GlobalContext);

  useEffect(() => {
    console.log(globalContext);
  }, []);

  const handleAddToCartTap = (product: ProductItem) => {
    let len = globalContext.cart.filter((item: string) => product.productId === item).length;
    let itemInvetory = globalContext.inventory.find((item: InvetoryItem) => item.productId === product.productId);

    if (itemInvetory?.currentQuantity === 0) {
      alert("Sorry! Out of stock.");
    } else {
      if (len >= product.maxBuyLimit) {
        alert("Max limit reached");
      } else {
        globalContext.addToCart(product);
      }
    }
  };

  const checkForStockWarning = (product: ProductItem) => {
    let currentQuantity = globalContext.inventory.find((item) => item.productId === product.productId)?.currentQuantity;

    if (currentQuantity && (currentQuantity <= product.showInventoryWarningLimit)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <h1>Total items in cart: {globalContext.cart.length}</h1>
      <Link to="cart">View cart</Link>
      {globalContext.products.map((item, index) => (
        <>
          <h3>{item.productName}</h3>
          <button
            onClick={() => {
              handleAddToCartTap(item);
            }}>
            Add to cart
          </button>
          {checkForStockWarning(item) && <Alert variant={"warning"}>Only few left in stock</Alert>}
        </>
      ))}
    </>
  );
};

export default ProductList;
