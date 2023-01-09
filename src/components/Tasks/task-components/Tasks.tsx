import { useContext } from "react";
import AuthContext from "../../../context/auth-context";
import Task from "../../../models/Task";
import ListOfItems from "./ListOfItems";
import NewItem from "./NewItem";
import classes from "./task-components-css/Tasks.module.css";
import React, { useState, useEffect } from "react";

const Tasks: React.FC = () => {
  const authCtx = useContext(AuthContext);
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/660/users/${authCtx.userId}?_embed=todos`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + authCtx.token,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data.todos);
        setTasks(data.todos);
      } else {
        throw new Error("Error with fetch: " + response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      HEADER
      <ListOfItems />
      <NewItem handleAdd={handleAdd} />
    </div>
  );
};
export default Tasks;
