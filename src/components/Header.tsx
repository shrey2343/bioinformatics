import { Dna, ChevronDown, GraduationCap, Microscope, FlaskConical, Activity, Code, Database, Terminal, FileSearch, Beaker, Users, FileText, Server, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header() {
  const [certDropdown, setCertDropdown] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'biotechnology' | 'bioinformatics' | 'research' | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Pages that have video background hero sections
  const pagesWithVideoBackground = [
    '/',
    '/genetics',
    '/proteomics',
    '/rna-seq',
    '/dna-seq',
    '/bio-python',
    '/bio-r',
    '/linux-bioinformatics',
    '/research/phd-support',
    '/research/rna-seq',
    '/research/dna-seq',
    '/research/cancer-genomics',
    '/research/deliverables',
    '/research/infrastructure'
  ];

  const hasVideoBackground = pagesWithVideoBackground.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we're past the hero section (approximately 400px for hero sections)
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategoryClick = (category: 'biotechnology' | 'bioinformatics' | 'research') => {
    setSelectedCategory(category);
  };

  // Determine if header should use light text (for dark backgrounds)
  const useLightText = hasVideoBackground && !isScrolled;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      hasVideoBackground
        ? (isScrolled 
            ? 'bg-white shadow-md' 
            : 'bg-black/40 backdrop-blur-lg border-b border-white/30 shadow-2xl')
        : 'bg-white shadow-md'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Dna className={`w-8 h-8 transition-colors ${useLightText ? 'text-white' : 'text-teal-600'}`} />
            <h1 className="text-2xl font-bold">
              <span className={`transition-colors ${useLightText ? 'text-white' : 'text-gray-900'}`}>Bio</span>
              <span className={`transition-colors ${useLightText ? 'text-teal-300' : 'text-teal-600'}`}>tech</span>
            </h1>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div 
              className="relative"
              onMouseEnter={() => setCertDropdown(true)}
              onMouseLeave={() => {
                setCertDropdown(false);
                setSelectedCategory(null);
              }}
            >
              <div className={`flex items-center gap-1 cursor-pointer transition-colors ${
                useLightText 
                  ? 'text-white hover:text-teal-300' 
                  : 'text-gray-700 hover:text-teal-600'
              }`}>
                <span>Certification Program</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              {certDropdown && (
                <div 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl z-50 w-[90vw] max-w-[600px] lg:w-[600px]"
                  onMouseEnter={() => setCertDropdown(true)}
                >
                  {!selectedCategory ? (
                    <div className="w-full py-6 px-6">
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
                    <div className="w-full py-6 px-6 max-w-[700px]">
                      <button onClick={() => setSelectedCategory(null)} className="text-sm text-teal-600 hover:text-teal-700 mb-4">
                        ← Back
                      </button>
                      <div className="grid grid-cols-2 gap-4">
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
                    <div className="w-full py-6 px-6 max-w-[900px] max-h-[60vh] overflow-y-auto">
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
                    <div className="w-full py-6 px-6 max-w-[800px]">
                      <button onClick={() => setSelectedCategory(null)} className="text-sm text-teal-600 hover:text-teal-700 mb-4">
                        ← Back
                      </button>
                      <div className="grid grid-cols-3 gap-4">
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
              <div className={`flex items-center gap-1 cursor-pointer transition-colors ${
                useLightText 
                  ? 'text-white hover:text-teal-300' 
                  : 'text-gray-700 hover:text-teal-600'
              }`}>
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              {companyDropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 lg:w-48">
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

            <button className={`px-6 py-2 rounded-lg font-medium transition-all ${
              useLightText
                ? 'bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30'
                : 'bg-teal-500 hover:bg-teal-600 text-white'
            }`}>
              Apply Here
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className={`lg:hidden fixed top-6 right-4 p-2 rounded-lg transition-colors z-50 ${
          useLightText 
            ? 'text-white hover:bg-white/10' 
            : 'text-gray-700 hover:bg-gray-100'
        }`}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Certification Program */}
            <div>
              <button 
                className="flex items-center gap-2 text-gray-700 font-medium w-full text-left"
                onClick={() => setCertDropdown(!certDropdown)}
              >
                <span>Certification Program</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${certDropdown ? 'rotate-180' : ''}`} />
              </button>
              {certDropdown && (
                <div className="mt-3 space-y-3 pl-4">
                  {!selectedCategory ? (
                    <>
                      <button 
                        onClick={() => handleCategoryClick('biotechnology')}
                        className="block w-full text-left text-gray-600 hover:text-teal-600 py-2"
                      >
                        Biotechnology
                      </button>
                      <button 
                        onClick={() => handleCategoryClick('bioinformatics')}
                        className="block w-full text-left text-gray-600 hover:text-teal-600 py-2"
                      >
                        Bioinformatics
                      </button>
                      <button 
                        onClick={() => handleCategoryClick('research')}
                        className="block w-full text-left text-gray-600 hover:text-teal-600 py-2"
                      >
                        Research
                      </button>
                    </>
                  ) : selectedCategory === 'biotechnology' ? (
                    <>
                      <button 
                        onClick={() => setSelectedCategory(null)}
                        className="text-sm text-teal-600 hover:text-teal-700 mb-2"
                      >
                        ← Back
                      </button>
                      
                      <Link to="/genetics" className="block text-gray-600 hover:text-teal-600 py-2" onClick={() => {setCertDropdown(false); setMobileMenuOpen(false);}}>
                        Genetics
                      </Link>
                      <Link to="/proteomics" className="block text-gray-600 hover:text-teal-600 py-2" onClick={() => {setCertDropdown(false); setMobileMenuOpen(false);}}>
                        Proteomics
                      </Link>
                    </>
                  ) : selectedCategory === 'research' ? (
                    <>
                      <button 
                        onClick={() => setSelectedCategory(null)}
                        className="text-sm text-teal-600 hover:text-teal-700 mb-2"
                      >
                        ← Back
                      </button>
                      <Link to="/research/phd-support" className="block text-gray-600 hover:text-teal-600 py-2" onClick={() => {setCertDropdown(false); setMobileMenuOpen(false);}}>
                        PhD Support
                      </Link>
                      <Link to="/research/rna-seq" className="block text-gray-600 hover:text-teal-600 py-2" onClick={() => {setCertDropdown(false); setMobileMenuOpen(false);}}>
                        RNA-Seq Projects
                      </Link>
                      <Link to="/research/dna-seq" className="block text-gray-600 hover:text-teal-600 py-2" onClick={() => {setCertDropdown(false); setMobileMenuOpen(false);}}>
                        DNA-Seq Projects
                      </Link>
                      <Link to="/research/cancer-genomics" className="block text-gray-600 hover:text-teal-600 py-2" onClick={() => {setCertDropdown(false); setMobileMenuOpen(false);}}>
                        Cancer Genomics
                      </Link>
                      <Link to="/research/deliverables" className="block text-gray-600 hover:text-teal-600 py-2" onClick={() => {setCertDropdown(false); setMobileMenuOpen(false);}}>
                        PhD Deliverables
                      </Link>
                      <Link to="/research/infrastructure" className="block text-gray-600 hover:text-teal-600 py-2" onClick={() => {setCertDropdown(false); setMobileMenuOpen(false);}}>
                        Infrastructure
                      </Link>
                    </>
                  ) : (
                    <>
                      <button 
                        onClick={() => setSelectedCategory(null)}
                        className="text-sm text-teal-600 hover:text-teal-700 mb-2"
                      >
                        ← Back
                      </button>
                     
                      <Link to="/rna-seq" className="block text-gray-600 hover:text-teal-600 py-2" onClick={() => {setCertDropdown(false); setMobileMenuOpen(false);}}>
                        RNA Sequencing
                      </Link>
                      <Link to="/dna-seq" className="block text-gray-600 hover:text-teal-600 py-2" onClick={() => {setCertDropdown(false); setMobileMenuOpen(false);}}>
                        DNA Sequencing
                      </Link>
                      <Link to="/bio-python" className="block text-gray-600 hover:text-teal-600 py-2" onClick={() => {setCertDropdown(false); setMobileMenuOpen(false);}}>
                        Bio-Python
                      </Link>
                      <Link to="/bio-r" className="block text-gray-600 hover:text-teal-600 py-2" onClick={() => {setCertDropdown(false); setMobileMenuOpen(false);}}>
                        Bio-R
                      </Link>
                      <Link to="/linux-bioinformatics" className="block text-gray-600 hover:text-teal-600 py-2" onClick={() => {setCertDropdown(false); setMobileMenuOpen(false);}}>
                        Linux Bioinformatics
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Company */}
            <div>
              <button 
                className="flex items-center gap-2 text-gray-700 font-medium w-full text-left"
                onClick={() => setCompanyDropdown(!companyDropdown)}
              >
                <span>Company</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${companyDropdown ? 'rotate-180' : ''}`} />
              </button>
              {companyDropdown && (
                <div className="mt-3 space-y-3 pl-4">
                  <Link to="/about" className="block text-gray-600 hover:text-teal-600 py-2" onClick={() => {setCompanyDropdown(false); setMobileMenuOpen(false);}}>
                    About Us
                  </Link>
                  <Link to="/blog" className="block text-gray-600 hover:text-teal-600 py-2" onClick={() => {setCompanyDropdown(false); setMobileMenuOpen(false);}}>
                    Blog
                  </Link>
                  <Link to="/contact" className="block text-gray-600 hover:text-teal-600 py-2" onClick={() => {setCompanyDropdown(false); setMobileMenuOpen(false);}}>
                    Contact Us
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Apply Button */}
            <button className="w-full bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-medium transition-all">
              Apply Here
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
