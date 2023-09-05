import React, { useContext, useEffect, useState } from "react";
import UserPanel from "../Panel/Panel";
import { Settings } from ".";
import { AuthContext, UserAuth } from "../../../assets/auth";
import AccountData from "./AccountData";
import OrderData from "./OrderData";
import { Layout } from "../UserOrders/UserOrders";
import ModalSettings from "./ModalAccount";
import { Modalkeys } from "../../../assets";

export type ModalType = {
  id: Modalkeys | string;
  state: boolean;
};

const UserSetting = () => {
  const { User, setUser }: UserAuth = useContext(AuthContext);
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

  const CloseModal = (e: React.MouseEvent) => {
    let target = e.target as HTMLElement;
    if (target.id === "activeModal") {
      setOpenModal({ id: "", state: false });
    }
  };

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
        <Settings.Modal onClick={(e) => CloseModal(e)} id="activeModal">
          <ModalSettings
            setOpenModal={setOpenModal}
            User={User}
            setUser={setUser}
            type={openModal.id}
          />
        </Settings.Modal>
      ) : null}
    </Layout>
  );
};

export default UserSetting;
