import React, { useState, useEffect, useContext } from "react";
import Basket from ".";
import { BsTrash } from "react-icons/bs";
import { PayAcceptList } from "../../assets";
import { AiOutlineCaretUp, AiOutlineInfoCircle } from "react-icons/ai";
import { LogRegOut } from "../register&login";
import { GoToProduct, HomeRoute } from "../../routes";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  ClearBasket,
  ClearProductBasket,
  UpdateBasket,
} from "../../store/BasketSlice";
import { toast } from "react-hot-toast";
import { ProductType } from "../../types/Types";
import { AuthContext } from "../../assets/auth";

const CountOpt: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const BasketSection = () => {
  const dispatch = useAppDispatch();
  const [User, setUser] = useState({ Email: "" });
  const logged: any = useContext(AuthContext);
  const [ActiveCount, setActiveCount] = useState<{
    prodId: number;
    active: boolean;
  }>({ prodId: -1, active: false });
  const [ActiveCountInput, setActiveCountInput] = useState<{
    prodId: number;
    active: boolean;
  }>({ prodId: -1, active: false });
  const [prodCount, setProdCount] = useState<{ prodId: number; value: number }>(
    { prodId: -1, value: 1 }
  );

  const BasketProducts: { basket: Array<{ product: ProductType }> } =
    useAppSelector((state) => state.basket);

  useEffect(() => {
    if (logged) {
      setUser({ Email: logged.email });
    }
  }, [logged]);

  const HandleCount = (count: number, id: number) => {
    dispatch(UpdateBasket({ BasketUpdate: { prodId: id, value: count } }));
    setActiveCount({ prodId: id, active: false });
  };

  const HandleActiveCountInput = () => {
    setActiveCountInput({ prodId: ActiveCount.prodId, active: true });
    setActiveCount({ prodId: ActiveCount.prodId, active: false });
    setProdCount({
      prodId: ActiveCount.prodId,
      value:
        BasketProducts.basket.find((el) => el.product.id === ActiveCount.prodId)
          ?.product.count || 0,
    });
    setTimeout(() => {
      const el: HTMLInputElement | null = document.querySelector(".inputCount");
      if (el && el !== null) {
        el.focus();
      }
    }, 300);
  };

  useEffect(() => {
    if (!ActiveCountInput.active) {
      setProdCount((prev) => {
        if (prodCount.value === 0) {
          return { prodId: prev.prodId, value: 1 };
        } else {
          return prodCount;
        }
      });
    }
  }, [ActiveCountInput]);

  useEffect(() => {
    const close = (e: Event) => {
      let target = e.target as HTMLElement;
      if (target.id !== "count") {
        setActiveCount({ prodId: -1, active: false });
        setActiveCountInput({ prodId: -1, active: false });
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
      if (id) {
        setProdCount({ prodId: parseInt(id), value: value });
      }
    }
  };
  useEffect(() => {
    if (ActiveCountInput.active === false && ActiveCountInput.prodId === -1) {
      dispatch(
        UpdateBasket({
          BasketUpdate: {
            prodId: prodCount.prodId,
            value: prodCount.value,
          },
        })
      );
      setProdCount((prev) => ({ prodId: -1, value: prev.value }));
    }
  }, [ActiveCountInput]);

  const ClearBasketFunc = () => {
    try {
      dispatch(ClearBasket({ do: { remove: true } }));
      toast.success("Wyczyszczono koszyk");
    } catch (error) {
      toast.error("Błąd");
    }
  };
  const RemoveFromBasket = (id: number) => {
    try {
      dispatch(
        ClearProductBasket({
          BasketRemoveItem: {
            prodId: id,
          },
        })
      );
      toast.success("Usunięto z koszyka");
    } catch (error) {
      toast.error("Błąd");
    }
  };

  return (
    <>
      {BasketProducts.basket.length > 0 ? (
        <Basket>
          <Basket.Items>
            <Basket.Header>
              <Basket.Title>
                Koszyk <span>({BasketProducts.basket.length})</span>
              </Basket.Title>
              <Basket.ClearBasket click={ClearBasketFunc}>
                <BsTrash />
                Wyszysc koszyk
              </Basket.ClearBasket>
            </Basket.Header>
            <Basket.List>
              {BasketProducts.basket.map(
                (item: { product: ProductType }, id: number) => (
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
                          <Basket.ProdCount
                            active={
                              ActiveCount.active &&
                              ActiveCount.prodId === item.product.id
                                ? true
                                : false
                            }
                          >
                            {ActiveCountInput.active &&
                            ActiveCountInput.prodId === item.product.id ? (
                              <Basket.CountInput
                                type="number"
                                value={
                                  prodCount.prodId === item.product.id
                                    ? prodCount.value || ""
                                    : BasketProducts.basket[id].product.count ||
                                      ""
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
                            {ActiveCountInput.active &&
                            ActiveCountInput.prodId ===
                              item.product.id ? null : ActiveCount.active &&
                              ActiveCount.prodId === item.product.id ? (
                              <AiOutlineCaretUp />
                            ) : (
                              <AiOutlineCaretDown />
                            )}
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
                                  prodId: item.product.id,
                                  active: !prev.active,
                                }))
                              }
                              style={{
                                display: `${
                                  ActiveCountInput.active &&
                                  ActiveCountInput.prodId === item.product.id
                                    ? "none"
                                    : "flex"
                                }`,
                              }}
                            />
                            <Basket.CountList
                              active={
                                ActiveCount.active &&
                                ActiveCount.prodId === item.product.id
                                  ? true
                                  : false
                              }
                            >
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
                                    >
                                      {it + "+"}
                                    </Basket.Count>
                                  )
                                )}
                              </Basket.CountEl>
                            </Basket.CountList>
                          </Basket.ProdCount>
                          <BsTrash
                            className="trash"
                            onClick={() => RemoveFromBasket(item.product.id)}
                          />
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
                <Basket.BuyPanelPrice>
                  {BasketProducts.basket
                    .reduce(
                      (sum, a) =>
                        sum + a.product.price * (a.product.count || 1),
                      0
                    )
                    .toFixed(2)}
                  {" zł"}
                </Basket.BuyPanelPrice>
              </Basket.BuyPanelSum>
              {User.Email ? (
                <Basket.BuyPanelBtn href="/E-Commers-Shop/order">
                  Przejdź do dostawy
                </Basket.BuyPanelBtn>
              ) : (
                <Basket.BuyPanelBtn href="/E-Commers-Shop/login">
                  Przejdź do dostawy
                </Basket.BuyPanelBtn>
              )}
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
      ) : (
        <Basket>
          <Basket.EmptyBasket>Twój koszyk jest pusty!</Basket.EmptyBasket>
          <Basket.EmptyBasketBtn>
            Przejdź do strony głównej
          </Basket.EmptyBasketBtn>
        </Basket>
      )}

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
