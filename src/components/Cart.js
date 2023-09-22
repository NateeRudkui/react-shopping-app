import { useCart } from "../context/CartContext";
import Item from "./Item";

export default function Cart() {
  const { products, total } = useCart();
  return (
    <div className="cart">
      <h1 style={{ textAlign: "center" }}>ยอดรวม : {total} บาท</h1>
      {products.map((data) => {
        return <Item key={data.id} {...data} />;
      })}
    </div>
  );
}
