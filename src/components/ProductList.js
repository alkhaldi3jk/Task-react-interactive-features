// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data
import products from "../products";
import { useState } from "react";

const ProductList = () => {

const [item, setItem]= useState("")

  const productList = products
  .filter((product)=> product.name.includes(item))
  .map((product) => (
    <ProductItem product={product} key={product.id} />
  ));
  

  return (
    <div>
    
      <SearchBar setItem={setItem}/>
      <div className="listWrapper">
        {productList}
      </div>
   
    </div>
  );
};

export default ProductList;
