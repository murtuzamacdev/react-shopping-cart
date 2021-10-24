import { useContext, useEffect } from "react";
import { Alert, Table } from "react-bootstrap";
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

    if (currentQuantity && currentQuantity <= product.showInventoryWarningLimit) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <h1>Products</h1>
      <h3>Total items in cart: {globalContext.cart.length}</h3>
      <Link to="cart">View cart</Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Action</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {globalContext.products.map((item, index) => (
            <tr>
              <td>{item.productName}</td>
              <td>{item.productPrice}</td>
              <td>
                <button
                  onClick={() => {
                    handleAddToCartTap(item);
                  }}>
                  Add to cart
                </button>
              </td>
              <td>{checkForStockWarning(item) ? "Limited Stock" : "In stock"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ProductList;
