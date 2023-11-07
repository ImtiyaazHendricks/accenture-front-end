import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#430964] mt-32 pl-20 pr-0 pt-0 pb-12">
      <div className="text-white flex items-center">
        <div className="bg-[#D100C9] w-[2.7%] h-[0.3rem] mr-4" />
        <h2 className="font-extralight mx-0 my-12 font-sans font-small">
          Contact us
        </h2>
      </div>

      <div className="flex justify-between items-center mb-16 pr-52">
        <div className="text-white font-bold text-[2.5rem] font-sans">
          <p>Have a project in mind?</p>
          <p>Let's make it happen</p>
        </div>
        <div className="text-white text-large mr-[5.1rem] font-sans">
          <p>22 Street Name, Suburb, 8000,</p>
          <p>Cape Town, South Africa</p>
          <p>+27 21 431 0001</p>
          <p>
            <Link
              href="mailto:enquiries@website.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline"
            >
              enquiries@website.com
            </Link>
          </p>
        </div>
      </div>

      <div className="flex justify-between flex-wrap text-larger pr-48">
        <div className="flex-1">
          <Link href="/terms-of-service" className="block no-underline text-white mx-0 my-[5px]">
                Terms of Service
          </Link>
          <Link href="/privacy-policy" className="block no-underline text-white mx-0 my-[5px]">
                Privacy Policy
          </Link>
          <Link href="/impressum" className="block no-underline text-white mx-0 my-[5px]">
                Impressum
          </Link>
        </div>

        <div className="flex-1">
          <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="block no-underline text-white mx-0 my-[5px]">
            Facebook
          </Link>
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="block no-underline text-white mx-0 my-[5px]">
            Instagram
          </Link>
          <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="block no-underline text-white mx-0 my-[5px]">
            Twitter
          </Link>
        </div>

        <div className="flex-1">
          <Link href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="block no-underline text-white mx-0 my-[5px]">
            Github
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="block no-underline text-white mx-0 my-[5px]">
            Linkedin
          </Link>
          <Link href="https://www.microsoft.com/teams" target="_blank" rel="noopener noreferrer" className="block no-underline text-white mx-0 my-[5px]">
            Teams
          </Link>
        </div>

        <div className="flex-1">
          <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="block no-underline text-white mx-0 my-[5px]">
            Youtube
          </Link>
          <Link href="https://www.behance.net" target="_blank" rel="noopener noreferrer" className="block no-underline text-white mx-0 my-[5px]">
            Behance
          </Link>
          <Link href="https://www.dribbble.com" target="_blank" rel="noopener noreferrer" className="block no-underline text-white mx-0 my-[5px]">
            Dribbble
          </Link>
        </div>

        <div className="flex-1">
          <Link href="/open-jobs" className="block no-underline text-white mx-0 my-[5px]">
            Explore Open Jobs
          </Link>
          <p className="block no-underline text-[white] mx-0 mt-8">©2000—2023 Company Name</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
