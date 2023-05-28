import React from "react";
import HeaderSection from "../components/Header/Header";
import FooterSection from "../components/Footer/Footer";
import ProductsSection from "../components/Products/products";
import SingleProductSection from "../components/SingleProduct/singleProduct";

const SingleProductsPage = () => {
  return (
    <>
      <HeaderSection />
      <SingleProductSection />
      <FooterSection />
    </>
  );
};

export default SingleProductsPage;
