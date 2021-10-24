import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { GlobalContext, GlobalContextProvider } from "./context/global.context";

// Components
import Cart from './pages/cart/Cart';
import ProductList from "./pages/product-list/ProductList";

function App() {
  return (
    <div>
      <GlobalContextProvider>
        <Router>
          <GlobalContext.Consumer>
            {(globalContext) => (
              <div>
                <nav>
                  <ul>
                    <li>
                      <Link to="/">product list</Link>
                    </li>
                    <li>
                      <Link to="/cart">cart</Link>
                    </li>
                  </ul>
                </nav>

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
