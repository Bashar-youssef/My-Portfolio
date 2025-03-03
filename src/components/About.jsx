import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700">
          I am a passionate Software Engineer with a strong foundation in
          building modern, efficient, and user-focused web applications. I hold
          a degree in Software Engineering from{" "}
          <span className="font-semibold">
            ASPU - Al-sham Private University
          </span>
          , where I developed a deep understanding of software development
          principles.
        </p>
        <p className="text-gray-700 mt-4">
          My curiosity and love for technology drive me to explore innovative
          solutions and tackle challenges with creativity and precision. I value{" "}
          <span className="font-semibold">
            continuous learning, collaboration, and delivering impactful results
          </span>
          .
        </p>

        <div className="mt-6">
          <p className="text-lg">
            Check out my work on GitHub or connect with me on LinkedIn:
          </p>
          <div className="mt-4">
            <a
              href="https://github.com/Bashar-youssef?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 mr-4"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
