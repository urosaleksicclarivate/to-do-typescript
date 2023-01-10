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
        const arrayOfObjects: any[] = data.todos;
        const arrayOfTasks = arrayOfObjects.map((o) => {
          console.log(o.isCompleted);
          return new Task(o.title, o.userId, o.isCompleted, o.id);
        });
        console.log(arrayOfTasks);
        setTasks(arrayOfTasks);
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

    const task = new Task(title, authCtx.userId, false);
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
        fetchData();
      } else {
        throw new Error("Error with fetch: " + response.statusText);
      }
    } catch (error) {}
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/660/todos/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + authCtx.token,
        },
      });
      if (response.ok) {
        fetchData();
      } else {
        throw new Error("Error with fetch: " + response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      HEADER
      <ListOfItems items={tasks} handleDelete={handleDelete} />
      <NewItem handleAdd={handleAdd} />
    </div>
  );
};
export default Tasks;
