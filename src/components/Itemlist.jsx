import ItemCard from "./ItemCard";
import React from "react";

const ItemList = ({ items }) => {
  return (
    <div className="launch__wrapper">
      <div className="launch__list">
        {items.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
        {items.length > 0 && <div className="max-reached">End of list</div>}
      </div>
    </div>
  );
};

export default ItemList;
