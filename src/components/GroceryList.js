import React from "react";
import List from "./List";
import ListInputs from "./ListInputs";

const GroceryList = (props) => {
  return (
    <div className="grocery-list">
      <div className="list-header">
        <h2 className="list-title">Grocery List</h2>
        <ListInputs
          newItemTitle={props.newItemTitle}
          handleNewItemChange={props.handleNewItemChange}
          handleNewItemSubmit={props.handleNewItemSubmit}
        />
      </div>
      <List
        listItems={props.groceryItems}
        handleGroceryItemClick={props.handleGroceryItemClick}
      />
    </div>
  );
};

export default GroceryList;
