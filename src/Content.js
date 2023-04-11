import React from "react";
import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
        <ItemList
          key={items.id}
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />

    </main>
  );
};

export default Content;
