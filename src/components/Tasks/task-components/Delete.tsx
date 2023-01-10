const Delete: React.FC = () => {
  const handleDelete = () => {
    console.log("delete Task!");
  };
  return (
    <button className="delete" onClick={handleDelete}>
      ❌
    </button>
  );
};
export default Delete;
