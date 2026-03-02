import { Dna, ChevronDown, GraduationCap, Microscope, FlaskConical, Activity, Code, Database, Terminal, FileSearch, Beaker, Users, FileText, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [certDropdown, setCertDropdown] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'biotechnology' | 'bioinformatics' | 'research' | null>(null);

  const handleCategoryClick = (category: 'biotechnology' | 'bioinformatics' | 'research') => {
    setSelectedCategory(category);
  };

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
                <div 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl z-50"
                  onMouseEnter={() => setCertDropdown(true)}
                >
                  {!selectedCategory ? (
                    <div className="w-[600px] py-6 px-6">
                      <div className="grid grid-cols-3 gap-4">
                        <div 
                          onClick={() => handleCategoryClick('biotechnology')}
                          className="flex flex-col gap-3 p-4 rounded-lg hover:bg-teal-50 transition-colors cursor-pointer group"
                        >
                          <GraduationCap className="w-6 h-6 text-gray-700 group-hover:text-teal-600" />
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Biotechnology</h3>
                            <p className="text-sm text-gray-600">Master biotechnology fundamentals</p>
                          </div>
                        </div>
                        <div 
                          onClick={() => handleCategoryClick('bioinformatics')}
                          className="flex flex-col gap-3 p-4 rounded-lg hover:bg-teal-50 transition-colors cursor-pointer group"
                        >
                          <Database className="w-6 h-6 text-gray-700 group-hover:text-teal-600" />
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Bioinformatics</h3>
                            <p className="text-sm text-gray-600">Computational biological data</p>
                          </div>
                        </div>
                        <div 
                          onClick={() => handleCategoryClick('research')}
                          className="flex flex-col gap-3 p-4 rounded-lg hover:bg-teal-50 transition-colors cursor-pointer group"
                        >
                          <FileSearch className="w-6 h-6 text-gray-700 group-hover:text-teal-600" />
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Research</h3>
                            <p className="text-sm text-gray-600">PhD support and assistance</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : selectedCategory === 'biotechnology' ? (
                    <div className="w-[700px] py-6 px-6">
                      <button onClick={() => setSelectedCategory(null)} className="text-sm text-teal-600 hover:text-teal-700 mb-4">
                        ← Back
                      </button>
                      <div className="grid grid-cols-2 gap-4">
                        <Link to="/biotechnology" className="flex gap-3 p-4 rounded-lg hover:bg-teal-50 group" onClick={() => setCertDropdown(false)}>
                          <GraduationCap className="w-6 h-6 text-gray-700 group-hover:text-teal-600" />
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Biotechnology</h3>
                            <p className="text-sm text-gray-600">Master biotechnology fundamentals</p>
                          </div>
                        </Link>
                        <Link to="/genetics" className="flex gap-3 p-4 rounded-lg hover:bg-teal-50 group" onClick={() => setCertDropdown(false)}>
                          <Dna className="w-6 h-6 text-gray-700 group-hover:text-teal-600" />
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Genetics</h3>
                            <p className="text-sm text-gray-600">Study heredity and variation</p>
                          </div>
                        </Link>
                        <Link to="/proteomics" className="flex gap-3 p-4 rounded-lg hover:bg-teal-50 group" onClick={() => setCertDropdown(false)}>
                          <FlaskConical className="w-6 h-6 text-gray-700 group-hover:text-teal-600" />
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Proteomics</h3>
                            <p className="text-sm text-gray-600">Large-scale protein study</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ) : selectedCategory === 'research' ? (
                    <div className="w-[900px] py-6 px-6 max-h-[600px] overflow-y-auto">
                      <button onClick={() => setSelectedCategory(null)} className="text-sm text-teal-600 hover:text-teal-700 mb-4">
                        ← Back
                      </button>
                      <div className="grid grid-cols-2 gap-4">
                        <Link to="/research/phd-support" className="flex gap-3 p-4 rounded-lg hover:bg-teal-50 group" onClick={() => setCertDropdown(false)}>
                          <Users className="w-6 h-6 text-gray-700 group-hover:text-teal-600" />
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">PhD Support</h3>
                            <p className="text-sm text-gray-600">End-to-End Research Assistance</p>
                          </div>
                        </Link>
                        <Link to="/research/rna-seq" className="flex gap-3 p-4 rounded-lg hover:bg-teal-50 group" onClick={() => setCertDropdown(false)}>
                          <Activity className="w-6 h-6 text-gray-700 group-hover:text-teal-600" />
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">RNA-Seq Projects</h3>
                            <p className="text-sm text-gray-600">Gene Expression & Analysis</p>
                          </div>
                        </Link>
                        <Link to="/research/dna-seq" className="flex gap-3 p-4 rounded-lg hover:bg-teal-50 group" onClick={() => setCertDropdown(false)}>
                          <Dna className="w-6 h-6 text-gray-700 group-hover:text-teal-600" />
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">DNA-Seq Projects</h3>
                            <p className="text-sm text-gray-600">Genomics & Variant Analysis</p>
                          </div>
                        </Link>
                        <Link to="/research/cancer-genomics" className="flex gap-3 p-4 rounded-lg hover:bg-teal-50 group" onClick={() => setCertDropdown(false)}>
                          <Beaker className="w-6 h-6 text-gray-700 group-hover:text-teal-600" />
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Cancer Genomics</h3>
                            <p className="text-sm text-gray-600">Mutation & CNV Analysis</p>
                          </div>
                        </Link>
                        <Link to="/research/deliverables" className="flex gap-3 p-4 rounded-lg hover:bg-teal-50 group" onClick={() => setCertDropdown(false)}>
                          <FileText className="w-6 h-6 text-gray-700 group-hover:text-teal-600" />
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">PhD Deliverables</h3>
                            <p className="text-sm text-gray-600">Reports & Pipeline Scripts</p>
                          </div>
                        </Link>
                        <Link to="/research/infrastructure" className="flex gap-3 p-4 rounded-lg hover:bg-teal-50 group" onClick={() => setCertDropdown(false)}>
                          <Server className="w-6 h-6 text-gray-700 group-hover:text-teal-600" />
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Infrastructure</h3>
                            <p className="text-sm text-gray-600">HPC & Cloud Environment</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="w-[800px] py-6 px-6">
                      <button onClick={() => setSelectedCategory(null)} className="text-sm text-teal-600 hover:text-teal-700 mb-4">
                        ← Back
                      </button>
                      <div className="grid grid-cols-3 gap-4">
                        <Link to="/bioinformatics" className="flex gap-3 p-4 rounded-lg hover:bg-teal-50 group" onClick={() => setCertDropdown(false)}>
                          <Database className="w-6 h-6 text-gray-700 group-hover:text-teal-600" />
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Bioinformatics</h3>
                            <p className="text-sm text-gray-600">Data analysis</p>
                          </div>
                        </Link>
                        <Link to="/rna-seq" className="flex gap-3 p-4 rounded-lg hover:bg-teal-50 group" onClick={() => setCertDropdown(false)}>
                          <Activity className="w-6 h-6 text-gray-700 group-hover:text-teal-600" />
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">RNA Sequencing</h3>
                            <p className="text-sm text-gray-600">Transcriptome profiling</p>
                          </div>
                        </Link>
                        <Link to="/dna-seq" className="flex gap-3 p-4 rounded-lg hover:bg-teal-50 group" onClick={() => setCertDropdown(false)}>
                          <Microscope className="w-6 h-6 text-gray-700 group-hover:text-teal-600" />
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">DNA Sequencing</h3>
                            <p className="text-sm text-gray-600">Nucleotide ordering</p>
                          </div>
                        </Link>
                        <Link to="/bio-python" className="flex gap-3 p-4 rounded-lg hover:bg-teal-50 group" onClick={() => setCertDropdown(false)}>
                          <Code className="w-6 h-6 text-gray-700 group-hover:text-teal-600" />
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Bio-Python</h3>
                            <p className="text-sm text-gray-600">Python tools</p>
                          </div>
                        </Link>
                        <Link to="/bio-r" className="flex gap-3 p-4 rounded-lg hover:bg-teal-50 group" onClick={() => setCertDropdown(false)}>
                          <Code className="w-6 h-6 text-gray-700 group-hover:text-teal-600" />
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Bio-R</h3>
                            <p className="text-sm text-gray-600">R packages</p>
                          </div>
                        </Link>
                        <Link to="/linux-bioinformatics" className="flex gap-3 p-4 rounded-lg hover:bg-teal-50 group" onClick={() => setCertDropdown(false)}>
                          <Terminal className="w-6 h-6 text-gray-700 group-hover:text-teal-600" />
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Linux Bioinformatics</h3>
                            <p className="text-sm text-gray-600">Computational environments</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

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
