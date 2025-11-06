import { Linkedin, Twitter, Mail } from 'lucide-react';
// import { SiX } from '@icons-pack/react-simple-icons';
import { SiGithub } from '@icons-pack/react-simple-icons';

export default function CallToAction() {
    const linkedInUrl = "https://www.linkedin.com/in/alfred-de-la-costa";
    const gitHubUrl = "https://github.com/alfred-delacosta";

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Like What You See?
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Let's build something secure, scalable, and exceptional together. 
          Whether you're hiring for a team or need a custom solution, I'm ready.
        </p>

        {/* CTA Button */}
        <a
          href="/contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-all hover:shadow-xl transform hover:-translate-y-1"
        >
          <Mail size={24} />
          Get in Touch
        </a>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-12">
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <Linkedin size={28} className="text-blue-700 group-hover:text-blue-800" />
          </a>
          <a
            href={gitHubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <SiGithub size={28} className="text-gray-800 group-hover:text-black" />
          </a>
          {/* <a
            href="https://x.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <SiX size={28} className="text-gray-800 group-hover:text-black" />
          </a> */}
        </div>

        {/* Subtext */}
        <p className="mt-8 text-sm text-gray-500">
          Open to full-time roles, consulting, and freelance development.
        </p>
      </div>
    </section>
  );
}