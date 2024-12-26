import React from "react";
import { useParams } from "react-router-dom";
import { items } from "../App"; // Import mock data

function ItemDetail() {
  const { id } = useParams(); // Extract the ID from the URL
  const item = items.find((item) => item.id === id); // Find the item based on the ID

  // Display a message if the item is not found
  if (!item) {
    return <h2>Item not found!</h2>;
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <Link to="/">Back to Item List</Link>
    </div>
  );
}

export default ItemDetail;
