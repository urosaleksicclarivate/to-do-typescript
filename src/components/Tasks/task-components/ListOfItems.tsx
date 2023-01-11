import Task from "../../../models/Task";
import Item from "./Item";

interface Props {
  items: Task[];
  handleDelete: (id: number) => void;
  handleOnChange: (id: number) => void;
  handleModify: (modifiedTitle: string, id: number) => Promise<boolean>;
}

const ListOfItems: React.FC<Props> = (props: Props) => {
  const handleOnChange = (id: number) => {
    props.handleOnChange(id);
  };

  const handleDelete = (id: number) => {
    props.handleDelete(id);
  };

  const handleModify = (modifiedTitle: string, id: number) => {
    return props.handleModify(modifiedTitle, id);
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
            handleModify={handleModify}
          />
        );
      })}
    </div>
  );
};
export default ListOfItems;
