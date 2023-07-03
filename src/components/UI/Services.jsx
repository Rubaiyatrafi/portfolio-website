import React from "react";
import frontendImg from "../../assets/images/frontend.png";
import backendImg from "../../assets/images/backend.png";
import uiImg from "../../assets/images/ui-ux.png";
import fullstackImg from "../../assets/images/full-stack.png";

const Services = () => {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-[#081e21] font-[800] text-[2.4rem] mb-5">
            My Services
          </h2>
          <p className=" lg:max-w-[800px] lg:mx-auto text-[#081e21] font-[500] text-[16px] leading-7">
            Work with Scrum teams using agile methodologies to bring
            transparency and flexibility to product development. HTML & CSS
            responsive web design, React JS development, Node JS development
            also expertise in MongoDB, Express JS with payment system stripe.
            I'm also a good UI/UX designer I think.
          </p>
        </div>
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className=" relative text-gray-700 antialiased text-sm font-semibold">
              <div className=" hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>
              <div className=" mt-6 sm:mt-0 sm:mb-12">
                <div className=" flex items-center flex-col sm:flex-row">
                  <div className=" flex justify-start w-full mx-auto items-center">
                    <div className=" w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className=" bg-white p-4 rounded shadow group hover:bg-[#8873ef] cursor-pointer ease-in duration-150"
                      >
                        <h3 className=" text-[#8873ef] font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Frontend Development
                        </h3>
                        <p className=" text-[15px] text-[#193256] group-hover:text-white group-hover:font-[500] leading-7">
                          In Frontend development languages such as HTML,
                          CSS/SCSS, Bootstrap and JavaScript that support the
                          appearance and performance of websites, applications
                          and products.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className=" rounded-full bg-[#8873ef] border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={frontendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              <div className=" mt-6 sm:mt-0 sm:mb-12">
                <div className=" flex items-center flex-col sm:flex-row">
                  <div className=" flex justify-end w-full mx-auto items-center">
                    <div className=" w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className=" bg-white p-4 rounded shadow group hover:bg-[#8873ef] cursor-pointer ease-in duration-150"
                      >
                        <h3 className=" text-[#8873ef] font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Backend Development
                        </h3>
                        <p className=" text-[15px] text-[#193256] group-hover:text-white group-hover:font-[500] leading-7">
                          In Backend development languages such as MongoDB, Node
                          js, Express js that support the appearance and
                          performance of websites, applications and products.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className=" rounded-full bg-[#8873ef] border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              <div className=" mt-6 sm:mt-0 sm:mb-12">
                <div className=" flex items-center flex-col sm:flex-row">
                  <div className=" flex justify-start w-full mx-auto items-center">
                    <div className=" w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-delay="100"
                        data-aos-duration="1400"
                        className=" bg-white p-4 rounded shadow group hover:bg-[#8873ef] cursor-pointer ease-in duration-150"
                      >
                        <h3 className=" text-[#8873ef] font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          UI/UX Design
                        </h3>
                        <p className=" text-[15px] text-[#193256] group-hover:text-white group-hover:font-[500] leading-7">
                          I can design an amazing UI for your future app that
                          definitely will help to differentiate your business
                          solution from others and increase the target audience.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className=" rounded-full bg-[#8873ef] border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={uiImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              <div className=" mt-6 sm:mt-0 sm:mb-12">
                <div className=" flex items-center flex-col sm:flex-row">
                  <div className=" flex justify-end w-full mx-auto items-center">
                    <div className=" w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="100"
                        data-aos-duration="1500"
                        className=" bg-white p-4 rounded shadow group hover:bg-[#8873ef] cursor-pointer ease-in duration-150"
                      >
                        <h3 className=" text-[#8873ef] font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Full Stack Development
                        </h3>
                        <p className=" text-[15px] text-[#193256] group-hover:text-white group-hover:font-[500] leading-7">
                          I committed to delivering the highest quality product
                          to my clients. My skilled full stack developer follow
                          strict protocols that are structured to provide apps
                          of the highest quality.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className=" rounded-full bg-[#8873ef] border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={fullstackImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
