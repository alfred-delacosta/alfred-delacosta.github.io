import { Code2, Laptop, Shield } from 'lucide-react';

export default function Expertise() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1: Full-Stack Developer */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 mx-auto mb-6 text-blue-600">
              <Code2 size={64} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
              Full-Stack Developer
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              I build scalable, performant web applications from frontend to backend with modern frameworks like React and Node.js. 
              My code is clean, maintainable, and follows industry best practices. 
              I deliver pixel-perfect UIs and robust APIs that power real-world solutions.
            </p>
          </div>

          {/* Card 2: IT Professional */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 mx-auto mb-6 text-indigo-600">
              <Laptop size={64} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
              IT Professional
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              With over 8 years of experience in system administration and field services, 
              I've managed enterprise networks, deployed infrastructure, and resolved critical incidents under pressure. 
              From on-prem servers to cloud environments, I ensure systems are reliable, secure, and efficient.
            </p>
          </div>

          {/* Card 3: Cyber Security Professional */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 mx-auto mb-6 text-red-600">
              <Shield size={64} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
              Cyber Security Professional
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Security is the foundation of everything I do—whether writing code, designing systems, or managing infrastructure. 
              I hold CISSP and Security+ certifications and apply defense-in-depth principles across all projects. 
              My goal: build systems that are not just functional, but truly resilient.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}