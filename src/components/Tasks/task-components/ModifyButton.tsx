interface Props {
  handleModal: () => void;
}

const ModifyButton: React.FC<Props> = (props: Props) => {
  const handleModal = () => {
    props.handleModal();
  };
  return <button onClick={handleModal}>🖊</button>;
};
export default ModifyButton;
