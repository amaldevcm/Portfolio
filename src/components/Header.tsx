import { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';

const NAV_ITEMS = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full fixed top-0 left-0 right-0 bg-slate-950/85 backdrop-blur-sm z-50 border-b border-slate-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 font-mono text-lg">
          <img src="/logo.svg" alt="" className="w-7 h-7 rounded-md" />
          <span className="font-semibold text-slate-100">amal.dev</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 font-mono text-sm">
          {NAV_ITEMS.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-3 py-2 text-slate-400 hover:text-accent transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-300 hover:text-accent focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-1 py-3 font-mono text-sm">
              {NAV_ITEMS.map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-accent transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
