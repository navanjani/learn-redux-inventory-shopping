import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Inventory from "./pages/Inventory";
import ShoppingList from "./pages/ShoppingList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Inventory />} />
        <Route path="/shopping" element={<ShoppingList />} />
      </Routes>
    </div>
  );
}

export default App;
