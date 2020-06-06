import React, { useState } from "react";
import GroceryList from "./GroceryList";
import ShoppingCart from "./ShoppingCart";

const Container = () => {
  const [groceryItems, setGroceryItems] = useState([]);
  const [shoppingListItems, setShoppingListItems] = useState([]);
  const [newItemTitle, setNewItemTitle] = useState("");
  const handleGroceryItemClick = (event) => {
    const title = event.target.querySelector("span").innerHTML;
    setShoppingListItems((prevShoppingListItems) => {
      const item = prevShoppingListItems.find((item) => item.title === title);
      const newShoppingListItems = [...prevShoppingListItems];
      if (!item) {
        let newId;
        if (prevShoppingListItems.length) {
          const lastIndex = prevShoppingListItems.length - 1;
          newId = prevShoppingListItems[lastIndex].id + 1;
        }
        const newItem = { id: newId || 1, title: title, amount: 1 };
        newShoppingListItems.push(newItem);
        return newShoppingListItems;
      }
      return newShoppingListItems.map((item) => {
        if (item.title === title) {
          item.amount += 1;
          return item;
        }
        return item;
      });
    });
  };
  const handleEmptyCartButtonClick = (event) => {
    event.preventDefault();
    setShoppingListItems([]);
  };
  const handleNewItemChange = (event) => {
    setNewItemTitle(event.target.value);
  };
  const handleNewItemSubmit = (event) => {
    event.preventDefault();
    if (!newItemTitle) return;
    setGroceryItems((prevGroceryItems) => {
      const item = prevGroceryItems.find(
        (item) => item.title.toLowerCase() === newItemTitle.toLowerCase()
      );
      if (!item) {
        let newId;
        if (prevGroceryItems.length) {
          const lastIndex = prevGroceryItems.length - 1;
          newId = prevGroceryItems[lastIndex].id + 1;
        }
        const newItem = { id: newId || 1, title: newItemTitle };
        const newGroceryListItems = [...prevGroceryItems];
        newGroceryListItems.push(newItem);
        return newGroceryListItems;
      }
      return [...prevGroceryItems];
    });
    setNewItemTitle("");
  };
  return (
    <div className="container">
      <GroceryList
        groceryItems={groceryItems}
        handleGroceryItemClick={handleGroceryItemClick}
        newItemTitle={newItemTitle}
        handleNewItemChange={handleNewItemChange}
        handleNewItemSubmit={handleNewItemSubmit}
      />
      <ShoppingCart
        shoppingListItems={shoppingListItems}
        handleEmptyCartButtonClick={handleEmptyCartButtonClick}
      />
    </div>
  );
};

export default Container;
