import React from "react";
import { useCart } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart } = useCart(); // Acessa o carrinho e a função de remover

  return (
    <div className="cart">
      <h2 className="text-center my-6">Carrinho</h2>
      {cart.length === 0 ? (
        <p className="text-center">O carrinho está vazio.</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <div>
                <p>{item.name}</p>
                <p>
                 | Preço Unitário: R$
                  {item.price.toFixed(2)}
                </p>
              </div>
              <button
  className="buy-button"
  onClick={() => {
    window.location.href = "https://pay.kirvano.com/0a36f559-ab75-47ee-8dc7-cce20910328e?aff=4cabdf1a-e086-41cb-86dd-51fa39889fef"; // Substitua pelo link desejado
  }}
>
  Comprar
</button>

              <button
                className="remove-button"
                onClick={() => removeFromCart(item.id)}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
