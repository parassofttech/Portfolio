import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Rocket,
  Users,
  Award,
  CheckCircle,
} from "lucide-react";


const stats = [
  {
    number: "3+",
    title: "Years Learning",
    icon: <Code2 />,
  },

  {
    number: "10+",
    title: "Projects Built",
    icon: <Rocket />,
  },

  {
    number: "5+",
    title: "Technologies",
    icon: <Award />,
  },

  {
    number: "100%",
    title: "Passion",
    icon: <Users />,
  },
];



const skills = [
  "Full Stack Development",
  "Responsive Web Design",
  "REST API Development",
  "Database Management",
  "UI/UX Optimization",
  "SEO Friendly Websites",
];



const AboutSection = () => {


  return (

    <section
      className="
      py-24
      bg-white
      dark:bg-slate-950
      overflow-hidden
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        lg:px-8
        "
      >


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
          mb-16
          "
        >

          <p
            className="
            text-cyan-500
            font-bold
            uppercase
            tracking-[4px]
            text-sm
            "
          >
            About Me
          </p>


          <h2
            className="
            mt-4
            text-4xl
            md:text-5xl
            font-black
            text-gray-900
            dark:text-white
            "
          >

            Building Digital
            <span
              className="
              block
              bg-linear-to-r
              from-cyan-500
              to-purple-600
              bg-clip-text
              text-transparent
              "
            >
              Experiences
            </span>

          </h2>


        </motion.div>




        <div
          className="
          grid
          lg:grid-cols-2
          gap-14
          items-center
          "
        >



          {/* Image Card */}

          <motion.div

            initial={{
              opacity:0,
              x:-70
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            viewport={{
              once:true
            }}

            transition={{
              duration:0.8
            }}

            className="
            relative
            flex
            justify-center
            "
          >


            <div
              className="
              absolute
              w-72
              h-72
              bg-cyan-500/30
              blur-[100px]
              rounded-full
              "
            />



            <div
              className="
              relative
              w-full
              max-w-md
              rounded-[40px]
              p-3
              bg-linear-to-r
              from-cyan-500
              via-blue-600
              to-purple-600
              shadow-2xl
              "
            >

              <div
                className="
                rounded-[35px]
                overflow-hidden
                bg-white
                dark:bg-slate-900
                "
              >

                <img

                  src="/paras.webp"

                  alt="About Paras Full Stack Developer"

                  className="
                  w-full
                  h-112.5
                  object-cover
                  "
                />

              </div>
              


            </div>


          </motion.div>





          {/* Content */}


          <motion.div

            initial={{
              opacity:0,
              x:70
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            viewport={{
              once:true
            }}

            transition={{
              duration:0.8
            }}

          >


            <h3
              className="
              text-3xl
              font-black
              text-gray-900
              dark:text-white
              "
            >

              Full Stack Developer
              who loves creating modern web apps 🚀

            </h3>



            <p
              className="
              mt-6
              text-gray-600
              dark:text-gray-400
              text-lg
              leading-relaxed
              "
            >

              I am a passionate developer focused on
              building fast, scalable and beautiful
              web applications. I work with modern
              technologies like React, Node.js,
              MongoDB and Tailwind CSS to create
              amazing digital experiences.

            </p>





            {/* Skills */}

            <div
              className="
              mt-8
              grid
              sm:grid-cols-2
              gap-4
              "
            >

              {
                skills.map((skill,index)=>(

                  <motion.div

                    key={index}

                    whileHover={{
                      x:8
                    }}

                    className="
                    flex
                    items-center
                    gap-3
                    text-gray-700
                    dark:text-gray-300
                    "
                  >

                    <CheckCircle
                      size={20}
                      className="
                      text-cyan-500
                      "
                    />

                    {skill}

                  </motion.div>

                ))
              }

            </div>





          </motion.div>



        </div>





        {/* Stats */}


        <div
          className="
          mt-20
          grid
          grid-cols-2
          md:grid-cols-4
          gap-6
          "
        >

          {
            stats.map((item,index)=>(

              <motion.div

                key={index}

                initial={{
                  opacity:0,
                  y:40
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                viewport={{
                  once:true
                }}

                transition={{
                  delay:index*0.1
                }}

                whileHover={{
                  y:-10
                }}

                className="
                p-6
                rounded-3xl
                bg-gray-50
                dark:bg-slate-900
                border
                border-gray-200
                dark:border-slate-800
                text-center
                shadow-lg
                "
              >

                <div
                  className="
                  flex
                  justify-center
                  text-cyan-500
                  mb-4
                  "
                >

                  {item.icon}

                </div>


                <h4
                  className="
                  text-3xl
                  font-black
                  text-gray-900
                  dark:text-white
                  "
                >

                  {item.number}

                </h4>


                <p
                  className="
                  mt-2
                  text-gray-500
                  dark:text-gray-400
                  text-sm
                  "
                >

                  {item.title}

                </p>


              </motion.div>

            ))
          }

        </div>




      </div>


    </section>

  );
};


export default AboutSection;