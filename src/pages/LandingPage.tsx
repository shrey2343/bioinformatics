import { Microscope, Dna, FlaskConical, Leaf, Users, Award, BookOpen, TrendingUp, CheckCircle, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import InteractiveProgramSection from '../components/InteractiveProgramSection';
import { useState } from 'react';

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20 relative z-20">
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

        {/* Industry Growth Statistics Section */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 break-words">
              Preparing for the Future of Biotechnology
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              The biotechnology industry is experiencing unprecedented growth with exceptional career opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
            {/* Job Growth Card with Curve */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-200 hover:shadow-3xl transition-all">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">Increasing Demand for Bioinformaticians,</h3>
              
              <div className="relative h-96">
                {/* Info Text Centered */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10 flex items-start gap-2">
                  <div className="bg-gradient-to-br from-teal-400 to-emerald-500 p-2 rounded-lg flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">13 Lakhs+ Jobs</div>
                    <div className="text-xs text-gray-600 leading-tight max-w-[200px]">
                      There will be 13 Lakh Jobs in Biotech by the time you graduate
                    </div>
                  </div>
                </div>

                {/* Graph Container */}
                <div className="absolute inset-0 pt-20">
                  <svg className="w-full h-full" viewBox="0 0 500 350" preserveAspectRatio="xMidYMid meet">
                    <defs>
                      <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.4"/>
                        <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.05"/>
                      </linearGradient>
                    </defs>
                    
                    {/* Grid lines */}
                    <line x1="60" y1="80" x2="460" y2="80" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4,4"/>
                    <line x1="60" y1="150" x2="460" y2="150" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4,4"/>
                    <line x1="60" y1="220" x2="460" y2="220" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4,4"/>
                    <line x1="60" y1="290" x2="460" y2="290" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4,4"/>
                    
                    {/* Y-axis */}
                    <line x1="60" y1="60" x2="60" y2="290" stroke="#9ca3af" strokeWidth="2"/>
                    {/* X-axis */}
                    <line x1="60" y1="290" x2="460" y2="290" stroke="#9ca3af" strokeWidth="2"/>
                    
                    {/* Y-axis labels */}
                    <text x="45" y="295" fontSize="13" fill="#6b7280" textAnchor="end" fontWeight="500">1L</text>
                    <text x="45" y="225" fontSize="13" fill="#6b7280" textAnchor="end" fontWeight="500">3L</text>
                    <text x="45" y="155" fontSize="13" fill="#6b7280" textAnchor="end" fontWeight="500">5L</text>
                    <text x="45" y="85" fontSize="13" fill="#6b7280" textAnchor="end" fontWeight="500">7L</text>
                    
                    {/* Smooth curve */}
                    <path
                      d="M 80 270 Q 180 240, 260 180 T 440 80"
                      fill="none"
                      stroke="#14b8a6"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    
                    {/* Area under curve */}
                    <path
                      d="M 80 270 Q 180 240, 260 180 T 440 80 L 440 290 L 80 290 Z"
                      fill="url(#curveGradient)"
                    />
                    
                    {/* Data points */}
                    <circle cx="80" cy="270" r="5" fill="#14b8a6" stroke="white" strokeWidth="2"/>
                    <circle cx="260" cy="180" r="5" fill="#14b8a6" stroke="white" strokeWidth="2"/>
                    <circle cx="440" cy="80" r="5" fill="#14b8a6" stroke="white" strokeWidth="2"/>
                    
                    {/* X-axis labels */}
                    <text x="80" y="315" fontSize="13" fill="#6b7280" textAnchor="middle" fontWeight="500">2020</text>
                    <text x="260" y="315" fontSize="13" fill="#6b7280" textAnchor="middle" fontWeight="500">2024</text>
                    <text x="440" y="315" fontSize="13" fill="#6b7280" textAnchor="middle" fontWeight="500">2025</text>
                    
                    {/* Axis labels */}
                    <text x="20" y="180" fontSize="11" fill="#9ca3af" textAnchor="middle" transform="rotate(-90 20 180)">Number of Jobs</text>
                    <text x="260" y="340" fontSize="11" fill="#9ca3af" textAnchor="middle">Year</text>
                  </svg>
                </div>
              </div>
              
              <p className="text-xs text-gray-500 mt-4">Source: Microsoft Industry Report 2024</p>
            </div>

            {/* Salary Comparison Card */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-200 hover:shadow-3xl transition-all">
              <h3 className="text-lg font-semibold text-gray-800 mb-8">Higher salaries with right skill sets is possible</h3>
              
              <div className="relative h-96 flex items-end justify-center gap-12 px-8">
                {/* Y-axis label */}
                <div className="absolute left-0 top-12 bottom-16 flex items-center">
                  <div className="transform -rotate-90 text-xs text-gray-500 whitespace-nowrap font-medium">
                    Average CTC (₹)
                  </div>
                </div>

                {/* Left Bar - Without Skills */}
                <div className="flex flex-col items-center">
                  <div className="text-center mb-3">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-2xl font-bold text-gray-900">₹2</span>
                      <span className="text-lg font-semibold text-gray-700">Lakhs</span>
                    </div>
                    <div className="text-[10px] text-gray-500 font-medium tracking-wide">PER ANNUM</div>
                  </div>
                  <div className="relative w-24 bg-gradient-to-t from-gray-400 via-gray-300 to-gray-200 rounded-t-2xl shadow-lg" style={{height: '140px'}}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-t-2xl"></div>
                  </div>
                  <div className="mt-4 text-center max-w-[130px]">
                    <div className="text-xs font-medium text-gray-700 leading-tight">Without Industry skillsets in Biotech</div>
                  </div>
                </div>

                {/* Right Bar - With Skills */}
                <div className="flex flex-col items-center">
                  <div className="text-center mb-3">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-2xl font-bold text-gray-900">₹8</span>
                      <span className="text-lg font-semibold text-gray-700">Lakhs</span>
                    </div>
                    <div className="text-[10px] text-gray-500 font-medium tracking-wide">PER ANNUM</div>
                  </div>
                  <div className="relative w-24 bg-gradient-to-t from-emerald-500 via-teal-400 to-teal-300 rounded-t-2xl shadow-xl" style={{height: '300px'}}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-white/20 rounded-t-2xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-white px-5 py-2 rounded-full shadow-xl border-2 border-emerald-200">
                        <span className="text-base font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">4X more</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center max-w-[130px]">
                    <div className="text-xs font-medium text-gray-700 leading-tight">With right Industry exposure & skillsets</div>
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-gray-500 mt-4">Source: Internal Placement Report 2024</p>
            </div>
          </div>

          {/* Trusted By Section */}
          <div className="mt-12 text-center px-4">
            <p className="text-sm text-gray-500 mb-6 font-medium">TRUSTED BY LEADING ORGANIZATIONS</p>
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 opacity-60 hover:opacity-80 transition-opacity">
              <div className="text-3xl font-bold tracking-wider" style={{fontFamily: 'serif', letterSpacing: '0.1em'}}>
                <span className="text-gray-700">A</span>
                <span className="text-gray-600">I</span>
                <span className="text-gray-700">M</span>
                <span className="text-gray-600">S</span>
              </div>
              <div className="text-xl font-serif text-gray-600" style={{fontFamily: 'Georgia, serif'}}>
                The Economic Times
              </div>
              <div className="text-3xl font-bold text-teal-500 tracking-widest" style={{letterSpacing: '0.15em'}}>
                CISION
              </div>
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

        {/* FAQ Section */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 break-words">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Got questions? We've got answers
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4 px-4">
            <FAQItem
              question="What are the prerequisites for enrolling in bioinformatics courses?"
              answer="Most of our courses are designed for beginners to intermediate learners. Basic knowledge of biology and familiarity with computers is helpful, but not mandatory. For advanced courses like RNA-Seq and DNA-Seq analysis, some programming experience (Python or R) is recommended but we provide foundational modules to help you get started."
            />
            <FAQItem
              question="How long does it take to complete a certification program?"
              answer="Our certification programs range from 4 to 6 weeks depending on the course. Each program is designed to be flexible, allowing you to learn at your own pace. On average, students dedicate 8-10 hours per week and complete the program within the specified timeframe while balancing their work or studies."
            />
            <FAQItem
              question="Will I get placement assistance after completing the course?"
              answer="Yes! We provide comprehensive placement assistance including resume building, interview preparation, and connections to our network of biotech companies and research institutions. Our placement team works closely with students to help them secure positions in leading organizations. We also have a dedicated job portal with exclusive opportunities for our alumni."
            />
            <FAQItem
              question="Are the certifications recognized by industry?"
              answer="Absolutely! Our certifications are recognized by leading biotech companies, pharmaceutical firms, and research institutions across India and globally. We maintain partnerships with industry leaders who value our curriculum and the practical skills our students develop. Many of our alumni have successfully used these certifications to advance their careers."
            />
            <FAQItem
              question="What kind of projects will I work on during the course?"
              answer="You'll work on real-world projects that mirror actual industry challenges. This includes analyzing genomic datasets, performing RNA-Seq and DNA-Seq analysis, working with biological databases, and developing bioinformatics pipelines. All projects are hands-on and designed to build your portfolio, giving you practical experience that employers value."
            />
            <FAQItem
              question="Do you offer any financial assistance or EMI options?"
              answer="Yes, we understand that investing in education is a big decision. We offer flexible payment plans including EMI options to make our programs accessible. We also provide scholarships for meritorious students and those from economically disadvantaged backgrounds. Contact our admissions team to learn more about available financial assistance options."
            />
            <FAQItem
              question="Can I access course materials after completion?"
              answer="Yes! Once you enroll, you get lifetime access to all course materials, including video lectures, assignments, and resources. We also regularly update our content to reflect the latest industry trends and technologies, and you'll have access to these updates at no additional cost. Our alumni community also provides ongoing support and networking opportunities."
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

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-all overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-lg font-semibold text-gray-900 pr-4">{question}</span>
        <ChevronDown
          className={`w-6 h-6 text-purple-600 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-6 pb-5 pt-2">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
