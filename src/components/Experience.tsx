import { CpuIcon, ZapIcon } from 'lucide-react'

type Insight = { icon: typeof CpuIcon; title: string; description: string };

type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  insight?: Insight;
};

const experiences: ExperienceEntry[] = [
  {
    role: 'Software Development Engineer 1',
    company: 'Neo Health',
    period: 'Aug 2026 - Present',
    description:
      "Built a RAG pipeline that gives the ChatBot each user's health data so its messages are personal. Also generated 2,600 branded recipe images in batch and wrote LLM evals that took the pass rate from 80% to 95%.",
    technologies: ['Python', 'GenAI', 'RAG', 'xAI Grok', 'AWS Lambda', 'AWS S3', 'SQL', 'LLM Eval'],
    insight: {
      icon: CpuIcon,
      title: 'GenAI RAG Pipeline',
      description: "The ChatBot pulls in each user's Apple Health and macro data as context before it writes a message.",
    },
  },
  {
    role: 'Software Development Engineer Intern',
    company: 'Neo Health',
    period: 'Jun 2026 - Aug 2026',
    description:
      "Built the Apple HealthKit integration in React Native on a serverless AWS backend, plus a Lambda API that tracks each user's macros against their targets.",
    technologies: ['React Native', 'Expo', 'AWS Lambda', 'AWS SAM', 'PostgreSQL', 'HealthKit', 'Astro', 'Tailwind CSS'],
  },
  {
    role: "Master's degree",
    company: 'SUNY Binghamton University',
    period: 'Aug 2024 - Aug 2026',
    description: "Master's in Computer Science, with coursework in distributed systems and advanced algorithms.",
    technologies: ['Java', 'C', 'Python', 'Distributed Systems'],
  },
  {
    role: 'Post Graduate Program in Data Science',
    company: 'Vellore Institute of Technology (VIT)',
    period: 'Aug 2023 - Jul 2024',
    description: 'Statistical modeling and machine learning, including deep learning and data visualization in PowerBI.',
    technologies: ['Python', 'Deep Learning', 'ML', 'Statistical Modeling'],
  },
  {
    role: 'Member Technical Staff',
    company: 'GoFrugal (a Zoho Company)',
    period: 'Sep 2021 - Aug 2023',
    description:
      "Built a kitchen display system on WebSocket that cut prep errors by about 30%. I also moved the web client from Angular 7 to 13 on my own and wrote the Selenium regression suites.",
    technologies: ['Angular', 'TypeScript', 'WebSocket', 'Selenium', 'Jenkins', 'SonarQube'],
    insight: {
      icon: ZapIcon,
      title: 'Real-Time Streaming',
      description: 'Orders from POS terminals show up on kitchen screens as a live queue over WebSocket.',
    },
  },
  {
    role: "Bachelor's Degree",
    company: 'Dr. Mahalingam College of Engineering and Technology',
    period: '2018 - 2022',
    description:
      "B.Tech in Computer Science and Engineering.",
    technologies: ['C', 'Java', 'AWS', 'Android Studio'],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-2 mb-16 max-w-3xl">
          <div className="flex items-center gap-4 mb-2">
            <div className="h-0.5 w-12 bg-accent"></div>
            <span className="font-mono text-xs text-accent tracking-widest uppercase">Career Path</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100">
            Experience<span className="text-accent">.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mt-4">
            Where I've worked and studied, and what I built along the way.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-800 ml-3 md:ml-6 pl-8 flex flex-col gap-12 py-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              <div
                className={`absolute -left-11 top-1 w-6 h-6 rounded-full bg-slate-950 border-4 z-10 group-hover:scale-125 transition-transform duration-300 ${index === 0 ? 'border-accent' : 'border-slate-700 group-hover:border-accent'
                  }`}
              ></div>

              <div className="flex flex-col gap-2">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-100">{exp.role}</h3>
                    <p className="text-lg text-accent font-medium mt-1">{exp.company}</p>
                  </div>
                  <div className="px-4 py-1.5 bg-slate-900 rounded-full border border-slate-800 inline-block w-fit">
                    <span className="font-mono text-xs text-slate-400">{exp.period}</span>
                  </div>
                </div>

                <p className="text-slate-400 mt-2 max-w-3xl">{exp.description}</p>

                <div className="mt-2 flex flex-wrap gap-2">
                  {exp.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-900 rounded text-xs uppercase font-mono text-slate-300 border border-slate-800 hover:border-accent/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {exp.insight && (
                  <div className="mt-4 bg-slate-900/60 border border-slate-800 rounded-lg p-4 shadow-sm max-w-2xl flex gap-4 items-start">
                    <exp.insight.icon className="text-accent mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="text-slate-100 font-semibold mb-1">{exp.insight.title}</h4>
                      <p className="font-mono text-sm text-slate-400">{exp.insight.description}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
