import React, { useState } from "react";
import { Settings } from ".";
import { UserType } from "../../../assets/auth";
import { ModalType } from "./UserSetting";
import { SettingsLib } from "../../../assets";

interface Props {
  User: UserType;
  setOpenModal: React.Dispatch<React.SetStateAction<ModalType>>;
  type: string;
}

const SetUserData = (props: Props) => {
  const { setOpenModal, User, type } = props;
  const [newData, setNewData] = useState("");
  const [failData, setFailData] = useState<string[]>([]);

  const SubmitOrderData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newData === "") return;
    if (
      new RegExp(
        SettingsLib.filter((item) => item.name === type)[0].regex
      ).test(newData)
    ) {
      //send to api
      setOpenModal({ id: "", state: false });
      setFailData([]);
    } else {
      setFailData([type]);
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
          value={User[type as keyof UserType] || "******"}
        />
        <Settings.InputName>
          {SettingsLib.filter((item) => item.name === type)[0].before}
        </Settings.InputName>
      </Settings.InputCon>
      <Settings.InputCon>
        <Settings.Input
          type="text"
          autocomplete="off"
          required
          className={failData.includes(type) ? "invalid" : ""}
          value={newData}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewData(e.target.value)
          }
        />
        <Settings.InputName>
          {SettingsLib.filter((item) => item.name === type)[0].after}
        </Settings.InputName>
      </Settings.InputCon>
      <Settings.ModalSaveBtn type="submit">Zapisz</Settings.ModalSaveBtn>
    </Settings.Form>
  );
};

export default SetUserData;
