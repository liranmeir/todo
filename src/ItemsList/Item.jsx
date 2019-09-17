import React from 'react';

const Item = ({ item }) => {
  return (
    <li>
      <input type="checkbox" />
      <span>{item.text}</span>
    </li>
  );
};

export default Item;
