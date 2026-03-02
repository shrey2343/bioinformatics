import { Activity, BarChart3, FileText } from 'lucide-react';
import HeroSection from '../components/HeroSection';

function RNASeqPage() {
  return (
    <main>
      <HeroSection
        title="RNA Sequencing (RNA-Seq)"
        subtitle="Transcriptome profiling using next-generation sequencing"
        badge={{
          icon: <Activity className="w-4 h-4 text-yellow-300" />,
          text: "RNA-Seq Program"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      <div className="space-y-8">
        <div className="bg-white rounded-lg p-8 shadow-md">
          <Activity className="w-12 h-12 text-teal-600 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            RNA-Seq is a revolutionary method for transcriptome profiling that uses 
            deep-sequencing technologies to reveal the presence and quantity of RNA 
            in a biological sample at a given moment.
          </p>
          <p className="text-gray-700">
            It provides a far more precise measurement of levels of transcripts and 
            their isoforms than other methods like microarrays.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <FileText className="w-12 h-12 text-teal-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Workflow Steps</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">1.</span>
                <span>RNA extraction and quality control</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">2.</span>
                <span>Library preparation</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">3.</span>
                <span>Sequencing on NGS platform</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">4.</span>
                <span>Quality assessment and trimming</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">5.</span>
                <span>Read alignment to reference genome</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">6.</span>
                <span>Quantification and differential expression</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md">
            <BarChart3 className="w-12 h-12 text-teal-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Applications</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Gene expression profiling</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Novel transcript discovery</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Alternative splicing analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Single nucleotide variant detection</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Fusion gene identification</span>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </main>
  );
}

export default RNASeqPage;
