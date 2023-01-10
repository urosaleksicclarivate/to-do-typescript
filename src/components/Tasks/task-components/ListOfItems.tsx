import Task from "../../../models/Task";
import Item from "./Item";

interface Props {
  items: Task[];
  handleDelete: (id: number) => void;
  handleOnChange: (id: number) => void;
}

const ListOfItems: React.FC<Props> = (props: Props) => {
  const handleOnChange = (id: number) => {
    props.handleOnChange(id);
  };
  const handleDelete = (id: number) => {
    props.handleDelete(id);
  };
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
