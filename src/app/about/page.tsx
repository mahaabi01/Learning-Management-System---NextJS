import Image from "next/image";

function About() {
  return (
    <div className="sm:flex items-center max-w-screen-xl mx-auto p-6">
      <div className="sm:w-1/2 p-10 flex justify-center">
        <div className="relative w-[400px] h-[300px]">
          <Image 
            alt="About Us Image" 
            src="https://i.imgur.com/WbQnbas.png" 
            layout="intrinsic"
            width={400} 
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
            About us
          </span>
          <h2 className="my-4 font-bold text-3xl sm:text-4xl">
            About <span className="text-indigo-600">LMS</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our Learning Management System (LMS) is a powerful platform designed
            to connect teachers and students, enabling seamless delivery of
            educational content. Built with Next.js, Tailwind CSS, and MongoDB,
            our system provides a user-friendly experience for managing courses,
            lessons, and student progress.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
