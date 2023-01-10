interface Props {
  isCompleted: boolean;
  handleOnChange: () => void;
}
const Checkbox: React.FC<Props> = (props: Props) => {
  const handleOnChange = () => {
    props.handleOnChange();
  };
  console.log(props.isCompleted);

  return (
    <input
      type="checkbox"
      onChange={handleOnChange}
      checked={props.isCompleted}
    ></input>
  );
};
export default Checkbox;
