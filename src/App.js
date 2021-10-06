import Home from "./components/Home";
import Detail from "./components/Detail";

// Components
import ProductList from "./components/ProductList";
//styling
import "./App.css";
import { useState } from "react";

function App() {
  const [cookie, setCookie] = useState({
    id: 1,
    name: "Chocolate Chip Cookie",
    price: 10,
    description: "Most wanted cookie across the globe",
    image:
      "https://joyfoodsunshine.com/wp-content/uploads/2016/01/best-chocolate-chip-cookies-recipe-ever-no-chilling-1.jpg",
  });

  const [mode, setMode] = useState("mode")

  return (
    <div className={mode}>
      <Home setMode={setMode} mode={mode}/>
      <ProductList setCookie={setCookie}/>
      <Detail cookie={cookie} />
    </div>
  );
}

export default App;
