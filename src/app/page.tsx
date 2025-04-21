
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-white p-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Welcome to the Learning Management System
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Your centralized platform for managing courses, tracking progress, and enhancing your learning journey.
        </p>
        <div className="space-x-4">
          <a href="/home" className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
            Get Started
          </a>
        </div>
      </div>
    </main>
  );
}
