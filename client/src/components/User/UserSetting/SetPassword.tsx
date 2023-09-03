import React, { useState } from "react";
import { Settings } from ".";
import { UserType } from "../../../assets/auth";
import { ModalType } from "./UserSetting";

interface Props {
  User: UserType;
  setOpenModal: React.Dispatch<React.SetStateAction<ModalType>>;
  type: string;
}

const SetPassword = (props: Props) => {
  const { setOpenModal, User, type } = props;
  return (
    <Settings.Form>
      <Settings.InputCon>
        <Settings.Input
          type="text"
          autocomplete="off"
          required
          disabled
          value="******"
        />
        <Settings.InputName>Obecne hasło</Settings.InputName>
      </Settings.InputCon>
      <Settings.InputCon>
        <Settings.Input type="text" autocomplete="off" required />
        <Settings.InputName>Nowe hasło</Settings.InputName>
      </Settings.InputCon>
      <Settings.ModalSaveBtn>Zapisz</Settings.ModalSaveBtn>
    </Settings.Form>
  );
};

export default SetPassword;
