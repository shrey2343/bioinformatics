import { BarChart3, Code, TrendingUp } from 'lucide-react';

function BioRPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Bioconductor (Bio-R)</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          R packages for the analysis and comprehension of high-throughput genomic data
        </p>
      </div>

      <div className="space-y-8">
        <div className="bg-white rounded-lg p-8 shadow-md">
          <BarChart3 className="w-12 h-12 text-teal-600 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What is Bioconductor?</h2>
          <p className="text-gray-700 mb-4">
            Bioconductor provides tools for the analysis and comprehension of high-throughput 
            genomic data. It uses the R statistical programming language and is open source 
            and open development.
          </p>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
            <div># Install Bioconductor</div>
            <div>if (!require("BiocManager", quietly = TRUE))</div>
            <div className="ml-4">install.packages("BiocManager")</div>
            <div>BiocManager::install()</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <Code className="w-12 h-12 text-teal-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Popular Packages</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>DESeq2 - Differential gene expression</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>edgeR - RNA-seq analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>limma - Microarray analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>GenomicRanges - Genomic intervals</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Biostrings - Sequence manipulation</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md">
            <TrendingUp className="w-12 h-12 text-teal-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Applications</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>RNA-seq data analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>ChIP-seq and epigenomics</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Variant calling and annotation</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Single-cell genomics</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Pathway and network analysis</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default BioRPage;
