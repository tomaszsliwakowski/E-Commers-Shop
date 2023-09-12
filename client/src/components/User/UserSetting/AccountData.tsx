import React from "react";
import { Settings } from ".";
import { UserType } from "../../../assetsCon/auth";
import { ModalType } from "./UserSetting";
import { MODAL_Type } from "../../../assets";

type Props = {
  User: UserType;
  setOpenModal: React.Dispatch<React.SetStateAction<ModalType>>;
};

const AccountData = (props: Props) => {
  const { User, setOpenModal } = props;
  return (
    <Settings.DataContainer>
      <Settings.SingleDataContainer>
        <Settings.DataName>Nazwa użytkownika</Settings.DataName>
        <Settings.SingleData>
          <Settings.DataValue>{User.username}</Settings.DataValue>
          <Settings.DataBtn
            onClick={() =>
              setOpenModal({ id: MODAL_Type.username, state: true })
            }
          >
            Zmień
          </Settings.DataBtn>
        </Settings.SingleData>
      </Settings.SingleDataContainer>
      <Settings.SingleDataContainer>
        <Settings.DataName>Adres e-mail</Settings.DataName>
        <Settings.SingleData>
          <Settings.DataValue>{User.email}</Settings.DataValue>
          <Settings.DataBtn
            onClick={() => setOpenModal({ id: MODAL_Type.email, state: true })}
          >
            Zmień
          </Settings.DataBtn>
        </Settings.SingleData>
      </Settings.SingleDataContainer>
      <Settings.SingleDataContainer>
        <Settings.DataName>Hasło</Settings.DataName>
        <Settings.SingleData>
          <Settings.DataValue>******</Settings.DataValue>
          <Settings.DataBtn
            onClick={() =>
              setOpenModal({ id: MODAL_Type.password, state: true })
            }
          >
            Zmień
          </Settings.DataBtn>
        </Settings.SingleData>
      </Settings.SingleDataContainer>
    </Settings.DataContainer>
  );
};

export default AccountData;
