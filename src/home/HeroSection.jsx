import React from "react";
import { motion } from "framer-motion";
import {
  
  Mail,
  Download,
  ArrowRight,
  Code2,
  Sparkles,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { 
  FaGithub, 
  FaLinkedin
} from "react-icons/fa";


const techStack = [
  "React",
  "Node.js",
  "MongoDB",
  "Tailwind",
  "Express",
];


const HeroSection = () => {
  return (
    <section
      className="
      relative min-h-screen 
      flex items-center 
      overflow-hidden
      bg-white 
      dark:bg-slate-950
      pt-24
      "
    >

      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">

        <div
          className="
          absolute top-20 left-10
          w-72 h-72
          bg-cyan-500/30
          blur-[120px]
          rounded-full
          "
        />

        <div
          className="
          absolute bottom-10 right-10
          w-96 h-96
          bg-purple-600/30
          blur-[120px]
          rounded-full
          "
        />

      </div>


      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        lg:px-8
        grid
        lg:grid-cols-2
        gap-12
        items-center
        "
      >


        {/* LEFT CONTENT */}

        <motion.div
          initial={{
            opacity:0,
            x:-80
          }}

          animate={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:0.8
          }}
        >


          {/* Badge */}

          <motion.div
            whileHover={{
              scale:1.05
            }}

            className="
            inline-flex
            items-center
            gap-2
            px-5
            py-2
            rounded-full
            bg-cyan-500/10
            border
            border-cyan-500/30
            text-cyan-600
            dark:text-cyan-400
            mb-6
            "
          >

            <Sparkles size={18}/>

            Available For Freelance Work

          </motion.div>



          <h1
            className="
            text-5xl
            md:text-6xl
            lg:text-7xl
            font-black
            leading-tight
            text-gray-900
            dark:text-white
            "
          >

            Hi, I'm

            <span
              className="
              block
              bg-linear-to-r
              from-cyan-500
              via-blue-600
              to-purple-600
              bg-clip-text
              text-transparent
              "
            >
              Paras Sahu
            </span>

          </h1>



          <div
            className="
            mt-5
            text-2xl
            md:text-3xl
            font-bold
            text-gray-700
            dark:text-gray-300
            "
          >

            <TypeAnimation

              sequence={[
                "Full Stack Developer",
                2000,

                "React Developer",
                2000,

                "MERN Stack Developer",
                2000,

                "UI/UX Enthusiast",
                2000
              ]}

              speed={50}

              repeat={Infinity}

            />

          </div>



          <p
            className="
            mt-6
            max-w-xl
            text-lg
            text-gray-600
            dark:text-gray-400
            leading-relaxed
            "
          >

            I am a passionate Computer Science with strong skills in Java, Data Structures & Algorithms, and full-stack web development using React, Node.js, Express, and MongoDB. Experienced in building scalable and responsive web applications with REST APIs, authentication, CRUD operations, and database management. Seeking a software developer role.

          </p>




          {/* Buttons */}

          <div
            className="
            flex
            flex-wrap
            gap-5
            mt-8
            "
          >

            <motion.a

              whileHover={{
                scale:1.05
              }}

              whileTap={{
                scale:0.95
              }}

              href="/projects"

              className="
              flex
              items-center
              gap-2
              px-7
              py-4
              rounded-full
              bg-linear-to-r
              from-cyan-500
              to-blue-600
              text-white
              font-bold
              shadow-xl
              "
            >

              View Projects

              <ArrowRight size={20}/>

            </motion.a>



            <motion.a

              whileHover={{
                scale:1.05
              }}

              href="/resume.pdf"

              download

              className="
              flex
              items-center
              gap-2
              px-7
              py-4
              rounded-full
              border

              border-gray-300
              dark:border-slate-700
              font-bold
              text-gray-800
              dark:text-white
              "
            >

              <Download size={20}/>

              Resume

            </motion.a>


          </div>




          {/* Social */}

          <div
            className="
            flex
            gap-4
            mt-10
            dark:text-white
            "
          >


            <SocialIcon
              icon={<FaGithub size={25}/>} 
              link="https://github.com/parassofttech"
            />


            <SocialIcon
              icon={<FaLinkedin size={25}/>}
              link="https://in.linkedin.com/in/paras-sahu-02849029a"
            />


            <SocialIcon
              icon={<Mail/>}
              link="mailto:paras2115s@gmail.com"
            />


          </div>



        </motion.div>





        {/* RIGHT IMAGE */}

        <motion.div

          initial={{
            opacity:0,
            scale:0.7
          }}

          animate={{
            opacity:1,
            scale:1
          }}

          transition={{
            duration:1
          }}

          className="
          relative
          flex
          justify-center
          "

        >



          {/* Circle */}

          <motion.div

            animate={{
              rotate:360
            }}

            transition={{
              duration:20,
              repeat:Infinity,
              ease:"linear"
            }}

            className="
            absolute
            w-87.5
            h-87.5
            rounded-full
            border
            border-dashed
            border-cyan-500/50
            "

          />



          {/* Image */}

          <motion.div

            animate={{
              y:[0,-20,0]
            }}

            transition={{
              duration:4,
              repeat:Infinity
            }}

            className="
            relative
            w-72
            h-72
            md:w-96
            md:h-96
            rounded-full
            overflow-hidden
            border-8
            border-white
            dark:border-slate-800
            shadow-2xl
            "

          >

            <img

              src="/paras.webp"

              alt="Paras Full Stack Developer"

              className="
              w-full
              h-full
              object-cover
              "

            /> 
           


          </motion.div>





          {/* Floating Tech */}

          {
            techStack.map((tech,index)=>(

              <motion.div

              key={tech}

              animate={{
                y:[0,-15,0]
              }}

              transition={{
                duration:3,
                delay:index*0.3,
                repeat:Infinity
              }}

              className={`
              absolute
              px-4
              py-2
              rounded-full
              bg-white/80
              dark:text-white
              dark:bg-slate-900/80
              backdrop-blur
              shadow-lg
              text-sm
              font-bold

              ${
                index===0
                ?"top-10 left-0"
                :
                index===1
                ?"top-20 right-0"
                :
                index===2
                ?"bottom-20 left-0"
                :
                index===3
                ?"bottom-10 right-10"
                :
                "top-1/2 right-0"
              }

              `}
              >

                {tech}

              </motion.div>


            ))
          }




        </motion.div>


      </div>


    </section>
  );
};





const SocialIcon = ({
  icon,
  link
})=>{

return (

<motion.a

whileHover={{
 y:-5,
 scale:1.1
}}

href={link}

target="_blank"

rel="noreferrer"

className="
w-12
h-12
rounded-full
flex
items-center
justify-center
border
border-gray-300
dark:border-slate-700
hover:bg-cyan-500
hover:text-white
transition
"

>

{icon}

</motion.a>

)

}



export default HeroSection;