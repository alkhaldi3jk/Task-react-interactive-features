import React from "react";

function Detail(props) {
  return <div className="detail">
      <img alt={props.cookie.name} src={props.cookie.image} />
      <p>{props.cookie.name}</p>
      <p className="product-price">{props.cookie.price} KD</p>
      <p>{props.cookie.description}</p>
  </div>;
}

export default Detail;
