import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
    const linkedInUrl = "https://www.linkedin.com/in/alfred-de-la-costa";
    const gitHubUrl = "https://github.com/alfred-delacosta";
    const email = "alfred_delacosta@protonmail.com"
  return (
    <>
      {/* Hero CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Secure</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10">
            Have a project? Need a full-stack + security expert? I'm all ears.
          </p>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-all hover:shadow-xl transform hover:-translate-y-1"
          >
            <Mail size={24} />
            Email Me Now
          </a>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
              Connect With Me
            </h2>

            {/* Email */}
            <div className="flex items-center justify-center gap-4 mb-8 text-lg">
              <Mail size={28} className="text-blue-600" />
              <a
                href={`mailto:${email}`}
                className="font-mono text-gray-700 hover:text-blue-600 transition-colors"
              >
                {email}
              </a>
            </div>

            {/* Social Buttons */}
            <div className="flex justify-center gap-6">
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-all hover:shadow-md"
              >
                <Linkedin size={22} />
                LinkedIn
              </a>

              <a
                href={gitHubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-black transition-all hover:shadow-md"
              >
                <Github size={22} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}