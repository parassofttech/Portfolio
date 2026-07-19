import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJava,
  FaPython,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaJs,
} from "react-icons/fa";

import {
  SiC,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiRedux,
  SiVite,
} from "react-icons/si";

import {
  Database,
  Binary,
  Boxes,
  BrainCircuit,
  Server,
  ShieldCheck,
  Link2,
} from "lucide-react";



const skillCategories = [

  {
    title: "Programming Languages",
    skills: [
      {
        name: "Java",
        icon: <FaJava />,
        level: 80,
        color: "text-red-600",
      },
      {
        name: "JavaScript",
        icon: <FaJs />,
        level: 78,
        color: "text-yellow-400",
      },
      {
        name: "Python",
        icon: <FaPython />,
        level: 70,
        color: "text-blue-500",
      },
      {
        name: "C Language",
        icon: <SiC />,
        level: 80,
        color: "text-blue-600",
      },
    ],
  },

  {
    title: "Core Computer Science",
    skills: [
      {
        name: "Data Structures & Algorithms",
        icon: <Binary />,
        level: 70,
        color: "text-purple-500",
      },
      {
        name: "Object-Oriented Programming",
        icon: <Boxes />,
        level: 65,
        color: "text-pink-500",
      },
      {
        name: "Problem Solving",
        icon: <BrainCircuit />,
        level: 75,
        color: "text-cyan-500",
      },
    ],
  },

  {
    title: "Frontend Development",
    skills: [
      {
        name: "HTML5",
        icon: <FaHtml5 />,
        level: 91,
        color: "text-orange-500",
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt />,
        level: 90,
        color: "text-blue-500",
      },
      {
        name: "JavaScript",
        icon: <FaJs />,
        level: 83,
        color: "text-yellow-400",
      },
      {
        name: "React.js",
        icon: <FaReact />,
        level: 86,
        color: "text-cyan-500",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        level: 85,
        color: "text-cyan-400",
      },
    ],
  },

  {
    title: "Backend Development",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs />,
        level: 85,
        color: "text-green-500",
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
        level: 88,
        color: "text-gray-700 dark:text-white",
      },
      {
        name: "REST APIs",
        icon: <Server />,
        level: 85,
        color: "text-indigo-500",
      },
      {
        name: "Authentication",
        icon: <ShieldCheck />,
        level: 80,
        color: "text-green-500",
      },
      {
        name: "CRUD Operations",
        icon: <Database />,
        level: 90,
        color: "text-purple-500",
      },
      {
        name: "API Integration",
        icon: <Link2 />,
        level: 90,
        color: "text-sky-500",
      },
    ],
  },

  {
    title: "Database Management",
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        level: 80,
        color: "text-green-600",
      },
      {
        name: "MySQL",
        icon: <Database />,
        level: 75,
        color: "text-blue-500",
      },
    ],
  },

  {
    title: "Tools & Technologies",
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt />,
        level: 90,
        color: "text-orange-600",
      },
      {
        name: "GitHub",
        icon: <FaGithub />,
        level: 90,
        color: "text-black dark:text-white",
      },
      {
        name: "Firebase",
        icon: <SiFirebase />,
        level: 80,
        color: "text-yellow-500",
      },
      {
        name: "Vite",
        icon: <SiVite />,
        level: 85,
        color: "text-purple-600",
      },
    ],
  },

];




const SkillsSection = () => {


return (

<section
className="
py-24
bg-gray-50
dark:bg-slate-950
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

className="
text-center
mb-16
"

>


<p
className="
text-cyan-500
font-bold
tracking-[4px]
uppercase
text-sm
"
>
My Skills
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

Technol
<br />
<span
className="
bg-linear-to-r
from-cyan-500
to-purple-600
bg-clip-text
text-transparent
"
>
 Master
</span>

</h2>


<p
className="
mt-5
text-gray-600
dark:text-gray-400
max-w-2xl
mx-auto
"
>

I continuously improve my skills and use modern
technologies to build powerful applications.

</p>


</motion.div>





<div
className="
grid
grid-cols-2
gap-4
sm:gap-6
lg:grid-cols-3
"
>


{
skillCategories.map((category,index)=>(


<motion.div

key={category.title}

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
delay:index*0.15
}}

className="
p-4
sm:p-6
w-full
rounded-3xl
bg-white/80
dark:bg-slate-900/80
backdrop-blur-xl
border
border-gray-200
dark:border-slate-800
shadow-xl
"

>



<h3

className="
text-sm
sm:text-xl
font-black
text-gray-900
dark:text-white
mb-5
sm:mb-8
"

>

{category.title}

</h3>






<div

className="
space-y-5
sm:space-y-7
"

>


{
category.skills.map((skill)=>(



<div

key={skill.name}

>



<div

className="
flex
items-center
justify-between
mb-2
"

>



<div

className="
flex
items-center
gap-2
sm:gap-3
min-w-0
"

>



<span

className={`
text-xl
sm:text-3xl
shrink-0
${skill.color}
`}

>

{skill.icon}

</span>





<span

className="
font-bold
text-xs
sm:text-base
text-gray-800
dark:text-gray-200
truncate
"

>

{skill.name}

</span>




</div>







<span

className="
text-xs
sm:text-sm
font-bold
text-cyan-500
"

>

{skill.level}%

</span>





</div>







{/* Progress Bar */}



<div

className="
h-2
sm:h-3
rounded-full
bg-gray-200
dark:bg-slate-800
overflow-hidden
"

>


<motion.div


initial={{
width:0
}}


whileInView={{
width:`${skill.level}%`
}}


viewport={{
once:true
}}


transition={{
duration:1,
ease:"easeOut"
}}


className="
h-full
rounded-full
bg-linear-to-r
from-cyan-500
via-blue-500
to-purple-600
"

/>


</div>





</div>



))
}



</div>





</motion.div>


))
}



</div>



</div>


</section>

)

}


export default SkillsSection;