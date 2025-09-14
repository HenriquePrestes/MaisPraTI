import Navbar from './componentes/Navbar';
import Corpo from './componentes/Corpo';
import { useState } from "react";
import "./styles.css/styles.css";

function App() {
  return (
    <div>
      <Navbar />
      <Corpo onAddToCart={(product) => {
        console.log("Produto adicionado ao carrinho:", product);
      }} />
    </div>
  );
}

export default App;