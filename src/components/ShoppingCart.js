import React from "react";
import List from "./List";

const ShoppingCart = (props) => {
  return (
    <div className="shopping-cart">
      <div className="list-header">
        <h2 className="list-title">Shopping Cart</h2>
        <div className="list-inputs">
          <button onClick={props.handleEmptyCartButtonClick}>Empty Cart</button>
        </div>
      </div>
      <List listItems={props.shoppingListItems} />
    </div>
  );
};

export default ShoppingCart;
