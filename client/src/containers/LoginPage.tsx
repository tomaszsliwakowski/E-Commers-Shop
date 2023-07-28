import React from "react";
import LoginSection from "../components/Login/login";
import SecondHeader from "../components/register&login/header";
import FooterSection from "../components/Footer/Footer";
import { HomeRoute } from "../routes";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { LogRegOut } from "../components/register&login";
import useWindowSize from "../hooks/useWindowSize";
import { WindowSizeType } from "../types/Types";

const LoginPage = () => {
  let { width, height }: WindowSizeType = useWindowSize();
  return (
    <div style={{ margin: `${width && width > 350 ? "0 2rem" : "0 0.5rem"}` }}>
      <SecondHeader />
      <LoginSection />
      <LogRegOut>
        <LogRegOut.OutBtn href={HomeRoute}>
          <MdOutlineArrowBackIosNew /> Wyjdź
        </LogRegOut.OutBtn>
      </LogRegOut>
      <FooterSection />
    </div>
  );
};

export default LoginPage;
