import { useState } from "react";

function Contador() {
  const [valor, setValor] = useState(0);

  const incrementar = () => {
    setValor(valor + 1);
  };

  const decrementar = () => {
    setValor(valor - 1);
  };

  return (
    <div>
      <h2>Contador: {valor}</h2>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
}

export default Contador;


