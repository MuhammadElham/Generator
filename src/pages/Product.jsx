import React from "react";
import { useNavigate } from "react-router-dom";
import Hero_About from "../components/Hero_About";
import Heading from "../components/Heading";
import Logo from "../components/Logo";
import { productsData } from "../assets/products";

const Product = () => {
  const navigate = useNavigate();

  return (
    <>
      <Hero_About bgImg={"https://powerhouseegypt.com/wp-content/uploads/2024/05/generator-room-design-content-image.jpg"} heading={"Explore Our Products"} />
      <div className="py-14">
        <Heading text={"Industry-Leading Brands"} />
        <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
          {productsData.map((company, index) => (
            <div key={company.id} onClick={() => navigate(`/company/${company.id}`)} className="cursor-pointer">
              <Logo logo={company.logo} index={index} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
