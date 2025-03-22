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
            onClick={() => navigate(`/product/${company.id}/${product.id}`)}
            className="relative bg-[#222] rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
          >
            <div className="relative flex flex-col w-full h-full">
              {/* Image ko right me shift karna */}
              <div className="w-full h-[250px] md:h-[300px] lg:h-[350px] flex justify-end">
                <img src={product.image} alt={product.name} className="w-auto h-full object-cover" />
              </div>

              {/* Text ko left me rakhna */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-r from-black/80 to-transparent">
                <h2 className="text-4xl font-bold text-white">{product.power}</h2>
                <h3 className="text-2xl font-semibold text-gray-300">{product.name}</h3>
                <a href={`/product/${company.id}/${product.id}`} className="mt-2 text-lg text-gray-400 underline hover:text-gray-500">
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyProducts;
