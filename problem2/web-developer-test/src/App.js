import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main";
import Classification from "./Classification";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/classification">
          <Classification />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
