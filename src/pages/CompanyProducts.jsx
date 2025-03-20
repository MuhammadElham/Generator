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
      <Heading text={`Products by ${company.name}`} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {company.products.map((product) => (
          <div key={product.id} className="shadow-lg p-6 bg-white rounded-lg cursor-pointer hover:scale-105 transition-transform" onClick={() => navigate(`/product/${company.id}/${product.id}`)}>
            <img src={product.image} alt={product.name} className="w-full h-32 object-contain" />
            <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-600">{product.power}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyProducts;
