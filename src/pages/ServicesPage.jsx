import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  Code2,
  Server,
  Search,
  Database,
  ShieldCheck,
  Rocket,
  Layers,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";



const services = [

  {
    id:1,

    title:"Web Development",

    category:"Frontend",

    icon:<Code2 size={32}/>,

    description:
    "Modern, responsive and high-performance websites built with clean code and latest frontend technologies.",

    features:[
      "Responsive UI Design",
      "React.js Development",
      "Tailwind CSS",
      "SEO Friendly Structure",
      "Performance Optimization"
    ],


    technologies:[
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind"
    ]

  },



  {
    id:2,

    title:"Full Stack Development",

    category:"Backend",

    icon:<Server size={32}/>,

    description:
    "Complete full-stack web applications with frontend, backend, database and secure APIs.",


    features:[

      "MERN Stack Applications",
      "REST API Development",
      "Authentication System",
      "CRUD Operations",
      "Database Integration"

    ],


    technologies:[

      "React",
      "Node.js",
      "Express",
      "MongoDB"

    ]

  },



  {
    id:3,

    title:"SEO Optimization",

    category:"SEO",

    icon:<Search size={32}/>,

    description:
    "Improve website visibility with technical SEO, performance optimization and search engine best practices.",


    features:[

      "On Page SEO",
      "Technical SEO",
      "Meta Optimization",
      "Website Speed Optimization",
      "Search Console Setup"

    ],


    technologies:[

      "Google Search Console",
      "Lighthouse",
      "Analytics"

    ]

  },



  {
    id:4,

    title:"API Development",

    category:"Backend",

    icon:<Database size={32}/>,

    description:
    "Secure and scalable REST APIs for web and mobile applications.",


    features:[

      "REST API",
      "API Integration",
      "JWT Authentication",
      "Database Design"

    ],


    technologies:[

      "Node.js",
      "Express",
      "MongoDB"

    ]

  },



  {
    id:5,

    title:"Authentication Systems",

    category:"Security",

    icon:<ShieldCheck size={32}/>,

    description:
    "Secure login and user management systems for modern applications.",


    features:[

      "Email Verification",
      "OTP Authentication",
      "Google Login",
      "JWT Security"

    ],


    technologies:[

      "Firebase",
      "JWT",
      "Node.js"

    ]

  }

];




const categories=[

"All",
"Frontend",
"Backend",
"SEO",
"Security"

];





const ServicesPage = () => {



const [activeCategory,setActiveCategory]=useState("All");



const filteredServices =

activeCategory==="All"

?

services

:

services.filter(

(service)=>

service.category===activeCategory

);





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


<Sparkles size={18}/>

My Services


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


Professional


<br/>


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

Services

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


I help businesses and individuals build
modern websites, scalable applications,
and optimized digital solutions.


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



{

[

{
number:"3+",
text:"Core Services",
icon:<Layers/>
},

{
number:"10+",
text:"Projects Built",
icon:<Rocket/>
},

{
number:"100%",
text:"Responsive",
icon:<Code2/>
},

{
number:"24/7",
text:"Support",
icon:<CheckCircle/>
}


].map((item,index)=>(


<motion.div

key={index}

whileHover={{

y:-8

}}

className="
bg-white
dark:bg-slate-900
rounded-3xl
p-6
shadow-xl
text-center
border
border-gray-200
dark:border-slate-800
"

>



<div

className="
flex
justify-center
text-cyan-500
"

>

{item.icon}

</div>



<h2

className="
text-4xl
font-black
mt-4
dark:text-white
"

>

{item.number}

</h2>



<p

className="
text-gray-500
mt-2
"

>

{item.text}

</p>


</motion.div>


))

}



</div>






{/* Category Buttons Part 2 me continue */}
{/* Category Filter */}

<div

className="
flex
flex-wrap
justify-center
gap-4
mt-14
"

>

{

categories.map((category)=>(


<button

key={category}

onClick={()=>setActiveCategory(category)}

className={`
px-6
py-3
rounded-full
font-bold
transition-all
duration-300

${
activeCategory===category

?

"bg-linear-to-r from-cyan-500 to-purple-600 text-white shadow-xl"

:

"bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 dark:text-white hover:border-cyan-500"

}

`}

>

{category}

</button>


))

}

</div>




</div>


</div>







{/* Services Cards */}



<section

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

filteredServices.map((service,index)=>(


<motion.div


key={service.id}


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

relative

rounded-3xl

bg-white

dark:bg-slate-900

border

border-gray-200

dark:border-slate-800

shadow-xl

overflow-hidden

"


>



{/* Top Gradient */}


<div

className="
h-2
bg-linear-to-r
from-cyan-500
to-purple-600
"

></div>






<div

className="
p-8
"

>



{/* Icon */}


<div

className="
w-16
h-16
rounded-2xl
bg-linear-to-r
from-cyan-500
to-purple-600
text-white
flex
items-center
justify-center
group-hover:scale-110
transition
"

>


{service.icon}


</div>






<h2

className="
mt-6
text-2xl
font-black
text-gray-900
dark:text-white
"

>

{service.title}

</h2>





<p

className="
mt-4
text-gray-600
dark:text-gray-400
leading-7
"

>

{service.description}

</p>






{/* Features */}



<div

className="
mt-7
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


<div

className="
w-6
h-6
rounded-full
bg-cyan-500/10
text-cyan-500
flex
items-center
justify-center
"

>

<CheckCircle size={14}/>

</div>



{feature}



</div>


))


}



</div>








{/* Technologies */}



<div

className="
flex
flex-wrap
gap-2
mt-8
"

>


{

service.technologies.map((tech)=>(


<span

key={tech}

className="
px-3
py-1.5
rounded-full
text-xs
font-bold
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







{/* Button */}



<button

className="
mt-8
w-full
py-3
rounded-xl
bg-linear-to-r
from-cyan-500
to-purple-600
text-white
font-bold
flex
items-center
justify-center
gap-2
group-hover:scale-[1.03]
transition
"

>

Discuss Project

<ArrowRight size={18}/>

</button>






</div>





</motion.div>



))


}



</div>





</section>







{/* Part 3 Starts Here */}


{/* Development Process */}

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
y:40
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

Process

</p>



<h2

className="
mt-4
text-4xl
md:text-5xl
font-black
dark:text-white
"

>

How I Build

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


</motion.div>






<div

className="
grid
md:grid-cols-4
gap-8
"

>


{

[

{
step:"01",
title:"Planning",
desc:"Understanding requirements and creating project strategy."
},

{
step:"02",
title:"Design",
desc:"Creating modern UI/UX with responsive layouts."
},

{
step:"03",
title:"Development",
desc:"Building scalable frontend, backend and APIs."
},

{
step:"04",
title:"Launch",
desc:"Testing, optimization and deployment."
}


].map((item,index)=>(



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
delay:index*0.15
}}

className="
p-7
rounded-3xl
bg-white
dark:bg-slate-900
shadow-xl
border
border-gray-200
dark:border-slate-800
"

>


<div

className="
text-5xl
font-black
text-cyan-500
"

>

{item.step}

</div>




<h3

className="
mt-5
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



</motion.div>



))


}


</div>



</section>









{/* Why Choose Me */}



<section

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
lg:grid-cols-2
gap-12
items-center
"

>



<motion.div

initial={{
opacity:0,
x:-50
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

>


<p

className="
text-cyan-500
font-bold
uppercase
tracking-[4px]
"

>

Why Me

</p>



<h2

className="
mt-5
text-4xl
md:text-5xl
font-black
dark:text-white
"

>

Building Digital

<br/>


<span

className="
bg-linear-to-r
from-cyan-500
to-purple-600
bg-clip-text
text-transparent
"

>

Solutions

</span>


</h2>




<p

className="
mt-6
text-gray-600
dark:text-gray-400
leading-8
"

>

I focus on writing clean code, creating beautiful
interfaces and developing scalable applications
that provide real business value.

</p>



</motion.div>






<div

className="
space-y-5
"

>


{

[

"Clean & Maintainable Code",

"Modern UI/UX Design",

"SEO Optimized Websites",

"Fast Performance",

"Responsive Across All Devices",

"Problem Solving Approach"

].map((item,index)=>(



<motion.div

key={index}

initial={{
opacity:0,
x:50
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
delay:index*.1
}}

className="
flex
items-center
gap-4
p-5
rounded-2xl
bg-white
dark:bg-slate-900
shadow-lg
border
border-gray-200
dark:border-slate-800
"

>


<div

className="
w-10
h-10
rounded-xl
bg-cyan-500
text-white
flex
items-center
justify-center
"

>

<CheckCircle size={20}/>

</div>



<span

className="
font-bold
dark:text-white
"

>

{item}

</span>


</motion.div>



))


}


</div>






</div>



</section>









{/* Technology Stack */}



<section

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
rounded-[40px]
bg-white
dark:bg-slate-900
border
border-gray-200
dark:border-slate-800
shadow-xl
p-10
"

>


<h2

className="
text-center
text-3xl
md:text-4xl
font-black
dark:text-white
"

>

Technologies I Use

</h2>



<div

className="
flex
flex-wrap
justify-center
gap-4
mt-10
"

>


{

[
"React.js",
"Tailwind CSS",
"Node.js",
"Express.js",
"MongoDB",
"MySQL",
"Firebase",
"REST API",
"Git",
"GitHub"
].map((tech)=>(


<span

key={tech}

className="
px-6
py-3
rounded-full
bg-cyan-500/10
text-cyan-500
font-bold
"

>

{tech}

</span>


))


}


</div>


</div>


</section>








{/* CTA */}



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
py-20
px-8
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

Have A Project In Mind?

</h2>



<p

className="
max-w-2xl
mx-auto
mt-6
text-lg
text-white/90
leading-8
"

>

Let's work together to create a powerful,
modern and scalable digital product.

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

Contact Me

</a>


</motion.div>


</section>






</section>

)

}


export default ServicesPage;