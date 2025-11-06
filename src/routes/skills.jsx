import { Server, Database, Code2, Shield, Lock, Cloud, Mail } from 'lucide-react';
import { SiNodedotjs, SiExpress, SiReact, SiMysql } from 'react-icons/si';
import { Link } from 'react-router-dom';

export default function Skills() {
  return (
    <>
      {/* Hero: Tech Stack */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Tech Stack</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Tools & technologies I use to build secure, scalable systems
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Node.js */}
            <div className="group text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-green-100 rounded-2xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <SiNodedotjs size={48} className="text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Node.js</h3>
              <p className="text-sm text-gray-500">Backend Runtime</p>
            </div>

            {/* Express.js */}
            <div className="group text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                <SiExpress size={48} className="text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Express.js</h3>
              <p className="text-sm text-gray-500">Web Framework</p>
            </div>

            {/* React */}
            <div className="group text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <SiReact size={48} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">React</h3>
              <p className="text-sm text-gray-500">Frontend Library</p>
            </div>

            {/* MySQL */}
            <div className="group text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-orange-100 rounded-2xl flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                <SiMysql size={48} className="text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">MySQL</h3>
              <p className="text-sm text-gray-500">Database</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise: 3-Column Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            
            {/* Full-Stack Development */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Code2 size={32} className="text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Full-Stack Development</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                I build end-to-end web applications using <strong>React</strong> for responsive, component-driven UIs 
                and <strong>Node.js + Express.js</strong> for scalable REST APIs. 
                Backed by <strong>MySQL</strong> with optimized schemas and secure queries.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <SiReact size={20} className="text-blue-600" /> Modern React (Hooks, Context, Router)
                </li>
                <li className="flex items-center gap-2">
                  <SiNodedotjs size={20} className="text-green-600" /> Secure Node.js backends
                </li>
                <li className="flex items-center gap-2">
                  <SiMysql size={20} className="text-orange-600" /> Relational database design
                </li>
              </ul>
            </div>

            {/* System Administration */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Server size={32} className="text-indigo-600" />
                <h2 className="text-3xl font-bold text-gray-900">System Administration</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                4+ years managing enterprise Windows environments, Mac, Linux, and Android devices, performing senior level field services.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <Cloud size={20} className="text-indigo-600" /> Cloud & hybrid infrastructure
                </li>
                <li className="flex items-center gap-2">
                  <Database size={20} className="text-indigo-600" /> High-availability systems
                </li>
                <li className="flex items-center gap-2">
                  <Code2 size={20} className="text-indigo-600" /> Infrastructure as Code
                </li>
              </ul>
            </div>

            {/* Cyber Security */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Shield size={32} className="text-red-600" />
                <h2 className="text-3xl font-bold text-gray-900">Cyber Security</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Security is non-negotiable. I hold <strong>CISSP</strong> and <strong>Security+</strong> certifications 
                and embed defense-in-depth into every layer—code, network, and cloud.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <Lock size={20} className="text-red-600" /> Zero-trust architecture
                </li>
                <li className="flex items-center gap-2">
                  <Shield size={20} className="text-red-600" /> Vulnerability management
                </li>
                <li className="flex items-center gap-2">
                  <Code2 size={20} className="text-red-600" /> Secure coding practices
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Secure Your Next Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's talk about how I can bring full-stack expertise, system reliability, 
            and enterprise-grade security to your team.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-xl hover:bg-gray-100 transition-all hover:shadow-xl transform hover:-translate-y-1"
          >
            <Mail size={24} />
            Contact Me
          </Link>
        </div>
      </section>
    </>
  );
}