import React from "react";
import HeaderSection from "../components/Header/Header";
import FooterSection from "../components/Footer/Footer";
import UserSetting from "../components/User/UserSetting/UserSetting";

const UserSettingPage = () => {
  return (
    <>
      <HeaderSection />
      <UserSetting />
      <FooterSection />
    </>
  );
};

export default UserSettingPage;
