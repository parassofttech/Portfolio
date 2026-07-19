import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDocker,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiVite,
  SiFirebase,
  SiPostman,
  SiRedux,
} from "react-icons/si";


const technologies = [

  {
    name: "React.js",
    icon: <FaReact />,
    color: "text-cyan-500",
  },

  {
    name: "JavaScript",
    icon: <FaJs />,
    color: "text-yellow-400",
  },

  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "text-green-500",
  },

  {
    name: "Express.js",
    icon: <SiExpress />,
    color: "text-gray-700 dark:text-white",
  },

  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-green-600",
  },

  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-cyan-400",
  },

  {
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "text-orange-500",
  },

  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "text-blue-500",
  },

  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "text-orange-600",
  },

  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "text-black dark:text-white",
  },

//   {
//     name: "Docker",
//     icon: <FaDocker />,
//     color: "text-blue-500",
//   },

  {
    name: "Firebase",
    icon: <SiFirebase />,
    color: "text-yellow-500",
  },

//   {
//     name: "Redux",
//     icon: <SiRedux />,
//     color: "text-purple-500",
//   },

  {
    name: "Vite",
    icon: <SiVite />,
    color: "text-purple-600",
  },

//   {
//     name: "Postman",
//     icon: <SiPostman />,
//     color: "text-orange-500",
//   },

];



const TechStack = () => {

  return (

    <section
      className="
      py-20
      bg-gray-50
      dark:bg-slate-950
      overflow-hidden
      "
    >

      <div className="
      max-w-7xl
      mx-auto
      px-6
      lg:px-8
      ">


        {/* Heading */}

        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:0.6
          }}

          className="
          text-center
          mb-12
          "

        >

          <p className="
          text-cyan-500
          font-bold
          uppercase
          tracking-[4px]
          text-sm
          ">
            Technologies
          </p>


          <h2 className="
          mt-3
          text-4xl
          md:text-5xl
          font-black
          text-gray-900
          dark:text-white
          ">

            My Tech Stack

          </h2>


          <p className="
          mt-4
          text-gray-600
          dark:text-gray-400
          max-w-xl
          mx-auto
          ">

            Tools and technologies I use to build
            modern, scalable and high performance
            applications.

          </p>


        </motion.div>





        {/* Moving Cards */}


        <div
          className="
          relative
          "
        >


          <motion.div

            animate={{
              x:["0%","-50%"]
            }}

            transition={{
              duration:25,
              repeat:Infinity,
              ease:"linear"
            }}

            className="
            flex
            gap-6
            w-max
            "

          >


            {[...technologies,...technologies].map(
              (tech,index)=>(

              <motion.div

                key={index}

                whileHover={{
                  y:-10,
                  scale:1.05
                }}

                className="
                group
                w-44
                h-44
                rounded-3xl
                bg-white/80
                dark:bg-slate-900/80
                backdrop-blur-xl
                border
                border-gray-200
                dark:border-slate-800
                shadow-xl
                flex
                flex-col
                items-center
                justify-center
                gap-4
                transition-all
                "

              >


                <div
                  className={`
                  text-5xl
                  ${tech.color}
                  group-hover:scale-125
                  transition-transform
                  duration-300
                  `}
                >

                  {tech.icon}

                </div>


                <h3 className="
                font-bold
                text-gray-800
                dark:text-gray-200
                text-sm
                ">

                  {tech.name}

                </h3>


              </motion.div>


            ))}



          </motion.div>


        </div>




        {/* Bottom Badge */}


        <div className="
        mt-14
        flex
        justify-center
        ">


          <div className="
          px-6
          py-3
          rounded-full
          bg-linear-to-r
          from-cyan-500
          to-purple-600
          text-white
          font-semibold
          shadow-lg
          "
          >

            🚀 Always Learning New Technologies

          </div>


        </div>


      </div>


    </section>

  );

};


export default TechStack;