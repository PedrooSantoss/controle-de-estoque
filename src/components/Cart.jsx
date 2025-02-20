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
    window.location.href = "https://go.perfectpay.com.br/PPU38CPHICD"; // Substitua pelo link desejado
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
