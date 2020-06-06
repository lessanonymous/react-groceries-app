import React from "react";

const ListInputs = (props) => {
  return (
    <form className="list-inputs" onSubmit={props.handleNewItemSubmit}>
      <input value={props.newItemTitle} onChange={props.handleNewItemChange} />
      <button>Add</button>
    </form>
  );
};

export default ListInputs;
