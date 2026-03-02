import { Dna, BookOpen, Microscope } from 'lucide-react';
import HeroSection from '../components/HeroSection';

function GeneticsPage() {
  return (
    <main>
      <HeroSection
        title="Genetics"
        subtitle="Understanding heredity and the variation of inherited characteristics"
        badge={{
          icon: <Dna className="w-4 h-4 text-yellow-300" />,
          text: "Genetics Program"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      <div className="space-y-8">
        <div className="bg-white rounded-lg p-8 shadow-md">
          <Dna className="w-12 h-12 text-teal-600 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction to Genetics</h2>
          <p className="text-gray-700 mb-4">
            Genetics is the study of genes, genetic variation, and heredity in organisms. 
            It is a fundamental pillar of biology and overlaps with many other areas, 
            such as agriculture, medicine, and biotechnology.
          </p>
          <p className="text-gray-700">
            Modern genetics began with Gregor Mendel's studies of the nature of inheritance 
            in plants and has evolved to encompass molecular biology and genomics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <BookOpen className="w-12 h-12 text-teal-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Concepts</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>DNA structure and replication</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Gene expression and regulation</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Mendelian inheritance patterns</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Genetic mutations and variations</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Population genetics</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md">
            <Microscope className="w-12 h-12 text-teal-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Applications</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Genetic counseling and testing</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Gene therapy for inherited diseases</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Personalized medicine</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Agricultural crop improvement</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Forensic genetics</span>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </main>
  );
}

export default GeneticsPage;
