import React from "react";
import heroimg from "../../assets/images/Hero.jpg";
import CountUp from "react-countup";
import Resume from "../../assets/pdf/Rubaiyat-Resume.pdf";

const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className=" md:flex items-center justify-between sm:flex-col md:flex-row">
          <div className=" w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className=" text-[#081e21] font-[600] text-[16px]"
            >
              Welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" text-[#081e21] font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Md. Rubaiyat Kabir <br />
              Full Stack Developer
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className=" flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button className="flex items-center gap-2 bg-[#8873ef] font-[500] text-white border border-solid border-[#8873ef] py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-[#193256] hover:text-white hover:font-[500] ease-in duration-300">
                  <i class="ri-mail-line"></i>Hire me
                </button>
              </a>
              <a download="Rubaiyat-Resume" href={Resume}>
                <button className="flex items-center gap-2 bg-[#8873ef] font-[500] text-white border border-solid border-[#8873ef] py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-[#193256] hover:text-white hover:font-[500] ease-in duration-300">
                  <i class="ri-file-download-fill"></i>Download Resume
                </button>
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className=" flex gap-2 mt-12 text-[#081e21] font-[500] text-[15px] leading-7 sm:pr-10"
            >
              I'm a Junior Full Stack Developer. I expertise in HTML5, CSS3,
              JavaScript and Bootstrap. I have Combined experience with
              responsive design and web development. I also have experience
              exploring firebase authentication, mongodb, express js, next js,
              node js and tailwind css with frameworks. I have ability and it's
              my passion for creating exceptional web applications. I believe
              that I am perfect for your company.
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-[#193256] text-[15px] font-[600]">
                Follow me:
              </span>
              <span>
                <a
                  href="https://www.facebook.com/mdrubaiyatkabir.rafi"
                  className="text-[#193256] text-[18px] font-[600]"
                >
                  <i class="ri-facebook-circle-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/Rubaiyatrafi"
                  className="text-[#193256] text-[18px] font-[600]"
                >
                  <i class="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/rubaiyat-kabir/"
                  className="text-[#193256] text-[18px] font-[600]"
                >
                  <i class="ri-linkedin-box-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://mail.google.com/mail/u/0/#inbox"
                  className="text-[#193256] text-[18px] font-[600]"
                >
                  <i class="ri-mail-fill"></i>
                </a>
              </span>
            </div>
          </div>
          {/* image */}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center ">
              <img className="rounded-full" src={heroimg} alt="" />
            </figure>
          </div>
          {/* right bar */}
          <div className=" basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-[#081e21] font-[700] text-[32px]">
                <CountUp start={0} end={2} duration={3} suffix="+"></CountUp>
              </h2>
              <h4 className="text-[#081e21] font-[600] text-[16px]">
                Years of experience
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-[#081e21] font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={3} suffix="%"></CountUp>
              </h2>
              <h4 className="text-[#081e21] font-[600] text-[16px]">
                Success rate
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-[#081e21] font-[700] text-[32px]">
                <CountUp start={0} end={150} duration={3} suffix="+"></CountUp>
              </h2>
              <h4 className="text-[#081e21] font-[600] text-[16px]">
                Satisfied clients
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-[#081e21] font-[700] text-[32px]">
                <CountUp start={0} end={120} duration={3} suffix="+"></CountUp>
              </h2>
              <h4 className="text-[#081e21] font-[600] text-[16px]">
                Projects completed
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
