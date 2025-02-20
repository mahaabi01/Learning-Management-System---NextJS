function About() {
  return (
    <div className="sm:flex items-center max-w-screen-xl">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <img src="https://i.imgur.com/WbQnbas.png" />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
            About us
          </span>
          <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
            About <span className="text-indigo-600">LMS</span>
          </h2>
          <p className="text-gray-700">
          Our Learning Management System (LMS) is a powerful platform designed to connect teachers and students, enabling seamless delivery of educational content. Built with Next.js, Tailwind CSS, and MongoDB, our system provides a user-friendly experience for managing courses, lessons, and student progress. Teachers can create and sell their courses, while students can easily access, track, and complete their learning materials. With a focus on performance, security, and scalability, our LMS aims to enhance online education and make learning more accessible to everyone.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
