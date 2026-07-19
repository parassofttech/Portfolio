import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

import {
  Search,
  Code2,
  Database,
  Server,
  BrainCircuit,
  Boxes,
  Trophy,
  Sparkles,
  Filter,
} from "lucide-react";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
  FaJs,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiFirebase,
  SiVite,
  SiPostman,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 size={22} />,
    skills: [
      {
        name: "Java",
        icon: <FaJava />,
        level: 85,
        color: "text-red-600",
      },
      {
        name: "JavaScript",
        icon: <FaJs />,
        level: 90,
        color: "text-yellow-400",
      },
      {
        name: "Python",
        icon: <FaPython />,
        level: 70,
        color: "text-blue-500",
      },
      {
        name: "C Language",
        icon: <Code2 />,
        level: 80,
        color: "text-cyan-500",
      },
    ],
  },

  {
    title: "Core Computer Science",
    icon: <BrainCircuit size={22} />,
    skills: [
      {
        name: "Data Structures & Algorithms",
        icon: <BrainCircuit />,
        level: 85,
        color: "text-purple-500",
      },
      {
        name: "Object Oriented Programming",
        icon: <Boxes />,
        level: 88,
        color: "text-pink-500",
      },
      {
        name: "Problem Solving",
        icon: <Sparkles />,
        level: 90,
        color: "text-cyan-500",
      },
    ],
  },

  {
    title: "Frontend Development",
    icon: <FaReact size={22} />,
    skills: [
      {
        name: "HTML5",
        icon: <FaHtml5 />,
        level: 95,
        color: "text-orange-500",
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt />,
        level: 92,
        color: "text-blue-500",
      },
      {
        name: "JavaScript",
        icon: <FaJs />,
        level: 90,
        color: "text-yellow-400",
      },
      {
        name: "React.js",
        icon: <FaReact />,
        level: 92,
        color: "text-cyan-500",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        level: 95,
        color: "text-sky-400",
      },
    ],
  },

  {
    title: "Backend Development",
    icon: <Server size={22} />,
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs />,
        level: 90,
        color: "text-green-500",
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
        level: 88,
        color: "text-gray-700 dark:text-white",
      },
      {
        name: "REST APIs",
        icon: <Server />,
        level: 90,
        color: "text-indigo-500",
      },
      {
        name: "Authentication",
        icon: <Sparkles />,
        level: 85,
        color: "text-green-500",
      },
      {
        name: "CRUD Operations",
        icon: <Database />,
        level: 90,
        color: "text-purple-500",
      },
      {
        name: "API Integration",
        icon: <Code2 />,
        level: 90,
        color: "text-cyan-500",
      },
    ],
  },

  {
    title: "Database",
    icon: <Database size={22} />,
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        level: 86,
        color: "text-green-600",
      },
      {
        name: "MySQL",
        icon: <SiMysql />,
        level: 80,
        color: "text-blue-500",
      },
    ],
  },

  {
    title: "Tools & Technologies",
    icon: <Trophy size={22} />,
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt />,
        level: 90,
        color: "text-orange-600",
      },
      {
        name: "GitHub",
        icon: <FaGithub />,
        level: 90,
        color: "text-black dark:text-white",
      },
      {
        name: "Firebase",
        icon: <SiFirebase />,
        level: 80,
        color: "text-yellow-500",
      },
      {
        name: "Postman",
        icon: <SiPostman />,
        level: 85,
        color: "text-orange-500",
      },
      {
        name: "Vite",
        icon: <SiVite />,
        level: 86,
        color: "text-purple-500",
      },
    ],
  },
];

const categories = [
  "All",
  "Programming",
  "Core CS",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
];

const SkillsPage = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = useMemo(() => {
    return skillCategories.filter((category) => {
      const categoryMatch =
        activeCategory === "All" ||
        category.title.toLowerCase().includes(activeCategory.toLowerCase());

      const skillMatch =
        search === "" ||
        category.skills.some((skill) =>
          skill.name.toLowerCase().includes(search.toLowerCase())
        );

      return categoryMatch && skillMatch;
    });
  }, [search, activeCategory]);

  return (
    <section className="min-h-screen bg-white dark:bg-slate-950">

      {/* Hero */}

      <div className="relative overflow-hidden">

        <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-transparent to-purple-600/10"></div>

        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-cyan-500/20 blur-[140px]"></div>

        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-purple-500/20 blur-[140px]"></div>

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-32 pb-20">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            className="text-center"
          >

            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-cyan-500/10 text-cyan-500 font-semibold">

              <Sparkles size={18} />

              Technical Skills

            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-gray-900 dark:text-white">

              My

              <br />

              <span className="bg-linear-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">

                Skills

              </span>

            </h1>

            <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-8">

              My technical expertise includes Full Stack Development,
              Data Structures & Algorithms, REST APIs, Authentication,
              Database Management, Data Science and Artificial Intelligent and modern JavaScript technologies.

            </p>

          </motion.div>

          {/* Stats */}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

            <div className="rounded-3xl bg-white dark:bg-slate-900 p-6 shadow-xl text-center">
              <h2 className="text-4xl font-black text-cyan-500">20+</h2>
              <p className="mt-2 text-gray-500">Technologies</p>
            </div>

            <div className="rounded-3xl bg-white dark:bg-slate-900 p-6 shadow-xl text-center">
              <h2 className="text-4xl font-black text-green-500">10+</h2>
              <p className="mt-2 text-gray-500">Projects</p>
            </div>

            <div className="rounded-3xl bg-white dark:bg-slate-900 p-6 shadow-xl text-center">
              <h2 className="text-4xl font-black text-purple-500">5+</h2>
              <p className="mt-2 text-gray-500">Certifications</p>
            </div>

            <div className="rounded-3xl bg-white dark:bg-slate-900 p-6 shadow-xl text-center">
              <h2 className="text-4xl font-black text-orange-500">100%</h2>
              <p className="mt-2 text-gray-500">Passion</p>
            </div>

          </div>

          {/* Search */}

          <div className="relative max-w-3xl mx-auto mt-14">

            <Search
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2  text-gray-400"
            />

            <input
              type="text"
              placeholder="Search skills..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-14 pr-5 py-5 rounded-2xl border dark:text-white border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 outline-none focus:ring-2 focus:ring-cyan-500"
            />

          </div>

          {/* Category buttons Part-2 me continue hoga */}
                    {/* Category Filter */}

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            {categories.map((category) => (

              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-linear-to-r from-cyan-500 to-purple-600 text-white shadow-xl"
                    : "bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 dark:text-white hover:border-cyan-500 hover:text-cyan-500"
                }`}
              >
                <span className="flex items-center gap-2">
                  <Filter size={16} />
                  {category}
                </span>
              </button>

            ))}

          </div>

        </div>

      </div>

      {/* Skills Grid */}

      <div className="max-w-7xl mx-auto px-5 lg:px-8 pb-24">

        <div className="grid lg:grid-cols-2 gap-8">

          {filteredSkills.length > 0 ? (

            filteredSkills.map((category, index) => (

              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -8 }}
                className="
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

                {/* Card Header */}

                <div className="p-7 border-b border-gray-100 dark:border-slate-800">

                  <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-cyan-500 to-purple-600 text-white flex items-center justify-center text-2xl">

                      {category.icon}

                    </div>

                    <div>

                      <h2 className="text-2xl font-black text-gray-900 dark:text-white">

                        {category.title}

                      </h2>

                      <p className="text-gray-500 mt-1">

                        {category.skills.length} Skills

                      </p>

                    </div>

                  </div>

                </div>

                {/* Skills */}

                <div className="p-7 space-y-7">

                  {category.skills.map((skill) => (

                    <div key={skill.name}>

                      <div className="flex items-center justify-between mb-3">

                        <div className="flex items-center gap-3">

                          <span className={`text-3xl ${skill.color}`}>

                            {skill.icon}

                          </span>

                          <span className="font-bold text-gray-800 dark:text-gray-200">

                            {skill.name}

                          </span>

                        </div>

                        <span className="text-cyan-500 font-bold">

                          {skill.level}%

                        </span>

                      </div>

                      {/* Progress */}

                      <div className="h-3 rounded-full bg-gray-200 dark:bg-slate-800 overflow-hidden">

                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${skill.level}%`,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            ease: "easeOut",
                          }}
                          className="h-full rounded-full bg-linear-to-r from-cyan-500 via-blue-500 to-purple-600"
                        />

                      </div>

                    </div>

                  ))}

                </div>

              </motion.div>

            ))

          ) : (

            <div className="col-span-full py-24 text-center">

              <Code2
                size={80}
                className="mx-auto text-cyan-500"
              />

              <h2 className="mt-6 text-3xl font-black text-gray-900 dark:text-white">

                No Skills Found

              </h2>

              <p className="mt-3 text-gray-500">

                Try searching with another keyword.

              </p>

            </div>

          )}

        </div>

      </div>

      {/* Part 3 Starts Here */}

            {/* Learning Timeline */}

      <section className="max-w-7xl mx-auto px-5 lg:px-8 pb-24">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <p className="uppercase tracking-[4px] text-cyan-500 font-bold">

            Journey

          </p>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-gray-900 dark:text-white">

            Learning Timeline

          </h2>

        </motion.div>

        <div className="relative">

          <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-linear-to-b from-cyan-500 to-purple-600 -translate-x-1/2"></div>

          {[
            {
              year: "2024",
              title: "Programming Foundation",
              desc: "Started learning C, Java, Python, HTML, CSS and JavaScript.",
            },
            {
              year: "2025",
              title: "Frontend Development",
              desc: "Built multiple responsive React.js and Tailwind CSS projects.",
            },
            {
              year: "2026",
              title: "Full Stack Development",
              desc: "Worked with Node.js, Express.js, MongoDB, REST APIs, Authentication and CRUD applications.",
            },
          ].map((item, index) => (

            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative mb-12 flex ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >

              <div className="bg-white dark:bg-slate-900 shadow-xl rounded-3xl p-6 md:w-[46%] border border-gray-200 dark:border-slate-800">

                <span className="text-cyan-500 font-black">

                  {item.year}

                </span>

                <h3 className="mt-3 text-2xl font-black text-gray-900 dark:text-white">

                  {item.title}

                </h3>

                <p className="mt-4 text-gray-600 dark:text-gray-400 leading-7">

                  {item.desc}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

    

     

      {/* CTA */}

      <section className="max-w-7xl mx-auto px-5 lg:px-8 pb-28">

        <motion.div
          initial={{ opacity: 0, scale: .9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-[40px] bg-linear-to-r from-cyan-500 via-blue-500 to-purple-600 text-white text-center px-8 py-20 shadow-2xl"
        >

          <h2 className="text-4xl md:text-5xl font-black">

            Let's Build Something Amazing

          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-lg leading-8 text-white/90">

            Passionate Full Stack Developer focused on building
            modern, scalable and user-friendly web applications.
            Always excited to learn new technologies and solve
            real-world problems.

          </p>

          <a
            href="/contact"
            className="inline-flex mt-10 px-8 py-4 rounded-full bg-white text-cyan-600 font-bold hover:scale-105 transition"
          >

            Hire Me

          </a>

        </motion.div>

      </section>

    </section>
  );
};

export default SkillsPage;