import Checkbox from "./Checkbox";
import Delete from "./Delete";
import "./task-components-css/Item.css";
import Title from "./Title";
interface Props {
  key: number;
  title: string;
  isCompleted: boolean;
  id: number;
  handleOnChange: () => void;
  handleDelete: () => void;
}
const Item: React.FC<Props> = (props: Props) => {
  console.log(typeof props.isCompleted);
  return (
    <div className="task">
      <Checkbox isCompleted={props.isCompleted} />
      <Title title={props.title} isCompleted={props.isCompleted} />
      <Delete />
    </div>
  );
};
export default Item;
