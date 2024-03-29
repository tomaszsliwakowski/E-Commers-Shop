import React, { useState } from "react";
import { Settings } from ".";
import { UserType } from "../../../assetsCon/auth";
import { ModalType } from "./UserSetting";
import { OrderDataType } from "../../../types/Types";
import axios from "axios";
import { ServerRoute } from "../../../routes";
import { toast } from "react-hot-toast";

interface Props {
  User: UserType;
  setOpenModal: React.Dispatch<React.SetStateAction<ModalType>>;
  type: string;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
}
interface InputProps {
  value: string;
  name: string;
  setData: React.Dispatch<React.SetStateAction<OrderDataType>>;
  fieldName: string;
  fail: boolean;
}

const RegExLib = {
  basic: new RegExp("[a-z]"),
  address: new RegExp("^[A-Za-z0-9 ]+$"),
  post: new RegExp("[0-9]+-[0-9]+"),
  phone: new RegExp("[0-9]{9}"),
};

const DataName = {
  name: "name",
  lastName: "lastName",
  address: "address",
  city: "city",
  postCode: "postCode",
  phone: "phone",
};

const SetOrderData = (props: Props) => {
  const { setOpenModal, User, type, setUser } = props;
  const [failData, setFailData] = useState<string[]>([]);
  const [userData, setUserData] = useState<OrderDataType>({
    name: User.orderData?.name || "",
    lastName: User.orderData?.lastName || "",
    address: User.orderData?.address || "",
    city: User.orderData?.city || "",
    postCode: User.orderData?.postCode || "",
    phone: User.orderData?.phone || "",
  });

  const SubmitOrderData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(userData).filter((item) => item !== "").length < 6)
      return;
    if (!User) return;
    if (CheckData().length === 0) {
      axios
        .put(
          `${ServerRoute}/users/update/orderdata/${User._id}`,
          {
            data: userData,
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
          toast.success("Zaktualizowano dane");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Nie udało się zaktualizować danych");
        });
    }
  };
  function CheckData(): Array<string> {
    let fail = [];
    if (!RegExLib.basic.test(userData.name)) fail.push(DataName.name);
    if (!RegExLib.basic.test(userData.lastName)) fail.push(DataName.lastName);
    if (!RegExLib.address.test(userData.address)) fail.push(DataName.address);
    if (!RegExLib.basic.test(userData.city)) fail.push(DataName.city);
    if (!RegExLib.post.test(userData.postCode)) fail.push(DataName.postCode);
    if (!RegExLib.phone.test(userData.phone)) fail.push(DataName.phone);
    setFailData(fail);
    return fail;
  }

  return (
    <Settings.Form onSubmit={SubmitOrderData}>
      <SingleInput
        name="Imię"
        fieldName={DataName.name}
        value={userData.name}
        setData={setUserData}
        fail={failData.includes(DataName.name)}
      />
      <SingleInput
        name="Nazwisko"
        fieldName={DataName.lastName}
        value={userData.lastName}
        setData={setUserData}
        fail={failData.includes(DataName.lastName)}
      />
      <SingleInput
        name="ulica i numer"
        fieldName={DataName.address}
        value={userData.address}
        setData={setUserData}
        fail={failData.includes(DataName.address)}
      />
      <SingleInput
        name="Miejscowość"
        fieldName={DataName.city}
        value={userData.city}
        setData={setUserData}
        fail={failData.includes(DataName.city)}
      />
      <SingleInput
        name="Kod pocztowy"
        fieldName={DataName.postCode}
        value={userData.postCode}
        setData={setUserData}
        fail={failData.includes(DataName.postCode)}
      />
      <SingleInput
        name="Numer telefonu"
        fieldName={DataName.phone}
        value={userData.phone}
        setData={setUserData}
        fail={failData.includes(DataName.phone)}
      />
      <Settings.ModalSaveBtn type="submit">Zapisz</Settings.ModalSaveBtn>
    </Settings.Form>
  );
};

export default SetOrderData;

const SingleInput = (props: InputProps) => {
  const { value, name, setData, fieldName, fail } = props;
  return (
    <>
      <Settings.InputCon>
        <Settings.Input
          type="text"
          autocomplete="off"
          name={fieldName}
          required
          value={value}
          className={fail ? "invalid" : ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
        <Settings.InputName>{name}</Settings.InputName>
      </Settings.InputCon>
    </>
  );
};
