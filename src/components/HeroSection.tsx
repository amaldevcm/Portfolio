import { ArrowDownIcon, GithubIcon, LinkedinIcon } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen w-full flex items-center relative overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-40"></div>
      <div className="absolute top-1/3 right-0 w-[28rem] h-[28rem] bg-accent/10 rounded-full filter blur-3xl z-0"></div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-8">
            <div className="space-y-4">
              <p className="font-mono text-accent text-sm">
                <span className="text-slate-500">~/portfolio $</span> whoami
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Amal Dev
              </h1>
              <p className="font-mono text-slate-400 text-lg">
                Software Engineer · Full-Stack &amp; Applied ML
              </p>
            </div>

            <p className="text-slate-400 text-lg max-w-lg">
              I build scalable full-stack applications and explore computer vision
              and machine learning. Currently pursuing a Master's in Computer
              Science at Binghamton University.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-accent text-slate-950 hover:bg-accent-soft rounded-lg font-semibold transition-colors duration-200"
              >
                Get in Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1s43aCz31PhOghPAyZZM1PE9XZ1PAjhW6/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 border border-slate-700 hover:border-accent hover:text-accent rounded-lg font-medium transition-colors duration-200"
              >
                Resume
              </a>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://www.github.com/amaldevcm"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/amaldevcm"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <div className="hidden md:block w-full max-w-sm rounded-xl border border-slate-800 bg-slate-900/60 shadow-2xl shadow-black/40 overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-800 bg-slate-900">
                <span className="w-3 h-3 rounded-full bg-slate-700"></span>
                <span className="w-3 h-3 rounded-full bg-slate-700"></span>
                <span className="w-3 h-3 rounded-full bg-slate-700"></span>
                <span className="ml-3 font-mono text-xs text-slate-500">about-me.ts</span>
              </div>
              <div className="p-5 font-mono text-sm leading-relaxed">
                <p><span className="text-purple-400">const</span> <span className="text-sky-300">engineer</span> = &#123;</p>
                <p className="pl-4"><span className="text-sky-300">name</span>: <span className="text-accent">'Amal Dev'</span>,</p>
                <p className="pl-4"><span className="text-sky-300">stack</span>: [<span className="text-accent">'React'</span>, <span className="text-accent">'Node'</span>, <span className="text-accent">'Python'</span>],</p>
                <p className="pl-4"><span className="text-sky-300">focus</span>: <span className="text-accent">'Computer Vision'</span>,</p>
                <p className="pl-4"><span className="text-sky-300">location</span>: <span className="text-accent">'Binghamton, NY'</span>,</p>
                <p>&#125;;</p>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-accent transition-colors"
        >
          <span className="font-mono text-xs">scroll</span>
          <ArrowDownIcon size={18} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
