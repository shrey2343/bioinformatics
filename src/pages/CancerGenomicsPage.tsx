import { Beaker, TrendingUp, AlertCircle, Database, GitBranch, FileText } from 'lucide-react';
import HeroSection from '../components/HeroSection';

function CancerGenomicsPage() {
  return (
    <main className="pt-16">
      <HeroSection
        title="Cancer Genomics Research"
        subtitle="Mutation analysis and copy number variation studies"
        badge={{
          icon: <Beaker className="w-4 h-4 text-yellow-300" />,
          text: "Cancer Research"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <Beaker className="w-12 h-12 text-teal-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cancer Genomics Analysis</h2>
            <p className="text-gray-700 mb-4">
              Our cancer genomics services provide comprehensive analysis of somatic mutations, 
              copy number alterations, and tumor evolution. We specialize in identifying 
              driver mutations, therapeutic targets, and biomarkers for precision oncology.
            </p>
            <p className="text-gray-700">
              Using state-of-the-art tools and databases, we deliver insights into tumor 
              biology and actionable findings for translational research.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <GitBranch className="w-12 h-12 text-teal-600 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Somatic Analysis Pipeline</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">1.</span>
                  <span>Tumor-normal paired analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">2.</span>
                  <span>Somatic variant calling (Mutect2, Strelka)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">3.</span>
                  <span>Copy number variation detection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">4.</span>
                  <span>Tumor mutational burden (TMB)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">5.</span>
                  <span>Microsatellite instability (MSI)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">6.</span>
                  <span>Clonal evolution analysis</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <TrendingUp className="w-12 h-12 text-teal-600 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Driver mutation identification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Oncogenic pathway analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Therapeutic target discovery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Drug resistance mechanisms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Tumor heterogeneity assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Prognostic biomarker identification</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6 shadow-md border border-red-100">
              <AlertCircle className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Clinical Relevance</h3>
              <p className="text-gray-700">
                Annotation with OncoKB, CIViC, and other clinical databases for actionable insights.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 shadow-md border border-purple-100">
              <Database className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">COSMIC Integration</h3>
              <p className="text-gray-700">
                Integration with COSMIC, TCGA, and other cancer genomics databases for context.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 shadow-md border border-blue-100">
              <FileText className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Reports</h3>
              <p className="text-gray-700">
                Detailed reports with mutation signatures, CNV profiles, and clinical interpretations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CancerGenomicsPage;
