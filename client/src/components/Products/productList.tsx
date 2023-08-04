import React from "react";
import { Products } from ".";
import { BsCartPlus } from "react-icons/bs";
import { ProductType } from "../../types/Types";
import { useAppDispatch } from "../../store/store";
import { AddToBasket } from "../../store/BasketSlice";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Product = ({ item }: { item: ProductType }) => {
  const dispatch = useAppDispatch();
  const AddProductToBasket = (Product: ProductType) => {
    try {
      dispatch(
        AddToBasket({
          product: {
            id: Product.id,
            name: Product.name,
            img: Product.img,
            price: Product.price,
            category: Product.category,
            producer: Product.producer,
            opinion: Product.opinion,
            count: 1,
          },
        })
      );
      toast.success("Dodano do koszyka");
    } catch (error) {
      toast.error("Błąd");
    }
  };
  return (
    <Products.Item>
      <Link to={`/E-Commers-Shop/product/${item.id}`}>
        <Products.I_Img>
          <Products.Image src={item.img} alt={item.name} />
        </Products.I_Img>
        <Products.I_Desc>
          <Products.I_Name>{item.name}</Products.I_Name>
          <Products.I_Opinion>{Rating(item)}</Products.I_Opinion>
          <Products.I_SpecList>
            {item.spec?.map((el, id) => (
              <Products.I_SpecEl key={id}>
                {el.split(":")[0] + ": " + el.split(":")[1]}
              </Products.I_SpecEl>
            ))}
          </Products.I_SpecList>
        </Products.I_Desc>
      </Link>
      <Products.I_BuyPanel>
        <Products.I_Price>{item.price.toFixed(2)}zł</Products.I_Price>
        <Products.I_Basket>
          <Products.AddToCart click={() => AddProductToBasket(item)}>
            <BsCartPlus />
          </Products.AddToCart>
        </Products.I_Basket>
      </Products.I_BuyPanel>
    </Products.Item>
  );
};
export default Product;

export const Rating = (item: ProductType) => {
  let value: Array<any> = [];
  for (let index = 0; index < Math.floor(item.opinion); index++) {
    value.push(
      <Products.Image
        key={index}
        src="https://assets.x-kom.pl/public-spa/xkom/985a91ae09e6b303.svg"
      />
    );
  }

  if (item.opinion.toString().split(".").length > 1) {
    value.push(
      <Products.Image
        key={10}
        src="https://assets.x-kom.pl/public-spa/xkom/6dcb53b14cc23c9f.svg"
      />
    );
  }
  if (value.length < 5) {
    for (let index = value.length; index < 5; index++) {
      value.push(
        <Products.Image
          key={index + 5}
          src="https://assets.x-kom.pl/public-spa/xkom/d641261a2af6867e.svg"
        />
      );
    }
  }

  return value;
};
