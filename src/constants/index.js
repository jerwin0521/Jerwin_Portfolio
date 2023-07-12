/* eslint-disable no-unused-vars */
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    accenture,
    infor,
    ibm,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    aqt,
    cict,
    coffee,
    threejs,
    yalong,
    ashley,
    brent,
    axcel,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "React Native Development",
      icon: mobile,
    },
    {
      title: "Backend Development",
      icon: backend,
    },
    {
      title: "Frontend Development",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    /*{
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    */
  ];
  
  const experiences = [
    {
      title: "Accenture On-The-Job-Training (2023)",
      company_name: "Accenture",
      icon: accenture,
      iconBg: "#383E56",
      date: "January 2023 - April 2023",
      points: [
        "Pluralsight Modules which includes Building websites with HTML, CSS, and JS. Angular CLI for Beginners, Intermediate, and Advanced. (2023)",
        "FrontEnd (Angular)",
        "Backend (php, Mongo db, and Node.JS)",
        'Developing a project named "CICT Exension Office Management System" with Angular as frontend and php as bakcend',
      ],
    },
    {
      title: "Title",
      company_name: "Company Name",
      icon: infor,
      iconBg: "#E6DEDD",
      date: "Date",
      points: [
        "I wanted to mention that since my first experience at Accenture On-The-Job-Training, I haven't had any subsequent job experience. However, during my time at Accenture, I gained valuable skills in project management, problem-solving, and effective communication, which I believe will contribute to my success in this role.",
      ],
    },
    {
      title: "Title",
      company_name: "Company Name",
      icon: ibm,
      iconBg: "#fff", //"#383E56
      date: "Date",
      points: [
        "Details",
      ],
    },
    {
      title: "Title",
      company_name: "Company Name",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Date",
      points: [
        "Details",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Not only is he hardworking, but he is also incredibly flexible and open-minded. He has this amazing ability to adapt to any situation and make the most out of it. Whether it's a sudden change in the curriculum or a group project, he takes everything in stride and approaches it with a positive attitude. It's no wonder that he is able to tackle challenges head-on and overcome them with ease.",
      name: "Mark Joseph Yalong",
      designation: "College Graduate",
      company: "Bulacan State University",
      image: yalong,
    },
    {
      testimonial:
        "Jerwin as a classmate is really an enthusiastic person. He does his projects, worksheets, and activities as soon as he can, and submits them on time. As his high school friend, I really admire his dedication to learn and his attitude towards working in large groups of people.",
      name: "Ashley De belen ",
      designation: "College Graduate",
      company: "La Consolacion Manila",
      image: ashley,
    },
    {
      testimonial:
        "Great leader. Very consistent and optimistic person, he is also reliable and teachable.",
      name: "Brent Santos",
      designation: "College Graduate",
      company: "Bulacan State University",
      image: brent,
    },
    {
      testimonial:
        "As my classmate well you are a well behaved student in class, at first interaction with you in class I thought you were a classy and a great presenter but after a few months I'm right, you have a great fellowship towards the other students that's why I kept in touch with you, I sensed your aura. As a team leader I might never get a chance to be a member with you but as what I observed you are very responsible in every tasks we had in our subjects we sometimes have an exchange of thoughts and knowledge and you made me know you better, in tough situations I saw you being a great leader managing stuffs to get a better result.",
      name: "Axcel Alcantara",
      designation: "College Graduate",
      company: "Bulacan State University",
      image: axcel,
    },
  ];
  
  const projects = [
    {
      name: "AQT Transaction Management Webapp",
      description:
        "The system includes useful features such as an Inventory management system separately for their Lazada and Shopee E-commerce stores, services, product expiration tracker, Product Tracker, Analytics Sales Report including total sales amount, total product amount, total income of each stores and their very own E-commerce store connected live to our very own Inventory Management System.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "orange-text-gradient",
        },
        {
          name: "php",
          color: "pink-text-gradient",
        },
      ],
      image: aqt,
      source_code_link: "https://github.com/",
    },
    {
      name: "CICT Extension Office Management System",
      description:
        " Enables the management of extension programs, including creating and scheduling programs, tracking program progress, and generating reports on program outcomes.",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "angular material",
          color: "green-text-gradient",
        },
        {
          name: "php",
          color: "pink-text-gradient",
        },
      ],
      image: cict,
      source_code_link: "https://github.com/",
    },
    {
      name: "Anteiku Coffee Website",
      description:
        "A basic web development project that was created with just html, css, and javascript. Inspired from the anime Tokyo Ghoul.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "orange-text-gradient",
        },
      ],
      image: coffee,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };