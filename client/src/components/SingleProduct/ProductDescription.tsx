import React from "react";
import SingleProduct from ".";
import { ImageType } from "../../types/Types";

const ProductDescription = ({ image }: ImageType) => {
  return (
    <SingleProduct.Description>
      <SingleProduct.ProdImg>
        <SingleProduct.Image src={image} alt="product description" />
      </SingleProduct.ProdImg>
      <SingleProduct.DescText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore atque
        temporibus, deserunt laborum distinctio ipsum porro consequatur ea!
        Distinctio architecto maiores similique dignissimos eveniet sed atque
        itaque fugit eaque eos!
      </SingleProduct.DescText>
    </SingleProduct.Description>
  );
};

export default ProductDescription;
