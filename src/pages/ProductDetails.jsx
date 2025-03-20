import React from "react";
import { useParams } from "react-router-dom";
import {productsData} from "../assets/products";
import Heading from "../components/Heading";

const ProductDetails = () => {
  const { companyId, productId } = useParams();
  const company = productsData.find((c) => c.id === companyId);
  const product = company?.products.find((p) => p.id === productId);

  if (!product) return <h2>Product Not Found</h2>;

  return (
    <div className="py-14">
      <Heading text={product.name} />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <img src={product.image} alt={product.name} className="w-full h-64 object-contain" />
        <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
        <p className="text-gray-700">{product.power}</p>
        <p className="text-xl font-semibold mt-2 text-green-600">{product.price}</p>
        <p className="text-gray-600 mt-4">{product.details}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
