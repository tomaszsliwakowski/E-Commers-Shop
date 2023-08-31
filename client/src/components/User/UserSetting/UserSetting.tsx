import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/macro";
import UserPanel from "../Panel/Panel";
import { Settings } from ".";
import { AuthContext, UserAuth } from "../../../assets/auth";
import AccountData from "./AccountData";
import OrderData from "./OrderData";
import { Layout } from "../UserOrders/UserOrders";
import ModalSettings from "./ModalAccount";

export type ModalType = {
  id: "username" | "email" | "password" | "orderdata" | "";
  state: boolean;
};

const UserSetting = () => {
  const { User }: UserAuth = useContext(AuthContext);
  const [openModal, setOpenModal] = useState<ModalType>({
    id: "",
    state: false,
  });
  useEffect(() => {
    if (openModal.state) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  return (
    <Layout>
      <UserPanel />
      <Settings>
        <Settings.Title>Ustawienia</Settings.Title>
        <Settings.Title>Dane konta</Settings.Title>
        <AccountData User={User} setOpenModal={setOpenModal} />
        <Settings.Title>Dane do zamówienia</Settings.Title>
        <OrderData User={User} setOpenModal={setOpenModal} />
      </Settings>
      {openModal.state ? (
        <Settings.Modal onClick={() => setOpenModal({ id: "", state: false })}>
          <ModalSettings
            setOpenModal={setOpenModal}
            User={User}
            type={openModal.id}
          />
        </Settings.Modal>
      ) : null}
    </Layout>
  );
};

export default UserSetting;
