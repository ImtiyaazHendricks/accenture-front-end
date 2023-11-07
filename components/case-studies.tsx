"use client"
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { fetchCaseStudies } from "../api/apiService";

interface CaseStudy {
  imageUrl: string;
  title: string;
  description: string;
}

const CaseStudies = () => {
  const [data, setData] = useState<CaseStudy[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const caseStudiesData = await fetchCaseStudies();
        setData(caseStudiesData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (data.length === 0) return <div>Loading</div>;

  return (
    <div className="mb-12 pl-20">
      <div className="flex items-center mx-0 my-12">
        <div className="bg-[#D100C9] w-[2.7%] h-[0.3rem] mr-4" />
        <h2>Case Studies</h2>
      </div>
      <div className="flex ml-4 my-12 overflow-x-scroll">
        {data.map((item, index) => (
          <div
            key={index}
            className="box-border relative mr-2 mb-8 w-full sm:w-[calc(33.33% - 1rem)]"
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={550}
              height={85}
              className="max-w-full h-[23rem] object-cover overflow-hidden"
            />
            <div className="absolute h-full flex flex-col justify-end items-start text-left text-[white] left-0 bottom-0" style={{ margin: "15px" }}>
              <div className="bg-[#D100C9] w-[8%] h-[0.3rem] mb-[0.6rem]" />
              <h2 className="text-2xl m-0">{item.title}</h2>
              <p className="text-[0.95rem] mt-2 pr-8 w-[90%]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
