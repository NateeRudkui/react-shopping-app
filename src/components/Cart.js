import { useCart } from "../context/CartContext";
import Item from "./Item";

export default function Cart() {
  const { products, total, formatMoney } = useCart();
  return (
    <div className="cart">
      <h1 style={{ textAlign: "center" }}>
        {products.length > 0
          ? `ยอดชำระเงิน : ${formatMoney(total)} บาท`
          : "ไม่มีสินค้าในตะกล้า"}
      </h1>
      {products.map((data) => {
        return <Item key={data.id} {...data} />;
      })}
    </div>
  );
}
