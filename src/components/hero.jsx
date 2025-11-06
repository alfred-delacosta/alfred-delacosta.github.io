import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Alfred De La Costa</span>
            </h1>
            <p className="text-xl text-gray-600 font-medium">
              Software Engineer and IT Professional
            </p>
            <p className="text-lg text-gray-500 max-w-lg">
              I design and build secure, high-performance systems from code to cloud. With deep expertise in full-stack development, enterprise system administration, and defense-grade cybersecurity, I deliver resilient solutions without compromise.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/projects"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Photo Placeholder */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white rounded-full p-2 shadow-xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 border-4 border-white">
                  <img
                    src="/me.png"
                    alt="Alfred De La Costa's Picture"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}