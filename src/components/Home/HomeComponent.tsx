import classes from "./HomeComponent.module.css";
const HomeComponent: React.FC = () => {
  return (
    <section className={classes.starting}>
      <h1>Hello from home component!</h1>
    </section>
  );
};
export default HomeComponent;
