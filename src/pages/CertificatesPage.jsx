import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Search,
  Filter,
  Trophy,
  Medal,
  GraduationCap,
} from "lucide-react";

const certificates = [
 
 {
    id: 4,
    title: "Web Development Internship",
    issuer: "Certification Authority",
    year: "2025",
    category: "Internship",
    image: "/certificates/web-development.webp",
    link: "#",
  },
  {
    id: 1,
    title: "Python Basic Program",
    issuer: "Great Learning Academy",
    year: "2024",
    category: "Programming",
    image: "/certificates/basic-python.webp",
    link: "#",
  },
  {
    id: 2,
    title: "Introduction to Front-End Development",
    issuer: "Simplilearn SkillUp",
    year: "2024",
    category: "Web Development",
    image: "/certificates/frontend-development-cert.webp",
    link: "#",
  },
  
  
  {
    id: 5,
    title: "Volunteer Logo Designing",
    issuer: "Logo Design Organizers",
    year: "2025",
    category: "Volunteer",
    image: "/certificates/volunteer-logo-design-cert.webp",
    link: "#",
  },
  {
    id: 6,
    title: "CodeRush '24 Hackathon",
    issuer: "IEEE BBDITM",
    year: "2026",
    category: "Hackathon",
    image: "/certificates/coderush-hackathon.webp",
    link: "#",
  },
  {
    id: 7,
    title: "Full Stack Development Workshop",
    issuer: "GUVI & HCL",
    year: "2026",
    category: "Workshop",
    image: "/certificates/full-stack-development.webp",
    link: "#",
  },
  {
    id: 8,
    title: "Data Science & Machine Learning",
    issuer: "GUVI",
    year: "2026",
    category: "Data Science",
    image: "/certificates/data-science-and-ml.webp",
    link: "#",
  },
  {
    id: 3,
    title: "HTML Course Certification",
    issuer: "Mind Luster",
    year: "2024",
    category: "Web Development",
    image: "/certificates/html-certificate.webp",
    link: "#",
  },
  {
        title: "Viksit Bharat Young Leaders Dialogue",
        issuer: "Ministry of Youth Affairs and Sports (MY Bharat)",
        year: "2026",
        category: "Government",
        image: "/certificates/mybharat-certificate.webp",
        link: "#"
    },
    {
        title: "Startup Pitching Hackathon",
        issuer: "Babu Banarasi Das NITM / IEEE BBDITM",
        year: "2026",
        category: "Hackathon",
        image: "/certificates/startup-hackathon.webp",
        link: "#"
    },
];

const categories = [
  "All",
  "Programming",
  "Web Development",
  "Internship",
  "Workshop",
  "Hackathon",
  "Volunteer",
  "Data Science",
];

const CertificatesPage = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const filteredCertificates = useMemo(() => {
    return certificates.filter((item) => {
      const matchCategory =
        activeCategory === "All" ||
        item.category === activeCategory;

      const matchSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.issuer.toLowerCase().includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [search, activeCategory]);


  useEffect(()=>{

const handleKey = (e)=>{

if(e.key==="Escape"){

setSelectedCertificate(null);

}

};


window.addEventListener(
"keydown",
handleKey
);


return ()=>{

window.removeEventListener(
"keydown",
handleKey
);

};


},[]);
  return (
    <section className="min-h-screen bg-white dark:bg-slate-950">

      {/* Hero */}

      <div className="relative overflow-hidden">

        <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-purple-600/20 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-32 pb-20">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-cyan-500/10 text-cyan-500 font-semibold mb-6">

              <Award size={18} />

              My Achievements

            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight text-gray-900 dark:text-white">

              Professional

              <br />

              <span className="bg-linear-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">

                Certificates

              </span>

            </h1>

            <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-600 dark:text-gray-400 leading-8">

              A collection of certifications, workshops,
              hackathons and achievements that showcase
              my continuous learning journey in software
              development and modern technologies.

            </p>

          </motion.div>

          {/* Stats */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
          >

            <div className="rounded-3xl dark:text-white bg-white dark:bg-slate-900 shadow-xl p-6 text-center">

              <Trophy className="mx-auto text-yellow-500" size={38} />

              <h2 className="mt-4 text-4xl font-black">

                {certificates.length}

              </h2>

              <p className="text-gray-500 mt-2">

                Certificates

              </p>

            </div>

            <div className="rounded-3xl dark:text-white bg-white dark:bg-slate-900 shadow-xl p-6 text-center">

              <GraduationCap className="mx-auto text-cyan-500" size={38} />

              <h2 className="mt-4 text-4xl font-black">

                5+

              </h2>

              <p className="text-gray-500 mt-2">

                Learning Platforms

              </p>

            </div>

            <div className="rounded-3xl dark:text-white bg-white dark:bg-slate-900 shadow-xl p-6 text-center">

              <Award className="mx-auto text-purple-500" size={38} />

              <h2 className="mt-4 text-4xl font-black">

                2024-26

              </h2>

              <p className="text-gray-500 mt-2">

                Active Learning

              </p>

            </div>

            <div className="rounded-3xl dark:text-white bg-white dark:bg-slate-900 shadow-xl p-6 text-center">

              <Medal className="mx-auto text-green-500" size={38} />

              <h2 className="mt-4 text-4xl font-black">

                100%

              </h2>

              <p className="text-gray-500 mt-2">

                Verified Skills

              </p>

            </div>

          </motion.div>

          {/* Search */}

          <div className="mt-16">

            <div className="relative max-w-3xl mx-auto">

              <Search
                className="absolute left-5 top-1/2 -translate-y-1/2 dark:text-white text-gray-400"
                size={20}
              />

              <input
                type="text"
                placeholder="Search certificates..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-14 pr-5 py-5 rounded-2xl border border-gray-200 
                dark:text-white dark:border-slate-700 bg-white dark:bg-slate-900 outline-none focus:ring-2 focus:ring-cyan-500"
              />

            </div>

          </div>

          {/* Categories */}

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            {categories.map((category) => (

              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3   rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-linear-to-r from-cyan-500 to-purple-600  text-white"
                    : "bg-white dark:bg-slate-900 border border-gray-200 dark:text-white dark:border-slate-700 hover:border-cyan-500 "
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  <Filter size={16} />
                  {category}
                </span>
              </button>

            ))}

          </div>

        </div>

      </div>

      {/* Part 2 yaha se start hoga */}

      {/* Certificate Grid */}


<div
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
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
"

>


{
filteredCertificates.length > 0 ? (

filteredCertificates.map((certificate,index)=>(


<motion.div

key={certificate.id}

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
delay:index * 0.12
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
hover:shadow-2xl
transition
"

>



{/* Image */}


<div

className="
relative
h-64
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
duration-700
"

/>



{/* Overlay */}


<div

className="
absolute
inset-0
bg-linear-to-t
from-black/60
via-transparent
opacity-0
group-hover:opacity-100
transition
"

>




</div>






{/* Badge */}


<div

className="
absolute
top-4
left-4
px-4
py-2
rounded-full
bg-cyan-500
text-white
text-xs
font-bold
"

>

{certificate.category}

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
line-clamp-2
"

>

{certificate.title}

</h3>




<p

className="
mt-3
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
justify-between
mt-5
"

>


<span

className="
text-sm
font-bold
text-cyan-500
"

>

{certificate.year}

</span>



<span

className="
text-xs
px-3
py-1
rounded-full
bg-gray-100
dark:bg-slate-800
text-gray-600
dark:text-gray-300
"

>

Verified

</span>



</div>






<button

onClick={() => setSelectedCertificate(certificate)}

className="
mt-6
w-full
py-3
rounded-xl
bg-linear-to-r
from-cyan-500
to-purple-600
text-white
font-bold
hover:scale-105
transition
"

>

View Certificate

</button>




</div>





</motion.div>



))


)

:(


<div

className="
col-span-full
text-center
py-20
"

>

<h3

className="
text-3xl
font-black
text-gray-800
dark:text-white
"

>

No Certificate Found

</h3>


<p

className="
mt-3
text-gray-500
"

>

Try another search category

</p>


</div>


)


}




</motion.div>


</div>

{
selectedCertificate && (

<div

onClick={() => setSelectedCertificate(null)}

className="
fixed
inset-0
z-50
bg-black/80
backdrop-blur-md
flex
items-center
justify-center
p-4
"

>



<motion.div


initial={{
scale:0.7,
opacity:0
}}


animate={{
scale:1,
opacity:1
}}


transition={{
duration:0.3
}}


onClick={(e)=>e.stopPropagation()}


className="
relative
w-full
max-w-5xl
bg-white
dark:bg-slate-900
rounded-3xl
overflow-hidden
shadow-2xl
"

>





{/* Close Button */}


<button

onClick={()=>setSelectedCertificate(null)}

className="
absolute
right-4
top-4
z-20
w-10
h-10
rounded-full
bg-red-500
text-white
font-bold
text-xl
hover:scale-110
transition
"

>

×


</button>






{/* Image */}


<div

className="
bg-black
p-5
"

>


<img

src={selectedCertificate.image}

alt={selectedCertificate.title}

className="
w-full
max-h-[70vh]
object-contain
rounded-xl
"

/>


</div>







{/* Details */}


<div

className="
p-6
"

>


<h2

className="
text-2xl
font-black
text-gray-900
dark:text-white
"

>

{selectedCertificate.title}

</h2>




<p

className="
mt-2
text-gray-500
dark:text-gray-400
"

>

{selectedCertificate.issuer}

</p>





<div

className="
flex
flex-wrap
gap-4
mt-6
"

>


{/* Download */}


<a

href={selectedCertificate.image}

download

className="
px-6
py-3
rounded-xl
bg-green-500
text-white
font-bold
hover:scale-105
transition
"

>

Download

</a>







{/* Verify */}

{/* 
<a

href={selectedCertificate.link}

target="_blank"

rel="noreferrer"

className="
px-6
py-3
rounded-xl
bg-linear-to-r
from-cyan-500
to-purple-600
text-white
font-bold
hover:scale-105
transition
"

>

Verify Certificate

</a> */}



</div>




</div>





</motion.div>


</div>


)
}
    </section>
  );
};

export default CertificatesPage;