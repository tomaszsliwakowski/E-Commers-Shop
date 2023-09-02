import React from "react";
import { ModalType } from "./UserSetting";
import { UserType } from "../../../assets/auth";
import { Settings } from ".";
import { GrClose } from "react-icons/gr";

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
    <Settings.ModalBody>
      <Settings.ModalTopPanel>
        <Settings.ModalTitle>title</Settings.ModalTitle>
        <GrClose size={35} />
      </Settings.ModalTopPanel>
      <Settings.ModalContent></Settings.ModalContent>
      <Settings.ModalSaveBtn>Zapisz</Settings.ModalSaveBtn>
    </Settings.ModalBody>
  );
};

export default ModalSettings;
