import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon, ArrowUpIcon } from 'lucide-react';
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
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <GithubIcon size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <LinkedinIcon size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <TwitterIcon size={20} />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 my-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <button onClick={scrollToTop} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            Back to top
            <ArrowUpIcon size={16} />
          </button>
        </div>
      </div>
    </footer>;
}