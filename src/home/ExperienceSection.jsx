import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Code2,
  Calendar,
} from "lucide-react";


const experiences = [

  {
    year:"2026 - Present",

    title:"Full Stack Developer",

    company:"Freelance / Personal Projects",

    description:
      "Building scalable web applications using React, Node.js, Express and MongoDB. Creating modern UI experiences with clean architecture.",

    icon:<Code2 />

  },


  {
    year:"2025",

    title:"MERN Stack Developer",

    company:"Self Learning & Projects",

    description:
      "Developed multiple full stack applications including travel platforms, finance apps and interactive web projects.",

    icon:<Briefcase />

  },


  {
    year:"2024",

    title:"Frontend Developer",

    company:"Learning & Development",

    description:
      "Started web development journey by learning HTML, CSS, JavaScript and React with focus on responsive UI design.",

    icon:<GraduationCap />

  }

];





const ExperienceSection = () => {


return (

<section
className="
py-24
bg-white
dark:bg-slate-950
"
>


<div
className="
max-w-6xl
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
uppercase
tracking-[4px]
text-sm
"
>
Experience
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

My Developer

<span
className="
bg-linear-to-r
from-cyan-500
to-purple-600
bg-clip-text
text-transparent
"
>
 Journey
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

A timeline of my learning, development
and professional growth.

</p>


</motion.div>







{/* Timeline */}



<div
className="
relative
"
>


{/* Line */}

<div
className="
absolute
left-5
md:left-1/2
top-0
bottom-0
w-0.5
bg-linear-to-b
from-cyan-500
via-blue-500
to-purple-600
md:-translate-x-1/2
"
/>





{
experiences.map((item,index)=>(


<motion.div

key={index}

initial={{
opacity:0,
x:index%2===0?-80:80
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
duration:0.7
}}

className="
relative
mb-12
md:flex
md:justify-between
"

>


{/* Dot */}

<div
className="
absolute
left-0
md:left-1/2
w-11
h-11
rounded-full
bg-linear-to-r
from-cyan-500
to-purple-600
text-white
flex
items-center
justify-center
shadow-xl
md:-translate-x-1/2
z-10
"
>

{item.icon}

</div>





{/* Spacer */}

<div
className="
hidden
md:block
md:w-[45%]
"
/>






{/* Card */}


<div
className="
ml-16
md:ml-0
md:w-[45%]
p-8
rounded-3xl
bg-gray-50
dark:bg-slate-900
border
border-gray-200
dark:border-slate-800
shadow-xl
hover:-translate-y-2
transition-all
"
>


<div
className="
flex
items-center
gap-2
text-cyan-500
font-bold
"
>

<Calendar size={18}/>

{item.year}

</div>




<h3
className="
mt-4
text-2xl
font-black
text-gray-900
dark:text-white
"
>

{item.title}

</h3>




<h4
className="
mt-2
font-semibold
text-purple-600
"
>

{item.company}

</h4>




<p
className="
mt-4
text-gray-600
dark:text-gray-400
leading-relaxed
"
>

{item.description}

</p>


</div>



</motion.div>


))
}



</div>



</div>


</section>

)

}


export default ExperienceSection;