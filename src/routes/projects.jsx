import { ExternalLink, Github, Mail } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Photo Metadata Remover',
      desc: 'A powerful web application designed to strip metadata from images effortlessly using ImageMagick. Built with Node.js, Express.js, React.js, and Material UI, this app combines performance with a modern, user-friendly interface. 🚀 It also includes an automatic cleanup feature to delete processed images from the server after a set time for enhanced security. 🕒',
      img: '/pmr.png',
      live: 'https://pmr.ajscreation.com',
      github: 'https://github.com/alfred-delacosta/photo-metadata-remover',
      tech: ['Node.js', 'React', 'Express', 'MaterialUI', 'ImageMagick'],
    },
    {
      title: 'yt-dlp Library',
      desc: 'A full-stack web application built off of yt-dlp that allows you to download videos and audio from the web and store them in your own library.',
      img: '/yt-dlp-library.png',
      live: '#',
      github: 'https://github.com/alfred-delacosta/yt-dlp-library',
      tech: ['React', 'Node.js', 'yt-dlp', 'Bootstrap', 'Node.js', 'Express.js', 'MySQL'],
    },
    {
      title: 'Video to MP4',
      desc: "A web application that uses Handbrake CLI to reduce the size of videos and export them into mp4's. Application is mobile friendly.",
      img: 'video-to-mp4.png',
      live: '#',
      github: 'https://github.com/alfred-delacosta/Video-to-MP4',
      tech: ['Node.js', 'React', 'Express.js', 'EJS', 'HandBrake', 'SQLite', 'Socket.io', ],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            See What I've <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Built</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Each project has been crafted with meticulous care to solve real problems.
          </p>
        </div>
      </section>

      {/* Projects Grid - Clean Cards with Hover Shadow */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">{proj.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{proj.desc}</p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-2">
                    {proj.live !== "#" && (
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all"
                      >
                        <ExternalLink size={16} />
                        Live
                      </a>
                    )}
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Want Something Like This?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's build your next secure, high-impact solution — together.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-xl hover:bg-gray-100 transition-all hover:shadow-xl transform hover:-translate-y-1"
          >
            <Mail size={24} />
            Hire Me
          </a>
        </div>
      </section>
    </>
  );
}