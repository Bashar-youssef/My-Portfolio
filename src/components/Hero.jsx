import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 text-white h-screen flex flex-col justify-center items-center text-center px-6 sm:px-10">
      <motion.h1
        className="text-4xl sm:text-6xl font-extrabold tracking-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Bashar Yousef
      </motion.h1>
      <motion.p
        className="text-lg sm:text-2xl mt-4 max-w-2xl"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Frontend Developer | Software Engineer
      </motion.p>
      <motion.p
        className="text-lg sm:text-xl mt-2 max-w-3xl"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        A dedicated software developer with exceptional experience in frontend
        development, transforming ideas into interactive and modern user
        experiences.
      </motion.p>
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <a
          href="#contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-full shadow-lg text-lg font-medium hover:bg-gray-100 hover:shadow-xl transition-all"
        >
          Contact Me
        </a>
      </motion.div>
      <motion.div
        className="absolute bottom-6 flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-gray-200 transition-colors"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-gray-200 transition-colors"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-gray-200 transition-colors"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </motion.div>
    </section>
  );
}
