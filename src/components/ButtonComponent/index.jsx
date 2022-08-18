import Button from "react-bootstrap/Button";

export default function ButtonComponent({ label, handleOnClick }) {
  return (
    <Button variant="danger" onClick={handleOnClick}>
      {label}
    </Button>
  );
}
