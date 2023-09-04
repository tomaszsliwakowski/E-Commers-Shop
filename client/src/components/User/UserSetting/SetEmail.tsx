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
  const [newEmail, setNewEmail] = useState("");
  const [failData, setFailData] = useState<string[]>([]);

  const SubmitOrderData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newEmail === "") return;
    if (
      new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$").test(
        newEmail
      )
    ) {
      //send to api
      setOpenModal({ id: "", state: false });
      setFailData([]);
    } else {
      setFailData(["email"]);
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
          value={User.email}
        />
        <Settings.InputName>Obecny e-mail</Settings.InputName>
      </Settings.InputCon>
      <Settings.InputCon>
        <Settings.Input
          type="text"
          autocomplete="off"
          required
          className={failData.includes("email") ? "invalid" : ""}
          value={newEmail}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewEmail(e.target.value)
          }
        />
        <Settings.InputName>Nowy e-mail</Settings.InputName>
      </Settings.InputCon>
      <Settings.ModalSaveBtn type="submit">Zapisz</Settings.ModalSaveBtn>
    </Settings.Form>
  );
};

export default SetEmail;
