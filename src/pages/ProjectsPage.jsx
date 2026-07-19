import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

import {
  Search,
  Filter,
  
  ExternalLink,
  Code2,
  Layers,
  Rocket,
  Star,
} from "lucide-react";
import { 
  FaGithub 
} from "react-icons/fa";

const projects = [

  {
    id:1,
    title:"ApniJourney",
    category:"Full Stack",
    description:
    "A complete travel platform where users can explore destinations, create trips and manage travel experiences.",

    image:"/projects/apnijourney.webp",

    technologies:[
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB"
    ],

    github:"https://github.com/parassofttech/ApniJourney",
    live:"https://apnijourney.com",

    featured:true
  },


  {
    id:2,
    title:"Expense Tracker",
    category:"Full Stack",

    description:
    "A modern expense management application to track income, expenses, budgets and financial goals.",

    image:"/projects/expense.webp",

    technologies:[
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB"
    ],

    github:"https://github.com/parassofttech/Expenzo",
    live:"https://expenzo-tracker.vercel.app",

    featured:true
  },


  {
    id:3,
    title:"MusicFlow",

    category:"Frontend",

    description:
    "A modern music streaming UI application with playlists, player controls and responsive design.",

    image:"/projects/musicflow.webp",

    technologies:[
      "React",
      "Tailwind CSS",
      "Framer Motion"
    ],

    github:"https://github.com/parassofttech/MusicFlow",
    live:"https://music-flow-app.vercel.app",

    featured:false
  },


  {
    id:4,
    title:"Weather Application",

    category:"Frontend",

    description:
    "Weather application showing current weather, forecasts and climate information using API integration.",

    image:"/projects/weather.webp",

    technologies:[
      "React",
      "API",
      "Tailwind CSS"
    ],

    github:"https://github.com/parassofttech/SkyCast",
    live:"https://skycast-snowy.vercel.app",

    featured:false
  },


  {
    id:5,

    title:"Game Portal",

    category:"Full Stack",

    description:
    "A collection of interactive browser games with smooth animations and mobile-friendly gameplay.",

    image:"/projects/game.webp",

    technologies:[
      "React",
      "JavaScript",
      "CSS"
    ],

    github:"https://github.com/parassofttech/PlayOut",
    live:"https://playout-games.vercel.app",

    featured:false
  },
  {
  id: 6,

  title: "Calculator",

  category: "Frontend",

  description:
    "A responsive and user-friendly calculator web application that performs basic arithmetic operations with a clean interface, smooth user experience, and mobile-friendly design.",

  image: "/projects/calculator.webp",

  technologies: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Responsive Design"
  ],

  github: "https://github.com/parassofttech/Calculator",

  live: "https://parassofttech.github.io/Calculator/",

  featured: false,
},

{
  id: 7,

  title: "Amazon Clone",

  category: "Frontend",

  description:
    "A responsive Amazon homepage clone built with modern HTML, CSS, and JavaScript. It recreates Amazon's layout, navigation, product sections, banners, and responsive user interface for learning frontend development.",

  image: "/projects/amazon-clone.webp",

  technologies: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Responsive Design",
    "Flexbox",
    "CSS Grid"
  ],

  github: "https://github.com/parassofttech/Amazon",

  live: "https://parassofttech.github.io/Amazon/",

  featured: false,
},


];


const categories=[

"All",
"Full Stack",
"Frontend",
"Backend"

];



const ProjectsPage = () => {


const [search,setSearch]=useState("");

const [activeCategory,setActiveCategory]=useState("All");



const filteredProjects = useMemo(()=>{


return projects.filter((project)=>{


const categoryMatch =

activeCategory==="All" ||

project.category===activeCategory;



const searchMatch =

project.title
.toLowerCase()
.includes(search.toLowerCase())

||

project.technologies.some((tech)=>

tech.toLowerCase()
.includes(search.toLowerCase())

);



return categoryMatch && searchMatch;


});


},[search,activeCategory]);





return (


<section

className="
min-h-screen
bg-white
dark:bg-slate-950
overflow-hidden
"

>



{/* Hero Section */}



<div

className="
relative
overflow-hidden
"

>



<div

className="
absolute
inset-0
bg-linear-to-br
from-cyan-500/10
via-transparent
to-purple-600/10
"

/>



<div

className="
absolute
-top-40
-left-40
w-96
h-96
rounded-full
bg-cyan-500/20
blur-[140px]
"

/>



<div

className="
absolute
-bottom-40
-right-40
w-96
h-96
rounded-full
bg-purple-600/20
blur-[140px]
"

/>




<div

className="
relative
max-w-7xl
mx-auto
px-5
lg:px-8
pt-32
pb-20
"

>




<motion.div

initial={{
opacity:0,
y:50
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.8
}}

className="
text-center
"

>



<div

className="
inline-flex
items-center
gap-2
px-5
py-2
rounded-full
bg-cyan-500/10
text-cyan-500
font-bold
"

>

<Code2 size={18}/>

My Projects

</div>




<h1

className="
mt-8
text-5xl
md:text-7xl
font-black
text-gray-900
dark:text-white
"

>

Creative

<br />

<span

className="
bg-linear-to-r
from-cyan-500
via-blue-500
to-purple-600
bg-clip-text
text-transparent
"

>

Projects

</span>


</h1>




<p

className="
mt-8
max-w-3xl
mx-auto
text-lg
leading-8
text-gray-600
dark:text-gray-400
"

>

A collection of my full-stack applications,
frontend experiments and real-world projects
built using modern technologies.

</p>



</motion.div>





{/* Stats */}



<div

className="
grid
grid-cols-2
lg:grid-cols-4
gap-6
mt-16
"

>


<div className="
bg-white
dark:text-white
dark:bg-slate-900
rounded-3xl
p-6
shadow-xl
text-center
">

<Rocket className="mx-auto text-cyan-500"/>

<h2 className="
text-4xl
font-black
mt-4
">

10+

</h2>


<p className="text-gray-500 mt-2">

Projects

</p>

</div>





<div className="
bg-white
dark:text-white
dark:bg-slate-900
rounded-3xl
p-6
shadow-xl
text-center
">

<Layers className="mx-auto text-purple-500"/>

<h2 className="
text-4xl
font-black
mt-4
">

5+

</h2>


<p className="text-gray-500 mt-2">

Technologies

</p>

</div>





<div className="
bg-white
dark:text-white
dark:bg-slate-900
rounded-3xl
p-6
shadow-xl
text-center
">

<Star className="mx-auto text-yellow-500"/>

<h2 className="
text-4xl
font-black
mt-4
">

3+

</h2>


<p className="text-gray-500 mt-2">

Featured

</p>

</div>





<div className="
bg-white
dark:text-white
dark:bg-slate-900
rounded-3xl
p-6
shadow-xl
text-center
">

<Code2 className="mx-auto text-green-500"/>

<h2 className="
text-4xl
font-black
mt-4
">

MERN

</h2>


<p className="text-gray-500 mt-2">

Stack

</p>

</div>



</div>






{/* Search */}


<div className="
max-w-3xl
mx-auto
mt-16
relative
">


<Search

className="
absolute
left-5
top-1/2
-translate-y-1/2

text-gray-400
"

/>


<input

value={search}

onChange={(e)=>setSearch(e.target.value)}

placeholder="Search projects or technologies..."

className="
w-full
pl-14
py-5
rounded-2xl
bg-white
dark:text-white
dark:bg-slate-900
border
border-gray-200
dark:border-slate-800
outline-none
focus:ring-2
focus:ring-cyan-500
"

/>


</div>





{/* Filter */}


<div className="
flex
flex-wrap
justify-center
gap-4
mt-10
">


{
categories.map((cat)=>(


<button

key={cat}

onClick={()=>setActiveCategory(cat)}

className={`
px-6
py-3
rounded-full
font-bold
transition
${
activeCategory===cat

?

"bg-linear-to-r from-cyan-500 to-purple-600 text-white"

:

"bg-white dark:text-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700"

}
`}

>


<Filter size={16} className="inline mr-2"/>

{cat}


</button>


))
}


</div>





</div>


</div>





{/* Part 2 starts here */}

{/* Projects Grid */}

<div
className="
max-w-7xl
mx-auto
px-5
lg:px-8
pb-24
"
>


<div
className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
"
>


{
filteredProjects.length > 0 ? (


filteredProjects.map((project,index)=>(


<motion.div

key={project.id}

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
duration:.5,
delay:index*0.15
}}

whileHover={{
y:-12
}}

className="
group
rounded-3xl
overflow-hidden
bg-white
dark:bg-slate-900
border
border-gray-200
dark:border-slate-800
shadow-xl
"

>



{/* Image Section */}


<div

className="
relative
h-60
overflow-hidden
"

>


<img

src={project.image}

alt={project.title}

loading="lazy"

className="
w-full
h-full
object-cover
group-hover:scale-110
transition
duration-500
"

/>



{/* Overlay */}

<div

className="
absolute
inset-0
bg-linear-to-t
from-black/70
via-black/20
to-transparent
opacity-0
group-hover:opacity-100
transition
"

>



<div

className="
absolute
bottom-5
left-5
right-5
flex
gap-3
"

>


<a

href={project.live}

target="_blank"

rel="noreferrer"

className="
flex-1
py-3
rounded-xl
bg-cyan-500
text-white
font-bold
text-center
flex
items-center
justify-center
gap-2
"

>

<ExternalLink size={18}/>

Live

</a>



<a

href={project.github}

target="_blank"

rel="noreferrer"

className="
flex-1
py-3
rounded-xl
bg-white
text-black
font-bold
text-center
flex
items-center
justify-center
gap-2
"

>

<FaGithub size={18}/>

Code

</a>


</div>



</div>





{/* Featured */}

{
project.featured && (

<div

className="
absolute
top-5
left-5
px-4
py-2
rounded-full
bg-linear-to-r
from-yellow-400
to-orange-500
text-white
text-sm
font-bold
flex
items-center
gap-2
"

>

<Star size={14}/>

Featured

</div>

)

}



</div>







{/* Content */}


<div

className="
p-6
"

>



<div

className="
flex
items-center
justify-between
"

>



<h2

className="
text-2xl
font-black
text-gray-900
dark:text-white
"

>

{project.title}

</h2>



<span

className="
text-xs
px-3
py-1
rounded-full
bg-cyan-500/10
text-cyan-500
font-bold
"

>

{project.category}

</span>



</div>






<p

className="
mt-4
text-gray-600
dark:text-gray-400
leading-7
"

>

{project.description}

</p>







{/* Technologies */}


<div

className="
flex
flex-wrap
gap-2
mt-6
"

>


{
project.technologies.map((tech)=>(


<span

key={tech}

className="
px-3
py-1.5
rounded-full
text-sm
font-semibold
bg-gray-100
dark:bg-slate-800
text-gray-700
dark:text-gray-300
"

>

{tech}

</span>


))
}


</div>






{/* Buttons Mobile */}


<div

className="
flex
gap-3
mt-7
lg:hidden
"

>


<a

href={project.live}

className="
flex-1
py-3
rounded-xl
bg-linear-to-r
from-cyan-500
to-purple-600
text-white
font-bold
text-center
flex
justify-center
items-center
gap-2
"

>

<ExternalLink size={16}/>

Demo

</a>



<a

href={project.github}

className="
flex-1
py-3
rounded-xl
border
border-gray-300
dark:border-slate-700
font-bold
text-center
flex
justify-center
items-center
gap-2
dark:text-white
"

>

<FaGithub size={16}/>

GitHub

</a>



</div>




</div>




</motion.div>


))


)


:(


<div

className="
col-span-full
text-center
py-20
"

>


<h2

className="
text-3xl
font-black
text-gray-900
dark:text-white
"

>

No Project Found 🚀

</h2>


<p

className="
mt-3
text-gray-500
"

>

Try searching another project name.

</p>


</div>


)



}



</div>



</div>



{/* Part 3 Starts Here */}

<section
className="
max-w-7xl
mx-auto
px-5
lg:px-8
pb-24
"
>


<motion.div

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

className="
text-center
mb-14
"

>


<p

className="
text-cyan-500
uppercase
tracking-[4px]
font-bold
text-sm
"

>

Highlights

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

Some of my most impactful projects built with
modern technologies and real-world solutions.

</p>


</motion.div>





<div

className="
grid
md:grid-cols-2
gap-8
"

>


{
projects
.filter(project=>project.featured)
.map((project)=>(


<motion.div

key={project.id}

whileHover={{
scale:1.02
}}

className="
rounded-3xl
p-8
bg-linear-to-br
from-cyan-500/10
to-purple-600/10
border
border-gray-200
dark:border-slate-800
"

>


<div

className="
flex
items-center
gap-4
"

>


<div

className="
w-14
h-14
rounded-2xl
bg-linear-to-r
from-cyan-500
to-purple-600
text-white
flex
items-center
justify-center
"

>

<Rocket/>

</div>



<div>

<h3

className="
text-2xl
font-black
dark:text-white
"

>

{project.title}

</h3>


<p

className="
text-cyan-500
font-semibold
"

>

{project.category}

</p>


</div>


</div>





<p

className="
mt-6
text-gray-600
dark:text-gray-400
leading-7
"

>

{project.description}

</p>





<div

className="
flex
flex-wrap
gap-3
mt-6
"

>


{
project.technologies.map((tech)=>(


<span

key={tech}

className="
px-4
py-2
rounded-full
bg-white
dark:bg-slate-900
shadow
text-sm
font-bold
dark:text-gray-300
"

>

{tech}

</span>


))
}


</div>




</motion.div>


))

}


</div>



</section>







{/* Development Approach */}



<section

className="
max-w-7xl
mx-auto
px-5
lg:px-8
pb-24
"

>


<motion.div

initial={{
opacity:0
}}

whileInView={{
opacity:1
}}

viewport={{
once:true
}}

className="
grid
md:grid-cols-3
gap-8
"

>



{

[

{
icon:<Code2/>,
title:"Clean Code",
desc:"Writing scalable, maintainable and optimized code."
},

{
icon:<Layers/>,
title:"Modern Stack",
desc:"Using latest frontend and backend technologies."
},

{
icon:<Rocket/>,
title:"Real Solutions",
desc:"Building applications that solve real problems."
}

].map((item,index)=>(


<div

key={index}

className="
p-8
rounded-3xl
bg-white
dark:bg-slate-900
shadow-xl
border
border-gray-200
dark:border-slate-800
text-center
"

>


<div

className="
w-16
h-16
mx-auto
rounded-2xl
bg-linear-to-r
from-cyan-500
to-purple-600
text-white
flex
items-center
justify-center
"

>

{item.icon}

</div>




<h3

className="
mt-6
text-xl
font-black
dark:text-white
"

>

{item.title}

</h3>



<p

className="
mt-3
text-gray-500
leading-7
"

>

{item.desc}

</p>



</div>


))

}



</motion.div>


</section>








{/* CTA Section */}



<section

className="
max-w-7xl
mx-auto
px-5
lg:px-8
pb-28
"

>



<motion.div

initial={{
opacity:0,
scale:.9
}}

whileInView={{
opacity:1,
scale:1
}}

viewport={{
once:true
}}

className="
rounded-[40px]
bg-linear-to-r
from-cyan-500
via-blue-500
to-purple-600
text-white
text-center
px-8
py-20
shadow-2xl
"

>



<h2

className="
text-4xl
md:text-5xl
font-black
"

>

Have a Project Idea?

</h2>




<p

className="
max-w-2xl
mx-auto
mt-6
text-lg
leading-8
text-white/90
"

>

Let's collaborate and build a modern,
scalable and beautiful web application together.

</p>




<a

href="/contact"

className="
inline-flex
mt-10
px-10
py-4
rounded-full
bg-white
text-cyan-600
font-black
hover:scale-105
transition
"

>

Let's Work Together

</a>



</motion.div>



</section>

</section>

)

}



export default ProjectsPage;