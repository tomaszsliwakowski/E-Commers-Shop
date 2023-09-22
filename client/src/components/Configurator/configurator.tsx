import React, { useState, useEffect } from "react";
import { Configurator } from ".";
import Component from "./component";
import { ComponentsAssets, ComponentsName } from "../../assets";
import Summary from "./summary";
import ConfiguratorModal from "./modal";
import axios from "axios";
import { GetProducts } from "../../routes";
import { ProductType } from "../../types/Types";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { AddToBasket } from "../../store/BuilderSlice";

export type ModalType = {
  id: number;
  state: boolean;
};

export type ConfiguratorDataType = {
  id: number;
  name: string;
};

const ConfiguratorSection = () => {
  const dispatch = useAppDispatch();
  const [openModal, setOpenModal] = useState({
    id: 0,
    state: false,
  });
  const [productsData, setProductsData] = useState<ProductType[]>([]);
  const [configuratorData, setConfiguratorData] = useState<
    ConfiguratorDataType[]
  >(useAppSelector((state) => state.builder).builder);
  const productsId: number[] = configuratorData.map((item) => item.id);
  const configuratorProducts: ProductType[] = productsData.filter((it) =>
    productsId.includes(it.id)
  );

  useEffect(() => {
    dispatch(AddToBasket(configuratorData));
  }, [configuratorData]);

  useEffect(() => {
    axios
      .get(GetProducts("Podzespoly-komputerowe"))
      .then((reasult) => {
        const data = reasult.data[0];
        setProductsData(data.products);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    if (openModal.state) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  const CloseModal = (e: React.MouseEvent) => {
    let target = e.target as HTMLElement;
    if (target.id === "activeModal") {
      setOpenModal({ id: 0, state: false });
    }
  };
  return (
    <Configurator>
      <Configurator.Title>Konfigurator komputera PC</Configurator.Title>
      <Configurator.Components>
        {ComponentsAssets.map((item, id) => (
          <Component
            key={id}
            item={item}
            id={id}
            productsData={productsData}
            configuratorData={configuratorData}
            setConfiguratorData={setConfiguratorData}
            setOpenModal={setOpenModal}
          />
        ))}
      </Configurator.Components>
      <Summary
        configuratorProducts={configuratorProducts}
        setConfiguratorData={setConfiguratorData}
      />
      {openModal.state ? (
        <Configurator.Modal onClick={(e) => CloseModal(e)} id="activeModal">
          <ConfiguratorModal
            configuratorData={configuratorData}
            setOpenModal={setOpenModal}
            openModal={openModal}
            setConfiguratorData={setConfiguratorData}
            productsData={productsData.filter(
              (item) => item.components === ComponentsName[openModal.id].name
            )}
          />
        </Configurator.Modal>
      ) : null}
    </Configurator>
  );
};

export default ConfiguratorSection;
