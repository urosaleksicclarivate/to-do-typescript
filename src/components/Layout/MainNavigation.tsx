import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth-context";
import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const handleLogout = (e: React.MouseEvent) => {
    authCtx.logout();
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>To do App</div>
      </Link>
      <nav>
        <ul>
          {!authCtx.isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {authCtx.isLoggedIn && (
            <li>
              <Link to="/tasks">Tasks</Link>
            </li>
          )}
          {authCtx.isLoggedIn && (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
