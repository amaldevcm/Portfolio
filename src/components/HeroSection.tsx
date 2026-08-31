import { GithubIcon, LinkedinIcon } from 'lucide-react';

const TECH_STACK = ['React', 'TypeScript', 'Python', 'FastAPI', 'AWS', 'WebSocket', 'Java'];

export function HeroSection() {
  return (
    <section id="home" className="w-full relative overflow-hidden pt-24">
      <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-16 min-h-[80vh]">
        {/* Left: intro copy */}
        <div className="w-full md:w-1/2 flex flex-col items-start gap-8 z-10 relative">
          <div className="flex items-center gap-4">
            <div className="h-0.5 w-16 bg-accent"></div>
            <span className="font-mono text-xs text-slate-400 tracking-widest uppercase">
              Introduction
            </span>
          </div>

          <div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-100 mb-4 leading-tight">
              Hello<span className="text-accent">.</span>
              <br />
              <span className="text-slate-500 font-medium">I&apos;m Amal</span>
            </h1>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
              Software Engineer
            </h2>
          </div>

          <p className="text-slate-400 text-lg max-w-md">
            I ship production APIs, web and mobile experiences, and data platforms across healthcare tech and enterprise SaaS. Currently finishing my MS in Computer Science degree from Binghamton University, SUNY.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-accent hover:bg-accent-soft text-slate-950 font-bold rounded transition-colors duration-200 shadow-[0_0_15px_rgba(255,122,92,0.3)]"
            >
              Got a project
            </a>
            <a
              href="https://drive.google.com/file/d/1s43aCz31PhOghPAyZZM1PE9XZ1PAjhW6/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 border border-slate-700 hover:border-accent hover:text-accent text-slate-100 font-bold rounded transition-colors duration-200"
            >
              My resume
            </a>
          </div>

          <div className="flex items-center gap-6">
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

        {/* Right: decorative frame + code card */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center">
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
            <div className="w-72 h-72 rounded-full border-4 border-accent/20 absolute"></div>
            <div className="w-96 h-96 rounded-full border border-accent/10 absolute"></div>
            <div className="absolute -top-10 -left-10 text-slate-700/40 text-[100px] leading-none font-mono">
              &lt;
            </div>
            <div className="absolute -bottom-10 -right-10 text-slate-700/40 text-[100px] leading-none font-mono">
              &gt;
            </div>
          </div>

          <div className="relative z-10 w-full max-w-sm rounded-xl border border-slate-800 bg-slate-900/60 shadow-[0_0_50px_rgba(255,122,92,0.08)] overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-800 bg-slate-900">
              <span className="w-3 h-3 rounded-full bg-slate-700"></span>
              <span className="w-3 h-3 rounded-full bg-slate-700"></span>
              <span className="w-3 h-3 rounded-full bg-slate-700"></span>
              <span className="ml-3 font-mono text-xs text-slate-500">about-me.ts</span>
            </div>
            <div className="p-5 font-mono text-sm leading-relaxed">
              <p><span className="text-purple-400">const</span> <span className="text-sky-300">engineer</span> = &#123;</p>
              <p className="pl-4"><span className="text-sky-300">name</span>: <span className="text-accent">'Amal Dev'</span>,</p>
              <p className="pl-4"><span className="text-sky-300">stack</span>: [<span className="text-accent">'React'</span>, <span className="text-accent">'FastAPI'</span>, <span className="text-accent">'AWS'</span>],</p>
              <p className="pl-4"><span className="text-sky-300">focus</span>: <span className="text-accent">'Real-Time Systems'</span>,</p>
              <p className="pl-4"><span className="text-sky-300">location</span>: <span className="text-accent">'New York'</span>,</p>
              <p>&#125;;</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tech stack banner */}
      <div className="w-full bg-slate-900/40 border-y border-slate-800 py-8 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 font-mono text-sm text-slate-400">
            {TECH_STACK.map(tech => (
              <span
                key={tech}
                className="opacity-70 hover:text-accent hover:opacity-100 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
