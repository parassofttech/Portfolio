import React from "react";
import { motion } from "framer-motion";

import {
  Briefcase,
  GraduationCap,
  Code2,
  Rocket,
  Award,
  Calendar,
  MapPin,
  Sparkles,
  CheckCircle,
  Layers,
} from "lucide-react";



const experiences = [

  {
    id:1,

    role:"Full Stack Developer",

    company:"Personal Projects ",

    duration:"2025 - Present",

    location:"India",

    type:"Project Based",

    description:
    "Developing modern full-stack web applications using React.js, Node.js, Express.js and MongoDB. Building scalable solutions with authentication, APIs and database management.",


    responsibilities:[

      "Built responsive React applications",
      "Developed REST APIs with Node.js and Express",
      "Implemented Authentication systems",
      "Designed MongoDB database structures",
      "Integrated third-party APIs"

    ],


    technologies:[

      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB"

    ]

  },




  {
    id:2,

    role:"Frontend Developer",

    company:"Personal Development Projects",

    duration:"2024 - 2025",

    location:"India",

    type:"Project Based",


    description:
    "Created multiple frontend applications focusing on responsive design, user experience and modern UI development.",


    responsibilities:[

      "Created reusable React components",
      "Designed modern UI layouts",
      "Implemented animations",
      "Optimized website performance"

    ],


    technologies:[

      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS"

    ]

  },


];





const education = [

{

degree:"Bachelor of Technology (B.Tech)",

field:"Computer Science & Engineering",

duration:"2022 - 2026",

description:
"Focused on programming, data structures, algorithms, web development and software engineering."

},


{

degree:"Full Stack Development",

field:"Self Learning & Practical Projects",

duration:"2024 - Present",

description:
"Learning and implementing MERN stack development by building real-world applications."

}


];







const ExperiencePage = () => {



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

My Journey

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


Experience


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

Timeline

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


My professional journey, development
experience and learning path as a
Full Stack Developer.


</p>




</motion.div>








{/* Statistics */}



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

icon:<Briefcase/>,

number:"2+",

text:"Experience"

},


{

icon:<Code2/>,

number:"10+",

text:"Projects"

},


{

icon:<Layers/>,

number:"20+",

text:"Technologies"

},


{

icon:<Award/>,

number:"3+",

text:"Achievements"

}


].map((item,index)=>(



<motion.div

key={index}

whileHover={{

y:-8

}}

className="
p-6
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
mt-2
text-gray-500
"

>

{item.text}

</p>



</motion.div>



))


}



</div>






</div>


</div>






{/* Part 2 Starts Here */}
{/* Experience Timeline */}


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

Career

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


Professional


<span

className="
bg-linear-to-r
from-cyan-500
to-purple-600
bg-clip-text
text-transparent
"

>

 Experience

</span>


</h2>



</motion.div>






<div

className="
relative
"

>


{/* Timeline Line */}


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
to-purple-600
"

></div>






{

experiences.map((exp,index)=>(


<motion.div

key={exp.id}

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

delay:index*.2

}}

className="
relative
grid
md:grid-cols-2
gap-8
mb-16
"

>



{/* Timeline Dot */}


<div

className="
absolute
left-2.5
md:left-1/2
md:-translate-x-1/2
top-8
w-10
h-10
rounded-full
bg-linear-to-r
from-cyan-500
to-purple-600
border-4
border-white
dark:border-slate-950
flex
items-center
justify-center
text-white
z-10
"

>


<Briefcase size={18}/>


</div>







<div

className={`
md:col-span-1

${

index%2===0

?

"md:pr-10"

:

"md:col-start-2 md:pl-10"

}

`}

>


<div

className="
p-8
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
flex
flex-wrap
justify-between
gap-3
"

>



<div>


<h3

className="
text-2xl
font-black
dark:text-white
"

>

{exp.role}

</h3>



<p

className="
mt-1
text-cyan-500
font-bold
"

>

{exp.company}

</p>



</div>







<div

className="
flex
items-center
gap-2
text-sm
text-gray-500
"

>


<Calendar size={16}/>

{exp.duration}


</div>


</div>







<div

className="
flex
items-center
gap-2
mt-5
text-gray-500
"

>


<MapPin size={16}/>

{exp.location}


</div>






<span

className="
inline-block
mt-5
px-4
py-2
rounded-full
bg-cyan-500/10
text-cyan-500
font-bold
text-sm
"

>

{exp.type}

</span>







<p

className="
mt-6
text-gray-600
dark:text-gray-400
leading-8
"

>

{exp.description}

</p>







{/* Responsibilities */}


<div

className="
mt-7
space-y-3
"

>


<h4

className="
font-black
dark:text-white
"

>

Responsibilities

</h4>



{

exp.responsibilities.map((item)=>(


<div

key={item}

className="
flex
items-center
gap-3
text-sm
text-gray-600
dark:text-gray-300
"

>


<CheckCircle

size={16}

className="
text-cyan-500
"

/>


{item}


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
mt-7
"

>


{

exp.technologies.map((tech)=>(


<span

key={tech}

className="
px-3
py-1.5
rounded-full
bg-gray-100
dark:bg-slate-800
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






</div>


</div>






</motion.div>


))


}



</div>



</section>








{/* Project Journey Section */}



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
mb-12
"

>


<p

className="
text-purple-500
uppercase
tracking-[4px]
font-bold
"

>

Projects

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

Building Real

<span

className="
bg-linear-to-r
from-cyan-500
to-purple-600
bg-clip-text
text-transparent
"

>

 World Apps

</span>


</h2>



</motion.div>







<div

className="
grid
md:grid-cols-3
gap-8
"

>


{


[

{

title:"Travel Platform",

desc:"Full stack travel website with authentication, trips and booking features."

},


{

title:"Expense Tracker",

desc:"Finance management application with budgets, analytics and reports."

},


{

title:"Portfolio Website",

desc:"Modern developer portfolio optimized for SEO and performance."

}


].map((project,index)=>(


<motion.div

key={index}

whileHover={{

y:-10

}}

className="
p-8
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




<h3

className="
mt-6
text-xl
font-black
dark:text-white
"

>

{project.title}

</h3>



<p

className="
mt-3
text-gray-500
leading-7
"

>

{project.desc}

</p>



</motion.div>



))


}



</div>


</section>







{/* Part 3 Starts Here */}

{/* Education Section */}


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

Education

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


Academic


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



</motion.div>







<div

className="
grid
md:grid-cols-2
gap-8
"

>


{

education.map((item,index)=>(


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

className="
p-8
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


<GraduationCap/>

</div>




<div>

<h3

className="
text-xl
font-black
dark:text-white
"

>

{item.degree}

</h3>



<p

className="
text-cyan-500
font-bold
mt-1
"

>

{item.field}

</p>


</div>


</div>







<div

className="
flex
items-center
gap-2
mt-6
text-gray-500
"

>

<Calendar size={16}/>

{item.duration}

</div>





<p

className="
mt-5
text-gray-600
dark:text-gray-400
leading-7
"

>

{item.description}

</p>



</motion.div>



))


}



</div>


</section>









{/* Achievements Section */}



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
p-10
md:p-14
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
text-center
"

>


<p

className="
text-purple-500
font-bold
uppercase
tracking-[4px]
text-sm
"

>

Achievements

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

Milestones &

<span

className="
bg-linear-to-r
from-cyan-500
to-purple-600
bg-clip-text
text-transparent
"

>

 Growth

</span>


</h2>


</div>







<div

className="
grid
md:grid-cols-3
gap-6
mt-12
"

>



{

[

"Built multiple Full Stack Applications",

"Developed REST APIs & Authentication Systems",

"Created SEO Optimized Websites",

"Worked with MERN Stack",

"Implemented Responsive UI Designs",

"Continuously Learning New Technologies"

].map((item,index)=>(



<div

key={index}

className="
flex
items-center
gap-3
p-5
rounded-2xl
bg-white
dark:bg-slate-900
shadow-lg
"

>


<CheckCircle

className="
text-cyan-500
"

size={20}

/>



<span

className="
font-semibold
dark:text-white
"

>

{item}

</span>



</div>


))


}



</div>



</div>


</section>









{/* Current Focus */}



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
gap-10
items-center
"

>



<div>


<p

className="
text-cyan-500
uppercase
tracking-[4px]
font-bold
"

>

Current Focus

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

Growing As A

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

Software Developer

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

Currently focusing on advanced full-stack
development, scalable architecture,
performance optimization and building
real-world products.

</p>



</div>







<div

className="
space-y-5
"

>


{

[

"MERN Stack Development",

"Advanced React Patterns",

"Backend Architecture",

"Database Optimization",

"Cloud Deployment"

].map((skill)=>(


<div

key={skill}

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

<Code2 size={18}/>

</div>



<span

className="
font-bold
dark:text-white
"

>

{skill}

</span>


</div>


))


}


</div>




</div>



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

Let's Build Something Amazing 🚀

</h2>




<p

className="
mt-6
max-w-2xl
mx-auto
text-lg
leading-8
text-white/90
"

>

Looking for a developer to create
modern websites or full-stack applications?
Let's collaborate together.

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

Hire Me

</a>




</motion.div>



</section>





</section>

)

}


export default ExperiencePage;