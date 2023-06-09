import React, { useState, useEffect } from "react";
import Basket from ".";
import { BsTrash } from "react-icons/bs";
import { PayAcceptList } from "../../assets";
import { AiOutlineCaretUp, AiOutlineInfoCircle } from "react-icons/ai";
import { LogRegOut } from "../register&login";
import { GoToProduct, HomeRoute } from "../../routes";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { ProductsType } from "../../types/Types";
import { Item } from "../Products/style/productStyle";
import { UpdateBasket } from "../../store/BasketSlice";

const CountOpt: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const BasketSection = () => {
  const dispatch = useAppDispatch();
  const [ActiveCount, setActiveCount] = useState<{
    prodId: number;
    active: boolean;
  }>({ prodId: 0, active: false });
  const [ActiveCountInput, setActiveCountInput] = useState<{
    prodId: number;
    active: boolean;
  }>({ prodId: 0, active: false });

  const BasketProducts: { basket: Array<{ product: ProductsType }> } =
    useAppSelector((state) => state.basket);

  const HandleCount = (count: number, id: number) => {
    setActiveCount({ prodId: id, active: false });
  };

  const HandleActiveCountInput = (id: number) => {
    setActiveCountInput({ prodId: id, active: true });
    setActiveCount({ prodId: id, active: true });
    setTimeout(() => {
      const el: HTMLInputElement | null = document.querySelector(".inputCount");
      if (el && el !== null) {
        el.focus();
      }
    }, 300);
  };

  //useEffect(() => {
  //if (!ActiveCountInput.active) {
  // setProductCount((prev) => {
  //  if (CountInput.count === 0) {
  //    return { prodId: prev.prodId, count: 1 };
  // } else {
  //   return CountInput;
  //    }
  //  });
  //   }
  // }, [ActiveCountInput]);

  useEffect(() => {
    const close = (e: Event) => {
      let target = e.target as HTMLElement;
      if (target.id !== "count") {
        setActiveCount({ prodId: 0, active: false });
        setActiveCountInput({ prodId: 0, active: false });
      }
    };

    document.body.addEventListener("click", close);
    return () => {
      document.body.removeEventListener("click", close);
    };
  }, []);

  const HandleInputCount = (e: Event) => {
    let target = e.target as HTMLInputElement;
    let id: string | undefined = target.dataset.prodId;
    const value: number = Number(target.value);
    if (Number.isInteger(value) && value >= 0 && value <= 999) {
      if (BasketProducts.basket) {
        dispatch(
          UpdateBasket(
            id
              ? {
                  BasketUpdate: HandleUpdateBasket(parseInt(id), value),
                }
              : { BasketUpdate: [...BasketProducts.basket] }
          )
        );
      }
    }
  };

  const HandleUpdateBasket = (id: number, value: number) => {
    let data: Array<{ product: ProductsType }> = [];
    const ProductUpdate = BasketProducts.basket.find(
      (el) => el.product.id === id
    );
    if (ProductUpdate?.product) {
      data = BasketProducts.basket.filter(
        (item, id) => item.product.id !== ProductUpdate.product.id
      );
      data.push({
        product: {
          id: ProductUpdate.product.id,
          name: ProductUpdate.product.name,
          img: ProductUpdate.product.img,
          opinion: ProductUpdate.product.opinion,
          producer: ProductUpdate.product.producer,
          price: ProductUpdate.product.price,
          category: ProductUpdate.product.category,
          count: value,
        },
      });
    }
    console.log(data);
    return data;
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
                        <Basket.ProdCount active2={ActiveCount.active}>
                          {ActiveCountInput.active ? (
                            <Basket.CountInput
                              type="number"
                              value={
                                BasketProducts.basket[id].product.count || ""
                              }
                              id="count"
                              className="inputCount"
                              data-prod-id={item.product.id}
                              onChange={HandleInputCount}
                            />
                          ) : (
                            <Basket.CountInput
                              type="text"
                              id="count"
                              disabled={ActiveCount.active}
                              value={BasketProducts.basket[id].product.count}
                              readOnly
                            />
                          )}
                          {!ActiveCountInput.active ? (
                            ActiveCount.active ? (
                              <AiOutlineCaretUp />
                            ) : (
                              <AiOutlineCaretDown />
                            )
                          ) : null}
                          <Basket.CountActive
                            type="checkbox"
                            id="count"
                            checked={
                              ActiveCount.active &&
                              ActiveCount.prodId === item.product.id
                                ? true
                                : false
                            }
                            onChange={() =>
                              setActiveCount((prev) => ({
                                prodId: prev.prodId,
                                active: !prev.active,
                              }))
                            }
                            style={{
                              display: `${
                                ActiveCountInput.active ? "none" : "flex"
                              }`,
                            }}
                          />
                          <Basket.CountList active2={ActiveCount.active}>
                            <Basket.CountEl>
                              {CountOpt.map((it, id) =>
                                it < 9 ? (
                                  <Basket.Count
                                    key={id}
                                    click={() =>
                                      HandleCount(it, item.product.id)
                                    }
                                    item={it}
                                    id="count"
                                  >
                                    {it}
                                  </Basket.Count>
                                ) : (
                                  <Basket.Count
                                    key={id}
                                    click={HandleActiveCountInput}
                                    item={it}
                                    prod={item.product.id}
                                  >
                                    {it + "+"}
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
