import { FormularioNovoProduto } from "./components/Form";
import "./App.css";
import { useState } from "react";

function App() {
  const [cartList, setCartList] = useState([]);
  const [products, setProducts] = useState([
    {
      code: 10,
      name: "Smart TV Led 50 Semp",
      description:
        "SK8300 4K HDR Android Wi-Fi 3 HDMI 2 USB Controle Remoto com atalhos Chromecast Integrado",
      price: 2299.99,
      discount: 190.99,
    },
    {
      code: 11,
      name: "Smartphone Samsung Galaxy A72 128GB",
      description:
        "4G Wi-Fi Tela 6.7 Dual Chip 6GB RAM Câmera Quádrupla + Selfie 32MP - Preto",
      price: 1988.4,
      discount: 87.89,
    },
    {
      code: 12,
      name: "Smartwatch Samsung Galaxy Watch Active",
      description:
        "4O Galaxy Watch Active é o smartwatch ideal para quem tem um estilo de vida ativo e saudável. Ele é leve, confortável e monitora diariamente suas atividades físicas, e os comportamentos de nível de stress e sono",
      price: 678.6,
      discount: 110.19,
    },
  ]);

  const filterProduct = (number) => {
    const item = products.filter((item) => item.code === number);
    setCartList([...cartList, ...item]);
  };
  const removeProduct = (number) => {
    const item = cartList.filter((item) => item.code !== number);
    setCartList([...item]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <FormularioNovoProduto setProducts={setProducts} products={products} />
        <hr />
        <ul>
          {products.map((item, index) => (
            <li key={index}>
              <p title={item.description}>{item.name}</p>
              <s>Preço: {item.price} </s>
              <p>Preço: {(item.price - item.discount).toFixed(2)}</p>
              <button type="submit" onClick={() => filterProduct(item.code)}>
                Adicionar ao carrinho
              </button>
            </li>
          ))}
        </ul>
      </header>
      <aside>
        <h2>Cart</h2>
        <p>
          Valor Promocional :
          {cartList
            .reduce(
              (acc, item) => acc + Number(item.price) - Number(item.discount),
              0
            )
            .toFixed(2)}
        </p>
        <ul>
          {cartList &&
            cartList.map((item, index) => (
              <li className="cart" key={index}>
                <p title={item.description}>{item.name}</p>
                <s>Preço: {item.price} </s>
                <p>Preço: {(item.price - item.discount).toFixed(2)}</p>
                <button type="submit" onClick={() => removeProduct(item.code)}>
                  Remover
                </button>
              </li>
            ))}
        </ul>
      </aside>
    </div>
  );
}

export default App;
