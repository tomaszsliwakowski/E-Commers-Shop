import React from "react";
import { Order } from "./index";
import { CiDeliveryTruck } from "react-icons/ci";
import { DeliveryMethod, PaymentMethod } from "../../assets";
import { AiFillShop } from "react-icons/ai";
import { BsBox, BsBank, BsCreditCard2Back, BsCash } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { BiTransfer } from "react-icons/bi";
import { MdOutlinePayments } from "react-icons/md";

function DeliveryIcon(id: number) {
  switch (id) {
    case 0:
      return <CiDeliveryTruck />;
    case 1:
      return <AiFillShop />;
    case 2:
      return <BsBox />;
    case 3:
      return <FiMapPin />;
    default:
      break;
  }
}
function PaymentIcon(id: number) {
  switch (id) {
    case 0:
      return <BsCreditCard2Back />;
    case 1:
      return <BsCreditCard2Back />;
    case 2:
      return <MdOutlinePayments />;
    case 3:
      return <BiTransfer />;
    case 4:
      return <BsCash />;
    case 3:
      return <BsBank />;
    default:
      break;
  }
}

const OrderSection = () => {
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
                    <Order.Checkmark>a</Order.Checkmark>
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
                    <Order.Checkmark>a</Order.Checkmark>
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
            <Order.BasketEl>a</Order.BasketEl>
          </Order.BasketList>
          <Order.Methods>
            <Order.SelectMethod>
              <Order.MethodIcon>icon</Order.MethodIcon>
              <Order.MethodContainer>
                <Order.MethodName>Sposób dostawy:</Order.MethodName>
                <Order.MethodName>Kurier</Order.MethodName>
              </Order.MethodContainer>
            </Order.SelectMethod>
            <Order.SelectMethod>
              <Order.MethodIcon>icon</Order.MethodIcon>
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
