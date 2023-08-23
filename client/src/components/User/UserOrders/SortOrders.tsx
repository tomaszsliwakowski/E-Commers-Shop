import React, { useState } from "react";
import { Orders } from ".";
import { AiFillCaretUp, AiOutlineCaretDown } from "react-icons/ai";

const SortOrders = () => {
  const [activeSort, setActiveSort] = useState<boolean>(false);
  return (
    <Orders.SortPanel>
      <Orders.SortCon>
        <Orders.SortTitle>Sortuj</Orders.SortTitle>
        <Orders.SortSelect>
          <Orders.SP_Checkbox />
          <Orders.SP_Show>
            <Orders.SP_ShowOpt>Od najnowszych</Orders.SP_ShowOpt>
            {activeSort ? <AiFillCaretUp /> : <AiOutlineCaretDown />}
          </Orders.SP_Show>
          <Orders.SP_List>lista</Orders.SP_List>
        </Orders.SortSelect>
      </Orders.SortCon>
    </Orders.SortPanel>
  );
};

export default SortOrders;
