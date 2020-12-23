import Home from "./components/Home";

import { Route, Switch, Redirect } from "react-router-dom";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
