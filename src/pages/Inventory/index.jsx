import { useSelector, useDispatch } from "react-redux";
import {
  selectAllItems,
  selectMinimumQuantity,
} from "../../store/inventory/selectors";
import { addToShoppingList } from "../../store/ shoppingList/slice";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import ButtonComponent from "../../components/ButtonComponent";
import "./style.scss";
import { selectShoppingItems } from "../../store/ shoppingList/selectors";

export default function Inventory() {
  const dispatch = useDispatch();
  const items = useSelector(selectAllItems);
  const minQuantity = useSelector(selectMinimumQuantity);
  const shoppingList = useSelector(selectShoppingItems);
  return (
    <Container>
      <h2>Grocery Inventory</h2>
      <Row>
        <Col md={3}>Id</Col>
        <Col md={3}>Item</Col>
        <Col md={3}>Quantity</Col>
      </Row>
      {items.map((item) => (
        <Row key={item.id} className="shadow bg-white rounded item-wrapper">
          <Col md={3}>{item.id}</Col>
          <Col md={3}>{item.name}</Col>
          <Col md={3}>{item.quantity}</Col>
          <Col md={3}>
            {item.quantity < minQuantity &&
              !shoppingList.map((item) => item.id).includes(item.id) && (
                <ButtonComponent
                  label="Add to shopping list"
                  handleOnClick={() => dispatch(addToShoppingList(item))}
                />
              )}
          </Col>
        </Row>
      ))}
      <Row>
        <Col md={{ span: 2, offset: 5 }}>
          <Link to="/shopping">
            <ButtonComponent label="Shopping List" />
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
