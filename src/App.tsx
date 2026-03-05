import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import GeneticsPage from './pages/GeneticsPage';
import ProteomicsPage from './pages/ProteomicsPage';
import RNASeqPage from './pages/RNASeqPage';
import DNASeqPage from './pages/DNASeqPage';
import BioPythonPage from './pages/BioPythonPage';
import BioRPage from './pages/BioRPage';
import LinuxBioinformaticsPage from './pages/LinuxBioinformaticsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import PhDSupportPage from './pages/PhDSupportPage';
import ResearchRNASeqPage from './pages/ResearchRNASeqPage';
import ResearchDNASeqPage from './pages/ResearchDNASeqPage';
import CancerGenomicsPage from './pages/CancerGenomicsPage';
import DeliverablesPage from './pages/DeliverablesPage';
import InfrastructurePage from './pages/InfrastructurePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/genetics" element={<GeneticsPage />} />
            <Route path="/proteomics" element={<ProteomicsPage />} />
            <Route path="/rna-seq" element={<RNASeqPage />} />
            <Route path="/dna-seq" element={<DNASeqPage />} />
            <Route path="/bio-python" element={<BioPythonPage />} />
            <Route path="/bio-r" element={<BioRPage />} />
            <Route path="/linux-bioinformatics" element={<LinuxBioinformaticsPage />} />
            <Route path="/research/phd-support" element={<PhDSupportPage />} />
            <Route path="/research/rna-seq" element={<ResearchRNASeqPage />} />
            <Route path="/research/dna-seq" element={<ResearchDNASeqPage />} />
            <Route path="/research/cancer-genomics" element={<CancerGenomicsPage />} />
            <Route path="/research/deliverables" element={<DeliverablesPage />} />
            <Route path="/research/infrastructure" element={<InfrastructurePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-conditions" element={<TermsConditionsPage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
