import "./Header.css";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { amount } = useCart();
  return (
    <header>
      <p>Shopping app</p>
      <p>สินค้าในตะกล้า : {amount}</p>
    </header>
  );
}
