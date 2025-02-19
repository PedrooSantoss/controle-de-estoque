import React, { useState } from "react";
import productData from "./ProductData";
import { useCart } from "../context/CartContext";
import "./ProductList.css";

const ProductList = () => {
  const { addToCart } = useCart(); // Função para adicionar ao carrinho do contexto
  const [notification, setNotification] = useState(null); // Notificação flutuante

  // Exibe o pop-up de notificação
  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000); // Remove o pop-up após 3 segundos
  };

  // Handler para adicionar ao carrinho e exibir notificação
  const handleAddToCart = (product) => {
    addToCart(product); // Adiciona ao carrinho pelo contexto
    showNotification("Produto adicionado com sucesso!", "success");
  };

  return (
    <div className="p-4">
      <h1 className="text-center my-6">Lista de Produtos</h1>

      {/* Notificação flutuante */}
      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}

      {/* Produtos */}
      <div className="grid">
        {productData.map((product) => (
          <div key={product.id} className="card">
            <img
              src={product.image}
              alt={product.name}
              className="card-image"
            />
            <h2 className="card-title">{product.name}</h2>
            <p className="card-text">Estoque: {product.quantity}</p>
            <p className="text-green-600">Preço: R${product.price.toFixed(2)}</p>
            <button
              className="button"
              onClick={() => handleAddToCart(product)}
              disabled={product.quantity <= 0}
            >
              {product.quantity > 0 ? "Adicionar ao Carrinho" : "Indisponível"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
