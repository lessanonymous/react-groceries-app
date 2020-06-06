import React from "react";
import ListItem from "./ListItem";

const List = (props) => {
  const listItems = props.listItems.map((item) => (
    <ListItem
      key={item.id}
      item={item}
      handleGroceryItemClick={props.handleGroceryItemClick}
    />
  ));
  return <ul className="list">{listItems}</ul>;
};

export default List;
