import React, { useState, useContext, useEffect } from "react";
import { Orders } from ".";
import { OrderType, sortOrdersType } from "../../../types/Types";
import { AuthContext, UserAuth } from "../../../assets/auth";
import axios from "axios";
import { ServerRoute } from "../../../routes";

interface Props {
  selectSort: sortOrdersType;
}

const OrderList = (props: Props) => {
  const [selectSort, setSelectSort] = useState<sortOrdersType>(
    props.selectSort
  );
  const [orders, setOrders] = useState<OrderType[] | undefined>(undefined);
  const { User }: UserAuth = useContext(AuthContext);

  useEffect(() => {
    if (User === undefined || User._id === "") return;
    axios
      .get(`${ServerRoute}/api/orders/get/${User._id}`)
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log("fail get data");
      });
  }, [User]);
  console.log(orders);
  return (
    <Orders.List>
      {orders &&
        orders.map((item, id) => <div key={id}>{item.Products[0].name}</div>)}
    </Orders.List>
  );
};

export default OrderList;
