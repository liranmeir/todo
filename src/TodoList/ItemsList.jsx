import React from 'react';
import Item from '../ItemsList/Item';

const ItemsList = ({ items }) => {
  return (
    <ul className="theList">
      {items.map((item, i) => (
        <Item key={i} item={item}></Item>
      ))}
    </ul>
  );
};

export default ItemsList;
