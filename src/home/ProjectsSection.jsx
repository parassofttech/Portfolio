import React from "react";
import { motion } from "framer-motion";
import {
//   Github,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";


const projects = [

  {
    title: "ApniJourney",

    category: "Travel Platform",

    image: "/projects/apnijourney.webp",

    description:
      "A modern travel platform where users can explore destinations, manage trips and discover travel experiences.",

    tech:[
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind"
    ],

    live:"https://apnijourney.com",

    github:
      "https://github.com/parassofttech/ApniJourney"

  },


  {
    title: "MusicFlow",

    category:"Music Streaming App",

    image:
      "/projects/musicflow.webp",

    description:
      "A modern music application with beautiful UI, playlists and smooth user experience.",

    tech:[
      "React",
      "API",
      "Tailwind",
      "JavaScript"
    ],

    live:
      "https://music-flow-app.vercel.app",

    github:
      "https://github.com/parassofttech/MusicFlow"

  },


  {
    title:"Expense Tracker",

    category:"Finance Application",

    image:
      "/projects/expense.webp",

    description:
      "An advanced expense management application to track income, expenses, budgets and financial goals.",

    tech:[
      "React",
      "Node.js",
      "Express",
      "MongoDB"
    ],

    live:"https://expenzo-tracker.vercel.app",

    github:
      "https://github.com/parassofttech/Expenzo"

  },


  {
    title:"Game Portal",

    category:"Gaming Website",

    image:
      "/projects/game.webp",

    description:
      "A collection of interactive browser games with responsive design and smooth animations.",

    tech:[
      "React",
      "JavaScript",
      "CSS",
      "Framer Motion"
    ],

    live:"https://playout-games.vercel.app",

    github:
      "https://github.com/parassofttech/PlayOut"

  }

];




const ProjectsSection = () => {


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
uppercase
tracking-[4px]
text-sm
"
>
My Work
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

Featured
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
 Projects
</span>

</h2>


<p
className="
mt-5
max-w-2xl
mx-auto
text-gray-600
dark:text-gray-400
"
>

Some of my best projects built with modern
technologies and clean architecture.

</p>


</motion.div>







{/* Projects Grid */}


<div
className="
grid
md:grid-cols-2
gap-10
"
>


{
projects.map((project,index)=>(


<motion.div

key={project.title}

initial={{
opacity:0,
y:60
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:0.6,
delay:index*0.15
}}

whileHover={{
y:-12
}}

className="
group
rounded-[35px]
overflow-hidden
bg-white
dark:bg-slate-900
border
border-gray-200
dark:border-slate-800
shadow-xl
"

>


{/* Image */}


<div
className="
relative
overflow-hidden
h-64
"
>


<img

src={project.image}

alt={project.title}

loading="lazy"

className="
w-full h-full object-cover group-hover:scale-110 transition-transform duration-500
"

/>


<div
className="
absolute
inset-0
bg-linear-to-t
from-black/15
to-transparent
"
/>



<div
className="
absolute
bottom-5
left-5
"
>

<span
className="
px-4
py-2
rounded-full
bg-cyan-500
text-white
text-sm
font-bold
"
>

{project.category}

</span>

</div>


</div>





{/* Content */}


<div
className="
p-8
"
>


<h3
className="
text-3xl
font-black
text-gray-900
dark:text-white
"
>

{project.title}

</h3>



<p
className="
mt-4
text-gray-600
dark:text-gray-400
leading-relaxed
"
>

{project.description}

</p>





{/* Tech */}


<div
className="
flex
flex-wrap
gap-3
mt-6
"
>

{
project.tech.map((item)=>(


<span

key={item}

className="
px-4
py-2
rounded-full
bg-gray-100
dark:bg-slate-800
text-sm
font-semibold
text-gray-700
dark:text-gray-300
"

>

{item}

</span>


))
}


</div>





{/* Buttons */}


<div
className="
flex
gap-4
mt-8
"
>


<a

href={project.live}

target="_blank"

rel="noreferrer"

className="
flex
items-center
gap-2
px-5
py-3
rounded-full
bg-linear-to-r
from-cyan-500
to-blue-600
text-white
font-bold
"

>

Live Demo

<ExternalLink size={18}/>

</a>




<a

href={project.github}

target="_blank"

rel="noreferrer"

className="
flex
items-center
gap-2
px-5
py-3
rounded-full
border
border-gray-300
dark:border-slate-700
font-bold
text-gray-800
dark:text-white
"

>


<FaGithub size={18}/>



Code

</a>


</div>



</div>



</motion.div>


))
}



</div>





{/* View More */}


<div
className="
text-center
mt-14
"
>


<div className="mt-12 flex justify-center">
    <Link

to="/projects"

className="
flex
items-center
justify-center
gap-2

px-8
py-4
rounded-full
bg-linear-to-r
from-purple-600
to-pink-600
text-white
font-bold
shadow-xl
"

>

View All Certificates

<ArrowRight size={20}/>

</Link>
</div>


</div>



</div>


</section>

)

}


export default ProjectsSection;