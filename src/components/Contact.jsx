import React from 'react';

export default function Contact() {
    return (
      <section id="contact" className="bg-gray-200 py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="mb-4">Feel free to reach out to me at any time!</p>
          <a
            href="mailto:bashar.usif@gmail.com"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Email Me
          </a>
        </div>
      </section>
    );
  }
  