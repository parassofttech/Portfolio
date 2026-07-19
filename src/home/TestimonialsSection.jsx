import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  Quote,
} from "lucide-react";


const testimonials = [

  {
    name:"Rahul Sharma",

    role:"Startup Founder",

    image:"/images/testimonials/user1.webp",

    review:
      "Amazing work! The website was fast, modern and exactly what I needed for my business.",

    rating:5
  },


  {
    name:"Amit Verma",

    role:"Business Owner",

    image:"/images/testimonials/user2.webp",

    review:
      "Great communication and excellent development skills. Delivered a professional web application.",

    rating:5
  },


  {
    name:"Priya Singh",

    role:"Freelance Client",

    image:"/images/testimonials/user3.webp",

    review:
      "Very creative developer with attention to details. Highly recommended for web projects.",

    rating:5
  }

];





const TestimonialsSection = () => {


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
font-bold
uppercase
tracking-[4px]
text-sm
"

>
Testimonials
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

What People

<span

className="
bg-linear-to-r
from-cyan-500
to-purple-600
bg-clip-text
text-transparent
"

>
 Say
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

Feedback from clients and people I have
worked with.

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
testimonials.map((item,index)=>(


<motion.div


key={index}


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


whileHover={{

y:-10

}}



className="

relative

p-8

rounded-3xl

bg-gray-50

dark:bg-slate-900

border

border-gray-200

dark:border-slate-800

shadow-xl

"

>



{/* Quote Icon */}


<div

className="
absolute
top-6
right-6
text-cyan-500/20
"

>

<Quote

size={60}

/>

</div>







{/* User */}


<div

className="
flex
items-center
gap-4
"

>


<img


src={item.image}


alt={item.name}


className="
w-16
h-16
rounded-full
object-cover
border-4
border-cyan-500
"

/>



<div>


<h3

className="
font-black
text-xl
text-gray-900
dark:text-white
"

>

{item.name}

</h3>



<p

className="
text-sm
text-gray-500
dark:text-gray-400
"

>

{item.role}

</p>


</div>



</div>







{/* Review */}


<p

className="
mt-6
text-gray-600
dark:text-gray-300
leading-relaxed
"

>

"{item.review}"

</p>






{/* Rating */}


<div

className="
flex
gap-1
mt-6
"

>


{

Array.from({

length:item.rating

}).map((_,i)=>(


<Star

key={i}

size={20}

fill="currentColor"

className="
text-yellow-400
"

/>


))

}


</div>




</motion.div>


))
}



</div>






{/* CTA */}


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

p-10

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

Let's Create Something Amazing Together 🚀

</h3>



<p

className="
mt-3
text-white/80
"

>

Have a project idea? I would love to help you build it.

</p>



<button

className="

mt-6

px-8

py-4

rounded-full

bg-white

text-blue-600

font-bold

hover:scale-105

transition

"

>

Start Project

</button>



</motion.div>




</div>


</section>

)

}


export default TestimonialsSection;