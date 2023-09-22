import { createContext, useContext, useReducer, useEffect } from "react";
import products from "../data/products";
import cartReducer from "../reducer/cartReducer";

const CartContext = createContext();
const initState = {
  products: products,
  totol: 0,
  amount: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initState);
  function removeItem(id) {
    dispatch({ type: "REMOVE", payload: id });
  }
  function formatMoney(money) {
    return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  function addQuantity(id) {
    dispatch({ type: "ADD", payload: id });
  }
  useEffect(() => {
    console.log("คำนวนผลรวม");
    dispatch({ type: "CALCULATE_TOTAL" });
  }, [state.products]);
  return (
    <CartContext.Provider
      value={{ ...state, formatMoney, removeItem, addQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
