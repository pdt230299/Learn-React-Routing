import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopMenu from "./Components/TopMeny";
import Products from "./pages/Products";

const Index = () => <h2>Home</h2>;

export default function App() {
  return (
    <Router>
      <div className="App">
        <TopMenu />
        <Route path="/" exact component={Index} />
        <Route path="/products/" component={Products} />
      </div>
    </Router>
  );
}
