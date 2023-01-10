import Checkbox from "./Checkbox";
import Delete from "./Delete";
import "./task-components-css/Item.css";
import Title from "./Title";
interface Props {
  key: number;
  title: string;
  isCompleted: boolean;
  id: number;
  handleOnChange: (id: number) => void;
  handleDelete: (id: number) => void;
}

const Item: React.FC<Props> = (props: Props) => {
  const handleDelete = () => {
    props.handleDelete(props.id);
  };
  const handleOnChange = () => {
    props.handleOnChange(props.id);
  };

  return (
    <div className="task">
      <Checkbox
        isCompleted={props.isCompleted}
        handleOnChange={handleOnChange}
      />
      <Title title={props.title} isCompleted={props.isCompleted} />
      <Delete handleDelete={handleDelete} />
    </div>
  );
};
export default Item;
