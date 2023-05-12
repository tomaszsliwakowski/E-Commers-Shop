import React, { useState, useEffect } from "react";
import Basket from ".";
import { BsTrash } from "react-icons/bs";
import { PayAcceptList } from "../../assets";
import { AiOutlineCaretUp, AiOutlineInfoCircle } from "react-icons/ai";
import { LogRegOut } from "../register&login";
import { HomeRoute } from "../../routes";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { AiOutlineCaretDown } from "react-icons/ai";
import { Item } from "../Products/style/productStyle";
const prod: any = {
  img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/7/pr_2021_7_1_8_25_10_978_06.jpg",
  name: "Gigabyte GeForce RTX 3060 Ti EAGLE OC LHR 8GB GDDR6",
  price: 1269.0,
  link: "#",
};

const CountOpt: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const BasketSection = () => {
  const [ActiveCount, setActiveCount] = useState<boolean>(false);
  const [ActiveCountInput, setActiveCountInput] = useState<boolean>(false);
  const [ProductCount, setProductCount] = useState<number>(1);

  const HandleCount = (count: number) => {
    setProductCount(count);
    setActiveCount(false);
  };

  const HandleActiveCountInput = () => {
    setActiveCountInput(true);
    setActiveCount(false);
    setTimeout(() => {
      document.getElementById("countInput")?.focus();
    }, 200);
  };

  useEffect(() => {
    if (ActiveCountInput) {
      const handle = () => {
        setActiveCountInput(false);
      };
      setTimeout(() => {
        handle();
      }, 3000);
    }
  }, [ActiveCountInput]);

  useEffect(() => {
    const close = (e: Event) => {
      let target = e.target as HTMLElement;
      if (target.id !== "count" || target.id !== "countInput") {
        setActiveCount(false);
      }
    };
    document.body.addEventListener("click", close);
    return () => {
      document.body.removeEventListener("click", close);
    };
  }, []);
  return (
    <>
      <Basket>
        <Basket.Items>
          <Basket.Header>
            <Basket.Title>
              Koszyk <span>(1)</span>
            </Basket.Title>
            <Basket.ClearBasket>
              <BsTrash />
              Wyszysc koszyk
            </Basket.ClearBasket>
          </Basket.Header>
          <Basket.List>
            <Basket.Product>
              <Basket.Property>
                <Basket.Goto to={"/products/:category"}>
                  <Basket.Image src={prod.img} alt={prod.name} />
                </Basket.Goto>
                <Basket.PropertyOpt>
                  <Basket.Goto to={"/products/:category"}>
                    <Basket.ProductDesc>{prod.name}</Basket.ProductDesc>
                  </Basket.Goto>
                  <Basket.OtherProperty>
                    <span>{prod.price.toFixed(2)} zł</span>
                    <Basket.ProdCount active2={ActiveCount}>
                      {ActiveCountInput ? (
                        <Basket.CountInput
                          type="number"
                          value={ProductCount}
                          id="countInput"
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setProductCount(parseInt(e.target.value))
                          }
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
          </Basket.List>
        </Basket.Items>
        <Basket.BuyPanel>
          <Basket.BuyPanelCon>
            <Basket.BuyPanelSum>
              <Basket.BuyPanelPrice>Łączna kwota</Basket.BuyPanelPrice>
              <Basket.BuyPanelPrice>1234.00 zł</Basket.BuyPanelPrice>
            </Basket.BuyPanelSum>
            <Basket.BuyPanelBtn>Przejdź do dostawy</Basket.BuyPanelBtn>
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
      <Basket.PayAccept>
        <Basket.PayAcceptTitle>Akceptujemy</Basket.PayAcceptTitle>
        <Basket.PayAcceptList>
          {PayAcceptList.map((it, id) => {
            return <Basket.Image key={id} src={it} alt={id} />;
          })}
        </Basket.PayAcceptList>
      </Basket.PayAccept>
      <LogRegOut>
        <LogRegOut.OutBtn href={HomeRoute}>
          <MdOutlineArrowBackIosNew /> Wyjdź
        </LogRegOut.OutBtn>
      </LogRegOut>
    </>
  );
};

export default BasketSection;
