import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import HeroSection from '../components/HeroSection';

function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of CRISPR Gene Editing",
      excerpt: "Exploring the latest advancements in CRISPR technology and its potential applications in treating genetic diseases.",
      author: "Dr. Sarah Johnson",
      date: "March 1, 2026",
      category: "Genetics",
      image: "🧬"
    },
    {
      id: 2,
      title: "AI in Drug Discovery: A Game Changer",
      excerpt: "How artificial intelligence is revolutionizing the pharmaceutical industry and accelerating drug development.",
      author: "Dr. Michael Chen",
      date: "February 28, 2026",
      category: "Biotechnology",
      image: "💊"
    },
    {
      id: 3,
      title: "Understanding RNA-Seq Data Analysis",
      excerpt: "A comprehensive guide to analyzing RNA sequencing data and interpreting gene expression results.",
      author: "Dr. Emily Rodriguez",
      date: "February 25, 2026",
      category: "Bioinformatics",
      image: "📊"
    },
    {
      id: 4,
      title: "Proteomics in Personalized Medicine",
      excerpt: "How protein analysis is paving the way for tailored medical treatments based on individual patient profiles.",
      author: "Dr. James Wilson",
      date: "February 22, 2026",
      category: "Proteomics",
      image: "🔬"
    },
    {
      id: 5,
      title: "Python for Bioinformatics Beginners",
      excerpt: "Getting started with BioPython and essential programming skills for computational biology.",
      author: "Dr. Lisa Anderson",
      date: "February 20, 2026",
      category: "Programming",
      image: "💻"
    },
    {
      id: 6,
      title: "Next-Generation Sequencing Technologies",
      excerpt: "An overview of the latest NGS platforms and their applications in genomics research.",
      author: "Dr. Robert Martinez",
      date: "February 18, 2026",
      category: "Genomics",
      image: "🧪"
    }
  ];

  return (
    <main>
      <HeroSection
        title="Blog"
        subtitle="Stay updated with the latest insights, research, and trends in biotechnology and bioinformatics"
        badge={{
          icon: <BookOpen className="w-4 h-4 text-yellow-300" />,
          text: "Latest Articles"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 h-48 flex items-center justify-center text-6xl">
              {post.image}
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-teal-600 mb-3">
                <span className="bg-teal-100 px-3 py-1 rounded-full">{post.category}</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-teal-600 cursor-pointer">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
              </div>
              <button className="text-teal-600 hover:text-teal-700 font-medium flex items-center gap-2">
                Read More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
      </div>
    </main>
  );
}

export default BlogPage;
