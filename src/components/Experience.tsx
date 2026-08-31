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
    role: 'Software Development Engineer Intern',
    company: 'Neo Health',
    period: 'Jun 2026 - Aug 2026',
    description:
      "Joined as an early engineer during this seed-stage health-tech startup's 0-to-1 build, owning features end-to-end from design through launch and shipping 3 production features that drove 40%+ user retention. Partnered with product and design on a macros-tracking feature built with React Native, TanStack Query, and Zustand, and designed a secure OAuth + Cognito data-sync architecture integrating Apple HealthKit and Health Connect.",
    technologies: ['React Native', 'TanStack Query', 'Zustand', 'AWS Lambda', 'Bedrock', 'DynamoDB', 'Cognito', 'AstroJS', 'Playwright'],
    insight: {
      icon: CpuIcon,
      title: 'Bedrock Orchestration',
      description: 'Built a Lambda/Bedrock layer generating personalized macro targets on DynamoDB, cutting redundant network calls by 30%.',
    },
  },
  {
    role: "Master's degree",
    company: 'SUNY Binghamton University',
    period: 'Aug 2024 - Aug 2026',
    description: "Pursuing a Master's in Computer Science, building on production experience with coursework in distributed systems and advanced algorithms.",
    technologies: ['Java', 'C', 'Python', 'Distributed Systems'],
  },
  {
    role: 'Post Graduate Data Science Certification',
    company: 'Vellore Institute of Technology (VIT)',
    period: 'Aug 2023 - Jun 2024',
    description: 'Completed a certification in statistical modeling and machine learning, covering deep learning and data visualization tools like PowerBI.',
    technologies: ['Python', 'Deep Learning', 'ML', 'Statistical Modeling'],
  },
  {
    role: 'Member Technical Staff',
    company: 'GoFrugal (a Zoho Company)',
    period: 'Sep 2021 - Aug 2023',
    description:
      'Designed and built a real-time Kitchen Display System for Servquick, a cloud POS/ERP platform serving 500+ restaurant clients globally, holding up under 100+ concurrent orders at peak service. Independently led the Go-Contactless ordering app\'s migration to Angular v13 with a zero-downtime rollout via Jenkins CI/CD, and mentored newly onboarded engineers.',
    technologies: ['Angular', 'TypeScript', 'WebSocket', 'Jenkins', 'SonarQube', 'SQL Server'],
    insight: {
      icon: ZapIcon,
      title: 'Real-Time Streaming',
      description: 'Streamed live order state via WebSocket APIs at sub-1s latency, holding up under 100+ concurrent orders at peak service.',
    },
  },
  {
    role: "Bachelor's Degree",
    company: 'Dr. Mahalingam College of Engineering and Technology',
    period: '2018 - 2022',
    description:
      "Completed my Bachelor's degree in Computer science, building a strong foundation in core computer science concepts through coursework, projects, and hands-on experience.",
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
            A chronological timeline of my professional journey in software engineering,
            highlighting key roles, responsibilities, and technical achievements.
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
