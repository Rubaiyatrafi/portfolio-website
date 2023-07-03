import React from "react";

const Modal = ({ activeID, setShowModal }) => {
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

  const portfolio = data.find((portfolio) => portfolio.id === activeID);
  return (
    <div className="w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40">
      <div className="w-11/12 md:max-w-[600px] md:w-full absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5">
        <div>
          <figure>
            <img className="rounded-[8px]" src={portfolio.image} alt="" />
          </figure>
        </div>
        <div>
          <h2 className=" text-2xl text-headingColor font-[700] my-5">
            {portfolio.title}
          </h2>
          <p className=" text-[15px] leading-7 text-smallTextColor">
            {portfolio.description}
          </p>
          <div className=" mt-5 flex items-center gap-3 flex-wrap">
            <h4 className=" text-headingColor text-[18px] text-[700]">
              Technologies:
            </h4>
            {portfolio.technologies.map((item, index) => (
              <span
                key={index}
                className=" bg-gray-200 py-1 px-2 rounded[5px] text-[14px] leading-0"
              >
                {item}
              </span>
            ))}
          </div>
          <a href={portfolio.live_site_link}>
            <button className=" bg-primaryColor text-white py-2 px-4 my-8 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300">
              Live Site
            </button>
          </a>
        </div>
        <button
          onClick={() => setShowModal(false)}
          className=" w-[1.8rem] h-[1.8rem] bg-red-500 flex justify-center items-center rounded-[5px] absolute top-[1.7rem] right-[1.7rem] text-[25px] leading-0 cursor-pointer"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
