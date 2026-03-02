import { Dna, Search, Database } from 'lucide-react';
import HeroSection from '../components/HeroSection';

function DNASeqPage() {
  return (
    <main>
      <HeroSection
        title="DNA Sequencing"
        subtitle="Determining the precise order of nucleotides in DNA molecules"
        badge={{
          icon: <Dna className="w-4 h-4 text-yellow-300" />,
          text: "DNA-Seq Program"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      <div className="space-y-8">
        <div className="bg-white rounded-lg p-8 shadow-md">
          <Dna className="w-12 h-12 text-teal-600 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What is DNA Sequencing?</h2>
          <p className="text-gray-700 mb-4">
            DNA sequencing is the process of determining the nucleic acid sequence – 
            the order of nucleotides in DNA. It includes any method or technology that 
            is used to determine the order of the four bases: adenine, guanine, cytosine, 
            and thymine.
          </p>
          <p className="text-gray-700">
            Modern sequencing technologies have revolutionized genomics, enabling rapid 
            and cost-effective whole genome sequencing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <Search className="w-12 h-12 text-teal-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sequencing Methods</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Sanger sequencing (first generation)</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Illumina sequencing (NGS)</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>PacBio long-read sequencing</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Oxford Nanopore sequencing</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Ion Torrent sequencing</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md">
            <Database className="w-12 h-12 text-teal-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Applications</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Whole genome sequencing</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Exome sequencing</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Targeted gene panel sequencing</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Metagenomics</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Clinical diagnostics</span>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </main>
  );
}

export default DNASeqPage;
