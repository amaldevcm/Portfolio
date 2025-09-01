import { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            Portfolio
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map(item =>
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white transition-colors duration-200">
              {item}
            </a>)}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-300 hover:text-white focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 py-2">
          <nav className="flex flex-col space-y-3 py-3">
            {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors duration-200 py-2" onClick={() => setIsMenuOpen(false)}>
              {item}
            </a>)}
          </nav>
        </div>
      </div>}
    </header>
  );
}