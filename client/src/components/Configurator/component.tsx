import React, { useEffect, useState } from "react";
import { Configurator } from ".";
import { AiOutlinePlus } from "react-icons/ai";
import { ConfiguratorDataType, ModalType } from "./configurator";
import { ProductType } from "../../types/Types";
import { TbArrowsExchange2 } from "react-icons/tb";
import { AiOutlineDelete } from "react-icons/ai";
type PROPS = {
  item: {
    name: string;
    image: any;
  };
  id: number;
  productsData: ProductType[];
  setOpenModal: React.Dispatch<React.SetStateAction<ModalType>>;
  configuratorData: ConfiguratorDataType[];
  setConfiguratorData: React.Dispatch<
    React.SetStateAction<ConfiguratorDataType[]>
  >;
};

const Component = (props: PROPS) => {
  const { name, image } = props.item;
  const {
    setOpenModal,
    id,
    configuratorData,
    productsData,
    setConfiguratorData,
  } = props;
  const data = configuratorData.filter((item) => item.name === name);
  const [product, setProduct] = useState<ProductType | undefined>(undefined);

  useEffect(() => {
    if (!data[0]) return;
    if (!productsData) return;
    const product = productsData.filter((item) => item.id === data[0].id);
    if (product) setProduct(product[0]);
  }, [configuratorData, productsData, data]);

  return (
    <Configurator.Component>
      <Configurator.LeftPart>
        <Configurator.Name>{name}</Configurator.Name>
        <Configurator.Image src={image} alt={name} />
      </Configurator.LeftPart>
      <Configurator.RightPart>
        {data.length > 0 ? (
          <>
            <Configurator.Name>{product?.name}</Configurator.Name>
            <Configurator.Image src={product?.img} alt={product?.name} />
            <Configurator.ConButton className="container">
              <Configurator.ProductName className="price">
                {product?.price}zł
              </Configurator.ProductName>
              <Configurator.ConButton className="options">
                <Configurator.Button
                  onClick={() => setOpenModal({ id: id, state: true })}
                >
                  <TbArrowsExchange2 />
                </Configurator.Button>
                <Configurator.Button
                  onClick={() =>
                    setConfiguratorData((prev) =>
                      prev.filter((item) => item !== data[0])
                    )
                  }
                >
                  <AiOutlineDelete />
                </Configurator.Button>
              </Configurator.ConButton>
            </Configurator.ConButton>
          </>
        ) : (
          <AiOutlinePlus
            className="plus"
            onClick={() => setOpenModal({ id: id, state: true })}
          />
        )}
      </Configurator.RightPart>
    </Configurator.Component>
  );
};

export default Component;
