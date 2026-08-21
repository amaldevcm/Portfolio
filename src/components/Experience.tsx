import { CalendarIcon, BriefcaseIcon, Book } from 'lucide-react'

export function Experience() {
  // Sample experience data
  const experiences = [
    {
      role: "Master's degree",
      company: 'SUNY Binghamton University',
      period: '2024 - Present',
      type: 'education',
      description: ["Pursuing a Master’s in Computer Science with a focus on computer vision and systems programming, actively building real-world projects and collaborating on advanced coursework."],
      technologies: ['Java', 'C', 'Python', 'Computer Vision', 'Design Pattern'],
    }, {
      role: 'Post graduate program',
      company: 'VIT Bangalore',
      period: '2023 - 2024',
      type: 'education',
      description: ["Completed a data science certification program focused on data science, AI, Deep learning, and data visulaization tools like PowerBI."],
      technologies: ['Python', 'Deep Learning', 'ML', 'AI', 'Tensorflow', 'Scikit-learn', 'Flask', 'PowerBI', 'Tableau'],
    }, {
      //   role: 'Software Developer',
      //   company: 'Zoho Corporation',
      //   period: '2023 - 2023',
      //   type: 'job',
      //   description: [
      //     "Developed responsive user interfaces with cross-browser compatibility for the ServQuick POS using Angular, AngularJS, Javascript(ES6), Typescript, and Bootstrap, achieving seamless functionality across modern browsers and devices",
      //     "Spearheaded the development of key features like Barcode printing and EWay billing taking product ownership from design through deployment and optimizing workflows to improve customer experience",
      //     "Resolved 50+ security vulnerabilities identified via SonarQube, coordinating with senior engineers and security analysts tomaintain codebase integrity",
      //     "Led Angular migration from v7 to v13, resolving 50+ UI bugs and reducing application crashes by 40%, ensuring long-term maintainability of customer-facing apps",
      //     "Mentored 3+ new team members, guiding them on front-end architecture, accessibility, and coding standards",
      //   ],
      //   technologies: ['Angular', 'Angular.js', 'TypeScript', 'Bootstrap', 'Jenkins'],
      // }, {
      role: 'Member Technical Staff',
      company: 'Gofrugal',
      period: '2022 - 2023',
      type: 'job',
      description: [
        "Engineered a promotional offer engine using Angular and AngularJS, driving 18% increase in repeat transactions across 20+ restaurants and reducing promotion setup time from days to under 2 hours",
        "Developed a real-time Kitchen Display System using WebSocket APIs, collaborating with UX designers and product stakeholders to refine feature requirements, reducing order preparation errors by 30% across 1,500+ restaurant kitchens",
        "Migrated entire Angular codebase from v7 to v13, implementing lazy loading to cut load time from 6s to 2.5s and reduce crashes by 40% for 2,000+ daily users",
        "Integrated a wastage tracking feature into the inventory management system using Angular and RxJS, reducing inventory loss by 12% across 600+ locations",
        "Resolved 50+ SonarQube security vulnerabilities and automated Selenium tests across 20+ features, reducing UI defects by 30% and securing 2,000+ daily transactions",
        "Streamlined build validation and production deployments via Jenkins CI/CD on AWS, enabling bi-weekly releases with 99.5% system uptime"
      ],
      technologies: ['Angular', 'AngularJS', 'TypeScript', 'JavaScript', 'Bootstrap', 'Jenkins', 'AWS', 'Mantis', 'SonarQube', 'Selenium'],
    }, {
      role: 'Intern - Member Technical Staff',
      company: 'Gofrugal',
      period: '2021 - 2022',
      type: 'job',
      description: [
        "Shipped Due Bill partial payment and Customer Display System features for the ServEasy POS app, enabling 2 new billing workflows across the active client base",
        "Designed end-to-end test cases for Go-Contactless payment workflows, catching 3 critical pre-production checkout failures and delivering a defect-free release to 800+ clients",
      ],
      technologies: ['Angular', 'TypeScript', 'JavaScript', 'Bootstrap', 'Jenkins'],
    }, {
      role: "Bachelor's Degree",
      company: 'Dr. Mahalingam College of Engineering and Technology',
      period: '2018 - 2022',
      type: 'education',
      description: [
        "Completed my Bachelor's degree in Computer science, building a strong foundation in core computer science concepts through coursework, projects, and hands-on experience."
      ],
      technologies: ['C', 'Java', 'AWS', 'Android Studio'],
    }
  ]

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="font-mono text-accent text-sm mb-2">02. Journey</p>
          <h2 className="text-3xl font-bold mb-4">Experience &amp; Education</h2>
          <p className="mt-2 text-slate-400 max-w-2xl mx-auto">
            A chronological exploration of my career path and professional
            growth in the software development industry.
          </p>
        </div>

        <div className="relative">
          {/* Timeline dot  */}
          <div className="sm:hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-slate-950 z-10"></div>
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-slate-800"></div>

          <div className="space-y-16 relative">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-0 items-center`}>
                {/* Date bubble - mobile only */}
                <div className="md:hidden font-mono bg-slate-900 border border-slate-800 rounded-full px-4 py-1 text-sm flex items-center gap-1 mb-4 text-slate-400">
                  <CalendarIcon size={12} />
                  <span>{exp.period}</span>
                </div>

                {/* Content card */}
                <div className="w-full md:w-5/12 md:px-8">
                  <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-accent/40 transition-colors duration-200">
                    <div className="flex items-start gap-3 mb-3">
                      {exp.type != 'education' ?
                        <BriefcaseIcon className="text-accent mt-1" size={18} /> :
                        <Book className='text-accent mt-1' size={18} />
                      }
                      <div>
                        <h3 className="font-bold text-lg">{exp.role}</h3>
                        <p className="text-accent">{exp.company}</p>
                      </div>
                    </div>
                    <ul className='mb-4' style={{ listStyleType: "disc" }}>
                      {exp.description.map((desc, i) => (
                        <li key={'desc_' + i} className="text-slate-300">{desc}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 font-mono">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="text-xs bg-slate-800/80 text-slate-300 px-2 py-1 rounded-md"> {tech} </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Date - desktop only */}
                <div className="hidden md:flex md:w-2/12 justify-center items-center">
                  <div className="font-mono bg-slate-900 border border-slate-800 rounded-full px-3 py-1 text-sm flex items-center gap-1 text-slate-400">
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
          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-slate-950 z-10"></div>
        </div>
      </div>
    </section>
  )
}

