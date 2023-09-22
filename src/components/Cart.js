import { useCart } from "../context/CartContext";
import Item from "./Item";

export default function Cart() {
  const { products } = useCart();
  return (
    <div>
      {products.map((data) => {
        return <Item key={data.id} {...data} />;
      })}
    </div>
  );
}
