import React from "react";
import { BasketConPropsType } from "../../types/Types";
import Basket from "../Basket";
import { AiOutlineCaretDown } from "react-icons/ai";
import { AiOutlineCaretUp } from "react-icons/ai";

const CountOpt: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export const BasketCon = ({
  ActiveCount,
  ActiveCountInput,
  CountInput,
  HandleInputCount,
  ProductCount,
  setActiveCount,
  HandleCount,
  HandleActiveCountInput,
}: BasketConPropsType) => {
  return (
    <Basket.ProdCount active2={ActiveCount}>
      {ActiveCountInput ? (
        <Basket.CountInput
          type="number"
          value={CountInput || ""}
          id="count"
          className="inputCount"
          onChange={HandleInputCount}
        />
      ) : (
        <Basket.CountInput
          type="text"
          id="count"
          disabled={ActiveCount}
          value={ProductCount}
          readOnly
        />
      )}
      {!ActiveCountInput ? (
        ActiveCount ? (
          <AiOutlineCaretUp />
        ) : (
          <AiOutlineCaretDown />
        )
      ) : null}
      <Basket.CountActive
        type="checkbox"
        id="count"
        checked={ActiveCount}
        onChange={() => setActiveCount((prev: boolean) => !prev)}
        style={{
          display: `${ActiveCountInput ? "none" : "flex"}`,
        }}
      />
      <Basket.CountList active2={ActiveCount}>
        <Basket.CountEl>
          {CountOpt.map((item, id) =>
            item < 9 ? (
              <Basket.Count
                key={id}
                click={() => HandleCount(item)}
                item={item}
                id="count"
              >
                {item}
              </Basket.Count>
            ) : (
              <Basket.Count key={id} click={HandleActiveCountInput} item={item}>
                {item + "+"}
              </Basket.Count>
            )
          )}
        </Basket.CountEl>
      </Basket.CountList>
    </Basket.ProdCount>
  );
};
