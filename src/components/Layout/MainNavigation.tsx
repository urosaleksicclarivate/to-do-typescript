import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>To do App</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/auth">Login</Link>
          </li>

          <li>
            <Link to="/tasks">Tasks</Link>
          </li>

          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
