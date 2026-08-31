import { CodeIcon, ServerIcon, CloudIcon, ClipboardCheckIcon } from 'lucide-react'

const CATEGORIES = [
  {
    title: 'Frontend',
    icon: CodeIcon,
    chips: ['React', 'React Native', 'TypeScript', 'JavaScript', 'Angular', 'TanStack Query'],
  },
  {
    title: 'Tools & Testing',
    icon: ClipboardCheckIcon,
    chips: ['Playwright', 'Jest / Vitest', 'Pytest', 'Git / GitHub', 'OAuth / JWT', 'Claude Code'],
  },
  {
    title: 'Backend & Real-Time',
    icon: ServerIcon,
    chips: ['Node.js / Express', 'FastAPI', 'Spring Boot', 'WebSocket APIs', 'PostgreSQL', 'DynamoDB'],
  },
  {
    title: 'Cloud & DevOps',
    icon: CloudIcon,
    chips: ['AWS Lambda', 'Docker', 'Jenkins CI/CD', 'Bedrock', 'S3', 'Kafka'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-accent"></div>
            <span className="font-mono text-xs text-accent uppercase tracking-widest">Tech Stack Focus</span>
            <div className="w-12 h-0.5 bg-accent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-3">
            Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-soft to-accent">Proficiency</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl">
            A comprehensive look at my technical stack, highlighting expertise across
            frontend, backend, real-time systems, and cloud infrastructure.
          </p>
        </div>

        {/* Tech stack dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left column */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {[CATEGORIES[0], CATEGORIES[1]].map(cat => (
              <SkillCard key={cat.title} category={cat} />
            ))}
          </div>

          {/* Center visual */}
          <div className="lg:col-span-6 flex items-center justify-center min-h-[320px] lg:min-h-[400px] relative">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-transparent blur-[80px] opacity-40 rounded-full animate-pulse"></div>
              <div className="relative z-10 w-4/5 h-4/5 rounded-full overflow-hidden drop-shadow-[0_0_30px_rgba(255,122,92,0.3)]">
                <img
                  src="/skills-ecosystem.png"
                  alt="Developer ecosystem graphic"
                  className="w-full h-full object-cover mix-blend-screen"
                />
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {[CATEGORIES[2], CATEGORIES[3]].map(cat => (
              <SkillCard key={cat.title} category={cat} />
            ))}
          </div>
        </div>

        {/* Bento: code snippet + continuous learning */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden font-mono">
            <div className="bg-slate-900 px-4 py-2 flex items-center gap-2 border-b border-slate-800">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              <span className="text-xs text-slate-500 ml-2">skill_matrix.json</span>
            </div>
            <div className="p-6 text-sm text-slate-300 overflow-x-auto">
              <pre className="whitespace-pre-wrap leading-relaxed">
<span className="text-purple-400">const</span> <span className="text-sky-300">amalSkills</span> = {'{'}
{'\n  '}<span className="text-sky-300">"core_competencies"</span>: [
{'\n    '}<span className="text-accent">"Full-Stack Development"</span>,
{'\n    '}<span className="text-accent">"Real-Time Systems"</span>,
{'\n    '}<span className="text-accent">"Cloud Architecture"</span>
{'\n  '}],
{'\n  '}<span className="text-sky-300">"current_focus"</span>: <span className="text-accent">"LLM-Backed Products"</span>,
{'\n  '}<span className="text-sky-300">"methodologies"</span>: [
{'\n    '}<span className="text-accent">"Agile / Scrum"</span>,
{'\n    '}<span className="text-accent">"Test Driven Development"</span>
{'\n  '}]
{'\n'}{'}'};
              </pre>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4 bg-slate-900/60 p-8 rounded-xl border border-slate-800">
            <h3 className="text-xl font-bold text-slate-100">Continuous Learning</h3>
            <p className="text-slate-400">
              Technology evolves rapidly, and so does my skillset. I dedicate time weekly to
              exploring emerging frameworks, optimizing build processes, and refining my
              understanding of core computer science principles to build robust, scalable applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillCard({ category }: { category: (typeof CATEGORIES)[number] }) {
  const Icon = category.icon
  return (
    <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-800 hover:border-accent/50 transition-colors duration-300 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Icon className="text-accent" size={24} />
        <h3 className="text-lg font-bold text-slate-100">{category.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.chips.map(chip => (
          <span
            key={chip}
            className="px-3 py-1.5 bg-slate-950/60 border border-slate-800 rounded text-sm font-mono text-slate-300 hover:border-accent/50 transition-colors"
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  )
}
