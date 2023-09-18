import React, { useState } from "react";
import { Configurator } from ".";
import { ConfiguratorDataType, ModalType } from "./configurator";
import { GrClose } from "react-icons/gr";
import { ComponentsAssets } from "../../assets";
import { ProductType } from "../../types/Types";
import { AiOutlinePlus } from "react-icons/ai";

interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<ModalType>>;
  openModal: ModalType;
  productsData: ProductType[];
  setConfiguratorData: React.Dispatch<
    React.SetStateAction<ConfiguratorDataType[]>
  >;
}

const ConfiguratorModal = (props: Props) => {
  const { setOpenModal, openModal, productsData, setConfiguratorData } = props;

  function AddProduct(item: ProductType) {
    setConfiguratorData((prev) => [
      ...prev,
      {
        id: item.id,
        name: ComponentsAssets[openModal.id].name,
      },
    ]);
    setOpenModal({ id: 0, state: false });
  }

  return (
    <Configurator.ModalBody>
      <Configurator.ModalTopPanel>
        <Configurator.ModalTitle>
          {ComponentsAssets[openModal.id].name}
        </Configurator.ModalTitle>
        <GrClose
          size={35}
          onClick={() => setOpenModal({ id: 0, state: false })}
        />
      </Configurator.ModalTopPanel>
      <Configurator.ModalContent>
        {productsData.map((item, id) => (
          <Configurator.Product key={id}>
            <Configurator.ProductTop>
              <Configurator.Image src={item.img} alt={item.name} />
              <Configurator.ProductName>{item.name}</Configurator.ProductName>
            </Configurator.ProductTop>
            <Configurator.ProductBottom>
              <Configurator.ProductPrice>
                {item.price.toFixed(2)}zł
              </Configurator.ProductPrice>
              <Configurator.ProductAdd>
                <AiOutlinePlus size={30} onClick={() => AddProduct(item)} />
              </Configurator.ProductAdd>
            </Configurator.ProductBottom>
          </Configurator.Product>
        ))}
      </Configurator.ModalContent>
    </Configurator.ModalBody>
  );
};

export default ConfiguratorModal;
