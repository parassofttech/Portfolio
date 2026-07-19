import React from "react";
import { motion } from "framer-motion";

import {
  Code2,
  User,
  MapPin,
  Calendar,
  Download,
  Sparkles,
  CheckCircle,
  Rocket
} from "lucide-react";





const aboutData = {

name:"Paras Sahu",

role:"Full Stack Developer",

location:"India",

experience:"Building Modern Web Applications",

description:

"I am a passionate Computer Science with strong skills in Java, Data Structures & Algorithms, and full-stack web development using React, Node.js, Express, and MongoDB. Experienced in building scalable and responsive web applications with REST APIs, authentication, CRUD operations, and database management. Seeking a software developer role.",


};


const highlights = [

"Full Stack MERN Developer",

"React.js & Modern UI Specialist",

"REST API Development",

"SEO Friendly Web Development",

"Responsive Web Applications",

"Problem Solving & DSA"

];







const AboutPage = () => {



return (



<div

className="
min-h-screen
bg-white
dark:bg-slate-950
overflow-hidden
"

>







{/* Hero Section */}



<section

className="
relative
pt-32
pb-20
"

>





<div

className="
absolute
top-0
left-0
w-96
h-96
bg-cyan-500/20
blur-[140px]
rounded-full
"

></div>





<div

className="
absolute
bottom-0
right-0
w-96
h-96
bg-purple-600/20
blur-[140px]
rounded-full
"

></div>









<div

className="
relative
max-w-7xl
mx-auto
px-5
lg:px-8
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

About Me

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

Full Stack Developer

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


I build modern, fast and scalable web
applications with clean code and great
user experience.

</p>





<div

className="
flex
flex-wrap
justify-center
gap-5
mt-10
"

>


<a

href="/resume.pdf"

className="
flex
items-center
gap-2
px-8
py-4
rounded-full
bg-linear-to-r
from-cyan-500
to-purple-600
text-white
font-black
hover:scale-105
transition
"

>

<Download size={20}/>

Download Resume

</a>





</div>






</motion.div>




</div>



</section>









{/* Profile Introduction */}





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








{/* Profile Card */}



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

className="
relative
"

>


<div

className="
p-8
rounded-[40px]
bg-white
dark:bg-slate-900
border
border-gray-200
dark:border-slate-800
shadow-2xl
"

>


<div

className="
w-80
h-80
mx-auto
rounded-3xl
overflow-hidden
bg-linear-to-br
from-cyan-500
to-purple-600
"

>


<img

src="/paras.webp"

alt="Paras Sahu"

className="
w-full
h-full
object-cover
object-center
hover:scale-110
transition
duration-500
"

/>


</div>






<div

className="
mt-8
"

>


<h2

className="
text-3xl
font-black
dark:text-white
"

>

{aboutData.name}

</h2>





<p

className="
mt-2
text-cyan-500
font-bold
"

>

{aboutData.role}

</p>





<div

className="
flex
items-center
gap-2
mt-5
text-gray-500
dark:text-gray-400
"

>


<MapPin size={18}/>

{aboutData.location}


</div>



</div>



</div>


</motion.div>









{/* About Text */}



<motion.div

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

>




<p

className="
text-cyan-500
uppercase
tracking-[4px]
font-bold
"

>

Who I Am

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


Turning Ideas Into


<span

className="
bg-linear-to-r
from-cyan-500
to-purple-600
bg-clip-text
text-transparent
"

>

 Digital Solutions

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

{aboutData.description}

</p>






<div

className="
mt-8
space-y-4
"

>


{


highlights.slice(0,3).map((item)=>(


<div

key={item}

className="
flex
items-center
gap-3
"

>


<CheckCircle

className="
text-cyan-500
"

/>


<p

className="
font-semibold
dark:text-white
"

>

{item}

</p>



</div>



))


}




</div>







</motion.div>






</div>




</section>






{/* Part 2 Starts Here */}


// Developer Journey Section


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
text-purple-500
uppercase
tracking-[4px]
font-bold
text-sm
"

>

My Journey

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

[

{

year:"2024",

title:"Started Web Development",

desc:"Started learning HTML, CSS, JavaScript and building basic websites."

},


{

year:"2025",

title:"Entered Full Stack Development",

desc:"Learned React, Node.js, Express.js and MongoDB to build complete applications."

},


{

year:"2026",

title:"Building Real World Products",

desc:"Developing scalable applications with authentication, APIs and modern UI."

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

className="
relative
grid
md:grid-cols-2
gap-8
mb-12
"

>





<div

className="
absolute
left-0
md:left-1/2
md:-translate-x-1/2
top-5
w-10
h-10
rounded-full
bg-linear-to-r
from-cyan-500
to-purple-600
flex
items-center
justify-center
text-white
font-black
z-10
"

>

{index+1}

</div>






<div

className={`
ml-16
md:ml-0
p-7
rounded-3xl
bg-white
dark:bg-slate-900
border
border-gray-200
dark:border-slate-800
shadow-xl

${

index%2===0

?

"md:mr-10"

:

"md:col-start-2 md:ml-10"

}

`}

>


<div

className="
flex
items-center
gap-3
"

>


<Calendar

size={20}

className="
text-cyan-500
"

/>


<span

className="
text-cyan-500
font-black
"

>

{item.year}

</span>


</div>





<h3

className="
mt-4
text-2xl
font-black
dark:text-white
"

>

{item.title}

</h3>




<p

className="
mt-3
text-gray-600
dark:text-gray-400
leading-7
"

>

{item.desc}

</p>



</div>




</motion.div>


))


}


</div>


</section>









{/* Skills Overview */}



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

My Skills

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

Technologies

<span

className="
bg-linear-to-r
from-cyan-500
to-purple-600
bg-clip-text
text-transparent
"

>

 I Use

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

I work with modern technologies to create
high performance and scalable applications.

</p>


</div>








<div

className="
grid
grid-cols-2
gap-5
"

>



{

[

"React.js",

"Node.js",

"Express.js",

"MongoDB",

"Tailwind CSS",

"JavaScript",

"REST APIs",

"Git & GitHub"

].map((skill,index)=>(


<motion.div

key={skill}

whileHover={{

scale:1.05

}}

className="
p-5
rounded-2xl
bg-white
dark:bg-slate-900
border
border-gray-200
dark:border-slate-800
shadow-lg
text-center
"

>


<Code2

className="
mx-auto
text-cyan-500
"

/>



<p

className="
mt-3
font-black
dark:text-white
"

>

{skill}

</p>



</motion.div>


))


}



</div>




</div>



</section>









{/* Coding Statistics */}



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
sm:grid-cols-2
lg:grid-cols-4
gap-6
"

>


{


[

{

number:"15+",

title:"Projects Built"

},


{

number:"10+",

title:"Technologies"

},


{

number:"1+",

title:"Years Learning"

},


{

number:"100%",

title:"Responsive UI"

}


].map((stat,index)=>(


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
text-center
"

>


<h3

className="
text-4xl
font-black
bg-linear-to-r
from-cyan-500
to-purple-600
bg-clip-text
text-transparent
"

>

{stat.number}

</h3>



<p

className="
mt-3
font-bold
dark:text-white
"

>

{stat.title}

</p>



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



<div

className="
p-10
md:p-14
rounded-[40px]
bg-linear-to-br
from-cyan-500/10
to-purple-600/10
border
border-gray-200
dark:border-slate-800
"

>


<h2

className="
text-4xl
md:text-5xl
font-black
dark:text-white
text-center
"

>


My Development

<span

className="
bg-linear-to-r
from-cyan-500
to-purple-600
bg-clip-text
text-transparent
"

>

 Approach

</span>


</h2>





<div

className="
grid
md:grid-cols-3
gap-6
mt-10
"

>


{


[

{

icon:<Code2/>,

title:"Clean Code",

desc:"Writing maintainable and scalable code."

},


{

icon:<Rocket/>,

title:"Performance",

desc:"Optimized websites with better speed."

},


{

icon:<CheckCircle/>,

title:"Quality",

desc:"Testing and delivering reliable solutions."

}


].map((item,index)=>(


<div

key={index}

className="
p-6
rounded-3xl
bg-white
dark:bg-slate-900
shadow-lg
"

>


<div

className="
w-12
h-12
rounded-xl
bg-cyan-500
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
text-gray-600
dark:text-gray-400
"

>

{item.desc}

</p>



</div>


))


}


</div>



</div>



</section>







{/* Part 3 Starts Here */}

// Achievements Section


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


My

<span

className="
bg-linear-to-r
from-cyan-500
to-purple-600
bg-clip-text
text-transparent
"

>

 Achievements

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

title:"Full Stack Applications",

desc:"Built complete MERN stack applications with authentication, APIs and database integration."

},


{

title:"Modern UI Development",

desc:"Created responsive and attractive interfaces using React.js and Tailwind CSS."

},


{

title:"Real World Projects",

desc:"Developed projects like travel platforms, expense trackers and portfolio websites."

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

delay:index*.15

}}

whileHover={{

y:-10

}}

className="
p-8
rounded-3xl
bg-white
dark:bg-slate-900
border
border-gray-200
dark:border-slate-800
shadow-xl
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


<CheckCircle size={28}/>


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
mt-4
text-gray-600
dark:text-gray-400
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
p-10
md:p-14
bg-slate-900
"

>


<h2

className="
text-center
text-4xl
md:text-5xl
font-black
text-white
"

>


Technology

<span

className="
text-cyan-400
"

>

 Stack

</span>


</h2>







<div

className="
grid
grid-cols-2
md:grid-cols-4
gap-5
mt-12
"

>



{


[

"HTML5",

"CSS3",

"JavaScript",

"React.js",

"Tailwind CSS",

"Node.js",

"Express.js",

"MongoDB",

"MySQL",

"Firebase",

"REST API",

"Git"


].map((tech,index)=>(


<motion.div

key={tech}

whileHover={{

scale:1.08

}}

className="
p-5
rounded-2xl
bg-white/10
border
border-white/10
text-center
text-white
font-bold
"

>


<Code2

className="
mx-auto
mb-3
text-cyan-400
"

size={28}

/>



{tech}



</motion.div>


))


}



</div>



</div>



</section>









{/* Career Goals */}



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
text-purple-500
uppercase
tracking-[4px]
font-bold
"

>

Future Goals

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


<span

className="
bg-linear-to-r
from-cyan-500
to-purple-600
bg-clip-text
text-transparent
"

>

 Developer

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


My goal is to continuously improve my
development skills, build impactful products
and contribute to innovative technology solutions.

</p>



</div>








<div

className="
space-y-5
"

>


{

[

"Master Advanced Full Stack Development",

"Build Scalable SaaS Applications",

"Improve System Design Skills",

"Learn Cloud Technologies",

"Create Products Used By Millions"

].map((goal)=>(


<div

key={goal}

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


<CheckCircle

className="
text-cyan-500
"

/>



<p

className="
font-bold
dark:text-white
"

>

{goal}

</p>



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
px-8
py-20
text-center
text-white
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


Let's Work Together 🚀

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


Have an idea or project?
Let's turn your vision into a modern digital solution.

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







</div>

)

}



export default AboutPage;