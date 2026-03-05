import { Dna, Layers, Target, Database, Code, FileSearch } from 'lucide-react';
import HeroSection from '../components/HeroSection';

function ResearchDNASeqPage() {
  return (
    <main className="pt-16">
      <HeroSection
        title="DNA-Seq Research Projects"
        subtitle="Genomics and variant analysis for cutting-edge research"
        badge={{
          icon: <Dna className="w-4 h-4 text-yellow-300" />,
          text: "Research Services"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <Dna className="w-12 h-12 text-teal-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">DNA Sequencing Research</h2>
            <p className="text-gray-700 mb-4">
              Our DNA-Seq research services cover whole genome sequencing (WGS), whole exome 
              sequencing (WES), and targeted sequencing projects. We provide comprehensive 
              variant calling, annotation, and interpretation services.
            </p>
            <p className="text-gray-700">
              From germline to somatic variants, our analysis pipelines follow best practices 
              and deliver publication-quality results for your genomics research.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <Layers className="w-12 h-12 text-teal-600 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Analysis Workflow</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">1.</span>
                  <span>Raw data quality assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">2.</span>
                  <span>Read alignment (BWA, Bowtie2)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">3.</span>
                  <span>Variant calling (GATK, FreeBayes)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">4.</span>
                  <span>Variant filtering and quality control</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">5.</span>
                  <span>Annotation (VEP, ANNOVAR)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">6.</span>
                  <span>Functional impact prediction</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <Target className="w-12 h-12 text-teal-600 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Variant Types</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Single nucleotide variants (SNVs)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Insertions and deletions (Indels)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Copy number variations (CNVs)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Structural variants (SVs)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Loss of heterozygosity (LOH)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Microsatellite instability</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 shadow-md border border-blue-100">
              <Database className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Database Integration</h3>
              <p className="text-gray-700">
                Integration with ClinVar, dbSNP, COSMIC, and other genomic databases for comprehensive annotation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 shadow-md border border-purple-100">
              <Code className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pipeline Development</h3>
              <p className="text-gray-700">
                Custom bioinformatics pipelines using Nextflow, Snakemake, or WDL for reproducible analysis.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-6 shadow-md border border-teal-100">
              <FileSearch className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Variant Interpretation</h3>
              <p className="text-gray-700">
                Expert interpretation of variants with clinical significance and functional impact assessment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ResearchDNASeqPage;
