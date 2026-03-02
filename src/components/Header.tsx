import { Dna, ChevronDown, GraduationCap, Microscope, FlaskConical, Activity, Code, Database, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [certDropdown, setCertDropdown] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'biotechnology' | 'bioinformatics' | null>(null);

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Dna className="w-8 h-8 text-teal-600" />
            <h1 className="text-2xl font-bold">
              <span className="text-gray-900">Bio</span>
              <span className="text-teal-600">tech</span>
            </h1>
          </Link>
          <div className="flex items-center gap-8">
            {/* Certification Program Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCertDropdown(true)}
              onMouseLeave={() => {
                setCertDropdown(false);
                setSelectedCategory(null);
              }}
            >
              <div className="flex items-center gap-1 text-gray-700 hover:text-teal-600 cursor-pointer">
                <span>Certification Program</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              {certDropdown && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl z-50">
                  {!selectedCategory ? (
                    // Main Categories
                    <div className="w-[500px] py-6 px-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div 
                          onClick={() => setSelectedCategory('biotechnology')}
                          className="flex gap-3 p-4 rounded-lg hover:bg-teal-50 transition-colors cursor-pointer group"
                        >
                          <div className="flex-shrink-0">
                            <GraduationCap className="w-6 h-6 text-gray-700 group-hover:text-teal-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Biotechnology</h3>
                            <p className="text-sm text-gray-600">
                              Master biotechnology fundamentals and applications
                            </p>
                          </div>
                        </div>

                        <div 
                          onClick={() => setSelectedCategory('bioinformatics')}
                          className="flex gap-3 p-4 rounded-lg hover:bg-teal-50 transition-colors cursor-pointer group"
                        >
                          <div className="flex-shrink-0">
                            <Database className="w-6 h-6 text-gray-700 group-hover:text-teal-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Bioinformatics</h3>
                            <p className="text-sm text-gray-600">
                              Computational approaches to biological data
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : selectedCategory === 'biotechnology' ? (
                    // Biotechnology Courses
                    <div className="w-[700px] py-6 px-6">
                      <button 
                        onClick={() => setSelectedCategory(null)}
                        className="text-sm text-teal-600 hover:text-teal-700 mb-4"
                      >
                        ← Back to Categories
                      </button>
                      <div className="grid grid-cols-2 gap-4">
                       

                        <Link to="/genetics" className="flex gap-3 p-4 rounded-lg hover:bg-teal-50 transition-colors group">
                          <div className="flex-shrink-0">
                            <Dna className="w-6 h-6 text-gray-700 group-hover:text-teal-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Genetics</h3>
                            <p className="text-sm text-gray-600">
                              Study heredity and genetic variation in organisms
                            </p>
                          </div>
                        </Link>

                        <Link to="/proteomics" className="flex gap-3 p-4 rounded-lg hover:bg-teal-50 transition-colors group">
                          <div className="flex-shrink-0">
                            <FlaskConical className="w-6 h-6 text-gray-700 group-hover:text-teal-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Proteomics</h3>
                            <p className="text-sm text-gray-600">
                              Large-scale study of proteins and their functions
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ) : (
                    // Bioinformatics Courses
                    <div className="w-[800px] py-6 px-6">
                      <button 
                        onClick={() => setSelectedCategory(null)}
                        className="text-sm text-teal-600 hover:text-teal-700 mb-4"
                      >
                        ← Back to Categories
                      </button>
                      <div className="grid grid-cols-3 gap-4">
                       

                        <Link to="/rna-seq" className="flex gap-3 p-4 rounded-lg hover:bg-teal-50 transition-colors group">
                          <div className="flex-shrink-0">
                            <Activity className="w-6 h-6 text-gray-700 group-hover:text-teal-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">RNA Sequencing</h3>
                            <p className="text-sm text-gray-600">
                              Transcriptome profiling using next-generation sequencing
                            </p>
                          </div>
                        </Link>

                        <Link to="/dna-seq" className="flex gap-3 p-4 rounded-lg hover:bg-teal-50 transition-colors group">
                          <div className="flex-shrink-0">
                            <Microscope className="w-6 h-6 text-gray-700 group-hover:text-teal-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">DNA Sequencing</h3>
                            <p className="text-sm text-gray-600">
                              Determining the precise order of nucleotides in DNA
                            </p>
                          </div>
                        </Link>

                        <Link to="/bio-python" className="flex gap-3 p-4 rounded-lg hover:bg-teal-50 transition-colors group">
                          <div className="flex-shrink-0">
                            <Code className="w-6 h-6 text-gray-700 group-hover:text-teal-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Bio-Python</h3>
                            <p className="text-sm text-gray-600">
                              Python tools for computational molecular biology
                            </p>
                          </div>
                        </Link>

                        <Link to="/bio-r" className="flex gap-3 p-4 rounded-lg hover:bg-teal-50 transition-colors group">
                          <div className="flex-shrink-0">
                            <Code className="w-6 h-6 text-gray-700 group-hover:text-teal-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Bio-R</h3>
                            <p className="text-sm text-gray-600">
                              R packages for high-throughput genomic data analysis
                            </p>
                          </div>
                        </Link>

                        <Link to="/linux-bioinformatics" className="flex gap-3 p-4 rounded-lg hover:bg-teal-50 transition-colors group">
                          <div className="flex-shrink-0">
                            <Terminal className="w-6 h-6 text-gray-700 group-hover:text-teal-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Linux Bioinformatics</h3>
                            <p className="text-sm text-gray-600">
                              Building computational environments for workflows
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCompanyDropdown(true)}
              onMouseLeave={() => setCompanyDropdown(false)}
            >
              <div className="flex items-center gap-1 text-gray-700 hover:text-teal-600 cursor-pointer">
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              {companyDropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                    About Us
                  </Link>
                  <Link to="/blog" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                    Blog
                  </Link>
                  <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                    Contact Us
                  </Link>
                </div>
              )}
            </div>

            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Apply Here
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
