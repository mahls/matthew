"use client"; // This ensures the component is rendered on the client side

import { RxMoon, RxSun } from "react-icons/rx";
import { VscGithub } from "react-icons/vsc";
import { motion } from "framer-motion";
import { useState } from "react";
import { GrDocker } from "react-icons/gr";
import { TbBrandAnsible } from "react-icons/tb";
import { FaAws, FaPython, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import Link from 'next/link';
import { FaLaravel } from "react-icons/fa";
import AnimatedCursor from "react-animated-cursor"
import { SiVuetify } from "react-icons/si";

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
  dark: boolean;
  color: string;
  link: string;
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
          <Link href="https://github.com/mahls" passHref>
            <VscGithub className={`cursor-pointer mt-2 ${dark ? 'text-white' : 'text-gray-800'}`} />
          </Link>
          </motion.div>
          
          


          <motion.div 
            className="" 
            whileHover={{ scale: 1.2 }} 
            transition={{ type: "spring", stiffness: 300 }}
            onClick={toggleDarkMode}
          >
            {dark ? (
              <RxSun className="cursor-pointer text-pink-300 mt-2" />
            ) : (
              <RxMoon className="cursor-pointer text-gray-800 mt-2" />
            )}
          </motion.div>


          <motion.div 
  className="mx-4 cursor-effect" 
  whileHover={{ scale: 1.2 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  <img className="h-8 rounded-full" src="https://cdn.pixabay.com/photo/2023/04/21/10/25/ai-generated-7941605_1280.jpg" alt="Cute Monster" />
</motion.div>

        </div>
      </motion.div>
    </>
  );
}

// HERO SECTION
const Hero = ({ dark }: HeroProps) => {
  return (
    <>
    <motion.div 
      className={`flex flex-col justify-center items-center pt-10 sm:pt-20 text-4xl ${dark ? 'text-stone-300' : 'text-stone-800'}`}
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <div className="sm:flex">
        <div className="font-serif drop-shadow-lg text-wrap px-4">Full Stack | Design</div>
        <div className="hidden sm:flex font-serif drop-shadow-lg"> | </div>
        <div className="font-serif drop-shadow-lg text-wrap px-4">DevOps</div>
      </div>

      <div className="mt-5 text-sm px-4 sm:px-12 md:px-56 align-center font-mono">
        Welcome to my portfolio! I’m a Fullstack Developer and DevOps Engineer passionate about building robust web applications and streamlining development workflows. With expertise in technologies like React, Node.js, and Python, I create seamless user experiences while ensuring solid back-end architecture. I embrace DevOps practices, utilizing CI/CD, cloud platforms, Docker, and Kubernetes to deploy applications efficiently. Combining my technical skills with a keen eye for design, I prioritize aesthetics and usability to enhance user engagement. Explore my projects to see how I tackle complex challenges and deliver innovative solutions, and feel free to reach out for collaboration or discussions!
      </div>
      
      


    </motion.div>

    <div className={`flex mt-5 px-5 sm:px-12 md:px-56 justify-between ${dark ? 'text-blue-300' : 'text-blue-700'}`}> 
        <div>
        <p className="font-mono bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.violet.400),theme(colors.fuchsia.400),theme(colors.violet.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">matthols24@gmail.com</p>


        </div>
        <div>
          <p className="font-mono  bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.violet.400),theme(colors.fuchsia.400),theme(colors.violet.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">0412262967</p>
        </div>
    </div>





    </>
  );
};


const projects = [
  { title: 'Hiragana 🌸', info: 'Learn Japanese Hiragana', color: 'text-violet-700', link: 'https://hiragana-game.vercel.app' },
  { title: 'Space Invaders', info: 'Play Space Invaders', color: 'text-violet-400', link: 'https://github.com/mahls/galaxy-defence/' },
  { title: 'Farming 🌿', info: 'Grow crops', color: 'text-violet-500', link: 'https://github.com/mahls/farming/' },
  { title: 'LED Controller', info: 'Control WS2812 LEDs', color: 'text-violet-700', link: 'https://github.com/mahls/ws2812/' },
  { title: 'Snake 🍏', info: 'Control WS2812 LEDs', color: 'text-violet-400', link: 'https://github.com/mahls/snake/' },
  { title: 'Bezier', info: 'Control WS2812 LEDs', color: 'text-violet-700', link: 'https://github.com/mahls/bezier-curve/' },

];

const Card = ({ title, color, link }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }} // Initial state for fade-in
      animate={{ opacity: 1, scale: 1 }} // Final state for fade-in
      transition={{ duration: 0.2 }} // Duration of the fade-in effect
      whileHover={{ scale: 1.1 }} // Scale effect on hover
    >
      <Link href={link} passHref>
        <h3 className={`${color} px-5 text-6xl md:text-8xl font-bold cursor-pointer `}>
          {title}
        </h3>
      </Link>
    </motion.div>
  );
};

// Projects Component
const Projects = ({ dark }: { dark: boolean }) => {
  return (
    <div className="flex flex-wrap justify-center pt-10">
      <motion.div
            initial={{ opacity: 0, }} 
            animate={{ opacity: 1, }} 
            transition={{ duration: 0.75 }}>
        {projects.map(project => (
          <Card key={project.title} title={project.title} dark={dark} color={project.color} link={project.link} />
        ))}
      </motion.div>
    </div>
  );
}

// Footer Component
const Footer = () => {
  return (
  <>
    <div className="font-mono  text-stone-800  flex  justify-center align-center items-center mb-5 mt-5">SINCE 2019</div>
    <div className="flex flex-wrap text-4xl sm:text-6xl text-stone-800 justify-center mt-10 pb-10">
      <div className="m-2">
        <GrDocker />
      </div>
      <div className="m-2">
        <TbBrandAnsible />
      </div>
      <div className="m-2">
        <FaAws />
      </div>
      <div className="m-2">
        <FaPython />
      </div>
      <div className="m-2">
        <FaReact />
      </div>
      <div className="m-2">
        <SiTypescript />
      </div>
      <div className="m-2">
        <FaLaravel />
      </div>
      <div className="m-2">
        <SiVuetify/>
      </div>
    </div>
  </>
  );
}


// MAIN / APP
export default function Home() {
  const [dark, setDark] = useState(false);  // Initialize state to false for light mode

  return (
    <motion.div 
      className={`${dark ? 'bg-[#141414]' : 'bg-white'} transition-all duration-300 min-h-screen`}
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
       <AnimatedCursor
       innerSize={8}
       outerSize={8}
       color='111,111,111'
       outerAlpha={0.2}
       innerScale={0.7}
       outerScale={5} />

      <Nav dark={dark} setDark={setDark} />
      <Hero dark={dark} />
      <Projects dark={dark} />
      <Footer />
    </motion.div>
  );
}
