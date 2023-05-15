import React from "react";
import { Header } from ".";
import { SlBasket } from "react-icons/sl";
import { AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import { UserPanelProps } from "../../types/Types";
import { BasketRoute, LoginRoute, RegisterRoute } from "../../routes";
import DropOptMin from "./dropOptMin";
import DropOptMax from "./dropOptMax";

const prod: any = {
  img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/7/pr_2021_7_1_8_25_10_978_06.jpg",
  name: "Gigabyte GeForce RTX 3060 Ti EAGLE OC LHR 8GB GDDR6",
  price: 1269.0,
  link: "#",
};
const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const UserPanel = ({
  width,
  activeRightMenu,
  setActiveRightMenu,
}: UserPanelProps) => {
  return width !== undefined ? (
    width >= 1250 ? (
      <>
        <Header.UserPanelAccount href="">
          <Header.DropBtn>
            <AiOutlineUser />
            Konto
          </Header.DropBtn>
          <Header.DropDown>
            <Header.DropOpt>
              <Header.LoginBtn href={LoginRoute}>Zaloguj</Header.LoginBtn>
            </Header.DropOpt>
            <Header.DropOpt>
              <Header.RegisterBtn href={RegisterRoute}>
                Zarejestruj się
              </Header.RegisterBtn>
            </Header.DropOpt>
          </Header.DropDown>
        </Header.UserPanelAccount>
        <Header.UserPanelBasket href={BasketRoute}>
          <Header.DropBtn>
            <SlBasket />
            Koszyk
          </Header.DropBtn>
          {!true ? (
            <Header.DropDown>
              <Header.DropOpt>
                <Header.PanelName>Twój koszyk jest pusty!</Header.PanelName>
              </Header.DropOpt>
            </Header.DropDown>
          ) : (
            <Header.DropDown>
              <Header.CloseRightPanel style="full">
                <Header.CloseRight>
                  Koszyk<span>(1)</span>
                </Header.CloseRight>
              </Header.CloseRightPanel>
              {!true ? (
                <Header.DropOpt>
                  <Header.EmptyBasket>
                    Twój koszyk jest pusty!
                  </Header.EmptyBasket>
                </Header.DropOpt>
              ) : (
                <DropOptMax />
              )}
            </Header.DropDown>
          )}
        </Header.UserPanelBasket>
      </>
    ) : (
      <>
        <Header.UserPanelAccountMin click={setActiveRightMenu}>
          <Header.DropBtn>
            <AiOutlineUser />
            Konto
          </Header.DropBtn>
        </Header.UserPanelAccountMin>
        <Header.UserPanelBasketMin click={setActiveRightMenu}>
          <Header.DropBtn>
            <SlBasket />
            Koszyk
          </Header.DropBtn>
        </Header.UserPanelBasketMin>

        {activeRightMenu.Account ? (
          <Header.DropDown>
            <Header.CloseRightPanel>
              <Header.CloseRight>
                <AiOutlineClose
                  onClick={() =>
                    setActiveRightMenu({ Account: false, Basket: false })
                  }
                />
                Konto
              </Header.CloseRight>
            </Header.CloseRightPanel>
            <Header.DropOpt>
              <Header.LoginBtn href={LoginRoute}>Zaloguj</Header.LoginBtn>
            </Header.DropOpt>
            <Header.DropOpt>
              <Header.RegisterBtn href={RegisterRoute}>
                Zarejestruj się
              </Header.RegisterBtn>
            </Header.DropOpt>
          </Header.DropDown>
        ) : null}
        {activeRightMenu.Basket ? (
          <Header.DropDown>
            <Header.CloseRightPanel>
              <Header.CloseRight>
                <AiOutlineClose
                  onClick={() =>
                    setActiveRightMenu({ Account: false, Basket: false })
                  }
                />
                Koszyk<span>(1)</span>
              </Header.CloseRight>
            </Header.CloseRightPanel>
            {!true ? (
              <Header.DropOpt>
                <Header.EmptyBasket>Twój koszyk jest pusty!</Header.EmptyBasket>
              </Header.DropOpt>
            ) : (
              <DropOptMin />
            )}
          </Header.DropDown>
        ) : null}
      </>
    )
  ) : null;
};

export default UserPanel;
