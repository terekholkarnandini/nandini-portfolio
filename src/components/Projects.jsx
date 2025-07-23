import React, { useEffect, useRef } from "react";
import "./projects.css";

const projects = [
  {
    title: "Table Booking System",
    description:
      "Smart Restaurant is a full-stack restaurant web  application that streamlines table reservations,  menu browsing, and online payments. Built with PHP and MySQL, it features dynamic slot-based booking, real-time table status updates, and Razorpay-integrated payment handling. The admin dashboard enables efficient booking management, cancellations, and customer tracking.        #PHP #MySQL #Razorpay #JavaScript",
    image: "/images/booking.png",
  },
  {
    title: "Virtual Bank System",
    description:
      "Virtual Bank System is a Java-based desktop banking application that simulates real-world banking operations with features like account creation, fund transfer, transaction history, and secure authentication. It uses JSON/GSON for lightweight data storage and retrieval, ensuring a smooth and fast banking experience. The user-friendly GUI built with Swing makes it intuitive for users to perform banking tasks efficiently.#Java #Swing #JSON #GSON",
    image: "/images/bank.png",
  },
  {
    title: "Speed-o-type",
    description:
      "Speed-O-Type is a fun and interactive typing speed tester designed to help users improve their accuracy and typing speed. It gives real-time feedback, calculates words-per-minute, and highlights mistakes, making practice sessions both efficient and enjoyable.#react #firebase #css",
    image: "/images/type.png",
  },
  {
    title: "Spotify 2.0",
    description:
      "Spotify 2.0 is a modern music streaming web application that replicates the core features of Spotify. Built with React, Tailwind CSS, and Node.js, it allows users to browse songs, create playlists, and enjoy real-time audio playback using the Spotify Web API. The responsive UI and seamless animations offer an engaging, app-like experience across devices.#React #TailwindCSS #NodeJS #SpotifyAPI",
    image: "/images/music.png",
  },
  {
    title: "WeatherNow",
    description:
      "WeatherNow is a responsive weather web application that provides real-time weather updates based on user input. Built entirely with vanilla JavaScript and powered by WeatherAPI, it features dynamic data rendering, city-based weather search, and intuitive desktop UI design. The app fetches and displays temperature, humidity, wind speed, and condition icons with smooth API integration. Ideal for learning API consumption and DOM manipulation.#JavaScript #WeatherAPI #HTML #CSS #RESTAPI",
    image:"/images/weather.png",
    link: "https://terekholkarnandini.github.io/weather-app/" ,
    },
  {
    title:"QRGen",
    description:"QRGen is a lightweight web application that generates QR codes instantly from user-provided text or URLs. Developed using JavaScript, HTML, and CSS, it features real-time QR code rendering, download support, and a clean, responsive UI. The app utilizes a client-side QR code library for efficient encoding without server dependencies.#JavaScript #QRCode #HTML #CSS #ClientSideTool",
      image:"/images/qr.png",
       link: "https://terekholkarnandini.github.io/generate-qr/" ,
},
];

const Projects = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <section id="projects" className="projects-section">
        <h2 className="projects-title">Projects</h2>
        <div className="project-cards">
          {projects.map((project, index) => (
            <div
              className="project-card"
              ref={(el) => (cardsRef.current[index] = el)}
              key={index}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img
                src={project.image}
                alt={project.title}
                className="project-image"
            />
            </a>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
