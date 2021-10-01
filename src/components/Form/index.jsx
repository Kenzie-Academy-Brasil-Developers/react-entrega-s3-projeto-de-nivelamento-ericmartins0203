import { useState } from "react";
export const FormularioNovoProduto = ({ setProducts, products }) => {
  const [product, setProduct] = useState({
    code: 0,
    name: "",
    description: "",
    price: 0,
    discount: 0,
  });

  const handleClick = (e) => {
    e.preventDefault();
    setProducts([...products, product]);
  };
  return (
    <form>
      <h3>Cadastre o produto</h3>
      <input
        type="number"
        placeholder="Codigo"
        onChange={(e) => setProduct({ ...product, code: e.target.value })}
      ></input>
      <input
        type="text"
        placeholder="Nome"
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      ></input>
      <input
        type="text"
        placeholder="Descrição"
        onChange={(e) =>
          setProduct({ ...product, description: e.target.value })
        }
      ></input>
      <input
        type="number"
        placeholder="Preço"
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
      ></input>
      <input
        type="number"
        placeholder="Desconto"
        onChange={(e) => setProduct({ ...product, discount: e.target.value })}
      ></input>
      <button type="submit" onClick={handleClick}>
        Enviar
      </button>
    </form>
  );
};
