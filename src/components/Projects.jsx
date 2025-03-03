import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
        <div className="text-gray-700">
          <div className="mb-6">
            <h3 className="font-semibold text-xl">Children’s Toy Store</h3>
            <p>
              Developed an e-commerce platform offering personalized
              recommendations for children’s growth, integrating user behavior
              analytics and modern UI/UX practices.
            </p>
            <a
              href="https://github.com/Bashar-youssef/LittleDreamersFrontEnd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View on GitHub
            </a>
          </div>
          <div>
            <h3 className="font-semibold text-xl">
              Cham Wings Airlines Website Revamp
            </h3>
            <p>
              Led a redesign project to modernize the website and improve user
              experience, implementing advanced front-end technologies and
              responsive design.
            </p>
            <a
              href="https://github.com/nourbakleh1/Cham_Wings_frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
