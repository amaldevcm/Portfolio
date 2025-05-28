import { CodeIcon, ServerIcon, PenToolIcon, PaletteIcon} from 'lucide-react'

export function Skills() {
  // Skills grouped by computer science aspects
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <CodeIcon size={24} className="text-indigo-400" />,
      skills: [
        'Java',
        'Python',
        'JavaScript',
        'TypeScript',
        'C',
        'C++',
      ],
    },{
      title: 'Frontend Development',
      icon: <PaletteIcon size={24} className="text-indigo-400" />,
      skills: [
        'React',
        'Angular',
        'Android Studio',
        'Bootstrap',
        'TailwindCSS',
        'HTML5/CSS3'
      ],
    },{
      title: 'Backend And Database',
      icon: <ServerIcon size={24} className="text-purple-400" />,
      skills: [
        'Node.js',
        'Express',
        'Flask',
        'REST API Design',
        'MySQL',
        'MongoDB',
        'Firebase'
      ],
    },{
      title: 'Other Skills',
      icon: <PenToolIcon size={24} className="text-pink-400" />,
      skills: [
        'Figma',
        'Wireframing',
        'Photoshop',
        'Blender',
      ],
    }
  ]
  return (
    <section id="skills" className="py-24 bg-gray-900/50 relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-indigo-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            My skills are organized by computer science domains, showcasing the
            breadth and depth of my technical capabilities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-indigo-500/20 transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-indigo-500/30 transition-colors duration-300"
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
