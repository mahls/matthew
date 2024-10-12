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
  info: string;
  dark: boolean;
  color: string;
  link: string;
}

// NAVIGATION BAR
//bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
const Nav = ({ dark, setDark }: NavProps) => {
  const toggleDarkMode = () => {
    setDark(prev => !prev);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-red-500 via-red-500 to-pink-500 h-0.5"></div>
      <motion.div 
        className={`px-4 sm:px-6 py-4 m-2 flex justify-between isolate ${dark ? 'border-gray-700 text-stone-200' : 'text-stone-700'}`}
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        <div className={`text-2xl tracking-wider font-serif ${dark ? 'text-stone-300' : 'text-stone-600' } `}>Matthew Holmes</div>
        
        <div className="flex">
          <motion.div 
            className="mx-4 cursor-effect" 
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
          <Link href="https://github.com/mahls" passHref>
            <VscGithub className={`sm:text-2xl cursor-pointer mt-2 ${dark ? 'text-stone-400' : 'text-gray-800'}`} />
          </Link>
          </motion.div>


          <motion.div 
            className="" 
            whileHover={{ scale: 1.2 }} 
            transition={{ type: "spring", stiffness: 300 }}
            onClick={toggleDarkMode}
          >
            {dark ? (
              <RxSun className="sm:text-2xl cursor-pointer text-stone-500 mt-2" />
            ) : (
              <RxMoon className="sm:text-2xl cursor-pointer text-gray-800 mt-2" />
            )}
          </motion.div>


          <motion.div 
  className="mx-4 cursor-effect" 
  whileHover={{ scale: 1.2 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  <img className="h-8 sm:h-10 rounded-full" src="https://cdn.pixabay.com/photo/2023/04/21/10/25/ai-generated-7941605_1280.jpg" alt="Cute Monster" />
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
      className={`flex flex-col sm:justify-center sm:items-center pt-10 sm:pt-20 text-4xl ${dark ? 'text-stone-300' : 'text-stone-800'}`}
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <div className="sm:flex">
        <div className="font-serif drop-shadow-lg text-8xl sm:text-5xl text-stone-500 text-wrap px-4">Full Stack</div>
        <div className="hidden sm:flex font-serif text-8xl sm:text-5xl text-stone-500 drop-shadow-lg"> · </div>
        <div className="font-serif drop-shadow-lg text-8xl sm:text-5xl text-stone-500 text-wrap px-4">Design</div>
        <div className="hidden sm:flex font-serif text-8xl sm:text-5xl text-stone-500 drop-shadow-lg"> · </div>
        <div className="font-serif drop-shadow-lg text-8xl sm:text-5xl text-stone-500 text-wrap px-4">DevOps</div>

      </div>

      <div className={`mt-10 text-sm px-4 sm:px-12 lg:px-2/3 md:px-56 lg:mx-2/3 align-center font-mono text-stone-500`}>
      Welcome to my portfolio. I’m a Fullstack Developer and DevOps Engineer dedicated to building robust web applications and optimizing workflows. Proficient in React, Node.js, and Python, I ensure seamless user experiences and efficient deployments using CI/CD and cloud technologies. Explore my projects to see my innovative solutions, and feel free to reach out for collaboration.
      </div>
      
      


    </motion.div>

    <div className={`flex mt-5 px-5 sm:px-12 md:px-56 justify-between ${dark ? 'text-blue-300' : 'text-blue-700'}`}> 
        <div>
        <p className="font-mono  bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.stone.600),theme(colors.stone.800),theme(colors.stone.400),theme(colors.stone.600),theme(colors.stone.500),theme(colors.stone.700),theme(colors.stone.400))] bg-[length:200%_auto] animate-gradient">matthols24@gmail.com</p>


        </div>
        <div>
          <p className="font-mono  bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.stone.600),theme(colors.stone.800),theme(colors.stone.400),theme(colors.stone.600),theme(colors.stone.500),theme(colors.stone.700),theme(colors.stone.400))] bg-[length:200%_auto] animate-gradient">0412262967</p>
        </div>
    </div>





    </>
  );
};


const projects = [
  { title: 'Hiragana [ Live ]', info: 'Learn Japanese Hiragana through flash cards', color: 'text-stone-800', link: 'https://hiragana-game.vercel.app' },
  { title: 'Echo [ Live ]', info: 'Twitter clone', color: 'text-stone-700', link: 'https://echo-k4nn.vercel.app' },
  { title: 'Galaxy Defence', info: 'Space Invaders type game', color: 'text-stone-600', link: 'https://github.com/mahls/galaxy-defence/' },
  { title: 'Farming ', info: 'Select and grow crops AFK type game', color: 'text-stone-500', link: 'https://github.com/mahls/farming/' },
  { title: 'LED Controller', info: 'Control WS2812 LEDs with MicroPython', color: 'text-stone-400', link: 'https://github.com/mahls/ws2812/' },
  { title: 'Snake ', info: 'Classic Snake game', color: 'text-stone-300', link: 'https://github.com/mahls/snake/' },
  { title: 'Bezier', info: 'Visualise a Bezier Curve programatically', color: 'text-stone-200', link: 'https://github.com/mahls/bezier-curve/' },

];

const Card = ({ title, color, link, info }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }} // Initial state for fade-in
      animate={{ opacity: 1, scale: 1 }} // Final state for fade-in
      transition={{ duration: 0.2 }} // Duration of the fade-in effect
      whileHover={{ scale: 1.1 }} // Scale effect on hover
    >
      <Link href={link} passHref>
        <h3 className={`${color} px-5 text-6xl md:text-8xl mt-4 font-bold cursor-pointer hover:text-red-500 transition`}>
          {title}
        </h3>
        <div className="px-5 font-mono text-stone-500 mt-4">
          {info}
        </div>
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
          <Card info={project.info} key={project.title} title={project.title} dark={dark} color={project.color} link={project.link} />
        ))}
      </motion.div>
    </div>
  );
}


const Footer = () => {


  return (
    <>
      <div className="font-mono text-stone-800 flex justify-center items-center mb-5 mt-10">SINCE 2019</div>
      <motion.div
        className="flex flex-wrap text-4xl sm:text-6xl text-stone-800 justify-center mt-10 pb-10"
      >
        <GrDocker className="m-0.5" />
        <TbBrandAnsible className="m-0.5" />
        <FaAws className="m-0.5" />
        <FaPython  className="m-0.5"/>
        <FaReact className="m-0.5" />
        <SiTypescript className="m-0.5"/>
        <FaLaravel className="m-0.5"/>
        <SiVuetify className="m-0.5"/>
      </motion.div>
    </>
  );
};

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

      <Nav dark={dark} setDark={setDark} />
      <Hero dark={dark} />
      <Projects dark={dark} />
      <Footer />
    </motion.div>
  );
}
