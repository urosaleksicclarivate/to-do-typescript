import Tasks from "./task-components/Tasks";
import classes from "./TasksComponent.module.css";
const TasksComponent: React.FC = () => {
  return (
    <section className={classes.profile}>
      <h1>Your tasks</h1>
      <Tasks />
    </section>
  );
};
export default TasksComponent;
