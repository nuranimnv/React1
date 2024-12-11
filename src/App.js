import "./App.css";
import "./index.css"
import { Routes, Route, NavLink } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Order from "./Components/Order";
function App() {
  return (
    <div className="App">
      <div className="menu">
        <NavLink to="/">About</NavLink>
        <NavLink to="/order">Order</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
