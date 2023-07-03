import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className=" bg-[#12141e] pt-12">
      <div className="container">
        <div className=" sm:flex items-center justify-between md:gap-8">
          <div className=" w-full sm:w-1/2">
            <h2 className=" text=[26px] leading-10 text-white font-[600] mb-5 md:text-[1.5rem]">
              Want to build a beautiful website?
            </h2>
            <a href="#contact">
              <button className="flex items-center gap-2 bg-[#8873ef] font-[500] text-white border border-solid border-[#8873ef] py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-[#193256] hover:text-white hover:font-[500] ease-in duration-300">
                <i class="ri-mail-line"></i>Hire me
              </button>
            </a>
          </div>
          <div className=" w-full sm:w-1/2">
            <p className=" text-gray-300 leading-7 mt-4 sm:mt-0">
              I always make websites that has unique design and also has a good
              performance rate
            </p>
            <div className=" flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className=" text-gray-300 font-[600] text-[15px]">
                Follow Me:
              </span>
              <span className=" w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://www.facebook.com/mdrubaiyatkabir.rafi"
                  className="text-gray-300 text-[18px] font-[500]"
                >
                  <i class="ri-facebook-circle-fill"></i>
                </a>
              </span>
              <span className=" w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://github.com/Rubaiyatrafi"
                  className="text-gray-300 text-[18px] font-[500]"
                >
                  <i class="ri-github-fill"></i>
                </a>
              </span>
              <span className=" w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://www.linkedin.com/in/rubaiyat-kabir/"
                  className="text-gray-300 text-[18px] font-[500]"
                >
                  <i class="ri-linkedin-box-fill"></i>
                </a>
              </span>
              <span className=" w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://mail.google.com/mail/u/0/#inbox"
                  className="text-gray-300 text-[18px] font-[500]"
                >
                  <i class="ri-mail-fill"></i>
                </a>
              </span>
            </div>
          </div>
        </div>

        <div>
          <ul className="flex items-center justify-center gap-10 mt-10">
            <li>
              <a className="text-gray-400 font-[600]" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="text-gray-400 font-[600]" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="text-gray-400 font-[600]" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="text-gray-400 font-[600]" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#1b1e29] py-5 mt-14">
        <div className="container">
          <div className=" flex items-center justify-center sm:justify-between">
            <div className=" hidden sm:block">
              <div className=" flex items-center gap-[10px]">
                <span className=" w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center">
                  R
                </span>
                <div className="leading-[20px]">
                  <h2 className=" text-gray-200 font-[500] text-[18px]">
                    Rubaiyat
                  </h2>
                  <p className=" text-gray-400 font-[500] text-[14px]">
                    Personal
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-[14px]">
                Copyright {year} developed by Rubaiyat - All right reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
