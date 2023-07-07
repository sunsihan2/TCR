import React from 'react';

function Item({ item, deleteItem }) {
  return (
    <div>
        {console.log(item)}
      {item}
      <button onClick={deleteItem}>Delete</button>
    </div>
  );
}

export default Item;
