import React from "react";
import { ModalType } from "./UserSetting";
import { UserType } from "../../../assets/auth";

interface Props {
  User: UserType;
  setOpenModal: React.Dispatch<React.SetStateAction<ModalType>>;
  type: string;
}
const MODAL_LIB = {
  username: "username",
  email: "email",
  password: "password",
  orderdata: "orderdata",
};

const ModalSettings = (props: Props) => {
  const { setOpenModal, User, type } = props;
  return (
    <div>
      <div></div>
    </div>
  );
};

export default ModalSettings;
