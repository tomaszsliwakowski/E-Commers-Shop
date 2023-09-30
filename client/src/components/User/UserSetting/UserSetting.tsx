import React, { useContext, useEffect, useState } from "react";
import UserPanel from "../Panel/Panel";
import { Settings } from ".";
import { AuthContext, UserAuth } from "../../../assetsCon/auth";
import AccountData from "./AccountData";
import OrderData from "./OrderData";
import { Layout } from "../UserOrders/UserOrders";
import ModalSettings from "./ModalAccount";
import { Modalkeys } from "../../../assets";
import axios from "axios";
import { HomeRoute, LocalRoute, ServerRoute } from "../../../routes";
import { deleteCookie } from "../../Header/userpanel";
import { toast } from "react-hot-toast";

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
  const DeleteUserAccount = () => {
    if (window.confirm("Czy chcesz usunąć konto?")) {
      if (!User) return;
      axios
        .delete(`${ServerRoute}/users/delete/${User._id}`)
        .then(() => {
          deleteCookie("SHOP_AUTH", "/", "localhost");
          toast.success("Konto zostało usunięte");
          if (window.location.pathname !== HomeRoute) {
            window.location.assign(`${LocalRoute}${HomeRoute}`);
          } else window.location.reload();
        })
        .catch((res) => {
          toast.error("Nie udało się usunąć konta");
          console.log(res);
        });
    }
  };

  return (
    <Layout>
      <UserPanel />
      <Settings>
        <Settings.Title data-testid="title">Ustawienia</Settings.Title>
        <Settings.Title data-testid="title">Dane konta</Settings.Title>
        <AccountData User={User} setOpenModal={setOpenModal} />
        <Settings.Title data-testid="title">Dane do zamówienia</Settings.Title>
        <OrderData User={User} setOpenModal={setOpenModal} />
        <Settings.Title data-testid="title">Usuwanie konta</Settings.Title>
        <Settings.DeleteUserBtn
          data-testid="delete"
          onClick={() => DeleteUserAccount()}
        >
          Usuń konto
        </Settings.DeleteUserBtn>
      </Settings>
      {openModal.state ? (
        <Settings.Modal
          data-testid="modal"
          onClick={(e) => CloseModal(e)}
          id="activeModal"
        >
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
