import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,

  Sparkles,
  MessageCircle,
  CheckCircle
} from "lucide-react";

import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";




const contactInfo = [

{
icon:<Mail/>,
title:"Email",
value:"paras2115s@gmail.com",
description:"Send me an email anytime"
},


{
icon:<Phone/>,
title:"Phone",
value:"+91 6307478350",
description:"Available for discussion"
},


{
icon:<MapPin/>,
title:"Location",
value:"India",
description:"Open for remote work"
},


// {
// icon:<Clock/>,
// title:"Working Hours",
// value:"Mon - Sat",
// description:"10 AM - 8 PM"
// }


];





const ContactPage = () => {



const [formData,setFormData]=useState({

name:"",
email:"",
message:""

});





const handleChange=(e)=>{


setFormData({

...formData,

[e.target.name]:e.target.value

});


};





const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    await emailjs.send(

      import.meta.env.VITE_EMAILJS_SERVICE_ID,

      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,

      {

        name: formData.name,

        email: formData.email,

        message: formData.message,

      },

      import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    );

    alert("Message Sent Successfully 🚀");

    setFormData({

      name:"",

      email:"",

      message:""

    });

  }

  catch(error){

    console.log(error);

    alert("Something Went Wrong");

  }

};





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

Contact Me


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


Let's


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

Connect

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


Have a project idea or want to
work together? Feel free to reach out.
I would love to hear from you.


</p>




</motion.div>






</div>


</div>









{/* Contact Information */}



<section

className="
max-w-7xl
mx-auto
px-5
lg:px-8
pb-20
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


contactInfo.map((item,index)=>(


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
p-6
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
mt-2
font-bold
text-cyan-500
"

>

{item.value}

</p>





<p

className="
mt-2
text-gray-500
text-sm
"

>

{item.description}

</p>






</motion.div>


))


}



</div>




</section>






{/* Part 2 Starts Here */}
{/* Contact Form Section */}



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
items-start
"

>





{/* Left Content */}



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
uppercase
tracking-[4px]
font-bold
text-sm
"

>

Get In Touch

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

Let's Build

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

Something Great

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

I am always open to discussing new projects,
creative ideas or opportunities to be part
of your vision.

</p>






{/* Social Cards */}



<div

className="
flex
gap-4
mt-8
"

>


<a

href="https://github.com/parassofttech"
target="_blank"
rel="noopener noreferrer"
className="
w-14
h-14
rounded-2xl
bg-black
text-white
flex
items-center
justify-center
hover:scale-110
transition
"

>

<FaGithub size={26}/>

</a>





<a

href="https://in.linkedin.com/in/paras-sahu-02849029a"
target="_blank"
rel="noopener noreferrer"
className="
w-14
h-14
rounded-2xl
bg-blue-600
text-white
flex
items-center
justify-center
hover:scale-110
transition
"

>

<FaLinkedin size={26}/>

</a>





<a

href="mailto:paras2115s@gmail.com"

className="
w-14
h-14
rounded-2xl
bg-green-500
text-white
flex
items-center
justify-center
hover:scale-110
transition
"

>

<MessageCircle size={26}/>

</a>



</div>






<div

className="
mt-10
p-6
rounded-3xl
bg-cyan-500/10
border
border-cyan-500/20
"

>


<div

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
font-bold
dark:text-white
"

>

Available for Freelance Projects

</p>


</div>


<p

className="
mt-3
text-gray-600
dark:text-gray-400
"

>

Currently accepting web development
and full-stack projects.

</p>



</div>






</motion.div>








{/* Form */}





<motion.form


onSubmit={handleSubmit}


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



className="
p-8
md:p-10
rounded-[35px]
bg-white
dark:bg-slate-900
border
border-gray-200
dark:border-slate-800
shadow-2xl
"

>




<input

type="text"

name="name"

value={formData.name}

onChange={handleChange}

required

placeholder="Your Name"

className="
w-full
px-5
py-4
rounded-xl
bg-gray-100
dark:bg-slate-800
dark:text-white
outline-none
mb-5
focus:ring-2
focus:ring-cyan-500
"

/>






<input

type="email"

name="email"

value={formData.email}

onChange={handleChange}

required

placeholder="Your Email"

className="
w-full
px-5
py-4
rounded-xl
bg-gray-100
dark:bg-slate-800
dark:text-white
outline-none
mb-5
focus:ring-2
focus:ring-cyan-500
"

/>








<textarea


name="message"


value={formData.message}


onChange={handleChange}


required


rows="6"


placeholder="Your Message"



className="
w-full
px-5
py-4
rounded-xl
bg-gray-100
dark:bg-slate-800
dark:text-white
outline-none
mb-5
focus:ring-2
focus:ring-cyan-500
"


/>







<button

type="submit"

className="
w-full
py-4
rounded-xl
bg-linear-to-r
from-cyan-500
to-purple-600
text-white
font-black
flex
items-center
justify-center
gap-2
hover:scale-[1.03]
transition
"

>


Send Message


<Send size={20}/>


</button>






</motion.form>







</div>



</section>






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

How We Work

<span

className="
bg-linear-to-r
from-cyan-500
to-purple-600
bg-clip-text
text-transparent
"

>

 Together

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

number:"01",

title:"Discuss",

desc:"Understanding your idea, requirements and project goals."

},


{

number:"02",

title:"Develop",

desc:"Creating modern UI, backend systems and scalable solutions."

},


{

number:"03",

title:"Deliver",

desc:"Testing, optimization and successful project deployment."

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

className="
p-8
rounded-3xl
bg-white
dark:bg-slate-900
border
border-gray-200
dark:border-slate-800
shadow-xl
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
text-2xl
font-black
"

>

{item.number}

</div>





<h3

className="
mt-6
text-2xl
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









{/* FAQ Section */}



<section

className="
max-w-5xl
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
text-cyan-500
uppercase
tracking-[4px]
font-bold
"

>

FAQ

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

Frequently Asked

<span

className="
bg-linear-to-r
from-cyan-500
to-purple-600
bg-clip-text
text-transparent
"

>

 Questions

</span>


</h2>


</motion.div>







<div

className="
space-y-5
"

>


{

[

{

q:"What type of projects do you build?",

a:"I build modern websites, full-stack applications, dashboards and custom web solutions."

},


{

q:"Do you provide responsive design?",

a:"Yes, every project is optimized for mobile, tablet and desktop devices."

},


{

q:"Do you provide SEO optimization?",

a:"Yes, I implement SEO friendly structure, performance optimization and best practices."

},


{

q:"How can I start a project?",

a:"Simply send me a message through this contact form and we can discuss your idea."

}


].map((item,index)=>(


<div

key={index}

className="
p-6
rounded-2xl
bg-white
dark:bg-slate-900
border
border-gray-200
dark:border-slate-800
shadow-lg
"

>


<h3

className="
font-black
text-lg
dark:text-white
"

>

{item.q}

</h3>



<p

className="
mt-3
text-gray-600
dark:text-gray-400
leading-7
"

>

{item.a}

</p>



</div>


))


}



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

Ready To Start Your Project? 🚀

</h2>




<p

className="
mt-6
max-w-2xl
mx-auto
text-lg
text-white/90
leading-8
"

>

Let's create something amazing together.
Your idea can become the next successful product.

</p>






<a

href="mailto:yourmail@gmail.com"

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

Send Email

</a>




</motion.div>



</section>





</section>

)

}


export default ContactPage;