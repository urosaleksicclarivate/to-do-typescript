interface Props {
  handleDelete: () => void;
}

const Delete: React.FC<Props> = (props: Props) => {
  const handleDelete = () => {
    props.handleDelete();
  };

  return (
    <button className="delete" onClick={handleDelete}>
      ❌
    </button>
  );
};
export default Delete;
