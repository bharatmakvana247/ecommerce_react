import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AddCategory from "./Pages/Category/AddCategory";
import ViewCategory from "./Pages/Category/ViewCategory";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add-category" component={AddCategory} />
          <Route path="/view-category" component={ViewCategory} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
