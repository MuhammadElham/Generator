import React from "react";
import Hero_About from "../components/Hero_About";
import Heading from "../components/Heading";
import Logo from "../components/Logo";
import company_1 from "../assets/Logo/Company/company_1.png";
import company_2 from "../assets/Logo/Company/company_2.png";
import company_3 from "../assets/Logo/Company/company_3.png";
import company_4 from "../assets/Logo/Company/company_4.png";
import company_5 from "../assets/Logo/Company/company_5.png";
import company_6 from "../assets/Logo/Company/company_6.png";

const logos = [company_1, company_2, company_3, company_4, company_5, company_6];

const Product = () => {
  return (
    <>
      <Hero_About bgImg={"https://powerhouseegypt.com/wp-content/uploads/2024/05/generator-room-design-content-image.jpg"} heading={"Explore Our Products"} />
      <div className="py-14">
        <Heading text={"Industry-Leading Brands"} />
        <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
          {logos.map((logo, index) => (
            <Logo key={index} logo={logo} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
