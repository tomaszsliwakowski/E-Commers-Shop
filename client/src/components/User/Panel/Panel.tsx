import React, { useContext } from "react";
import { Panel } from ".";
import { HiClipboardList, HiOutlineClipboardList } from "react-icons/hi";
import { AiFillSetting, AiOutlineSetting } from "react-icons/ai";
import { UserOrderRoute, UserSettingRoute } from "../../../routes";
import { AuthContext, UserAuth } from "../../../assetsCon/auth";

const UserPanel = () => {
  const { User }: UserAuth = useContext(AuthContext);
  return (
    <Panel>
      <Panel.User>
        <Panel.Name>Cześć,</Panel.Name>
        <Panel.Name>{User.username.split(" ")[0]}</Panel.Name>
      </Panel.User>
      <Panel.LinkList>
        <Panel.Link href={UserOrderRoute}>
          <Panel.Icon>
            {window.location.pathname === UserOrderRoute ? (
              <HiClipboardList size={25} />
            ) : (
              <HiOutlineClipboardList size={25} />
            )}
          </Panel.Icon>
          <Panel.LinkName>Zamówienia</Panel.LinkName>
        </Panel.Link>
        <Panel.Link href={UserSettingRoute}>
          <Panel.Icon>
            {window.location.pathname === UserSettingRoute ? (
              <AiFillSetting size={25} />
            ) : (
              <AiOutlineSetting size={25} />
            )}
          </Panel.Icon>
          <Panel.LinkName>Ustawienia</Panel.LinkName>
        </Panel.Link>
      </Panel.LinkList>
    </Panel>
  );
};

export default UserPanel;
