import React, { useEffect, useState } from "react";
import { Order } from "./index";
import { CiDeliveryTruck } from "react-icons/ci";
import { DeliveryMethod, PaymentMethod } from "../../assets";
import { AiFillShop } from "react-icons/ai";
import { BsBox, BsBank, BsCreditCard2Back, BsCash } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { BiTransfer } from "react-icons/bi";
import { MdOutlinePayments } from "react-icons/md";
import { ProductType } from "../../types/Types";
import { useAppSelector } from "../../store/store";
import { useNavigate } from "react-router";

function DeliveryIcon(id: number) {
  switch (id) {
    case 0:
      return <CiDeliveryTruck size={30} style={{ marginRight: "0.5rem" }} />;
    case 1:
      return <AiFillShop size={30} style={{ marginRight: "0.5rem" }} />;
    case 2:
      return <BsBox size={30} style={{ marginRight: "0.5rem" }} />;
    case 3:
      return <FiMapPin size={30} style={{ marginRight: "0.5rem" }} />;
    default:
      break;
  }
}
function PaymentIcon(id: number) {
  switch (id) {
    case 0:
      return <BsCreditCard2Back size={30} style={{ marginRight: "0.5rem" }} />;
    case 1:
      return <BsCreditCard2Back size={30} style={{ marginRight: "0.5rem" }} />;
    case 2:
      return <MdOutlinePayments size={30} style={{ marginRight: "0.5rem" }} />;
    case 3:
      return <BiTransfer size={30} style={{ marginRight: "0.5rem" }} />;
    case 4:
      return <BsCash size={30} style={{ marginRight: "0.5rem" }} />;
    case 5:
      return <BsBank size={30} style={{ marginRight: "0.5rem" }} />;
    default:
      break;
  }
}

const OrderSection = () => {
  const navigate = useNavigate();
  const [CustData, setCustData] = useState({
    name: "",
    lastName: "",
    address: "",
    city: "",
    postCode: "",
    phone: "",
  });
  const [Options, setOptions] = useState({
    Delivery: { Num: -1, Price: 0 },
    Payment: { Num: -1, Price: 0 },
  });
  const BasketProducts: { basket: Array<{ product: ProductType }> } =
    useAppSelector((state) => state.basket);

  function Sum() {
    let BasketValue = BasketProducts.basket.reduce(
      (sum, a) => sum + a.product.price * (a.product.count || 1),
      0
    );
    if (Options.Delivery.Price > 0) {
      BasketValue += Options.Delivery.Price;
    }
    if (Options.Payment.Price > 0) {
      BasketValue += Options.Payment.Price;
    }
    return BasketValue;
  }

  useEffect(() => {
    if (BasketProducts.basket.length === 0) navigate("/");
  }, [BasketProducts]);
  return (
    <Order>
      <Order.Main>
        <Order.Header>Dostawa i płatność</Order.Header>
        <Order.Delivery>
          <Order.SecondHeader>Dostawa</Order.SecondHeader>
          <Order.List>
            {DeliveryMethod.map((item, id) => (
              <Order.El
                key={id}
                onClick={() =>
                  setOptions((prev) => ({
                    ...prev,
                    Delivery: { Num: id, Price: item.price },
                  }))
                }
              >
                <Order.Select>
                  <Order.Radio>
                    <Order.Checkbox
                      type="checkbox"
                      checked={Options.Delivery.Num === id ? true : false}
                      onChange={() =>
                        setOptions((prev) => ({
                          ...prev,
                          Delivery: {
                            Num: id,
                            Price: item.price,
                          },
                        }))
                      }
                    />
                    <Order.Checkmark></Order.Checkmark>
                  </Order.Radio>
                  <Order.Name>{item.name}</Order.Name>
                  <Order.Price>
                    {item.price > 0
                      ? `(${item.price.toFixed(2)}zł)`
                      : `(bezpłatne)`}
                  </Order.Price>
                </Order.Select>
                {DeliveryIcon(id)}
              </Order.El>
            ))}
          </Order.List>
        </Order.Delivery>
        <Order.Data>
          <Order.SecondHeader>Dane dostawy</Order.SecondHeader>
          <Order.DataPanel>
            <Order.DataInput
              type="text"
              max="100"
              placeholder="Imię"
              value={CustData.name}
            />
            <Order.DataInput
              type="text"
              max="100"
              placeholder="Nazwisko"
              value={CustData.lastName}
            />
            <Order.DataInput
              type="text"
              max="100"
              placeholder="Ulica i numer"
              value={CustData.address}
            />
            <Order.DataInput
              type="text"
              max="100"
              placeholder="Miejscowosc"
              value={CustData.city}
            />
            <Order.DataInput
              type="text"
              max="7"
              placeholder="Kod pocztowy"
              pattern="[0-9][-]"
              value={CustData.postCode}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCustData((prev) => ({ ...prev, postCode: e.target.value }))
              }
            />
            <Order.DataInput
              type="text"
              max="9"
              placeholder="Numer telefonu"
              value={CustData.phone}
            />
          </Order.DataPanel>
        </Order.Data>
        <Order.Payment id="2">
          <Order.SecondHeader>Płatność</Order.SecondHeader>
          <Order.List>
            {PaymentMethod.map((item, id) => (
              <Order.El
                key={id}
                onClick={() =>
                  setOptions((prev) => ({
                    ...prev,
                    Payment: { Num: id, Price: item.price },
                  }))
                }
              >
                <Order.Select>
                  <Order.Radio>
                    <Order.Checkbox
                      type="checkbox"
                      checked={Options.Payment.Num === id ? true : false}
                      onChange={() =>
                        setOptions((prev) => ({
                          ...prev,
                          Payment: {
                            Num: id,
                            Price: item.price,
                          },
                        }))
                      }
                    />
                    <Order.Checkmark></Order.Checkmark>
                  </Order.Radio>
                  <Order.Name>{item.name}</Order.Name>
                  <Order.Price>
                    {item.price > 0
                      ? `(${item.price.toFixed(2)}zł)`
                      : `(bezpłatne)`}
                  </Order.Price>
                </Order.Select>
                {PaymentIcon(id)}
              </Order.El>
            ))}
          </Order.List>
        </Order.Payment>
      </Order.Main>
      <Order.Summary>
        <Order.SummaryPanel>
          <Order.BasketList>
            {BasketProducts.basket.length > 0
              ? BasketProducts.basket.map((item, id) => (
                  <Order.BasketEl key={id}>
                    <Order.ProductIcon>
                      <img src={item.product.img} alt={item.product.name} />
                    </Order.ProductIcon>
                    <Order.Product>
                      <Order.ProductName>{item.product.name}</Order.ProductName>
                      <Order.ProductDetails>
                        <Order.ProductInfo>
                          {item.product.count}szt.
                        </Order.ProductInfo>
                        <Order.ProductInfo>
                          {item.product.price.toFixed(2)}zł
                        </Order.ProductInfo>
                      </Order.ProductDetails>
                    </Order.Product>
                  </Order.BasketEl>
                ))
              : null}
          </Order.BasketList>
          <Order.Methods>
            <Order.SelectMethod>
              <Order.MethodIcon>
                {Options.Delivery.Num >= 0 ? (
                  DeliveryIcon(Options.Delivery.Num)
                ) : (
                  <CiDeliveryTruck size={30} />
                )}
              </Order.MethodIcon>
              <Order.MethodContainer>
                <Order.MethodName>Sposób dostawy:</Order.MethodName>
                <Order.MethodName>
                  {Options.Delivery.Num >= 0
                    ? DeliveryMethod[Options.Delivery.Num].name
                    : "Wybierz sposób dostawy"}
                </Order.MethodName>
              </Order.MethodContainer>
            </Order.SelectMethod>
            <Order.SelectMethod>
              <Order.MethodIcon>
                {Options.Payment.Num >= 0 ? (
                  PaymentIcon(Options.Payment.Num)
                ) : (
                  <BsCash size={30} />
                )}
              </Order.MethodIcon>
              <Order.MethodContainer>
                <Order.MethodName>Sposób płatności:</Order.MethodName>
                <Order.MethodName>
                  {Options.Payment.Num > 0
                    ? PaymentMethod[Options.Payment.Num].name
                    : "Wybierz sposób płatności"}
                </Order.MethodName>
              </Order.MethodContainer>
            </Order.SelectMethod>
          </Order.Methods>
          <Order.PayCon>
            <Order.PayEl>
              <Order.PayDetails>Wartość koszyka</Order.PayDetails>
              <Order.PayDetails>
                {BasketProducts.basket
                  .reduce(
                    (sum, a) => sum + a.product.price * (a.product.count || 1),
                    0
                  )
                  .toFixed(2)}
                zł
              </Order.PayDetails>
            </Order.PayEl>
            <Order.PayEl>
              <Order.PayDetails>Dostawa</Order.PayDetails>
              <Order.PayDetails>
                {Options.Delivery.Price > 0
                  ? Options.Delivery.Price.toFixed(2)
                  : (0).toFixed(2)}
                zł
              </Order.PayDetails>
            </Order.PayEl>
            <Order.PayEl>
              <Order.PayDetails>Płatność</Order.PayDetails>
              <Order.PayDetails>
                {Options.Payment.Price > 0
                  ? Options.Payment.Price.toFixed(2)
                  : (0).toFixed(2)}
                zł
              </Order.PayDetails>
            </Order.PayEl>
          </Order.PayCon>
          <Order.PaySumCon>
            <Order.PaySum>
              <Order.PaySumContent>Do zapłaty</Order.PaySumContent>
              <Order.PaySumContent>{Sum().toFixed(2)}zł</Order.PaySumContent>
            </Order.PaySum>
            <Order.PayButton>Zamów i zapłać</Order.PayButton>
          </Order.PaySumCon>
        </Order.SummaryPanel>
      </Order.Summary>
    </Order>
  );
};

export default OrderSection;
