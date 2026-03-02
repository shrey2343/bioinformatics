import { Building2, Users, Target } from 'lucide-react';

function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Learn about our story and our mission statement
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-lg p-8 shadow-md text-center">
          <Building2 className="w-12 h-12 text-teal-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Company</h3>
          <p className="text-gray-600">
            Leading the way in biotechnology innovation and research excellence
          </p>
        </div>
        <div className="bg-white rounded-lg p-8 shadow-md text-center">
          <Users className="w-12 h-12 text-teal-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Team</h3>
          <p className="text-gray-600">
            World-class scientists and researchers dedicated to advancing life sciences
          </p>
        </div>
        <div className="bg-white rounded-lg p-8 shadow-md text-center">
          <Target className="w-12 h-12 text-teal-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
          <p className="text-gray-600">
            To bridge the gap between education and industry in bioscience
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 shadow-md">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Story of Biotech</h2>
        <p className="text-gray-700 mb-4">
          Born from a passion for bridging the gap between education and industry, 
          our journey began with a simple vision: to make cutting-edge biotechnology 
          education accessible to aspiring scientists worldwide.
        </p>
        <p className="text-gray-700">
          Today, we continue to innovate and inspire the next generation of 
          biotechnology professionals through comprehensive programs and hands-on experience.
        </p>
      </div>
    </main>
  );
}

export default AboutPage;
