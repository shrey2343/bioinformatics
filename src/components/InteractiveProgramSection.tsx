import { useState, useRef, useEffect } from 'react';
import { GraduationCap, Briefcase, Users, Lightbulb, Award, BookOpen, Target, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProgramItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  duration: string;
  level: string;
  highlights: string[];
}

const programData: ProgramItem[] = [
  {
    id: 'accelerated-masters',
    title: 'Accelerated Master\'s Program',
    icon: <GraduationCap className="w-6 h-6" />,
    description: 'Complete your master\'s degree in biotechnology or bioinformatics with our accelerated pathway program designed for working professionals.',
    features: [
      'Complete in 12-18 months',
      'Weekend and evening classes',
      'Industry-relevant curriculum',
      'Research project opportunities'
    ],
    duration: '12-18 Months',
    level: 'Advanced',
    highlights: [
      'Fast-track your career',
      'Dual specialization options',
      'Industry partnerships',
      'Alumni network access'
    ]
  },
  {
    id: 'work-study',
    title: 'Work While You Study',
    icon: <Briefcase className="w-6 h-6" />,
    description: 'Balance your education with professional work through our flexible work-study programs and paid internship opportunities.',
    features: [
      'Paid internships',
      'Flexible scheduling',
      'Real-world experience',
      'Career placement support'
    ],
    duration: '24 Months',
    level: 'Intermediate',
    highlights: [
      'Earn while learning',
      'Professional networking',
      'Job placement guarantee',
      'Skill development'
    ]
  },
  {
    id: 'hybrid-university',
    title: 'Hybrid Learning Model',
    icon: <Users className="w-6 h-6" />,
    description: 'Experience the best of both worlds with our hybrid learning model combining online flexibility with in-person lab sessions.',
    features: [
      'Online theory classes',
      'In-person lab sessions',
      'Self-paced learning',
      'Expert mentorship'
    ],
    duration: 'Flexible',
    level: 'All Levels',
    highlights: [
      'Learn at your own pace',
      'Hands-on lab experience',
      'Global accessibility',
      'Cost-effective'
    ]
  },
  {
    id: 'hots-seed',
    title: 'H.O.T.S & S.E.E.D Learning',
    icon: <Lightbulb className="w-6 h-6" />,
    description: 'Higher Order Thinking Skills & Scientific Education Enhancement Development - our unique pedagogical approach for advanced learning.',
    features: [
      'Critical thinking development',
      'Problem-solving methodologies',
      'Research-oriented approach',
      'Innovation workshops'
    ],
    duration: '6-12 Months',
    level: 'Advanced',
    highlights: [
      'Innovative teaching methods',
      'Research-focused curriculum',
      'Industry collaboration',
      'Innovation labs'
    ]
  },
  {
    id: 'top-tier-teaching',
    title: 'Top Tier Teaching Faculty',
    icon: <Award className="w-6 h-6" />,
    description: 'Learn from industry experts and renowned researchers with decades of experience in biotechnology and bioinformatics.',
    features: [
      'PhD-level instructors',
      'Industry experts',
      'Research scientists',
      'Guest lectures from leaders'
    ],
    duration: 'Varies',
    level: 'All Levels',
    highlights: [
      'Expert faculty',
      'Research opportunities',
      'Mentorship programs',
      'Global recognition'
    ]
  }
];

function InteractiveProgramSection() {
  const [activeProgram, setActiveProgram] = useState<string>('accelerated-masters');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const currentProgram = programData.find(p => p.id === activeProgram) || programData[0];

  const checkScrollability = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth);
    }
  };

  useEffect(() => {
    checkScrollability();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollability);
      return () => container.removeEventListener('scroll', checkScrollability);
    }
  }, []);

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const handlePrevProgram = () => {
    const newIndex = Math.max(0, activeIndex - 1);
    setActiveIndex(newIndex);
    setActiveProgram(programData[newIndex].id);
  };

  const handleNextProgram = () => {
    const newIndex = Math.min(programData.length - 1, activeIndex + 1);
    setActiveIndex(newIndex);
    setActiveProgram(programData[newIndex].id);
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Innovative Learning Programs
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our unique educational approaches designed to transform your career in biotechnology
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Mobile View - Single Program Display */}
          <div className="lg:hidden">
            {/* Navigation Buttons and Content Card */}
            <div className="relative px-4">
              {/* Left Navigation Button */}
              <button
                onClick={handlePrevProgram}
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg transition-opacity ${
                  activeIndex === 0 ? 'opacity-50 pointer-events-none' : 'opacity-100'
                }`}
                aria-label="Previous program"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>

              {/* Right Navigation Button */}
              <button
                onClick={handleNextProgram}
                className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg transition-opacity ${
                  activeIndex === programData.length - 1 ? 'opacity-50 pointer-events-none' : 'opacity-100'
                }`}
                aria-label="Next program"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>

              {/* Mobile Content Card */}
              <div className="bg-white rounded-2xl shadow-xl p-6 mx-auto max-w-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg text-white">
                    {currentProgram.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 truncate">
                      {currentProgram.title}
                    </h3>
                    <div className="flex gap-2">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                        <BookOpen className="w-3 h-3 mr-1" />
                        {currentProgram.level}
                      </span>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        <Target className="w-3 h-3 mr-1" />
                        {currentProgram.duration}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {currentProgram.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-teal-500" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {currentProgram.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span className="text-gray-600 text-xs">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-blue-500" />
                      Highlights
                    </h4>
                    <ul className="space-y-2">
                      {currentProgram.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span className="text-gray-600 text-xs">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Program Indicator */}
                <div className="flex justify-center gap-2 mb-6">
                  {programData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveIndex(index);
                        setActiveProgram(programData[index].id);
                      }}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === activeIndex ? 'bg-teal-500' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to program ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-3 rounded-lg font-semibold text-sm hover:shadow-lg transition-all">
                    Enroll Now
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg font-semibold text-sm hover:bg-gray-200 transition-all">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop View - Original Layout */}
          <div className="hidden lg:block lg:col-span-12">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Left Navigation */}
              <div className="lg:col-span-4">
                <div className="space-y-2">
                  {programData.map((program) => (
                    <button
                      key={program.id}
                      onClick={() => setActiveProgram(program.id)}
                      onMouseEnter={() => setActiveProgram(program.id)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${
                        activeProgram === program.id
                          ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg transform scale-105'
                          : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg transition-colors ${
                          activeProgram === program.id
                            ? 'bg-white/20'
                            : 'bg-teal-100 text-teal-600 group-hover:bg-teal-200'
                        }`}>
                          {program.icon}
                        </div>
                        <div>
                          <h3 className={`font-semibold text-sm sm:text-base ${
                            activeProgram === program.id ? 'text-white' : 'text-gray-900'
                          }`}>
                            {program.title}
                          </h3>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl text-white">
                      {currentProgram.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        {currentProgram.title}
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-800">
                          <BookOpen className="w-4 h-4 mr-1" />
                          {currentProgram.level}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                          <Target className="w-4 h-4 mr-1" />
                          {currentProgram.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {currentProgram.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-teal-500" />
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {currentProgram.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-blue-500" />
                        Program Highlights
                      </h4>
                      <ul className="space-y-3">
                        {currentProgram.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105">
                      Enroll Now
                    </button>
                    <button className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all">
                      Download Brochure
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InteractiveProgramSection;
