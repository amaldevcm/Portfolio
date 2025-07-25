import { CalendarIcon, BriefcaseIcon, Book } from 'lucide-react'

export function Experience() {
  // Sample experience data
  const experiences = [
    {
      role: "Master's degree",
      company: 'SUNY Binghamton University',
      period: '2024 - Present',
      type: 'education',
      description: "● Pursuing a Master’s in Computer Science with a focus on computer vision and systems programming, actively building real-world projects and collaborating on advanced coursework.",
      technologies: ['Java', 'C', 'Flask', 'Python'],
    },{
      role: 'Post graduate program',
      company: 'VIT Bangalore',
      period: '2023 - 2024',
      type: 'education',
      description: '● Completed a data science certification program focused on data science, AI, Deep learning, and data visulaization tools like PowerBI.',
      technologies: ['Python', 'Deep Learning', 'ML', 'AI','Tensorflow', 'Scikit-learn', 'Flask', 'PowerBI', 'Tableau'],
    },{
      role: 'Software Developer',
      company: 'Zoho Corporation',
      period: '2023 - 2023',
      type: 'job',
      description: '● Developed responsive, cross-platform UIs for ServQuick POS, a SaaS web application for the restaurant industry. ● Led implementation of barcode printing and E-Way billing features, enhancing inventory management. ● Fixed 20+ SonarQube-identified security issues and mentored 3+ new team members on workflows and best practices.',
      technologies: ['Angular', 'Angular.js', 'TypeScript', 'Bootstrap', 'Jenkins'],
    },{
      role: 'Software Developer',
      company: 'Gofrugal Technologies',
      period: '2021 - 2023',
      type: 'job',
      description: '● Delivered 8+ major features for the ServQuick POS web app using Angular, AngularJS, and Bootstrap, driving a 15% boost in merchant adoption. ● Designed and launched a mobile-first waiter-less ordering app, reducing customer wait times by 10–15 minutes. ● Migrated Angular codebase from v7 to v13, improving build speed by 35% and accelerating releases by 20%. ● Automated regression testing with Selenium, cutting manual QA by 60%, and deployed updates via Jenkins CI/CD to staging environments for testing.',
      technologies: ['Angular', 'Angular.js', 'Typescript', 'Bootstrap', 'Jenkins'],
    },{
      role: "Bachelor's Degree",
      company: 'Dr. Mahalingam College of Engineering and Technology',
      period: '2018 - 2022',
      type: 'education',
      description: "● Completed my Bachelor's degree in Computer science, building a strong foundation in core computer science concepts through coursework, projects, and hands-on experience.",
      technologies: ['C', 'Java', 'AWS', 'Android Studio'],
    } 
  ]

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full filter blur-3xl"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Journey</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            A chronological exploration of my career path and professional
            growth in the software development industry.
          </p>
        </div>

        <div className="relative">
          {/* Timeline dot  */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-indigo-600 rounded-full border-4 border-gray-900 z-10"></div>      
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"></div>
          
          <div className="space-y-16 relative">
            { experiences.map((exp, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-0 items-center`}>
                {/* Date bubble - mobile only */}
                <div className="md:hidden bg-gray-800 rounded-full px-4 py-1 text-sm flex items-center gap-1 mb-4">
                  <CalendarIcon size={12} />
                  <span>{exp.period}</span>
                </div>

                {/* Content card */}
                <div className="w-full md:w-5/12 md:px-8">
                  <div
                    className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-lg ${index % 2 === 0 ? 'md:rounded-tr-none' : 'md:rounded-tl-none'}`}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      { exp.type != 'education'?
                        <BriefcaseIcon className="text-indigo-400 mt-1" size={18} /> :
                        <Book className='text-indigo-400 mt-1' size={18} />
                      }
                      <div>
                        <h3 className="font-bold text-lg">{exp.role}</h3>
                        <p className="text-indigo-400">{exp.company}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="text-xs bg-gray-700/70 text-gray-300 px-2 py-1 rounded-md"> {tech} </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Date - desktop only */}
                <div className="hidden md:flex md:w-2/12 justify-center items-center">
                  <div className="bg-gray-800 rounded-full px-3 py-1 text-sm flex items-center gap-1">
                    <CalendarIcon size={12} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
          {/* Timeline dot  */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-600 rounded-full border-4 border-gray-900 z-10"></div>
        </div>
      </div>
    </section>
  )
}

