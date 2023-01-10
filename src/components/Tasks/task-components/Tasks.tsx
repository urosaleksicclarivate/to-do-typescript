import { useContext } from "react";
import AuthContext from "../../../context/auth-context";
import Task from "../../../models/Task";
import ListOfItems from "./ListOfItems";
import NewItem from "./NewItem";
import classes from "./task-components-css/Tasks.module.css";
import React, { useState, useEffect, useCallback } from "react";
import Header from "./Header";

const Tasks: React.FC = () => {
  const authCtx = useContext(AuthContext);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [numOfCompleted, setNumOfCompleted] = useState<number>(0);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/660/users/${authCtx.userId}?_embed=todos`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + authCtx.token,
          },
        }
      );
      if (response.ok) {
        let counter = 0;
        //ovde nisam siguran kako se hendluje, pitaj Zeljka!!!!!!!
        const data = await response.json();
        const arrayOfObjects: any[] = data.todos;
        const arrayOfTasks = arrayOfObjects.map((o) => {
          if (o.isCompleted) counter = counter + 1;
          return new Task(o.title, o.userId, o.isCompleted, o.id);
        });
        setTasks(arrayOfTasks);
        setNumOfCompleted(counter);
      } else {
        throw new Error("Error with fetch: " + response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleAdd = async (title: string) => {
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
    } catch (error) {
      console.error(error);
      alert("Failed to insert, try again!");
    }
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
      alert("Failed to delete, try again!");
    }
  };

  const handleOnChange = async (id: number) => {
    const item = tasks.find((el) => el.id === id);
    if (item === undefined) {
      alert("Something went wrong, try again!");
      return;
    }
    const task = new Task(item.title, item.userId, !item.isCompleted);
    try {
      const response = await fetch(`http://localhost:3000/660/todos/${id}`, {
        method: "PATCH",
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + authCtx.token,
        },
      });
      if (response.ok) {
        fetchData();
      } else {
        throw new Error("Error with fetch: " + response.ok);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong, try again!");
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <Header total={tasks.length} numOfCompleted={numOfCompleted} />
      <ListOfItems
        items={tasks}
        handleDelete={handleDelete}
        handleOnChange={handleOnChange}
      />
      <NewItem handleAdd={handleAdd} />
    </div>
  );
};
export default Tasks;
