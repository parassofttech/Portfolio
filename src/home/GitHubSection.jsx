import React from "react";
import { motion } from "framer-motion";
import {
  
  GitFork,
  Star,
  Users,
  ExternalLink,
  Code2,
} from "lucide-react";

import { 
  FaGithub 
} from "react-icons/fa";



const githubStats = [

  {
    title:"Repositories",
    value:"20+",
    icon:<Code2 />,
  },

  {
    title:"Followers",
    value:"100+",
    icon:<Users />,
  },

  {
    title:"Stars Earned",
    value:"50+",
    icon:<Star />,
  },

  {
    title:"Forks",
    value:"10+",
    icon:<GitFork />,
  },

];



const languages = [

  {
    name:"JavaScript",
    percent:"90%",
  },

  {
    name:"React",
    percent:"85%",
  },

  {
    name:"Node.js",
    percent:"75%",
  },

  {
    name:"CSS/Tailwind",
    percent:"80%",
  },

];





const GitHubSection = () => {


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
uppercase
tracking-[4px]
font-bold
text-sm
"
>
GitHub
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

My Coding
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
 Activity
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

Explore my open source work,
coding contributions and projects.

</p>


</motion.div>







<div
className="
grid
lg:grid-cols-3
gap-8
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
flex
items-center
gap-3

"
>


<div
className="
w-20
h-20
rounded-full
bg-linear-to-r
from-gray-900
to-gray-700
text-white
flex
items-center
justify-center
"
>

{/* <Github size={40}/> */}
<FaGithub size={40}/>
</div>



<div>

<h3
className="
text-2xl
font-black
dark:text-white
"
>
Paras Sahu
</h3>


<p
className="
text-gray-500
"
>
Full Stack Developer
</p>


</div>


</div>





<p
className="
mt-6
text-gray-600
dark:text-gray-400
"
>

Passionate about building modern
web applications and contributing
to developer communities.

</p>




<a

href="https://github.com/parassofttech"

target="_blank"

rel="noreferrer"

className="
mt-8
inline-flex
items-center
gap-2
px-6
py-3
rounded-full
bg-black
text-white
font-bold
"

>

Visit Github

<ExternalLink size={18}/>

</a>



</motion.div>









{/* Stats */}


{/* <div
className="
lg:col-span-2
grid
sm:grid-cols-2
gap-6
"
>


{
githubStats.map((item,index)=>(


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
y:-8
}}

className="
p-7
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
w-12
h-12
rounded-xl
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



<h4
className="
mt-5
text-4xl
font-black
text-gray-900
dark:text-white
"
>

{item.value}

</h4>



<p
className="
text-gray-500
dark:text-gray-400
mt-2
"
>

{item.title}

</p>


</motion.div>


))
}


</div> */}



</div>







{/* Language Section */}


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
mt-14
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


<h3
className="

font-black
dark:text-white
"
>

Most Used Technologies

</h3>




<div
className="
mt-8
grid
md:grid-cols-2
gap-6
"
>


{
languages.map((lang)=>(


<div
key={lang.name}
>


<div
className="
flex
justify-between
mb-2
font-semibold
dark:text-gray-300
"
>

<span>
{lang.name}
</span>


<span
className="
text-cyan-500
"
>
{lang.percent}
</span>


</div>



<div
className="
h-3
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
width:lang.percent
}}

viewport={{
once:true
}}

transition={{
duration:1
}}

className="
h-full
rounded-full
bg-linear-to-r
from-cyan-500
to-purple-600
"

/>


</div>



</div>


))
}


</div>


</motion.div>





</div>


</section>

)

}


export default GitHubSection;