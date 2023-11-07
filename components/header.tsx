import Link from 'next/link';
import Image from 'next/image';
import logoGreenLife from '/images/logo.svg'

const Header = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center text-center bg-[#70259B] p-[0.72rem] h-20">
        <div className="bg-cover bg-center w-24 h-6 block ml-16">
            <Image src={'/images/logo.svg'} width={140} height={140} alt='test' />
        </div>
        <ul className="nav-links list-none flex pl-20 justify-center items-center">
          <li className="text-[white] no-underline px-4 py-0">
            <Link href="/services">Services</Link>
          </li>
          <li className="text-[white] no-underline px-4 py-0">
            <Link href="/industry">Industry</Link>
          </li>
          <li className="text-[white] no-underline px-4 py-0">
            <Link href="/cases">Cases</Link>
          </li>
          <li className="text-[white] no-underline px-4 py-0">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <button className="primary-btn bg-white text-purple-700 border border-white rounded-full px-4 py-1 font-bold mr-6">
          Let's Talk
        </button>
      </div>
      <div className="text-[white] bg-cover bg-[url('/images/confidence.jpeg')] bg-[20%] pl-20 pr-56 pt-[12rem] pb-20">
        <div className="mb-4 pt-40">
          <h2 className="text-7xl mt-20">Live with Confidence</h2>
          <p className="text-3xl w-1/2 mt-8">José Mourinho brings confidence to pan-African Sanlam campaign.</p>
          <button className="bg-purple-700 text-white border border-black px-5 py-2 rounded-full mt-12 font-bold">
            <Link href={"/"}>View project</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
