import { Terminal, Server, HardDrive } from 'lucide-react';
import HeroSection from '../components/HeroSection';

function LinuxBioinformaticsPage() {
  return (
    <main>
      <HeroSection
        title="Linux-Based Bioinformatics Infrastructure"
        subtitle="Building robust computational environments for bioinformatics workflows"
        badge={{
          icon: <Terminal className="w-4 h-4 text-yellow-300" />,
          text: "Linux Infrastructure"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      <div className="space-y-8">
        <div className="bg-white rounded-lg p-8 shadow-md">
          <Terminal className="w-12 h-12 text-teal-600 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Linux for Bioinformatics?</h2>
          <p className="text-gray-700 mb-4">
            Linux is the preferred operating system for bioinformatics due to its stability, 
            flexibility, and the vast ecosystem of open-source bioinformatics tools. Most 
            computational biology software is developed primarily for Linux environments.
          </p>
          <p className="text-gray-700">
            Command-line proficiency in Linux is essential for managing large-scale genomic 
            data analysis pipelines and high-performance computing clusters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <Server className="w-12 h-12 text-teal-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Essential Skills</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Command-line navigation and file management</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Shell scripting (Bash)</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Package management (apt, yum, conda)</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Text processing (grep, sed, awk)</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Job scheduling (SLURM, PBS)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md">
            <HardDrive className="w-12 h-12 text-teal-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Common Tools</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>SAMtools - BAM/SAM file manipulation</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>BWA/Bowtie - Sequence alignment</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>GATK - Variant calling</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>FastQC - Quality control</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Conda - Environment management</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Setting Up Your Environment</h2>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm space-y-2">
            <div># Install Miniconda</div>
            <div>wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh</div>
            <div>bash Miniconda3-latest-Linux-x86_64.sh</div>
            <div className="mt-4"># Create bioinformatics environment</div>
            <div>conda create -n bioinfo python=3.9</div>
            <div>conda activate bioinfo</div>
          </div>
        </div>
        </div>
      </div>
    </main>
  );
}

export default LinuxBioinformaticsPage;
