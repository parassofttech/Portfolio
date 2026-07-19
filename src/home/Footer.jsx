import React from "react";
import {
  
  
  Mail,
  ArrowUp,
  Heart,
} from "lucide-react";

import { 
  FaGithub, 
  FaLinkedin
} from "react-icons/fa";
import { Link } from "react-router-dom";



const Footer = () => {


const scrollTop = () => {

window.scrollTo({

top:0,

behavior:"smooth"

});

};



return (

<footer

className="
bg-slate-950
text-gray-300
pt-16
pb-8
"

>


<div

className="

mx-auto
px-6
lg:px-8
"

>



<div

className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-10
pb-12
border-b
border-slate-800
"

>





{/* Brand */}


<div>


<h2

className="
text-3xl
font-black
text-white
"

>

Paras<span className="text-cyan-500">.</span>

</h2>



<p

className="
mt-5
text-gray-400
leading-relaxed
"

>

Full Stack Developer building modern,
fast and scalable web applications with
React, Node.js and MongoDB.

</p>




<div

className="
flex
gap-4
mt-6
"

>


<a

href="https://github.com/parassofttech"
target="_blank"
rel="noopener noreferrer"
className="
w-11
h-11
rounded-full
bg-slate-900
flex
items-center
justify-center
hover:bg-cyan-500
hover:text-white
transition
"

>

{/* <Github size={20}/> */}
<FaGithub size={20}/>

</a>




<a

href="https://in.linkedin.com/in/paras-sahu-02849029a"
target="_blank"
rel="noopener noreferrer"
className="
w-11
h-11
rounded-full
bg-slate-900
flex
items-center
justify-center
hover:bg-blue-600
hover:text-white
transition
"

>


<FaLinkedin size={20}/>

</a>




<a

href="mailto:paras2115s@gmail.com"
target="_blank"
rel="noopener noreferrer"
className="
w-11
h-11
rounded-full
bg-slate-900
flex
items-center
justify-center
hover:bg-purple-600
hover:text-white
transition
"

>

<Mail size={20}/>

</a>



</div>


</div>







{/* Quick Links */}


<div>


<h3

className="
text-xl
font-bold
text-white
mb-5
"

>

Quick Links

</h3>


<ul

className="
space-y-3
"

>


<li>

<Link

to="/"

className="
hover:text-cyan-400
transition
"

>
Home
</Link>

</li>



<li>

<Link

to="/about"

className="
hover:text-cyan-400
transition
"

>
About
</Link>

</li>



<li>

<Link

to="/projects"

className="
hover:text-cyan-400
transition
"

>
Projects
</Link>

</li>



<li>

<Link

to="/contact"

className="
hover:text-cyan-400
transition
"

>
Contact
</Link>

</li>


</ul>


</div>







{/* Services */}


<div>


<h3

className="
text-xl
font-bold
text-white
mb-5
"

>

Services

</h3>



<ul

className="
space-y-3
"

>


<li className="hover:text-cyan-400 transition">

Web Development

</li>


<li className="hover:text-cyan-400 transition">

Full Stack Development

</li>


<li className="hover:text-cyan-400 transition">

SEO Optimization

</li>


<li className="hover:text-cyan-400 transition">

Website Maintenance

</li>


</ul>



</div>







{/* Contact */}


<div>


<h3

className="
text-xl
font-bold
text-white
mb-5
"

>

Contact

</h3>



<div

className="
space-y-4
"

>


<p>

📍 India

</p>


<p>

📧 paras2115s@gmail.com

</p>


<p>

💻 Available For Freelance

</p>


</div>



<button

onClick={scrollTop}

className="
mt-6
flex
items-center
gap-2
px-5
py-3
rounded-full
bg-cyan-500
text-white
font-bold
hover:scale-105
transition
"

>

Back To Top

<ArrowUp size={18}/>

</button>



</div>




</div>









{/* Bottom */}


<div

className="
pt-8
flex
flex-col
md:flex-row
items-center
justify-between
gap-4
text-sm
"

>



<p

className="
flex
items-center
gap-2
"

>

© {new Date().getFullYear()} Paras.
Made with

<Heart

size={16}

className="
text-red-500
fill-red-500
"

/>

in India

</p>





<div

className="
flex
gap-6
"

>


<a

href="#"

className="
hover:text-cyan-400
"

>
Privacy Policy
</a>


<a

href="#"

className="
hover:text-cyan-400
"

>
Terms
</a>



</div>



</div>





</div>


</footer>

)

}


export default Footer;