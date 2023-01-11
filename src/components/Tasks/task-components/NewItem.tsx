import classes from "./task-components-css/Tasks.module.css";
import React, { useRef } from "react";

interface Props {
  handleAdd: (title: string) => void;
}
const NewItem: React.FC<Props> = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current === null) {
      alert("Impossible to add new item!");
      return;
    }
    const title = inputRef.current.value.trim();
    if (title === "") {
      alert("Please insert something!");
      return;
    }
    props.handleAdd(title);
    inputRef.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={handleAdd}>
      <div className={classes.control}>
        <input type="text" placeholder="Enter your task..." ref={inputRef} />
      </div>
      <div className={classes.action}>
        <button>Add task</button>
      </div>
    </form>
  );
};
export default NewItem;
