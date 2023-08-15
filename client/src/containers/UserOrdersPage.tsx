import React from "react";
import HeaderSection from "../components/Header/Header";
import FooterSection from "../components/Footer/Footer";
import UserOrders from "../components/User/UserOrders/UserOrders";

const UserOrdersPage = () => {
  return (
    <>
      <HeaderSection />
      <UserOrders />
      <FooterSection />
    </>
  );
};

export default UserOrdersPage;
