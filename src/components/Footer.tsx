import { ArrowUpIcon, MailIcon, GithubIcon, Linkedin } from 'lucide-react';

const SOCIALS = [
  { icon: MailIcon, label: 'Email', href: 'mailto:amalcheepramail@gmail.com' },
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/amaldevcm' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/amaldevcm' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <footer className="w-full py-8 bg-slate-900/40 border-t border-slate-800">
      <div className="container mx-auto px-6 flex flex-col items-center gap-4 text-center">
        <h2 className="text-xl font-bold text-slate-100">Amal.dev</h2>

        <div className="flex gap-4">
          {SOCIALS.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={label}
              className="text-slate-400 hover:text-accent transition-colors p-2 rounded-full hover:bg-slate-800"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <p className="text-slate-400 text-sm">
          Building things for the web, one commit at a time.
        </p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-slate-500 hover:text-accent transition-colors font-mono text-xs mt-2"
        >
          back to top
          <ArrowUpIcon size={14} />
        </button>

        <p className="text-slate-600 text-xs">
          © {new Date().getFullYear()} Amal Dev. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
