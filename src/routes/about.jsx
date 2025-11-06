import { Briefcase, GraduationCap, Award, Calendar, Mail } from 'lucide-react';

export default function About() {
  return (
    <>
      {/* Hero: About Me */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Me</span>
            </h1>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed">
                I'm a <strong>full-stack engineer</strong> with a passion for building secure, scalable systems that solve real problems. 
                With over 10 years in software development, system administration, and cybersecurity, I bridge the gap between code, infrastructure, and defense.
              </p>
              <p className="mt-4 text-xl leading-relaxed">
                Certified <strong>CISSP</strong> and <strong>Security+</strong>, I don't just write code—I harden it. 
                From React applications to Node.js APIs, everything I build is designed with security, performance, and maintainability in mind.
              </p>
              <p className="mt-4 text-xl leading-relaxed">
                When I'm not coding, you'll find me reading my Bible, spending time with my wife and children, and doing various projects on my property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Timeline: Career History */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Journey</span>
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200"></div>

            {timeline.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex items-center mb-12 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Icon + Date */}
                <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10 ${
                  item.type === 'work' ? 'bg-blue-600' : item.type === 'edu' ? 'bg-indigo-600' : 'bg-green-600'
                }`}>
                  {item.type === 'work' && <Briefcase size={24} className="text-white" />}
                  {item.type === 'edu' && <GraduationCap size={24} className="text-white" />}
                  {item.type === 'cert' && <Award size={24} className="text-white" />}
                </div>

                {/* Content */}
                <div className={`ml-24 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar size={16} />
                      {item.date}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="text-blue-600 font-medium">{item.company}</p>
                    <p className="mt-2 text-gray-600">{item.desc}</p>
                  </div>
                </div>

                {/* Empty spacer */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's bring your vision to life with secure, scalable, and high-performance solutions.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-xl hover:bg-gray-100 transition-all hover:shadow-xl transform hover:-translate-y-1"
          >
            <Mail size={24} />
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}

const timeline = [
  {
    type: 'work',
    date: '10/2020 — 10/2025',
    title: 'Computer Scientist',
    company: 'United States Department of War (Defense)',
    desc: 'Architected multi-tenant C# .NET Core budget platform across distributed orgs; built responsive DataTables and Bootstrap UIs with HTML/CSS/JS/jQuery, 508-compliant features, and zero-downtime EF Core migrations via Azure DevOps CI/CD.',
  },
  {
    type: 'cert',
    date: '12/2021',
    title: 'CISSP Certification',
    company: 'ISC²',
    desc: 'Certified Information Systems Security Professional — mastered risk management, cryptography, and security architecture.',
  },
  {
    type: 'work',
    date: '07/2019 — 10/2020',
    title: 'Programmer 3',
    company: 'Integrits Corp',
    desc: 'Solo-architected Vue.js v1 SPAs with Vuetify/HTML/CSS/JS on SharePoint; leveraged SharePoint REST API for auth, file I/O, and data persistence in DoD CUI environment, delivering tailored purchase-request and unit-homepage tools to HQ leadership.',
  },
  {
    type: 'edu',
    date: '2018 — 2019',
    title: 'B.S. Computer Science',
    company: 'California State University - Monterey Bay',
    desc: 'Graduated with Distinction',
  },
  {
    type: 'cert',
    date: '04/2019',
    title: 'Security+ CE Certification',
    company: 'CompTIA',
    desc: 'CompTIA Security+',
  },
  {
    type: 'work',
    date: '08/2018 — 07/2019',
    title: 'System Administrator 2',
    company: 'InuTeq',
    desc: 'Administered 20+ Windows workstations, 3 Windows servers, and IP cameras at the NASA Armstrong Flight Research Center\' Flight Loads Laboratory; enforced NIST-rooted LGPO policies via PowerShell automation, achieving 100% compliance with CISO audits in regulated environment.',
  },
  {
    type: 'work',
    date: '05/2016 — 08/2018',
    title: 'Senior Field Service Technician',
    company: 'GCS',
    desc: 'Delivered VIP on-demand IT support for the NASA Armstrong Flight Research Center\'s Center Director, execs, and employees; remotely/desk-side troubleshot Windows/Mac/iOS devices, installed software, performed virus/malware scans and removal, and hardened classified systems.',
  },
  {
    type: 'work',
    date: '11/2015 — 05/2016',
    title: 'Deployment/Refresh Technician',
    company: 'TJ Westlake, LLC',
    desc: 'Deployed 4+ Mac/PC/Windows Tablet/Linux systems daily with peripherals across multi-site NASA campuses; executed desk-side setup, data migrations, and functionality checks under strict SLAs.',
  }
];