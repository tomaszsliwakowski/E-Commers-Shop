import React from "react";
import { Configurator } from ".";
import { ConfiguratorDataType } from "./configurator";
import { ProductType } from "../../types/Types";
import { useAppDispatch } from "../../store/store";
import { AddToBasketPc } from "../../store/BasketSlice";
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-hot-toast";

type Props = {
  configuratorProducts: ProductType[];
  setConfiguratorData: React.Dispatch<
    React.SetStateAction<ConfiguratorDataType[]>
  >;
};

const Summary = (props: Props) => {
  const dispatch = useAppDispatch();
  const { configuratorProducts, setConfiguratorData } = props;

  function AddPcToBasket() {
    if (configuratorProducts.length < 1) return;
    dispatch(AddToBasketPc(configuratorProducts));
    setConfiguratorData([]);
    toast.success("Dodano do koszyka");
  }

  function ClearConfigurator() {
    if (configuratorProducts.length > 0) {
      setConfiguratorData([]);
      toast.success("Wyczyszczono konfigurator");
    }
  }

  return (
    <Configurator.Summary>
      <Configurator.SumPanel>
        <Configurator.SumCon>
          <Configurator.SumField>
            <Configurator.SumValue>Liczba elementów:</Configurator.SumValue>
            <Configurator.SumValue>
              {configuratorProducts.length || "0"}
            </Configurator.SumValue>
          </Configurator.SumField>
          <Configurator.SumField>
            <Configurator.SumValue>Wartość:</Configurator.SumValue>
            <Configurator.SumValue>
              {configuratorProducts
                .reduce((sum, value) => {
                  return sum + value.price;
                }, 0)
                .toFixed(2) || "0.00"}
              zł
            </Configurator.SumValue>
          </Configurator.SumField>
          <AiOutlineDelete size={28} onClick={() => ClearConfigurator()} />
        </Configurator.SumCon>
        <Configurator.SumBtn
          onClick={() => {
            AddPcToBasket();
          }}
        >
          Dodaj do koszyka
        </Configurator.SumBtn>
      </Configurator.SumPanel>
    </Configurator.Summary>
  );
};

export default Summary;
