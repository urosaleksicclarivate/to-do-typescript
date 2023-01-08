import React from "react";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import AuthComponent from "./components/Auth/AuthComponent";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/auth">
          <AuthComponent />
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
