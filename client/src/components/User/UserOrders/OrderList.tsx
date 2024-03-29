import React, { useState, useContext, useEffect } from "react";
import { Orders } from ".";
import { OrderType, sortOrdersType } from "../../../types/Types";
import { AuthContext, UserAuth } from "../../../assetsCon/auth";
import axios from "axios";
import { ServerRoute } from "../../../routes";
import { sortLib } from "../../../assets";

interface Props {
  selectSort: sortOrdersType;
}

const OrderList = (props: Props) => {
  const [orders, setOrders] = useState<OrderType[] | undefined>(undefined);
  const { User }: UserAuth = useContext(AuthContext);

  function SortData(data: OrderType[]) {
    switch (props.selectSort.id) {
      case sortLib[0].id:
        setOrders(
          data.sort((x, y) => {
            return (
              new Date(y.OrderData).getTime() - new Date(x.OrderData).getTime()
            );
          })
        );
        break;
      case sortLib[1].id:
        setOrders(
          data.sort((x, y) => {
            return (
              new Date(x.OrderData).getTime() - new Date(y.OrderData).getTime()
            );
          })
        );
        break;
      case sortLib[2].id:
        setOrders(
          data.sort((x, y) => {
            return x.Price - y.Price;
          })
        );
        break;
      case sortLib[3].id:
        setOrders(
          data.sort((x, y) => {
            return y.Price - x.Price;
          })
        );
        break;

      default:
        setOrders(data);
        break;
    }
  }

  useEffect(() => {
    if (User === undefined || User._id === "") return;
    axios
      .get(`${ServerRoute}/api/orders/get/${User._id}`)
      .then((res) => {
        SortData(res.data);
      })
      .catch((err) => {
        console.log("fail get data");
      });
  }, [User, props.selectSort]);

  return (
    <Orders.List>
      {orders
        ? orders.map((item, id) => (
            <li key={id}>
              <Orders.OrderDetails>
                <Orders.OrderStatus>Dostarczone</Orders.OrderStatus>
                <Orders.OrderInfoCon>
                  <Orders.OrderInfo data-testid="date">
                    {new Date(item.OrderData).toLocaleDateString()}
                  </Orders.OrderInfo>
                  <Orders.OrderInfo data-testid="number">
                    nr {item._id}
                  </Orders.OrderInfo>
                </Orders.OrderInfoCon>
                <Orders.OrderPrice data-testid="price">
                  {item.Price.toFixed(2)}zł
                </Orders.OrderPrice>
              </Orders.OrderDetails>
              <Orders.OrderContent>
                {item.Products.map((item, id) => (
                  <Orders.Image
                    data-testid="img"
                    key={id}
                    src={item.img}
                    alt={item.name}
                  />
                ))}
              </Orders.OrderContent>
            </li>
          ))
        : null}
    </Orders.List>
  );
};

export default OrderList;
