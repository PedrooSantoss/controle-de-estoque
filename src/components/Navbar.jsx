import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart(); // Acessa o carrinho para exibir a quantidade de itens

  const totalItems = cart.reduce((sum, item) => sum + item.cartQuantity, 0);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Produtos</Link>
        </li>
        <li>
          <Link to="/cart">
            Carrinho {totalItems > 0 && <span>({totalItems})</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
