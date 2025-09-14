import Navbar from './componentes/Navbar';
import Corpo from './componentes/Skeleton';
import { useState } from "react";
import "./styles.css/styles.css";


function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <Corpo onAddToCart={(product) => setCart([...cart, product])} />
    </div>
  );
}

export default App;