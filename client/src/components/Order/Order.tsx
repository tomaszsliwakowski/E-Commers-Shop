import React from "react";
import { Order } from "./index";
import { CiDeliveryTruck } from "react-icons/ci";

const OrderSection = () => {
  return (
    <Order>
      <Order.Main>
        <Order.Header>Dostawa i płatność</Order.Header>
        <Order.Delivery>
          <Order.SecondHeader>Dostawa</Order.SecondHeader>
          <Order.List>
            <Order.El>
              <Order.Select>
                <div>check</div>
                <Order.Name>Inpost</Order.Name>
                <Order.Price>20zł</Order.Price>
              </Order.Select>
              <CiDeliveryTruck />
            </Order.El>
          </Order.List>
        </Order.Delivery>
        <Order.Data>
          <Order.SecondHeader>Dane dostawy</Order.SecondHeader>
        </Order.Data>
        <Order.Payment>
          <Order.SecondHeader>Płatność</Order.SecondHeader>
          <Order.List>
            <Order.El>
              <Order.Select>
                <div>check</div>
                <Order.Name>Płatność online</Order.Name>
                <Order.Price>0zł</Order.Price>
              </Order.Select>
              $
            </Order.El>
          </Order.List>
        </Order.Payment>
      </Order.Main>
      <Order.Summary></Order.Summary>
    </Order>
  );
};

export default OrderSection;
