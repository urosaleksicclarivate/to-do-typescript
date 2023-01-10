import Task from "../../../models/Task";
import Item from "./Item";

interface Props {
  items: Task[];
}
const ListOfItems: React.FC<Props> = (props: Props) => {
  const handleOnChange = () => {};
  const handleDelete = () => {};
  return (
    <div>
      {props.items.map((item) => {
        return (
          <Item
            key={item.id!}
            title={item.title}
            isCompleted={item.isCompleted}
            id={item.id!}
            handleOnChange={handleOnChange}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};
export default ListOfItems;
