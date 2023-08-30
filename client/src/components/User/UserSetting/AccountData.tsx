import React from "react";
import { Settings } from ".";
import { UserType } from "../../../assets/auth";

type Props = {
  User: UserType;
};

const AccountData = (props: Props) => {
  const { User } = props;
  return (
    <Settings.DataContainer>
      <Settings.SingleDataContainer>
        <Settings.DataName>Nazwa użytkownika</Settings.DataName>
        <Settings.SingleData>
          <Settings.DataValue>{User.username}</Settings.DataValue>
          <Settings.DataBtn>Zmień</Settings.DataBtn>
        </Settings.SingleData>
      </Settings.SingleDataContainer>
      <Settings.SingleDataContainer>
        <Settings.DataName>Adres e-mail</Settings.DataName>
        <Settings.SingleData>
          <Settings.DataValue>{User.email}</Settings.DataValue>
          <Settings.DataBtn>Zmień</Settings.DataBtn>
        </Settings.SingleData>
      </Settings.SingleDataContainer>
      <Settings.SingleDataContainer>
        <Settings.DataName>Hasło</Settings.DataName>
        <Settings.SingleData>
          <Settings.DataValue>******</Settings.DataValue>
          <Settings.DataBtn>Zmień</Settings.DataBtn>
        </Settings.SingleData>
      </Settings.SingleDataContainer>
    </Settings.DataContainer>
  );
};

export default AccountData;
