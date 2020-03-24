import React from 'react';
import './StoreFront.css';

function StoreFront (props) {
    let productDisplay = props.products.map((element, index) => {
      return (
        <div className="product-container" key={index}>
          <h2>{element.title}</h2>
          <img src={element.image} alt="" />
          <h2>{element.desc}</h2>
          <h3>{"$" + element.price + ".00"}</h3>
          <button onClick={() => props.addToCart(element)}>Purchase!</button>
        </div>
      )
    })
    return (
      <div className="storefront-container">
        {productDisplay}
      </div>
    )
  }

export default StoreFront;