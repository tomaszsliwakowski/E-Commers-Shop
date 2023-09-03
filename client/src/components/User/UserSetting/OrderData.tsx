import React from "react";
import { Settings } from ".";
import { UserType } from "../../../assets/auth";
import { ModalType } from "./UserSetting";
import { MODAL_Type } from "../../../assets";

type Props = {
  User: UserType;
  setOpenModal: React.Dispatch<React.SetStateAction<ModalType>>;
};

const OrderData = (props: Props) => {
  const { User, setOpenModal } = props;
  return (
    <Settings.DataContainer>
      <Settings.SingleDataContainer>
        <Settings.SingleData className="order">
          {User.orderData
            ? Object.values(User.orderData).map((item, id) =>
                item !== "" ? (
                  <Settings.DataValue key={id}>{item}</Settings.DataValue>
                ) : null
              )
            : null}
          {User.orderData ? (
            Object.values(User.orderData).filter((item) => item !== "")
              .length === 0 ? (
              <>
                <Settings.DataValue>Brak danych</Settings.DataValue>
                <Settings.DataBtn
                  className="order"
                  onClick={() =>
                    setOpenModal({ id: MODAL_Type.orderdata, state: true })
                  }
                >
                  Dodaj dane
                </Settings.DataBtn>
              </>
            ) : (
              <Settings.DataBtn
                className="order"
                onClick={() =>
                  setOpenModal({ id: MODAL_Type.orderdata, state: true })
                }
              >
                Zmień
              </Settings.DataBtn>
            )
          ) : null}
        </Settings.SingleData>
      </Settings.SingleDataContainer>
    </Settings.DataContainer>
  );
};

export default OrderData;
