import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { productsData } from "../assets/products";
import Heading from "../components/Heading";

const CompanyProducts = () => {
  const { companyId } = useParams();
  const navigate = useNavigate();
  const company = productsData.find((c) => c.id === companyId);
  if (!company) return <h2>Company Not Found</h2>;

  return (
    <div className="py-14">
      <Heading className={"lg:mb-9 lg:text-[55px] !text-left"}>
        Products by <span className="text-primary">{company.name}</span>
      </Heading>
      <p className="text-lg font-medium">
        The company "MaxMotors" offers environmentally friendly and safe Jenbacher gas piston units. We are the official distributor of INNIO Jenbacher in Russia. We offer design and installation from
        scratch at any type of production: in medical organizations, office and shopping centers, in agricultural production, for private boiler houses. You can see the models of gas piston units in
        our catalog. For detailed advice and preliminary calculation, call 8 800 505-77-99 .
      </p>
   
   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-14">
  {company.products.map((product) => (
    <div
      key={product.id}
      className="relative h-[400px] bg-[#222] rounded-lg p-6 cursor-pointer hover:scale-105 transition-transform"
      onClick={() => navigate(`/product/${company.id}/${product.id}`)}
    >
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[80%]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto object-cover"
          />
      </div>

      <div className="relative flex flex-col items-end text-white pr-10">
        <h3 className="text-4xl font-bold">{product.power}</h3>
        <h3 className="text-3xl font-bold">{product.name}</h3>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default CompanyProducts;
