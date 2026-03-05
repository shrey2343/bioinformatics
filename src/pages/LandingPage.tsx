import { Microscope, Dna, FlaskConical, Leaf, Users, Award, BookOpen, TrendingUp, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import InteractiveProgramSection from '../components/InteractiveProgramSection';

function LandingPage() {
  return (
    <main>
      {/* Hero Section with Video Background */}
      <div className="relative bg-black text-white overflow-hidden pt-20 min-h-screen">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        >
          <source src="https://cdn.pixabay.com/video/2017/01/01/6973-197914400_large.mp4" type="video/mp4" />
        </video>
        
        {/* Subtle gradient overlay only at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/30 rounded-full px-6 py-2 mb-6 shadow-2xl">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-semibold text-white">Leading Biotech Education Platform</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] [text-shadow:_2px_2px_8px_rgb(0_0_0_/_80%)] break-words">
              Advancing Life Sciences
            </h2>
            <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto mb-8 sm:mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] [text-shadow:_1px_1px_4px_rgb(0_0_0_/_70%)] font-medium px-4">
              Pioneering innovative biotechnology solutions and world-class education for a healthier tomorrow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link to="/contact" className="bg-white text-purple-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all shadow-2xl hover:shadow-white/50 transform hover:scale-105 text-center">
                Get Started
              </Link>
              <Link to="/about" className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold border-2 border-white/50 transition-all shadow-2xl text-center">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 overflow-x-hidden">
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 -mt-16 sm:-mt-20 mb-16 sm:mb-20 relative z-20">
          <FeatureCard
            icon={<Microscope className="w-12 h-12 text-white" />}
            title="Research"
            description="Cutting-edge laboratory research and development"
            gradient="from-blue-500 to-cyan-500"
          />
          <FeatureCard
            icon={<Dna className="w-12 h-12 text-white" />}
            title="Genomics"
            description="Advanced genetic analysis and sequencing"
            gradient="from-purple-500 to-pink-500"
          />
          <FeatureCard
            icon={<FlaskConical className="w-12 h-12 text-white" />}
            title="Drug Discovery"
            description="Innovative pharmaceutical development"
            gradient="from-indigo-500 to-purple-500"
          />
          <FeatureCard
            icon={<Leaf className="w-12 h-12 text-white" />}
            title="Sustainability"
            description="Eco-friendly biotech solutions"
            gradient="from-emerald-500 to-teal-500"
          />
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 mb-16 sm:mb-20 border border-purple-100 overflow-x-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="group hover:scale-105 transition-transform">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-gray-700 font-medium">Students Enrolled</div>
            </div>
            <div className="group hover:scale-105 transition-transform">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">50+</div>
              <div className="text-gray-700 font-medium">Expert Instructors</div>
            </div>
            <div className="group hover:scale-105 transition-transform">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">15+</div>
              <div className="text-gray-700 font-medium">Certification Programs</div>
            </div>
            <div className="group hover:scale-105 transition-transform">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">95%</div>
              <div className="text-gray-700 font-medium">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 break-words">
              Why Choose Biotech?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We provide world-class education and training in biotechnology and bioinformatics
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-blue-100 group hover:scale-105">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Industry-Recognized Certifications</h3>
              <p className="text-gray-600">
                Earn certificates that are valued by top biotech companies and research institutions worldwide.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-purple-100 group hover:scale-105">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Expert Mentorship</h3>
              <p className="text-gray-600">
                Learn from experienced professionals with years of industry experience and academic excellence.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-indigo-100 group hover:scale-105">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Hands-On Learning</h3>
              <p className="text-gray-600">
                Practical projects and real-world case studies to build your portfolio and expertise.
              </p>
            </div>
          </div>
        </div>

        <InteractiveProgramSection />

        {/* Popular Programs Section */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4 break-words">
              Popular Programs
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our most sought-after certification programs
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <ProgramCard
              title="Bioinformatics Data Analysis"
              description="Master bioinformatics data analysis, biological databases, and multi-omics workflows."
              duration="6 Weeks"
              level="Intermediate"
              link="/bioinformatics"
              gradient="from-blue-500 to-cyan-500"
            />
            <ProgramCard
              title="Next-Gen Genomics"
              description="Learn next-generation sequencing (NGS) analysis, genomics pipelines, and biological data interpretation."
              duration="6 Weeks"
              level="Advanced"
              link="/genetics"
              gradient="from-purple-500 to-pink-500"
            />
            <ProgramCard
              title="Bio-Python Programming"
              description="Python tools for computational molecular biology and sequence analysis."
              duration="4 Weeks"
              level="Beginner"
              link="/bio-python"
              gradient="from-indigo-500 to-purple-500"
            />
            <ProgramCard
              title="RNA-Seq Analysis"
              description="Transcriptome profiling using next-generation sequencing technologies."
              duration="5 Weeks"
              level="Intermediate"
              link="/rna-seq"
              gradient="from-emerald-500 to-teal-500"
            />
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 break-words">
              What Our Students Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from professionals who transformed their careers with us
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <TestimonialCard
              quote="The bioinformatics program gave me the skills I needed to land my dream job at a leading biotech company."
              author="Sarah Johnson"
              role="Bioinformatics Analyst"
              gradient="from-blue-500 to-cyan-500"
            />
            <TestimonialCard
              quote="Excellent instructors and hands-on projects. I now feel confident working with genomic data."
              author="Michael Chen"
              role="Research Scientist"
              gradient="from-purple-500 to-pink-500"
            />
            <TestimonialCard
              quote="The best investment in my career. The certification opened doors I never thought possible."
              author="Emily Rodriguez"
              role="Computational Biologist"
              gradient="from-indigo-500 to-purple-500"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl relative overflow-hidden mx-4">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMTRjMy4zMSAwIDYtMi42OSA2LTZzLTIuNjktNi02LTYtNiAyLjY5LTYgNiAyLjY5IDYgNiA2em0wLTRjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yLTIgLjktMiAyIC45IDIgMiAyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 break-words">Ready to Start Your Journey?</h2>
            <p className="text-lg sm:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto text-blue-100 px-4">
              Join thousands of students advancing their careers in biotechnology and bioinformatics
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 bg-white text-purple-600 px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Apply Now
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

function FeatureCard({ icon, title, description, gradient }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100 group hover:scale-105 transform">
      <div className={`bg-gradient-to-br ${gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

interface ProgramCardProps {
  title: string;
  description: string;
  duration: string;
  level: string;
  link: string;
  gradient: string;
}

function ProgramCard({ title, description, duration, level, link, gradient }: ProgramCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 group hover:scale-105 transform">
      <div className="flex items-start justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <div className={`bg-gradient-to-br ${gradient} p-3 rounded-xl group-hover:scale-110 transition-transform`}>
          <TrendingUp className="w-6 h-6 text-white" />
        </div>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="flex items-center gap-4 mb-6 text-sm">
        <span className="flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full font-medium">
          <CheckCircle className="w-4 h-4" />
          {duration}
        </span>
        <span className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-medium">
          <CheckCircle className="w-4 h-4" />
          {level}
        </span>
      </div>
      <Link 
        to={link}
        className={`inline-flex items-center gap-2 bg-gradient-to-r ${gradient} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all`}
      >
        Learn More
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  gradient: string;
}

function TestimonialCard({ quote, author, role, gradient }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 group hover:scale-105 transform">
      <div className={`bg-gradient-to-br ${gradient} w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        <div className="text-white text-3xl font-bold">"</div>
      </div>
      <p className="text-gray-700 mb-6 italic leading-relaxed">{quote}</p>
      <div>
        <div className="font-bold text-gray-900 text-lg">{author}</div>
        <div className="text-sm text-gray-600">{role}</div>
      </div>
    </div>
  );
}

export default LandingPage;
