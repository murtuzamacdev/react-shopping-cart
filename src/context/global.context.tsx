import * as React from "react";
import { ProductItem, PRODUCTS, InvetoryItem, INVENTORY } from "../data/products";

export interface GlobalContextProps {
  products: ProductItem[];
  inventory: InvetoryItem[];
  cart: any;
  addToCart: any;
  removeFromCart: any;
  viewType: boolean;
  setviewType: any;
}

export const GlobalContext = React.createContext<GlobalContextProps>({
  products: [],
  inventory: [],
  cart: [],
  addToCart: undefined,
  removeFromCart: undefined,
  viewType: false,
  setviewType: undefined
});

export const GlobalContextProvider = (props: any) => {
  const [products, setproducts] = React.useState(PRODUCTS);
  const [inventory, setinventory] = React.useState(INVENTORY);
  const [cart, setcart] = React.useState<string[] | []>([]);
  const [viewType, setviewType] = React.useState(false);

  const addToCart = (product: ProductItem) => {
    // update cart
    setcart([...cart, product.productId]);

    // Update invetory
    let _inventory: InvetoryItem[] = Object.assign([], inventory);
    let item = _inventory.find((item: InvetoryItem) => item.productId === product.productId);
    if (item) {
      let currentQuantity = item?.currentQuantity;
      item["currentQuantity"] = currentQuantity - 1;
      setinventory(_inventory);
    }
  };

  const removeFromCart = (productId: string) => {
    let _cart = Object.assign([], cart);
    let index = _cart.findIndex((item: string) => item === productId);
    _cart.splice(index, 1);
    setcart(_cart);
  };

  return (
    <GlobalContext.Provider
      value={{
        products,
        cart,
        addToCart,
        inventory,
        removeFromCart,
        viewType,
        setviewType,
      }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
