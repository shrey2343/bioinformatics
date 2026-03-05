import { FileText, Code, Database, CheckCircle, FileCode, BookOpen } from 'lucide-react';
import HeroSection from '../components/HeroSection';

function DeliverablesPage() {
  return (
    <main className="pt-16">
      <HeroSection
        title="PhD Research Deliverables"
        subtitle="Comprehensive reports and pipeline scripts for your research"
        badge={{
          icon: <FileText className="w-4 h-4 text-yellow-300" />,
          text: "Deliverables"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <FileText className="w-12 h-12 text-teal-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Research Deliverables</h2>
            <p className="text-gray-700 mb-4">
              We provide comprehensive deliverables for your PhD research, including detailed 
              analysis reports, reproducible pipeline scripts, and publication-ready materials.
            </p>
            <p className="text-gray-700">
              All deliverables are thoroughly documented and designed to meet academic standards 
              for reproducibility and transparency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <BookOpen className="w-12 h-12 text-teal-600 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Analysis Reports</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5" />
                  <span>Executive summary of findings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5" />
                  <span>Detailed methodology section</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5" />
                  <span>Results with statistical analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5" />
                  <span>High-quality figures and tables</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <Code className="w-12 h-12 text-teal-600 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pipeline Scripts</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5" />
                  <span>Well-documented code</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5" />
                  <span>Reproducible workflows</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5" />
                  <span>Version-controlled repositories</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5" />
                  <span>Containerized environments</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 shadow-md border border-blue-100">
              <FileCode className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Source Code</h3>
              <p className="text-gray-700">
                Complete source code with version control, unit tests, and comprehensive documentation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 shadow-md border border-purple-100">
              <Database className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Files</h3>
              <p className="text-gray-700">
                Processed data files, intermediate results, and final output in standard formats.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-6 shadow-md border border-teal-100">
              <FileText className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Documentation</h3>
              <p className="text-gray-700">
                User guides, API documentation, and troubleshooting resources for your pipelines.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-purple-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">What You Receive</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  Analysis Reports
                </h3>
                <ul className="ml-7 space-y-2 text-gray-700">
                  <li>• PDF and HTML formats</li>
                  <li>• Publication-ready figures</li>
                  <li>• Statistical summaries</li>
                  <li>• Biological interpretations</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  Code & Scripts
                </h3>
                <ul className="ml-7 space-y-2 text-gray-700">
                  <li>• R/Python analysis scripts</li>
                  <li>• Workflow management files</li>
                  <li>• Configuration files</li>
                  <li>• README and documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DeliverablesPage;
