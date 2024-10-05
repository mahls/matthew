"use client";  // This ensures the component is rendered on the client side

import { RxMoon, RxSun } from "react-icons/rx";
import { VscGithub } from "react-icons/vsc";
import { motion } from "framer-motion";
import { useState } from "react";
import { GrDocker } from "react-icons/gr";
import { TbBrandAnsible } from "react-icons/tb";
import { FaAws, FaPython, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

// Define prop types
interface NavProps {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

interface HeroProps {
  dark: boolean;
}

interface CardProps {
  title: string;
  info: string;
  dark: boolean;
  color: string;
}

// NAVIGATION BAR
const Nav = ({ dark, setDark }: NavProps) => {
  const toggleDarkMode = () => {
    setDark(prev => !prev);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-1"></div>
      <motion.div 
        className={`px-4 sm:px-6 py-4 m-2 flex justify-between isolate ${dark ? 'border-gray-700 bg-gradient-to-b from-stone-950 to-[#141414] text-stone-200' : 'text-stone-700'}`}
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        <div className="text-2xl tracking-wider font-serif">Matthew Holmes</div>
        
        <div className="flex">
          <motion.div 
            className="mx-4 cursor-effect" 
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <VscGithub className={`cursor-pointer ${dark ? 'text-white' : 'text-gray-800'}`} />
          </motion.div>
          <motion.div 
            className="cursor-effect" 
            whileHover={{ scale: 1.2 }} 
            transition={{ type: "spring", stiffness: 300 }}
            onClick={toggleDarkMode}
          >
            {dark ? (
              <RxSun className="cursor-pointer text-pink-400" />
            ) : (
              <RxMoon className="cursor-pointer text-gray-800" />
            )}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

// HERO SECTION
const Hero = ({ dark }: HeroProps) => {
  return (
    <motion.div 
      className={`flex flex-col justify-center items-center pt-10 sm:pt-20 text-4xl ${dark ? 'text-stone-200' : 'text-stone-700'}`}
      initial={{ opacity: 0, scale: 0.8 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <div className="sm:flex">
        <div className="font-serif drop-shadow-lg text-wrap px-4">Full Stack | Design</div>
        <div className="hidden sm:flex font-serif drop-shadow-lg"> | </div>
        <div className="font-serif drop-shadow-lg text-wrap px-4">DevOps | Statistics</div>
      </div>

      <div className="font-serif mt-5 text-sm px-4 sm:px-12 md:px-56 align-center">
        I’m Matthew Holmes, a passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies. With expertise in DevOps practices, I ensure smooth deployment and efficient application management. My design skills allow me to create intuitive and visually appealing user interfaces, while my background in statistics empowers me to leverage data-driven insights. Explore my work and discover how I can bring your ideas to life!
      </div>
    </motion.div>
  );
}

// Project data
const projects = [
  { title: 'Hiragana 🌸', info: 'Learn Japanese Hiragana', color: 'text-violet-700' },
  { title: 'Space Invaders', info: 'Play Space Invaders', color: 'text-violet-400' },
  { title: 'Farming 🌿', info: 'Grow crops', color: 'text-violet-500' },
  { title: 'LED Controller', info: 'Control WS2812 LEDs', color: 'text-violet-700' },
];

// Card Component
const Card = ({ title, info, dark, color }: CardProps) => {
  return (
    <div>
      <h3 className={`${color} px-5 text-6xl md:text-8xl font-bold`}>{title}</h3>

    </div>
  );
}

// Projects Component
const Projects = ({ dark }: { dark: boolean }) => {
  return (
    <div className="flex flex-wrap justify-center pt-10">
      <div>
        {projects.map(project => (
          <Card key={project.title} title={project.title} info={project.info} dark={dark} color={project.color} />
        ))}
      </div>
    </div>
  );
}

// Footer Component
const Footer = () => {
  return (
    <div className="flex text-6xl text-stone-800 justify-center mt-10">
      <GrDocker />
      <TbBrandAnsible />
      <FaAws />
      <FaPython />
      <FaReact />
      <SiTypescript className="pl-1" />
    </div>
  ); 
}

// MAIN / APP
export default function Home() {
  const [dark, setDark] = useState(false);  // Initialize state to false for light mode

  return (
    <motion.div 
      className={`${dark ? 'bg-[#141414]' : 'bg-white'} transition-all duration-300 h-screen`}
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <Nav dark={dark} setDark={setDark} />
      <Hero dark={dark} />
      <Projects dark={dark} />
      <Footer />
    </motion.div>
  );
}
