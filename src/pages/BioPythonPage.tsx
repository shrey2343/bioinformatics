import { Code, BookOpen, Terminal } from 'lucide-react';

function BioPythonPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">BioPython</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Python tools for computational molecular biology
        </p>
      </div>

      <div className="space-y-8">
        <div className="bg-white rounded-lg p-8 shadow-md">
          <Code className="w-12 h-12 text-teal-600 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What is BioPython?</h2>
          <p className="text-gray-700 mb-4">
            BioPython is a set of freely available tools for biological computation 
            written in Python. It is a distributed collaborative effort to develop 
            Python libraries and applications which address the needs of current and 
            future work in bioinformatics.
          </p>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
            <div># Install BioPython</div>
            <div>pip install biopython</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <BookOpen className="w-12 h-12 text-teal-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Sequence manipulation and analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>File format parsing (FASTA, GenBank, etc.)</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>BLAST and other sequence search tools</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Multiple sequence alignment</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Phylogenetic tree construction</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md">
            <Terminal className="w-12 h-12 text-teal-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Common Use Cases</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Reading and writing sequence files</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Sequence translation and transcription</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Accessing online databases (NCBI, UniProt)</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Protein structure analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Motif finding and pattern matching</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default BioPythonPage;
