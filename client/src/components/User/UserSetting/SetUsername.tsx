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
  const [newUsername, setNewUserName] = useState("");
  const [failData, setFailData] = useState<string[]>([]);

  const SubmitOrderData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newUsername === "") return;
    if (new RegExp("^[a-zA-Z]+ [a-zA-Z]+$").test(newUsername)) {
      //send to api
      setOpenModal({ id: "", state: false });
      setFailData([]);
    } else {
      setFailData(["username"]);
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
          value={User.username}
        />
        <Settings.InputName>Obecna nazwa</Settings.InputName>
      </Settings.InputCon>
      <Settings.InputCon>
        <Settings.Input
          type="text"
          autocomplete="off"
          required
          className={failData.includes("username") ? "invalid" : ""}
          value={newUsername}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewUserName(e.target.value)
          }
        />
        <Settings.InputName>Nowa nazwa</Settings.InputName>
      </Settings.InputCon>
      <Settings.ModalSaveBtn type="submit">Zapisz</Settings.ModalSaveBtn>
    </Settings.Form>
  );
};

export default SetUsername;
