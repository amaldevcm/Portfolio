import { ArrowUpIcon } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <footer className="border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 font-mono text-lg">
              <img src="/logo.svg" alt="" className="w-6 h-6 rounded-md" />
              <span className="font-semibold text-slate-100">amal.dev</span>
            </div>
            <p className="text-slate-400 mt-2 text-sm">
              Building things for the web, one commit at a time.
            </p>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-accent transition-colors font-mono text-sm"
          >
            back to top
            <ArrowUpIcon size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
