import webDev from '../images/web-Development.png'
import webOpt from '../images/web-Optimization.png'
import frontDebug from '../images/frontend-debug.png'
import Ui from '../images/UI-UX.png'
import animation from '../images/animation.png'
import spa from '../images/spa.png'
import development from '../images/development.png'
import testing from '../images/testing.png'
import deployment from '../images/deployment.png'
import maintainance from '../images/maintainance.png'
import req from '../images/requirement.png'
import design from '../images/design.png'

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#home",
  },
  {
    id: "1",
    title: "About",
    url: "#abt",
  },
  {
    id: "2",
    title: "Services",
    url: "#services",
  },
   {
    id: "3",
    title: "My Approach",
    url: "#approaches",
  },
  {
    id: "4",
    title: "Contact",
    url: "#contact",
  },
  
  {
     id: "5",
    title: "Vist Github",
    url: "https://github.com/Bragosi",
    onlyMobile:true
  }
];

export const Serv =[
  {
    id:"0",
    title:"Web Development",
    text:"Build visually appealing and user-friendly websites optimized for all devices.",
    imageUrl: webDev
  },
  {
    id:"1",
    title:"Website Optimization",
    text:"Improve website speed, performance, and accessibility to meet modern web standards.",
    imageUrl: webOpt
  },
  {
    id:"2",
    title:" Frontend Debugging",
    text:"Debug and resolve issues in existing frontend projects.",
    imageUrl: frontDebug
  },
   {
    id:"3",
    title:"UI/UX Implementation",
    text:"Translate Figma or Adobe XD designs into pixel-perfect, interactive web pages.",
    imageUrl: Ui
  },{
    id:"4",
    title:" Animation and Interactivity",
    text:" Create smooth animations and transitions using Framer Motion to enhance user experience. ",
    imageUrl: animation
  },
 {
    id:"5",
    title:" Single Page Applications (SPAs) ",
    text:"Develop dynamic and fast SPAs using React and Next.js. ",
    imageUrl: spa
  },
]

export const approaches =[
  {
    id:1,
    title:"Requirement Gathering & Planning",
    text:"Every project starts with a deep dive into the client's goals and needs. I research, brainstorm, and create a clear roadmap to guide the development process.",
    imageURL:req
   },
    {
    id:2,
    title:"Design & Prototyping",
    text:"I craft intuitive and visually appealing designs, focusing on user experience. Using tools like Figma, I ensure the designs align perfectly with the client's vision.",
    imageURL:design
   },
   {
    id:3,
    title:"Development",
    text:"With clean and efficient code, I bring the designs to life. Leveraging modern frameworks and best practices, I ensure optimal performance and scalability.",
    imageURL: development
   },
    {
    id:4,
    title:"Testing & Quality Assurance",
    text:"No project is complete without rigorous testing. I ensure that everything is bug-free, responsive, and functional across devices and browsers.",
    imageURL: testing
   },
    {
    id:5,
    title:"Deployment & Handover",
    text:"After thorough testing, I deploy the project seamlessly to a live environment. I provide documentation and guidance to ensure a smooth handover.",
    imageURL:deployment
   },
    {
    id:6,
    title:"Maintenance & Iteration",
    text:"Even after deployment, I remain committed to the project's success. I provide support, updates, and optimizations based on feedback and new requirements.",
    imageURL:maintainance
   },
]