import { CodeIcon, ServerIcon, PenToolIcon, PaletteIcon } from 'lucide-react'

export function Skills() {
  // Skills grouped by computer science aspects
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <CodeIcon size={22} className="text-accent" />,
      skills: [
        'Java',
        'Python',
        'JavaScript',
        'TypeScript',
        'C',
        'C++',
        'X86 - Assembly',
      ],
    }, {
      title: 'Frontend Development',
      icon: <PaletteIcon size={22} className="text-accent" />,
      skills: [
        'React',
        'Angular',
        'Angular.js',
        'Bootstrap',
        'TailwindCSS',
        'HTML5/CSS3',
      ],
    }, {
      title: 'Backend And Database',
      icon: <ServerIcon size={22} className="text-accent" />,
      skills: [
        'Node.js',
        'Express',
        'Flask',
        'Spring-boot',
        'SQL',
        'PostgreSQL',
        'MongoDB',
        'Firebase',
        'RESTful API',
      ],
    }, {
      title: 'DevOps',
      icon: <ServerIcon size={22} className="text-accent" />,
      skills: [
        'Jenkins',
        'Docker',
        'AWS',
        'GitHub',
        'CI/CD'
      ],
    }, {
      title: 'Other Skills',
      icon: <PenToolIcon size={22} className="text-accent" />,
      skills: [
        'Figma',
        'Wireframing',
        'Photoshop',
        'Blender',
        'Android Studio',
        'Selenium'
      ],
    }
  ]
  return (
    <section id="skills" className="py-24 bg-slate-900/40 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="font-mono text-accent text-sm mb-2">03. Toolbox</p>
          <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
          <p className="mt-2 text-slate-400 max-w-2xl mx-auto">
            My skills are organized by computer science domains, showcasing the
            breadth and depth of my technical capabilities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-accent/40 transition-colors duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-slate-800/70 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 font-mono">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-block bg-slate-800/70 text-slate-300 px-3 py-1 rounded-md text-sm hover:text-accent transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
