import React from "react";
import Hero_About from "../components/Hero_About";
import Heading from "../components/Heading";

const Product = () => {
  return (
    <>
      <Hero_About bgImg={"https://powerhouseegypt.com/wp-content/uploads/2024/05/generator-room-design-content-image.jpg"} heading={"Explore Our Products"} />
      <div className="py-14">
        <Heading text={"Industry-Leading Brands"} />
      </div>
    </>
  );
};

export default Product;
