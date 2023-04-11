import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
import AddItem from "./AddItem";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Kako",
    },
    {
      id: 2,
      checked: false,
      item: "suck",
    },
    {
      id: 3,
      checked: false,
      item: "ym",
    },
  ]);

    const handleCheck = (id) => {
      const listItems = items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
      setItems(listItems);
      localStorage.setItem("shoppingList", JSON.stringify(listItems));
    };

    const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id);
      setItems(listItems);
      localStorage.setItem("shoppingList", JSON.stringify(listItems));
    };

  return (
    <div className="App">
      <Header title="Groceries" />
      <AddItem /> 
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
