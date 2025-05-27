import webDev from '../images/web-Development.png'
import webOpt from '../images/web-Optimization.png'
import frontDebug from '../images/frontend-debug.png'
import Ui from '../images/UI-UX.png'
import animation from '../images/animation.png'
import spa from '../images/spa.png'
export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#home",
  },
  {
    id: "1",
    title: "About",
    url: "#about",
  },
  {
    id: "2",
    title: "Services",
    url: "#services",
  },
  {
    id: "3",
    title: "Contact",
    url: "#contact",
  },
  {
     id: "4",
    title: "View Github",
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