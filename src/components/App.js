
import React from "react";
import './../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";

// Mock data
export const items = [
  { id: "1", name: "Item 1", description: "This is the description for Item 1." },
  { id: "2", name: "Item 2", description: "This is the description for Item 2." },
  { id: "3", name: "Item 3", description: "This is the description for Item 3." },
];


const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/items/:id" element={<ItemDetail />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
