import React, { useState } from "react";
import { Settings } from ".";
import { UserType } from "../../../assetsCon/auth";
import { ModalType } from "./UserSetting";
import { SettingsLib } from "../../../assets";
import axios from "axios";
import { ServerRoute } from "../../../routes";
import { toast } from "react-hot-toast";

interface Props {
  User: UserType;
  setOpenModal: React.Dispatch<React.SetStateAction<ModalType>>;
  type: string;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
}

const SetUserData = (props: Props) => {
  const { setOpenModal, User, type, setUser } = props;
  const [newData, setNewData] = useState("");
  const [failData, setFailData] = useState<string[]>([]);
  const typeContent = SettingsLib.filter((item) => item.name === type)[0];

  const SubmitOrderData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newData === "") return;
    if (new RegExp(typeContent.regex).test(newData)) {
      if (!User) return;
      if (!typeContent) return;
      axios
        .put(
          `${ServerRoute}${typeContent.route}${User._id}`,
          {
            data: newData,
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          setUser(res.data);
          setOpenModal({ id: "", state: false });
          setNewData("");
          toast.success("Zaktualizowano dane");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Nie udało się zaktualizować danych");
        });
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
        <Settings.InputName>{typeContent.before}</Settings.InputName>
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
        <Settings.InputName>{typeContent.after}</Settings.InputName>
      </Settings.InputCon>
      <Settings.ModalSaveBtn type="submit">Zapisz</Settings.ModalSaveBtn>
    </Settings.Form>
  );
};

export default SetUserData;
