import { ArrowUpIcon } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
              Portfolio
            </span>
            <p className="text-gray-400 mt-2">
              Creating beautiful digital experiences.
            </p>
          </div>
          <button onClick={scrollToTop} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            Back to top
            <ArrowUpIcon size={16} />
          </button>
        </div>
      </div>
    </footer>;
}