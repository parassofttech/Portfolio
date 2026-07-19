import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Sun,
  Moon,
  Download,
//   Github,
 // Linkedin,
  Mail,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Skills",
    path: "/skills",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Experience",
    path: "/experience",
  },
  {
    name: "Certificates",
    path: "/certificates",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;

    if (darkMode) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDarkMode(!darkMode);
  };

  return (
    <>
      <motion.nav
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "backdrop-blur-2xl bg-white/80 dark:bg-slate-950/80 border-b border-gray-200 dark:border-slate-800 shadow-xl"
            : "bg-transparent dark:bg-slate-950/80"
        }`}
      >
        <div className=" mx-auto px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            {/* =======================
                    Logo
            ======================== */}

            <Link
              to="/"
              className="group flex items-center gap-3"
            >
              <motion.div
                whileHover={{
                  rotate: 360,
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="w-12 h-12 rounded-2xl bg-linear-to-r from-cyan-500 via-blue-600 to-purple-600 flex items-center justify-center text-white text-xl font-bold shadow-xl"
              >
                P
              </motion.div>

              <div>
                <h2 className="text-xl font-black tracking-wide bg-linear-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
                  Paras
                </h2>

                <p className="text-xs text-gray-500 dark:text-gray-400 tracking-widest uppercase">
                  Full Stack Developer
                </p>
              </div>
            </Link>

            {/* =======================
                Desktop Navigation
            ======================== */}

            <ul className="hidden lg:flex items-center gap-2">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `relative px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden ${
                        isActive
                          ? "text-white"
                          : "text-gray-700 dark:text-gray-300 hover:text-cyan-500"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <motion.span
                            layoutId="navbar-active"
                            className="absolute inset-0 rounded-full bg-linear-to-r from-cyan-500 via-blue-500 to-purple-600"
                            transition={{
                              type: "spring",
                              stiffness: 350,
                              damping: 28,
                            }}
                          />
                        )}

                        <span className="relative z-10">
                          {item.name}
                        </span>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* =======================
                  Right Side
            ======================== */}

            <div className="hidden lg:flex items-center gap-4">

              <motion.a
                whileHover={{
                  y: -3,
                }}
                href="https://github.com/parassofttech"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full border border-gray-300 
                dark:text-white dark:border-white flex items-center justify-center hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                <FaGithub size={18} />
              </motion.a>

              <motion.a
                whileHover={{
                  y: -3,
                }}
                href="https://in.linkedin.com/in/paras-sahu-02849029a"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full border border-gray-300 dark:text-white  dark:border-white flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={18} />
              </motion.a>

              <motion.a
                whileHover={{
                  y: -3,
                }}
                href="mailto:paras2115s@gmail.com"
                className="w-11 h-11 rounded-full border border-gray-300 dark:text-white  dark:border-white flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                <Mail size={18} />
              </motion.a>

              <button
                onClick={toggleTheme}
                className="w-11 h-11 rounded-full border border-gray-300 dark:text-white  
                dark:border-white  flex items-center justify-center transition-all duration-300 hover:rotate-180"
              >
                {darkMode ? (
                  <Sun size={18} />
                ) : (
                  <Moon size={18} />
                )}
              </button>

              <motion.a
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                href="/resume-paras.pdf"
                download
                className="group flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 font-semibold shadow-xl"
              >
                <Download size={18} />

                Resume

                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.a>

              <button
                onClick={() => setMenuOpen(true)}
                className="lg:hidden"
              >
                <Menu />
              </button>
            </div>
                        {/* ==========================
                 Mobile Menu Button
            =========================== */}

            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden w-12 h-12 rounded-xl border border-gray-200 dark:text-white  dark:border-white flex items-center justify-center bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ==========================================
                  Mobile Navigation
      ========================================== */}

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-90 lg:hidden"
            />

            {/* Drawer */}

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
              }}
              className="fixed top-0 right-0 h-full w-82.5 bg-white 
              dark:text-white   dark:bg-slate-950 z-100 shadow-2xl lg:hidden overflow-y-auto"
            >
              {/* Header */}

              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-800">
                <div>
                  <h2 className="text-2xl font-black bg-linear-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Paras
                  </h2>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Full Stack Developer
                  </p>
                </div>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-11 h-11 rounded-xl bg-gray-100 dark:bg-slate-800 flex items-center justify-center"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Navigation */}

              <div className="px-6 py-8 space-y-3">
                {navLinks.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{
                      opacity: 0,
                      x: 40,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-5 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                          isActive
                            ? "bg-linear-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                            : "hover:bg-gray-100 dark:hover:bg-slate-800"
                        }`
                      }
                    >
                      <span>{item.name}</span>

                      <ChevronRight size={18} />
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}

              <div className="mx-6 border-t border-gray-200 dark:border-slate-800" />

              {/* Social Icons */}

              <div className="px-6 py-8">
                <h3 className="text-sm uppercase tracking-[4px] text-gray-500 mb-5">
                  Connect
                </h3>

                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ y: -4 }}
                    href="https://github.com/parassofttech"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center"
                  >
                    <FaGithub size={20} />
                  </motion.a>

                  <motion.a
                    whileHover={{ y: -4 }}
                    href="https://in.linkedin.com/in/paras-sahu-02849029a"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center"
                  >
                    <FaLinkedin size={20} />
                  </motion.a>

                  <motion.a
                    whileHover={{ y: -4 }}
                    href="mailto:paras2115s@gmail.com"
                    className="w-12 h-12 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center"
                  >
                    <Mail size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Theme */}

              <div className="px-6">
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg"
                >
                  {darkMode ? (
                    <>
                      <Sun size={20} />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <Moon size={20} />
                      Dark Mode
                    </>
                  )}
                </button>
              </div>

              {/* Resume */}

              <div className="p-6">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  href="/resume-paras.pdf"
                  download
                  className="w-full flex items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-purple-600 to-pink-600 text-white py-4 font-bold shadow-xl"
                >
                  <Download size={20} />
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
          </>
  );
};

export default Navbar;