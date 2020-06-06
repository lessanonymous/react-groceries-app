import React from "react";

const ListItem = (props) => {
  let amount;
  if (props.item.amount) amount = <span>Amount: {props.item.amount}</span>;
  return (
    <li
      key={props.item.id}
      className="list-item"
      onClick={props.handleGroceryItemClick}
    >
      <span>{props.item.title}</span>
      {amount}
    </li>
  );
};

export default ListItem;
