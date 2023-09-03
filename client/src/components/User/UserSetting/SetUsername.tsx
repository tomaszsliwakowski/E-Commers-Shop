import React, { useState } from "react";
import { Settings } from ".";
import { UserType } from "../../../assets/auth";
import { ModalType } from "./UserSetting";

interface Props {
  User: UserType;
  setOpenModal: React.Dispatch<React.SetStateAction<ModalType>>;
  type: string;
}

const SetUsername = (props: Props) => {
  const { setOpenModal, User, type } = props;
  return (
    <Settings.Form>
      <Settings.InputCon>
        <Settings.Input
          type="text"
          autocomplete="off"
          required
          disabled
          value={User.username}
        />
        <Settings.InputName>Obecna nazwa</Settings.InputName>
      </Settings.InputCon>
      <Settings.InputCon>
        <Settings.Input type="text" autocomplete="off" required />
        <Settings.InputName>Nowa nazwa</Settings.InputName>
      </Settings.InputCon>
      <Settings.ModalSaveBtn>Zapisz</Settings.ModalSaveBtn>
    </Settings.Form>
  );
};

export default SetUsername;
