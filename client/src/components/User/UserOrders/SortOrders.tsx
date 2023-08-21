import React from "react";
import { Orders } from ".";

const SortOrders = () => {
  return (
    <Orders.SortPanel>
      <Orders.SortCon>
        <Orders.SortTitle>Sortuj</Orders.SortTitle>
        <Orders.SortSelect></Orders.SortSelect>
      </Orders.SortCon>
    </Orders.SortPanel>
  );
};

export default SortOrders;
