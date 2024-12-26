import React from "react";
import { Link } from "react-router-dom";
import { items } from "./App"; // Import mock data

function ItemList() {
  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {/* Each item links to its detail page */}
            <Link to={`/items/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
