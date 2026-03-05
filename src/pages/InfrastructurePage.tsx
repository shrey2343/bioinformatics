import { Server, Cloud, Cpu, HardDrive, Network, Shield } from 'lucide-react';
import HeroSection from '../components/HeroSection';

function InfrastructurePage() {
  return (
    <main className="pt-16">
      <HeroSection
        title="Research Infrastructure"
        subtitle="High-performance computing and cloud environments for bioinformatics"
        badge={{
          icon: <Server className="w-4 h-4 text-yellow-300" />,
          text: "Infrastructure"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <Server className="w-12 h-12 text-teal-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Computing Infrastructure</h2>
            <p className="text-gray-700 mb-4">
              Access to high-performance computing (HPC) clusters and cloud-based infrastructure 
              for large-scale bioinformatics analysis. We provide scalable computing resources 
              tailored to your research needs.
            </p>
            <p className="text-gray-700">
              Our infrastructure supports parallel processing, containerization, and workflow 
              management systems for efficient and reproducible research.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <Cpu className="w-12 h-12 text-teal-600 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">HPC Resources</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Multi-core processors for parallel computing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>GPU acceleration for deep learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>High-memory nodes for large datasets</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <Cloud className="w-12 h-12 text-teal-600 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cloud Solutions</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>AWS, Google Cloud, Azure support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Scalable computing on demand</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Cost-effective resource allocation</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 shadow-md border border-blue-100">
              <HardDrive className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Storage Solutions</h3>
              <p className="text-gray-700">
                Petabyte-scale storage with high-speed access for genomic datasets and analysis results.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 shadow-md border border-purple-100">
              <Network className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Network Infrastructure</h3>
              <p className="text-gray-700">
                High-bandwidth networking for fast data transfer and collaborative research environments.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-6 shadow-md border border-teal-100">
              <Shield className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security & Compliance</h3>
              <p className="text-gray-700">
                HIPAA-compliant infrastructure with encryption, access controls, and audit logging.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-purple-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Software & Tools</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Workflow Managers</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Nextflow</li>
                  <li>• Snakemake</li>
                  <li>• WDL/Cromwell</li>
                  <li>• Galaxy</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Containerization</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Docker</li>
                  <li>• Singularity</li>
                  <li>• Kubernetes</li>
                  <li>• Conda environments</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Analysis Tools</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• GATK, SAMtools</li>
                  <li>• R/Bioconductor</li>
                  <li>• Python/Biopython</li>
                  <li>• Custom pipelines</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default InfrastructurePage;
