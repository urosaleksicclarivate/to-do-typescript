interface Props {
  total: number;
  numOfCompleted: number;
}
const Header: React.FC<Props> = (props: Props) => {
  return (
    <h2>
      Todo list:{props.numOfCompleted}/{props.total}
    </h2>
  );
};
export default Header;
