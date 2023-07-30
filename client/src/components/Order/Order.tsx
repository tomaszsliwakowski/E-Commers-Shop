import React, { useEffect } from "react";
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

type xd = {};

const OrderSection = () => {
  const BasketProducts: { basket: Array<{ product: ProductType }> } =
    useAppSelector((state) => state.basket);
  useEffect(() => {
    console.log(BasketProducts);
  }, [BasketProducts]);
  return (
    <Order>
      <Order.Main>
        <Order.Header>Dostawa i płatność</Order.Header>
        <Order.Delivery>
          <Order.SecondHeader>Dostawa</Order.SecondHeader>
          <Order.List>
            {DeliveryMethod.map((item, id) => (
              <Order.El key={id}>
                <Order.Select>
                  <Order.Radio>
                    <Order.Checkbox type="checkbox" />
                    <Order.Checkmark></Order.Checkmark>
                  </Order.Radio>
                  <Order.Name>{item.name}</Order.Name>
                  <Order.Price>{item.price}</Order.Price>
                </Order.Select>
                {DeliveryIcon(id)}
              </Order.El>
            ))}
          </Order.List>
        </Order.Delivery>
        <Order.Data>
          <Order.SecondHeader>Dane dostawy</Order.SecondHeader>
          <Order.DataPanel>
            <Order.DataInput type="text" placeholder="Imię" />
            <Order.DataInput type="text" placeholder="Nazwisko" />
            <Order.DataInput type="text" placeholder="Ulica i numer" />
            <Order.DataInput type="text" placeholder="Miejscowosc" />
            <Order.DataInput type="text" placeholder="Kod pocztowy" />
            <Order.DataInput type="text" placeholder="Numer telefonu" />
          </Order.DataPanel>
        </Order.Data>
        <Order.Payment id="2">
          <Order.SecondHeader>Płatność</Order.SecondHeader>
          <Order.List>
            {PaymentMethod.map((item, id) => (
              <Order.El key={id}>
                <Order.Select>
                  <Order.Radio>
                    <Order.Checkbox type="checkbox" />
                    <Order.Checkmark></Order.Checkmark>
                  </Order.Radio>
                  <Order.Name>{item.name}</Order.Name>
                  <Order.Price>{item.price}</Order.Price>
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
                          {item.product.price}zł
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
                <AiFillShop size={30} />
              </Order.MethodIcon>
              <Order.MethodContainer>
                <Order.MethodName>Sposób dostawy:</Order.MethodName>
                <Order.MethodName>Kurier</Order.MethodName>
              </Order.MethodContainer>
            </Order.SelectMethod>
            <Order.SelectMethod>
              <Order.MethodIcon>
                <BsBox size={30} />
              </Order.MethodIcon>
              <Order.MethodContainer>
                <Order.MethodName>Sposób płatności:</Order.MethodName>
                <Order.MethodName>Blik</Order.MethodName>
              </Order.MethodContainer>
            </Order.SelectMethod>
          </Order.Methods>
          <Order.PayCon>
            <Order.PayEl>
              <Order.PayDetails>Wartość koszyka</Order.PayDetails>
              <Order.PayDetails>1659,00zł</Order.PayDetails>
            </Order.PayEl>
            <Order.PayEl>
              <Order.PayDetails>Dostawa</Order.PayDetails>
              <Order.PayDetails>20,00zł</Order.PayDetails>
            </Order.PayEl>
            <Order.PayEl>
              <Order.PayDetails>Płatność</Order.PayDetails>
              <Order.PayDetails>0,00zł</Order.PayDetails>
            </Order.PayEl>
          </Order.PayCon>
          <Order.PaySumCon>
            <Order.PaySum>
              <Order.PaySumContent>Do zapłaty</Order.PaySumContent>
              <Order.PaySumContent>1679,00zł</Order.PaySumContent>
            </Order.PaySum>
            <Order.PayButton>Zamów i zapłać</Order.PayButton>
          </Order.PaySumCon>
        </Order.SummaryPanel>
      </Order.Summary>
    </Order>
  );
};

export default OrderSection;
