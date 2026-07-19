import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  ExternalLink,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";


const certificates = 

 [
    {
        "title": "Web Development Internship",
        "issuer": "Certification Authority",
        "year": "2025",
        "image": "/certificates/web-development.webp",
        "link": "#"
    },
    
    
    {
        "title": "CodeRush '24 Hackathon",
        "issuer": "BBDITM / IEEE",
        "year": "2026",
        "image": "/certificates/coderush-hackathon.webp",
        "link": "#"
    },
    {
        "title": "Full-Stack Development Workshop",
        "issuer": "GUVI & HCL",
        "year": "2026",
        "image": "/certificates/full-stack-development.webp",
        "link": "#"
    },
    {
        "title": "Volunteer Logo Designing",
        "issuer": "Logo Design Organizers",
        "year": "2025",
        "image": "/certificates/volunteer-logo-design-cert.webp",
        "link": "#"
    },
   
    


];




const CertificatesSection = () => {

    const [selectedImage, setSelectedImage] = useState(null);

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
text-gray-900
dark:text-white
"
>

My
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
 Certificates
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

Professional certifications and achievements
that helped me improve my skills.

</p>



</motion.div>







{/* Cards */}


<div
className="
grid
md:grid-cols-2
lg:grid-cols-2
gap-8
"
>


{
certificates.map((certificate,index)=>(


<motion.div

key={certificate.title}

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



{/* Image */}


<div
className="
relative


overflow-hidden
"
>


<img

src={certificate.image}

alt={certificate.title}

loading="lazy"

className="
w-full
h-full
object-cover
group-hover:scale-110
transition-transform
duration-500
"

/>


<div
className="
absolute
inset-0
"
/>



<div
className="
absolute
top-4
left-4
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

<Award size={25}/>

</div>


</div>







{/* Content */}


<div
className="
p-6
"
>


<h3
className="
text-xl
font-black
text-gray-900
dark:text-white
"
>

{certificate.title}

</h3>



<p
className="
mt-2
text-gray-500
dark:text-gray-400
"
>

{certificate.issuer}

</p>




<div
className="
flex
items-center
gap-2
mt-4
text-sm
text-cyan-500
font-semibold
"
>

<Calendar size={16}/>

{certificate.year}

</div>




<button
  onClick={() => setSelectedImage(certificate.image)}
  className="
  mt-6
  inline-flex
  items-center
  gap-2
  px-5
  py-3
  rounded-full
  bg-linear-to-r
  from-cyan-500
  to-purple-600
  text-white
  font-bold
  text-sm
  hover:scale-105
  transition
  "
>
  View Certificate
  <ExternalLink size={16} />
</button>



</div>



</motion.div>


))
}


</div>





</div>


<div className="mt-12 flex justify-center">
    <Link

to="/certificates"

className="
flex
items-center
justify-center
gap-2

px-8
py-4
rounded-full
bg-linear-to-r
from-purple-600
to-pink-600
text-white
font-bold
shadow-xl
"

>

View All Certificates

<ArrowRight size={20}/>

</Link>
</div>

{selectedImage && (
  <div
    className="
    fixed
    inset-0
    z-50
    bg-black/80
    backdrop-blur-sm
    flex
    items-center
    justify-center
    p-4
    "
    onClick={() => setSelectedImage(null)}
  >
    <motion.div
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.7, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="relative max-w-5xl w-full"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        onClick={() => setSelectedImage(null)}
        className="
        absolute
        -top-4
        -right-4
        w-10
        h-10
        rounded-full
        bg-white
        text-black
        text-xl
        font-bold
        shadow-lg
        hover:bg-red-500
        hover:text-white
        transition
        "
      >
        ✕
      </button>

      <img
        src={selectedImage}
        alt="Certificate"
        className="
        w-full
        max-h-[90vh]
        object-contain
        rounded-2xl
        shadow-2xl
        "
      />
    </motion.div>
  </div>
)}



</section>

)

}


export default CertificatesSection;