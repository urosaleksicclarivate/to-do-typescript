import "./task-components-css/Title.css";
interface Props {
  title: string;
  isCompleted: boolean;
}
const Title: React.FC<Props> = (props: Props) => {
  return (
    <div className={props.isCompleted ? "title completed" : "title"}>
      {props.title}
    </div>
  );
};
export default Title;
