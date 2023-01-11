import React, { useRef } from "react";
import "./task-components-css/Modify.css";
interface Props {
  handleModal: () => void;
  title: string;
  handleModify: (modifiedTitle: string) => Promise<boolean>;
}
const ModifyForm: React.FC<Props> = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleModal = () => {
    props.handleModal();
  };

  const handleModify = async () => {
    if (inputRef.current === null) {
      alert("Impossible to modify at this moment!");
      props.handleModal();
      return;
    }

    const modifiedTitle = inputRef.current.value.trim();
    if (modifiedTitle === "") {
      alert("Field is empty, please insert something!");
      return;
    } else if (modifiedTitle === props.title) {
      alert("You must change something!");
      return;
    }

    const response = await props.handleModify(modifiedTitle);
    if (response) {
      alert("Successfully changed!");
      props.handleModal();
      return;
    }
    alert("Something went wrong, try again!");
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h1>Task:</h1>
        <input
          className="input"
          defaultValue={props.title}
          autoFocus={true}
          ref={inputRef}
        ></input>
        <button onClick={handleModify}>Change</button>
        <button onClick={handleModal}>Cancel</button>
      </div>
    </div>
  );
};
export default ModifyForm;
