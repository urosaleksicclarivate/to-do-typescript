import React, { useState } from "react";
import Checkbox from "./Checkbox";
import Delete from "./Delete";
import ModifyButton from "./ModifyButton";
import "./task-components-css/Item.css";
import Title from "./Title";

import ModifyForm from "./ModifyForm";
interface Props {
  key: number;
  title: string;
  isCompleted: boolean;
  id: number;
  handleOnChange: (id: number) => void;
  handleDelete: (id: number) => void;
  handleModify: (modifiedTitle: string, id: number) => Promise<boolean>;
}

const Item: React.FC<Props> = (props: Props) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    props.handleDelete(props.id);
  };
  const handleOnChange = () => {
    props.handleOnChange(props.id);
  };
  const handleModal = () => {
    setShowModal(!showModal);
  };
  const handleModify = (modifiedTitle: string) => {
    return props.handleModify(modifiedTitle, props.id);
  };

  return (
    <>
      <div className="task">
        <Checkbox
          isCompleted={props.isCompleted}
          handleOnChange={handleOnChange}
        />
        <Title title={props.title} isCompleted={props.isCompleted} />
        <ModifyButton handleModal={handleModal} />
        <Delete handleDelete={handleDelete} />
      </div>
      {showModal && (
        <ModifyForm
          handleModal={handleModal}
          title={props.title}
          handleModify={handleModify}
        />
      )}
    </>
  );
};
export default Item;
