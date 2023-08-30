import React from "react";
import { Settings } from ".";
import { UserAuth, UserType } from "../../../assets/auth";

type Props = {
  User: UserType;
};

const OrderData = (props: Props) => {
  const { User } = props;
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
                <Settings.DataBtn className="order">
                  Dodaj dane
                </Settings.DataBtn>
              </>
            ) : (
              <Settings.DataBtn className="order">Zmień</Settings.DataBtn>
            )
          ) : null}
        </Settings.SingleData>
      </Settings.SingleDataContainer>
    </Settings.DataContainer>
  );
};

export default OrderData;
