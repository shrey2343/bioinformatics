import { FlaskConical, Activity, Database } from 'lucide-react';

function ProteomicsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Proteomics</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Large-scale study of proteins and their functions
        </p>
      </div>

      <div className="space-y-8">
        <div className="bg-white rounded-lg p-8 shadow-md">
          <FlaskConical className="w-12 h-12 text-teal-600 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What is Proteomics?</h2>
          <p className="text-gray-700 mb-4">
            Proteomics is the large-scale study of proteins, particularly their structures 
            and functions. Proteins are vital parts of living organisms, with many functions 
            including catalyzing metabolic reactions, DNA replication, and transporting molecules.
          </p>
          <p className="text-gray-700">
            The proteome is the entire set of proteins produced or modified by an organism 
            or system, and proteomics enables the identification of ever-increasing numbers 
            of proteins.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <Activity className="w-12 h-12 text-teal-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Techniques</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Mass spectrometry</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Two-dimensional gel electrophoresis</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Protein microarrays</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>X-ray crystallography</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>NMR spectroscopy</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md">
            <Database className="w-12 h-12 text-teal-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Applications</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Drug discovery and development</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Disease biomarker identification</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Understanding disease mechanisms</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Personalized medicine</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Agricultural improvements</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProteomicsPage;
