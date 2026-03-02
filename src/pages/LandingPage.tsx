import { Microscope, Dna, FlaskConical, Leaf, Users, Award, BookOpen, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          Advancing Life Sciences
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Pioneering innovative biotechnology solutions for a healthier tomorrow
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/contact" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Get Started
          </Link>
          <Link to="/about" className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-medium border-2 border-gray-300 transition-colors">
            Learn More
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        <FeatureCard
          icon={<Microscope className="w-12 h-12 text-blue-600" />}
          title="Research"
          description="Cutting-edge laboratory research and development"
        />
        <FeatureCard
          icon={<Dna className="w-12 h-12 text-green-600" />}
          title="Genomics"
          description="Advanced genetic analysis and sequencing"
        />
        <FeatureCard
          icon={<FlaskConical className="w-12 h-12 text-purple-600" />}
          title="Drug Discovery"
          description="Innovative pharmaceutical development"
        />
        <FeatureCard
          icon={<Leaf className="w-12 h-12 text-emerald-600" />}
          title="Sustainability"
          description="Eco-friendly biotech solutions"
        />
      </div>

      {/* Stats Section */}
      <div className="bg-white rounded-lg shadow-lg p-12 mb-20">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-teal-600 mb-2">500+</div>
            <div className="text-gray-600">Students Enrolled</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-teal-600 mb-2">50+</div>
            <div className="text-gray-600">Expert Instructors</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-teal-600 mb-2">15+</div>
            <div className="text-gray-600">Certification Programs</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-teal-600 mb-2">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Biotech?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide world-class education and training in biotechnology and bioinformatics
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <Award className="w-12 h-12 text-teal-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Industry-Recognized Certifications</h3>
            <p className="text-gray-600">
              Earn certificates that are valued by top biotech companies and research institutions worldwide.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <Users className="w-12 h-12 text-teal-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Mentorship</h3>
            <p className="text-gray-600">
              Learn from experienced professionals with years of industry experience and academic excellence.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <BookOpen className="w-12 h-12 text-teal-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Hands-On Learning</h3>
            <p className="text-gray-600">
              Practical projects and real-world case studies to build your portfolio and expertise.
            </p>
          </div>
        </div>
      </div>

      {/* Popular Programs Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our most sought-after certification programs
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <ProgramCard
            title="Bioinformatics Data Analysis"
            description="Master bioinformatics data analysis, biological databases, and multi-omics workflows."
            duration="6 Weeks"
            level="Intermediate"
            link="/bioinformatics"
          />
          <ProgramCard
            title="Next-Gen Genomics"
            description="Learn next-generation sequencing (NGS) analysis, genomics pipelines, and biological data interpretation."
            duration="6 Weeks"
            level="Advanced"
            link="/genetics"
          />
          <ProgramCard
            title="Bio-Python Programming"
            description="Python tools for computational molecular biology and sequence analysis."
            duration="4 Weeks"
            level="Beginner"
            link="/bio-python"
          />
          <ProgramCard
            title="RNA-Seq Analysis"
            description="Transcriptome profiling using next-generation sequencing technologies."
            duration="5 Weeks"
            level="Intermediate"
            link="/rna-seq"
          />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from professionals who transformed their careers with us
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="The bioinformatics program gave me the skills I needed to land my dream job at a leading biotech company."
            author="Sarah Johnson"
            role="Bioinformatics Analyst"
          />
          <TestimonialCard
            quote="Excellent instructors and hands-on projects. I now feel confident working with genomic data."
            author="Michael Chen"
            role="Research Scientist"
          />
          <TestimonialCard
            quote="The best investment in my career. The certification opened doors I never thought possible."
            author="Emily Rodriguez"
            role="Computational Biologist"
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg p-12 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of students advancing their careers in biotechnology and bioinformatics
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 bg-white text-teal-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
        >
          Apply Now
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </main>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
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
}

function ProgramCard({ title, description, duration, level, link }: ProgramCardProps) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
        <TrendingUp className="w-6 h-6 text-teal-600" />
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
        <span className="flex items-center gap-1">
          <CheckCircle className="w-4 h-4 text-teal-600" />
          {duration}
        </span>
        <span className="flex items-center gap-1">
          <CheckCircle className="w-4 h-4 text-teal-600" />
          {level}
        </span>
      </div>
      <Link 
        to={link}
        className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium"
      >
        Learn More
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md">
      <div className="text-teal-600 text-4xl mb-4">"</div>
      <p className="text-gray-700 mb-6 italic">{quote}</p>
      <div>
        <div className="font-semibold text-gray-900">{author}</div>
        <div className="text-sm text-gray-600">{role}</div>
      </div>
    </div>
  );
}

export default LandingPage;
