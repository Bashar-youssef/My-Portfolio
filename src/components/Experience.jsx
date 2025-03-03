import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Training & Experience
        </h2>
        <div className="text-gray-700">
          <p>
            <span className="font-semibold">Company:</span> Smart Soft
          </p>
          <p>
            <span className="font-semibold">Role:</span> React.js Developer
          </p>
          <p>
            <span className="font-semibold">Period:</span> October 10, 2022 -
            January 9, 2023
          </p>
          <p>
            <span className="font-semibold">Hours:</span> 400+ hours
          </p>
          <p>
            <span className="font-semibold">Responsibilities:</span>
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>
              Developed reusable components and optimized performance in
              React.js.
            </li>
            <li>
              Collaborated with teams to build scalable and user-friendly
              applications.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
