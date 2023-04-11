import React from "react";
import LineItem from "./LineItem";

const ItemList = ({ item, handleCheck, handleDelete }) => {
  return (
    <ul>
        <LineItem 
            key={item.id}
            item={item}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            />
    </ul>
  )
}

export default ItemList;
