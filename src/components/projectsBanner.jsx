import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Secure Dashboard Pro',
      desc: 'A full-stack admin panel built with React, Node.js, and PostgreSQL. Features real-time analytics, role-based access control, and end-to-end encryption. Deployed on AWS with CI/CD via GitHub Actions.',
      img: '/project-1.jpg',
      live: 'https://example.com',
      github: 'https://github.com',
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    },
    {
      title: 'ThreatGuard Monitoring',
      desc: 'Real-time cybersecurity monitoring tool using ELK Stack and custom agents. Detects anomalies, logs intrusions, and sends encrypted alerts. Reduced response time by 80% in enterprise environments.',
      img: '/project-2.jpg',
      live: 'https://example.com',
      github: 'https://github.com',
      tech: ['ELK', 'Python', 'Docker', 'SIEM'],
    },
    {
      title: 'DevSync Platform',
      desc: 'Internal developer portal with automated workflows, secure code scanning, and compliance checks. Built with Next.js and Prisma. Integrates with Git, Jira, and Slack for seamless DevSecOps.',
      img: '/project-3.jpg',
      live: 'https://example.com',
      github: 'https://github.com',
      tech: ['Next.js', 'Prisma', 'TypeScript', 'GitHub API'],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Projects</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Real-world solutions built with security, performance, and scalability in mind.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((proj, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={idx}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  isEven ? 'md:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image - Left on odd, Right on even */}
                <div className={`group relative overflow-hidden rounded-2xl shadow-xl ${isEven ? 'md:order-2' : ''}`}>
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content - Right on odd, Left on even */}
                <div className={`space-y-6 ${isEven ? 'md:order-1 md:text-right' : ''}`}>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {proj.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {proj.desc}
                  </p>

                  <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : ''}`}>
                    {proj.tech.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-50 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className={`flex gap-4 ${isEven ? 'md:justify-end' : ''}`}>
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all hover:shadow-md"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all"
                    >
                      <Github size={18} />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}