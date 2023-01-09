import { useContext } from "react";
import AuthContext from "../../../context/auth-context";
import Task from "../../../models/Task";
import NewItem from "./NewItem";
import classes from "./task-components-css/Tasks.module.css";

const Tasks: React.FC = () => {
  const authCtx = useContext(AuthContext);

  const handleAdd = async (title: string) => {
    if (authCtx.userId === undefined) {
      alert("Impossible to add task !");
      return;
    }

    const task = new Task(title, authCtx.userId);
    try {
      const response = await fetch("http://localhost:3000/660/todos/", {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + authCtx.token,
        },
      });
      if (response.ok) {
      } else {
        throw new Error("Error with fetch: " + response.statusText);
      }
    } catch (error) {}
  };

  return (
    <div>
      TASKOVI
      <NewItem handleAdd={handleAdd} />
    </div>
  );
};
export default Tasks;
