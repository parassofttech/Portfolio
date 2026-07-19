import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import emailjs from "@emailjs/browser";


const ContactSection = () => {


const [formData,setFormData] = useState({

  name:"",
  email:"",
  message:""

});



const handleChange = (e)=>{

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
py-14
sm:py-16
lg:py-24
bg-gray-50
dark:bg-slate-950
"

>


<div

className="

mx-auto
px-4
sm:px-6
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
Contact Me
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

Let's Work <br></br>

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



<p

className="
mt-5
max-w-2xl
mx-auto
text-gray-600
dark:text-gray-400
"

>

Have a project idea or want to hire me?
Feel free to contact me.

</p>



</motion.div>








<div

className="
grid
grid-cols-1
lg:grid-cols-2
gap-8
lg:gap-10
items-start
"

>





{/* Contact Info */}


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
space-y-6
"

>




<div

className="
p-6
rounded-3xl
bg-white
dark:bg-slate-900
border
border-gray-200
dark:border-slate-800
shadow-xl
flex
items-center
gap-5
"

>


<div

className="
w-14
h-14
rounded-2xl
bg-cyan-500
text-white
flex
items-center
justify-center
"

>

<Mail/>

</div>


<div>

<h3

className="
font-bold
dark:text-white
"

>
Email
</h3>


<p

className=" flex justify-center
text-gray-500
"

>
paras2115s@gmail.com
</p>


</div>


</div>






<div

className="
p-6
rounded-3xl
bg-white
dark:bg-slate-900
border
border-gray-200
dark:border-slate-800
shadow-xl
flex
items-center
gap-5
"

>


<div

className="
w-14
h-14
rounded-2xl
bg-purple-600
text-white
flex
items-center
justify-center
"

>

<Phone/>

</div>


<div>

<h3

className="
font-bold
dark:text-white
"

>
Phone
</h3>


<p

className="
text-gray-500
"

>
+91 6307478350
</p>


</div>


</div>







<div

className="
p-6
rounded-3xl
bg-white
dark:bg-slate-900
border
border-gray-200
dark:border-slate-800
shadow-xl
flex
items-center
gap-5
"

>


<div

className="
w-14
h-14
rounded-2xl
bg-green-500
text-white
flex
items-center
justify-center
"

>

<MapPin/>

</div>


<div>

<h3

className="
font-bold
dark:text-white
"

>
Location
</h3>


<p

className="
text-gray-500
"

>
Lucknow, Uttar Pradesh,  India 
</p>


</div>


</div>






{/* Social */}


<div

className="
flex
gap-4
"

>


<a

href="https://github.com/parassofttech"

target="_blank"

rel="noopener noreferrer"
className="
w-12
h-12
rounded-full
bg-black
text-white
flex
items-center
justify-center
hover:scale-110
transition
"

>

<FaGithub size={25}/>

</a>



<a

href="https://in.linkedin.com/in/paras-sahu-02849029a"
target="_blank"

rel="noopener noreferrer"

className="
w-12
h-12
rounded-full
bg-blue-600
text-white
flex
items-center
justify-center
hover:scale-110
transition
"

>

<FaLinkedin size={25}/>

</a>


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
rounded-3xl
bg-white
dark:bg-slate-900
border
border-gray-200
dark:border-slate-800
shadow-xl
"

>



<input

name="name"

value={formData.name}

onChange={handleChange}

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
"

/>





<input

name="email"

value={formData.email}

onChange={handleChange}

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
"

/>





<textarea

name="message"

value={formData.message}

onChange={handleChange}

rows="5"

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
"

/>






<button

className="
w-full
py-4
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
hover:scale-[1.02]
transition
"

>

Send Message

<Send size={20}/>

</button>



</motion.form>





</div>



</div>


</section>

)

}


export default ContactSection;