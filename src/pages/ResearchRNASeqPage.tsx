import { Activity, GitBranch, BarChart3, Database, Code, FileText } from 'lucide-react';
import HeroSection from '../components/HeroSection';

function ResearchRNASeqPage() {
  return (
    <main className="pt-16">
      <HeroSection
        title="RNA-Seq Research Projects"
        subtitle="Gene expression analysis and transcriptome profiling for research"
        badge={{
          icon: <Activity className="w-4 h-4 text-yellow-300" />,
          text: "Research Services"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <Activity className="w-12 h-12 text-teal-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">RNA-Seq Research Services</h2>
            <p className="text-gray-700 mb-4">
              Our RNA-Seq research services provide comprehensive transcriptome analysis for 
              your research projects. We handle everything from raw data processing to 
              biological interpretation and publication-ready figures.
            </p>
            <p className="text-gray-700">
              Whether you're studying differential gene expression, alternative splicing, 
              or novel transcript discovery, our expert team delivers high-quality results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <GitBranch className="w-12 h-12 text-teal-600 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Analysis Pipeline</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">1.</span>
                  <span>Quality control (FastQC, MultiQC)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">2.</span>
                  <span>Read trimming and filtering</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">3.</span>
                  <span>Alignment (STAR, HISAT2)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">4.</span>
                  <span>Quantification (featureCounts, Salmon)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">5.</span>
                  <span>Differential expression (DESeq2, edgeR)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">6.</span>
                  <span>Functional enrichment analysis</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <BarChart3 className="w-12 h-12 text-teal-600 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Research Applications</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Disease mechanism studies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Drug response profiling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Developmental biology research</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Cancer transcriptomics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Single-cell RNA-Seq analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Comparative transcriptomics</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 shadow-md border border-blue-100">
              <Database className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Management</h3>
              <p className="text-gray-700">
                Secure data storage, version control, and organized project structure for reproducibility.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 shadow-md border border-purple-100">
              <Code className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Scripts</h3>
              <p className="text-gray-700">
                Well-documented R and Python scripts tailored to your specific research questions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-6 shadow-md border border-teal-100">
              <FileText className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Detailed Reports</h3>
              <p className="text-gray-700">
                Comprehensive analysis reports with methods, results, and publication-ready figures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ResearchRNASeqPage;
