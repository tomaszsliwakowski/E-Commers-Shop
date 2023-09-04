import React, { useState } from "react";
import { ModalType } from "./UserSetting";
import { UserType } from "../../../assets/auth";
import { Settings } from ".";
import { GrClose } from "react-icons/gr";
import { MODAL_Type, ModalLib } from "../../../assets";
import { MODAL_LIB } from "../../../assets";
import SetOrderData from "./SetOrderData";
import SetUserData from "./SetUserData";

interface Props {
  User: UserType;
  setOpenModal: React.Dispatch<React.SetStateAction<ModalType>>;
  type: string;
}

const ModalSettings = (props: Props) => {
  const { setOpenModal, User, type } = props;
  return (
    <Settings.ModalBody>
      <Settings.ModalTopPanel>
        <Settings.ModalTitle>
          Zmiana {MODAL_LIB[type as keyof ModalLib]}
        </Settings.ModalTitle>
        <GrClose
          size={35}
          onClick={() => setOpenModal({ id: "", state: false })}
        />
      </Settings.ModalTopPanel>
      <Settings.ModalContent>
        {type !== MODAL_Type.orderdata ? (
          <SetUserData User={User} setOpenModal={setOpenModal} type={type} />
        ) : null}

        {type === MODAL_Type.orderdata ? (
          <SetOrderData User={User} setOpenModal={setOpenModal} type={type} />
        ) : null}
      </Settings.ModalContent>
    </Settings.ModalBody>
  );
};

export default ModalSettings;
