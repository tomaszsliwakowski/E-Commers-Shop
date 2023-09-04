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
  const [newPassword, setNewPassword] = useState("");
  const [failData, setFailData] = useState<string[]>([]);

  const SubmitOrderData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newPassword === "") return;
    if (new RegExp("^[A-Z][a-zA-Z0-9!@#$%^&*]{7,19}$").test(newPassword)) {
      //send to api
      setOpenModal({ id: "", state: false });
      setFailData([]);
    } else {
      setFailData(["password"]);
    }
  };

  return (
    <Settings.Form onSubmit={SubmitOrderData}>
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
        <Settings.Input
          type="text"
          autocomplete="off"
          required
          className={failData.includes("password") ? "invalid" : ""}
          value={newPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewPassword(e.target.value)
          }
        />
        <Settings.InputName>Nowe hasło</Settings.InputName>
      </Settings.InputCon>
      <Settings.ModalSaveBtn type="submit">Zapisz</Settings.ModalSaveBtn>
    </Settings.Form>
  );
};

export default SetPassword;
