import React, { useState, useEffect } from "react";
import { Orders } from ".";
import { AiFillCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { sortOrdersType } from "../../../types/Types";
import { sortLib } from "../../../assets";

interface Props {
  setSort: React.Dispatch<React.SetStateAction<sortOrdersType>>;
}

const SortOrders = (props: Props) => {
  const [activeSort, setActiveSort] = useState<boolean>(false);
  const [selectSort, setSelectSort] = useState<sortOrdersType>(sortLib[0]);

  function handleChangeSelectSort(item: sortOrdersType) {
    setSelectSort(item);
    setActiveSort(false);
    props.setSort(item);
  }

  useEffect(() => {
    const close = (e: Event) => {
      let target = e.target as HTMLElement;
      let tag = ["SPAN", "LI", "DIV"];
      if (tag.includes(target.tagName) && target.id !== "sort") {
        setActiveSort(false);
      }
    };
    document.body.addEventListener("click", close);
    return () => {
      document.body.removeEventListener("click", close);
    };
  }, []);

  return (
    <Orders.SortPanel>
      <Orders.SortCon>
        <Orders.SortTitle>Sortuj</Orders.SortTitle>
        <Orders.SortSelect>
          <Orders.SP_Checkbox
            type="checkbox"
            checked={activeSort}
            onChange={() => setActiveSort((prev) => !prev)}
          />
          <Orders.SP_Show>
            <Orders.SP_ShowOpt>{selectSort.name}</Orders.SP_ShowOpt>
            {activeSort ? <AiFillCaretUp /> : <AiOutlineCaretDown />}
          </Orders.SP_Show>
          {activeSort ? (
            <Orders.SP_List>
              {sortLib.map((item, id) => (
                <li
                  key={id}
                  id="sort"
                  onClick={() => handleChangeSelectSort(item)}
                >
                  {item.name}
                </li>
              ))}
            </Orders.SP_List>
          ) : null}
        </Orders.SortSelect>
      </Orders.SortCon>
    </Orders.SortPanel>
  );
};

export default SortOrders;
