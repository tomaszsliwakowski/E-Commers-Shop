import React, { useState } from "react";
import { Settings } from ".";
import { UserType } from "../../../assets/auth";
import { ModalType } from "./UserSetting";

interface Props {
  User: UserType;
  setOpenModal: React.Dispatch<React.SetStateAction<ModalType>>;
  type: string;
}

const SetEmail = (props: Props) => {
  const { setOpenModal, User, type } = props;
  return (
    <Settings.Form>
      <Settings.InputCon>
        <Settings.Input
          type="text"
          autocomplete="off"
          required
          disabled
          value={User.email}
        />
        <Settings.InputName>Obecny e-mail</Settings.InputName>
      </Settings.InputCon>
      <Settings.InputCon>
        <Settings.Input type="text" autocomplete="off" required />
        <Settings.InputName>Nowy e-mail</Settings.InputName>
      </Settings.InputCon>
      <Settings.ModalSaveBtn>Zapisz</Settings.ModalSaveBtn>
    </Settings.Form>
  );
};

export default SetEmail;
