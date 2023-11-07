import services from "../data/services";
import Image from 'next/image';

const ServicesContent = () => {
  return (
    <div className="bg-[white] pl-20 pr-8">
      <div className="ml-0 pt-24">
        <div className="flex items-center">
          <div className="bg-[#D100C9] w-[2.7%] h-[0.3rem] mr-4" />
          <h2 className="text-2xl font-normal text-[#333] .pt-14">What we do</h2>
        </div>
        <p className="text-[4.2rem] font-bold leading-tight pt-14">
          We offer a complete range of bespoke design and development services
          to help you turn your ideas into digital masterpieces.
        </p>
      </div>
      <div className="flex justify-between mt-5 pt-14">
        {services.map((item, index) => (
          <div className="flex-1 bg-white flex flex-col p-5 rounded-[5px]" key={index}>
            <div className="h-12 ml-2 mr-0 mt-0 mb-8 rounded-[50%]">
              <Image src={item.logo} alt={item.title} width={100} height={100} />
            </div>
            <h3 className="text-2xl leading-[120%] font-bold min-h-[3.6rem] mx-0 my-4 p-0 pt-14">{item.title}</h3>
            <p className="grow text-xl not-italic font-normal leading-[150%] pt-14 w-[70%]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesContent;
