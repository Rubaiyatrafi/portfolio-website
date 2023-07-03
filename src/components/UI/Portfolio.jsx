import React, { useEffect, useState } from "react";
import Modal from "./Modal";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: "https://i.ibb.co/hVSD3Yt/Picture13.jpg",
      category: "Backend Development",
      title: "Admin Dashboard",
      description:
        "Admin Dashboard is a web development project that focuses on building a responsive and interactive website. The backend development part using MongoDB, Express js, Node js and stripe payment method to ensure seamless communication between the frontend and backend components.",
      technologies: ["React", "Firebase", "Node.js", "Express", "MongoDB"],
      live_site_link: "https://melody-music-school.web.app/",
    },
    {
      id: 2,
      image: "https://i.ibb.co/Dtvr2Rv/Picture11.jpg",
      category: "Frontend Development",
      title: "Best Chef",
      description:
        "Best Chef is a development project that focuses on creating a cross-platform application. The frontend development part involves using frameworks like React to build the user interface and design the app's screens.",
      technologies: ["React", "Firebase"],
      live_site_link: "https://best-chef-today.web.app/",
    },
    {
      id: 3,
      image: "https://i.ibb.co/jMbhLS7/Picture4.jpg",
      category: "Frontend Development",
      title: "AI Universe",
      description:
        "AI Universe is a Frontend development project that focuses on creating a cross-platform application. The frontend development part involves using frameworks like React to build the user interface and design the app's screens.",
      technologies: ["React", "Javascript", "HTML", "CSS"],
      live_site_link: "https://fluffy-stardust-f12aa0.netlify.app/",
    },
    {
      id: 4,
      image: "https://i.ibb.co/BTbN5jW/Picture12.jpg",
      category: "Backend Development",
      title: "Toy Market",
      description:
        "Toy Market is a e-commerce based project that focuses on building intelligent systems capable of learning from data. Backend developers typically use Python and frameworks like Scikit-learn or TensorFlow to build and deploy machine learning models in production environments.",
      technologies: ["React", "Firebase", "Node.js", "Express", "MongoDB"],
      live_site_link: "https://toys-market-239e0.web.app/",
    },
    {
      id: 5,
      image: "https://i.ibb.co/3MHGV66/Picture5.jpg",
      category: "Frontend Development",
      title: "Buildup Career",
      description:
        "Buildup Career is a UI/UX design project that focuses on creating visually appealing and user-friendly interfaces for websites or applications. Buildup Career is a development project that focuses on creating a cross-platform application. The frontend development part involves using frameworks like React to build the user interface and design the app's screens.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      live_site_link: "https://unrivaled-pie-e5c703.netlify.app/",
    },
    {
      id: 6,
      image: "https://i.ibb.co/HDdHHYt/Picture1.jpg",
      category: "Backend Development",
      title: "Melody Music School",
      description:
        "Melody Music School is a backend development project that focuses on building the server-side components and functionalities of a web application. Backend developers typically use Python and frameworks like Scikit-learn or TensorFlow to build and deploy machine learning models in production environments.",
      technologies: ["React", "Firebase", "Node.js", "Express", "MongoDB"],
      live_site_link: "https://melody-music-school.web.app/",
    },
    {
      id: 7,
      image: "https://i.ibb.co/wrCLFdC/Picture9.jpg",
      category: "Backend Development",
      title: "Ema John",
      description:
        "Ema John is a backend development project that focuses on building the server-side components and functionalities of a web application. Specially it's a e-commerce website Backend developers typically use Python and frameworks like Scikit-learn or TensorFlow to build and deploy machine learning models in production environments.",
      technologies: ["React", "Firebase", "Node.js", "Express", "MongoDB"],
      live_site_link: "https://ema-john-website-dfd14.web.app/",
    },
    {
      id: 8,
      image: "https://i.ibb.co/k9hfdLy/Picture6.jpg",
      category: "Frontend Development",
      title: "Legal Solution",
      description:
        "Legal Solution is a UI/UX design project that focuses on creating visually appealing and user-friendly interfaces for websites or applications. Buildup Career is a development project that focuses on creating a cross-platform application. The frontend development part involves using frameworks like React to build the user interface and design the app's screens.",
      technologies: ["HTML", "CSS", "JavaScript"],
      live_site_link: "https://dashing-souffle-da0d81.netlify.app/",
    },
    {
      id: 9,
      image: "https://i.ibb.co/rHGKXn9/Picture3.jpg",
      category: "Frontend Development",
      title: "Monthly Calculation",
      description:
        "Monthly Calculation is a data science project that focuses on extracting insights and knowledge from complex datasets. Frontend development in data science projects usually involves creating interactive visualizations. It's showing and implement for a man's monthly expanditure.",
      technologies: ["HTML", "CSS", "JavaScript"],
      live_site_link: "https://angry-poincare-f5faf6.netlify.app/",
    },
  ];

  const [nextItems, setNextItems] = useState(3);
  const [portfolios, setPortfolios] = useState(data);
  const [selectTab, setSelectTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };
  const seeMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };

  useEffect(() => {
    if (selectTab === "all") {
      setPortfolios(data);
    }
    if (selectTab === "Frontend") {
      const filteredData = data.filter(
        (item) => item.category === "Frontend Development"
      );
      setPortfolios(filteredData);
    }
    if (selectTab === "Backend") {
      const filteredData = data.filter(
        (item) => item.category === "Backend Development"
      );
      setPortfolios(filteredData);
    }
  }, [selectTab]);
  return (
    <section id="portfolio">
      <div className="container">
        <div className=" flex items-center justify-between flex-wrap">
          <div className=" mb-7 sm:mb-0">
            <h3 className=" text-[#081e21] text-[2rem] font-[700]">
              My Projects
            </h3>
          </div>

          <div className=" flex gap-3">
            <button
              onClick={() => setSelectTab("all")}
              className=" text-[#193256] border border-solid border-[#193256] py-2 px-4 rounded-[8px]"
            >
              All
            </button>
            <button
              onClick={() => setSelectTab("Frontend")}
              className=" text-[#193256] border border-solid border-[#193256] py-2 px-4 rounded-[8px]"
            >
              Frontend
            </button>
            <button
              onClick={() => setSelectTab("Backend")}
              className=" text-[#193256] border border-solid border-[#193256] py-2 px-4 rounded-[8px]"
            >
              Backend
            </button>
          </div>
        </div>

        <div className=" flex items-center gap-4 flex-wrap mt-12">
          {portfolios?.slice(0, nextItems).map((portfolio, index) => (
            <div
              key={index}
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
            >
              <figure>
                <img src={portfolio.image} alt="" />
              </figure>
              <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                <div className=" w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => showModalHandler(portfolio.id)}
                    className=" text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className=" text-center mt-6">
          {nextItems < portfolios.length && data.length > 3 && (
            <button
              onClick={seeMoreHandler}
              className=" text-white bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
            >
              See More
            </button>
          )}
        </div>
      </div>
      {showModal && (
        <Modal setShowModal={setShowModal} activeID={activeID}></Modal>
      )}
    </section>
  );
};

export default Portfolio;
