import React from "react";
import Image from "next/image";
import brands from "../data/trustedBrandsData";

const Brands = () => {
  return (
    <div className="mb-12 pl-20">
      <div className="flex items-center mx-0 my-12">
        <div className="bg-[#D100C9] w-[2.7%] h-[0.3rem] mr-4" />
        <h2>You'll be in good company</h2>
      </div>
      <h1 className="text-[#242424] font-extrabold text-[2.85rem]">
        Trusted by leading Brands
      </h1>
      <div className="grid grid-cols-5 gap-4 mt-8">
        {brands.map((image, index) => (
          <div
            key={index}
            className={`flex justify-center ${
              index === 11 ? "max-h-28 text-xl" : ""
            }`}
          >
            <Image
              src={image.location}
              alt={image.alt}
              width={220}
              height={220}
              className="max-w-[80%] max-h-[80%] w-[150px] h-[150px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
