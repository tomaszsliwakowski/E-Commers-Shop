import React from "react";
import SecondHeader from "../components/register&login/header";
import FooterSection from "../components/Footer/Footer";
import OrderSection from "../components/Order/Order";

const OrderPage = () => {
  return (
    <div style={{ maxWidth: "1050px", margin: "0 auto" }}>
      <SecondHeader />
      <OrderSection />
      <FooterSection />
    </div>
  );
};

export default OrderPage;
