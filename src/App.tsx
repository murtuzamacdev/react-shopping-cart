import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { GlobalContext, GlobalContextProvider } from "./context/global.context";

// Components
import Cart from './pages/cart/Cart';
import ProductList from "./pages/product-list/ProductList";

function App() {
  return (
    <div style={{margin:' 200px'}}>
      <GlobalContextProvider>
        <Router>
          <GlobalContext.Consumer>
            {(globalContext) => (
              <div>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                  <Route exact path="/">
                    <ProductList />
                  </Route>
                  <Route path="/cart">
                    <Cart />
                  </Route>
                </Switch>
              </div>
            )}
          </GlobalContext.Consumer>
        </Router>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
