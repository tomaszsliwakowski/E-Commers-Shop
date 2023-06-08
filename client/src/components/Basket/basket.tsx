import React, { useState, useEffect } from "react";
import Basket from ".";
import { BsTrash } from "react-icons/bs";
import { PayAcceptList } from "../../assets";
import { AiOutlineCaretUp, AiOutlineInfoCircle } from "react-icons/ai";
import { LogRegOut } from "../register&login";
import { GoToProduct, HomeRoute } from "../../routes";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useAppSelector } from "../../store/store";
import { ProductsType } from "../../types/Types";

const CountOpt: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const BasketSection = () => {
  const [ActiveCount, setActiveCount] = useState<boolean>(false);
  const [ActiveCountInput, setActiveCountInput] = useState<boolean>(false);
  const [ProductCount, setProductCount] = useState<number>(1);
  const [CountInput, setCountInput] = useState<number>(1);

  const BasketProducts: { basket: Array<{ product: ProductsType }> } =
    useAppSelector((state) => state.basket);
  console.log(BasketProducts.basket);

  const HandleCount = (count: number) => {
    setProductCount(count);
    setCountInput(count);
    setActiveCount(false);
  };

  const HandleActiveCountInput = () => {
    setActiveCountInput(true);
    setActiveCount(false);
    setTimeout(() => {
      const el: HTMLInputElement | null = document.querySelector(".inputCount");
      if (el && el !== null) {
        el.focus();
      }
    }, 300);
  };

  useEffect(() => {
    if (!ActiveCountInput) {
      setProductCount(() => {
        if (CountInput === 0) {
          return 1;
        } else {
          return CountInput;
        }
      });
    }
  }, [ActiveCountInput]);

  useEffect(() => {
    const close = (e: Event) => {
      let target = e.target as HTMLElement;
      if (target.id !== "count") {
        setActiveCount(false);
        setActiveCountInput(false);
      }
    };

    document.body.addEventListener("click", close);
    return () => {
      document.body.removeEventListener("click", close);
    };
  }, []);

  const HandleInputCount = (e: Event) => {
    let target = e.target as HTMLInputElement;
    const value: number = Number(target.value);
    if (Number.isInteger(value) && value >= 0 && value <= 999) {
      setCountInput(value);
    }
  };

  return (
    <>
      <Basket>
        <Basket.Items>
          <Basket.Header>
            <Basket.Title>
              Koszyk <span>({BasketProducts.basket.length})</span>
            </Basket.Title>
            <Basket.ClearBasket>
              <BsTrash />
              Wyszysc koszyk
            </Basket.ClearBasket>
          </Basket.Header>
          <Basket.List>
            {BasketProducts.basket.map(
              (item: { product: ProductsType }, id: number) => (
                <Basket.Product key={id}>
                  <Basket.Property>
                    <Basket.Goto to={GoToProduct(item.product.id)}>
                      <Basket.Image
                        src={item.product.img}
                        alt={item.product.img}
                      />
                    </Basket.Goto>
                    <Basket.PropertyOpt>
                      <Basket.Goto to={GoToProduct(item.product.id)}>
                        <Basket.ProductDesc>
                          {item.product.name}
                        </Basket.ProductDesc>
                      </Basket.Goto>
                      <Basket.OtherProperty>
                        <span>{item.product.price.toFixed(2)} zł</span>
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
                            onChange={() => setActiveCount((prev) => !prev)}
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
                                  <Basket.Count
                                    key={id}
                                    click={HandleActiveCountInput}
                                    item={item}
                                  >
                                    {item + "+"}
                                  </Basket.Count>
                                )
                              )}
                            </Basket.CountEl>
                          </Basket.CountList>
                        </Basket.ProdCount>
                        <BsTrash className="trash" />
                      </Basket.OtherProperty>
                    </Basket.PropertyOpt>
                  </Basket.Property>
                </Basket.Product>
              )
            )}
          </Basket.List>
        </Basket.Items>
        <Basket.BuyPanel>
          <Basket.BuyPanelCon>
            <Basket.BuyPanelSum>
              <Basket.BuyPanelPrice>Łączna kwota</Basket.BuyPanelPrice>
              <Basket.BuyPanelPrice>1234.00 zł</Basket.BuyPanelPrice>
            </Basket.BuyPanelSum>
            <Basket.BuyPanelBtn href="/">Przejdź do dostawy</Basket.BuyPanelBtn>
          </Basket.BuyPanelCon>
          <Basket.Info>
            <AiOutlineInfoCircle />
            <span>
              Dokończ składanie zamówienia - dodanie produktów do koszyka nie
              oznacza ich rezerwacji.
            </span>
          </Basket.Info>
        </Basket.BuyPanel>
      </Basket>
      <LogRegOut>
        <LogRegOut.OutBtn href={HomeRoute}>
          <MdOutlineArrowBackIosNew /> Wyjdź
        </LogRegOut.OutBtn>
      </LogRegOut>
      <Basket.PayAccept>
        <Basket.PayAcceptTitle>Akceptujemy</Basket.PayAcceptTitle>
        <Basket.PayAcceptList>
          {PayAcceptList.map((it, id) => {
            return <Basket.Image key={id} src={it} alt={id} />;
          })}
        </Basket.PayAcceptList>
      </Basket.PayAccept>
    </>
  );
};

export default BasketSection;
