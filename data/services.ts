// Define an interface for the data structure
interface ServiceItem {
    logo: string;
    title: string;
    description: string;
  }
  
  const services: ServiceItem[] = [
    {
      logo: "../images/icons/app-dev-icon.svg",
      title: "Web development",
      description: "We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions."
    },
    {
      logo: "../images/icons/ux-icon.svg",
      title: "User experience & design",
      description: "Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business."
    },
    {
      logo: "../images/icons/app-dev-icon.svg",
      title: "Mobile app development",
      description: "Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients."
    },
    {
      logo: "../images/icons/blockchain.svg",
      title: "Blockchain solutions",
      description: "We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals."
    }
  ];
  
  export default services;
  