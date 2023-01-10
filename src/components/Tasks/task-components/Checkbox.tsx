interface Props {
  isCompleted: boolean;
}
const Checkbox: React.FC<Props> = (props: Props) => {
  const handleOnChange = () => {};

  return (
    <input
      type="checkbox"
      onChange={handleOnChange}
      checked={props.isCompleted}
    ></input>
  );
};
export default Checkbox;
