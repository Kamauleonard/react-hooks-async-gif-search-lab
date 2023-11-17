import React from "react";

function GifList({ gifData }) {
  return (
    <ul>
      {gifData.map((gif) => (
        <li key={gif.id}>
          <img src={gif.images.original.url} alt={gif.title} />
        </li>
      ))}
    </ul>
  );
}

export default GifList;
