import { Users, CheckCircle, BookOpen, Target, Award, Clock } from 'lucide-react';
import HeroSection from '../components/HeroSection';

function PhDSupportPage() {
  return (
    <main className="pt-16">
      <HeroSection
        title="PhD Support & Assistance"
        subtitle="End-to-end research assistance for your doctoral journey"
        badge={{
          icon: <Users className="w-4 h-4 text-yellow-300" />,
          text: "Research Support"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <Users className="w-12 h-12 text-teal-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Comprehensive PhD Support</h2>
            <p className="text-gray-700 mb-4">
              We provide end-to-end support for PhD students and researchers in bioinformatics, 
              genomics, and computational biology. Our expert team assists you through every 
              stage of your research journey.
            </p>
            <p className="text-gray-700">
              From experimental design to manuscript preparation, we ensure your research 
              meets the highest academic standards and contributes meaningfully to your field.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <Target className="w-12 h-12 text-teal-600 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Research Planning</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5" />
                  <span>Hypothesis formulation and refinement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5" />
                  <span>Experimental design consultation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5" />
                  <span>Sample size and power calculations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5" />
                  <span>Literature review assistance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5" />
                  <span>Research methodology guidance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <BookOpen className="w-12 h-12 text-teal-600 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Analysis Support</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5" />
                  <span>NGS data processing and analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5" />
                  <span>Statistical analysis and interpretation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5" />
                  <span>Custom pipeline development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5" />
                  <span>Data visualization and figure preparation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5" />
                  <span>Reproducible research workflows</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 shadow-md border border-blue-100">
              <Clock className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Timeline Management</h3>
              <p className="text-gray-700">
                Stay on track with milestone planning and progress monitoring throughout your PhD journey.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 shadow-md border border-purple-100">
              <Award className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Publication Support</h3>
              <p className="text-gray-700">
                Manuscript writing, journal selection, and submission assistance for high-impact publications.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-6 shadow-md border border-teal-100">
              <Users className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Mentorship</h3>
              <p className="text-gray-700">
                One-on-one guidance from experienced researchers with proven track records.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PhDSupportPage;
