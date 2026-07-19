import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  SearchCheck,
  ArrowRight,
  CheckCircle,
} from "lucide-react";


const services = [

  {
    title: "Web Development",

    description:
      "Modern, responsive and high-performance websites built with the latest frontend technologies.",

    icon: <Code2 size={35}/>,

    features:[
      "React.js Websites",
      "Responsive UI Design",
      "Landing Pages",
      "Performance Optimization"
    ],

    gradient:
      "from-cyan-500 to-blue-600"

  },


  {
    title: "Full Stack Development",

    description:
      "Complete frontend and backend solutions with scalable architecture and secure APIs.",

    icon: <Layers size={35}/>,

    features:[
      "MERN Stack Applications",
      "REST API Development",
      "Database Integration",
      "Authentication Systems"
    ],

    gradient:
      "from-purple-500 to-pink-600"

  },


  {
    title: "SEO Optimization",

    description:
      "Improve website visibility with technical SEO, speed optimization and search-friendly structure.",

    icon: <SearchCheck size={35}/>,

    features:[
      "On Page SEO",
      "Technical SEO",
      "Website Speed",
      "Google Search Optimization"
    ],

    gradient:
      "from-green-500 to-emerald-600"

  }

];



const ServicesSection = () => {


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
uppercase
tracking-[4px]
font-bold
text-sm
"
>
My Services
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

What I Can

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
Build For You
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

Helping businesses and individuals create
fast, beautiful and scalable digital solutions.

</p>


</motion.div>





{/* Cards */}


<div
className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
"
>


{
services.map((service,index)=>(


<motion.div

key={service.title}

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
relative
p-8
rounded-4xl
bg-gray-50
dark:bg-slate-900
border
border-gray-200
dark:border-slate-800
shadow-xl
overflow-hidden
"

>


{/* Glow */}

<div
className={`
absolute
top-0
right-0
w-40
h-40
rounded-full
blur-[80px]
opacity-40
bg-linear-to-r
${service.gradient}
`}
>



</div>




{/* Icon */}


<div
className={`
relative
w-16
h-16
rounded-2xl
flex
items-center
justify-center
text-white
bg-linear-to-r
${service.gradient}
shadow-lg
group-hover:scale-110
transition-transform
`}
>

{service.icon}

</div>





<h3
className="
mt-7
text-2xl
font-black
text-gray-900
dark:text-white
"
>

{service.title}

</h3>



<p
className="
mt-4
text-gray-600
dark:text-gray-400
leading-relaxed
"
>

{service.description}

</p>





{/* Features */}

<div
className="
mt-6
space-y-3
"
>

{
service.features.map((feature)=>(


<div
key={feature}
className="
flex
items-center
gap-3
text-sm
text-gray-700
dark:text-gray-300
"
>

<CheckCircle
size={18}
className="
text-cyan-500
"
/>

{feature}


</div>


))
}


</div>





{/* Button */}


<button
className="
mt-8
flex
items-center
gap-2
font-bold
text-cyan-600
dark:text-cyan-400
group-hover:gap-4
transition-all
"
>

Start Project

<ArrowRight size={18}/>

</button>




</motion.div>


))
}


</div>





{/* Bottom CTA */}

<motion.div

initial={{
opacity:0,
scale:0.9
}}

whileInView={{
opacity:1,
scale:1
}}

viewport={{
once:true
}}

className="
mt-16
rounded-3xl
p-8
md:p-12
text-center
bg-linear-to-r
from-cyan-500
via-blue-600
to-purple-600
text-white
shadow-2xl
"

>


<h3
className="
text-3xl
md:text-4xl
font-black
"
>

Have a project idea?

</h3>


<p
className="
mt-3
text-white/80
"
>

Let's work together and create something amazing.

</p>


<a

href="/contact"

className="
inline-flex
items-center
gap-2
mt-6
px-8
py-4
rounded-full
bg-white
text-blue-600
font-bold
shadow-lg
hover:scale-105
transition
"

>

Contact Me

<ArrowRight size={20}/>

</a>


</motion.div>



</div>


</section>

)

}


export default ServicesSection;