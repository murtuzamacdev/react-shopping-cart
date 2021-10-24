import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Components
import ProductDetails from './pages/product-details/ProductDetails';
import ProductList from './pages/product-list/ProductList';

function App() {
  return <div>
     <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">product details</Link>
            </li>
            <li>
              <Link to="/productList">product list</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <ProductDetails />
          </Route>
          <Route path="/productList">
            <ProductList />
          </Route>
        </Switch>
      </div>
    </Router>
  </div>;
}

export default App;
