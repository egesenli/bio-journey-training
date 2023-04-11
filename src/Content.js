import React from "react";
import ItemList from "./ItemList";

const Content = (items, item, handleCheck, handleDelete) => {
  return (
    <main>
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />

    </main>
  );
};

export default Content;
