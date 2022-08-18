import { useDispatch, useSelector } from "react-redux";
import { selectShoppingItems } from "../../store/ shoppingList/selectors";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonComponent from "../../components/ButtonComponent";
import { Link } from "react-router-dom";
import { buyItem } from "../../store/inventory/slice";
import { removeFromShoppingList } from "../../store/ shoppingList/slice";

export default function ShoppingList() {
  const dispatch = useDispatch();
  const shoppingItems = useSelector(selectShoppingItems);
  return (
    <Container>
      <h2>Shopping List</h2>
      {shoppingItems.map((shoppingItem, index) => (
        <Row className="shadow bg-white rounded" key={index}>
          <Col>{shoppingItem.id}</Col>
          <Col>{shoppingItem.name}</Col>
          <Col>{shoppingItem.quantity}</Col>
          <Col>
            <ButtonComponent
              label="Buy"
              handleOnClick={() => {
                dispatch(buyItem(shoppingItem));
                dispatch(removeFromShoppingList(shoppingItem));
              }}
            />
          </Col>
        </Row>
      ))}
      <Row>
        <Col md={{ span: 2, offset: 5 }}>
          <Link to="/">
            <ButtonComponent label="Inventory" />
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
