import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import AuthComponent from "./components/Auth/AuthComponent";
import Layout from "./components/Layout/Layout";
import TasksComponent from "./components/Tasks/TasksComponent";
import AuthContext from "./context/auth-context";
import HomePage from "./pages/HomePage";
function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/auth">
          <AuthComponent />
        </Route>

        {authCtx.isLoggedIn && (
          <Route path="/tasks">
            <TasksComponent />
          </Route>
        )}

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
