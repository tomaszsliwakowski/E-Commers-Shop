import React, { useEffect, useState } from "react";
import SingleProduct from ".";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductsType } from "../../types/Types";

const SingleProductSection = () => {
  const [ProductData, setProductData] = useState<ProductsType>();
  let { id } = useParams();
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:10000/api/product/${id}`)
        .then((reasult) => {
          setProductData(reasult.data[0]);
        })
        .catch((err) => {
          console.log("fail get data");
        });
    }
  }, [id]);

  return (
    <SingleProduct>
      <div>{id}</div>
      <div>{ProductData?.name}</div>
    </SingleProduct>
  );
};
export default SingleProductSection;
