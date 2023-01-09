import { useContext } from "react";
import AuthContext from "../../context/auth-context";
import classes from "./HomeComponent.module.css";
const HomeComponent: React.FC = () => {
  const authCtx = useContext(AuthContext);

  return (
    <section className={classes.starting}>
      {!authCtx.isLoggedIn && <h1>Welcome, log in to proceed!</h1>}
      {authCtx.isLoggedIn && <h1>Welcome, go to tasks page!</h1>}
    </section>
  );
};
export default HomeComponent;
