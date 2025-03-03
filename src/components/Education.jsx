import React from "react";

export default function Education() {
  return (
    <section id="education" className="bg-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Education</h2>
        <div className="text-gray-700">
          <p>
            <span className="font-semibold">University:</span> ASPU - Al-sham
            Private University
          </p>
          <p>
            <span className="font-semibold">Degree:</span> Software Engineering
          </p>
          <p>
            <span className="font-semibold">Years:</span> 2019 - 2024
          </p>
          <p>
            <span className="font-semibold">Key Projects:</span>
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>
              <span className="font-semibold">Children’s Toy Store:</span> A
              platform providing tailored recommendations for children’s growth
              journey.
            </li>
            <li>
              <span className="font-semibold">
                Website Revamp for Cham Wings Airlines:
              </span>{" "}
              A comprehensive redesign to enhance online presence and user
              experience.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
