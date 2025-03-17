import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl bg-white shadow-lg rounded-2xl p-8 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">About Our LMS</h1>
        <p className="text-gray-700 text-lg">
          Welcome to our **Learning Management System (LMS)** – a platform
          designed to enhance online education. We provide a seamless learning
          experience for students and educators with features like interactive
          courses, progress tracking, and certification programs.
        </p>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Why Choose Us?
          </h2>
          <ul className="text-gray-600 text-md mt-2 list-disc list-inside">
            <li>📚 Wide range of courses</li>
            <li>🎓 Interactive learning experience</li>
            <li>✅ Easy progress tracking</li>
            <li>🏆 Certification programs</li>
            <li>💡 24/7 support from mentors</li>
          </ul>
        </div>
        <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-lg">
          Explore Courses
        </button>
      </div>
    </div>
  );
}

export default About;
