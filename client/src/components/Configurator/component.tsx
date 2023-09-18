import React, { useEffect, useState } from "react";
import { Configurator } from ".";
import { AiOutlinePlus } from "react-icons/ai";
import { ConfiguratorDataType, ModalType } from "./configurator";
import { ProductType } from "../../types/Types";
type PROPS = {
  item: {
    name: string;
    image: any;
  };
  id: number;
  productsData: ProductType[];
  setOpenModal: React.Dispatch<React.SetStateAction<ModalType>>;
  configuratorData: ConfiguratorDataType[];
};

const Component = (props: PROPS) => {
  const { name, image } = props.item;
  const { setOpenModal, id, configuratorData, productsData } = props;
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
          <div>{product?.name}</div>
        ) : (
          <AiOutlinePlus
            onClick={() => setOpenModal({ id: id, state: true })}
          />
        )}
      </Configurator.RightPart>
    </Configurator.Component>
  );
};

export default Component;
