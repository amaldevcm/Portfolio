import { useState } from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const projects = [{
    title: 'ReSello',
    category: 'web',
    image: "/resello.png",
    description: 'A full-featured gadget marketplace with product management, cart, and payment processing.',
    technologies: ['Angular', 'Node.js', 'MongoDB', 'Express'],
    webLink: "https://e-commerce-frontend-17zo.onrender.com/",
    gitLink: "https://github.com/amaldevcm/E-Commerce"
  }, {
    title: 'PayBook',
    category: 'web',
    image: "/paybook.png",
    description: 'A web-first expense tracker application developed using React and spring boot to keep track of my day-to-day expenses',
    technologies: ['React', 'Spring-boot', 'PostgreSQL', 'Hibernate'],
    webLink: "https://paybook-frontend.onrender.com/",
    gitLink: "https://github.com/amaldevcm/Paybook"
  }, {
    title: 'Resume Grader',
    category: 'ai',
    image: '/resume_grader.png',
    description: 'An LLM integrated web application used to score your resume against any job description and get suggestions to improve the score.',
    technologies: ['Flask', 'Python', 'LLM', 'Groq', 'Llama3'],
    webLink: "https://resume-grader-8s7f.onrender.com/",
    gitLink: "https://github.com/amaldevcm/Resume-Grader"
  }, {
    title: 'FlockFinder',
    category: 'ai',
    image: "/flockfinder.jpg",
    description: 'A web application that helps users identify and learn about birds through image recognition. FlockFinder leverages deep-learning to classify bird species from uploaded images.',
    technologies: ['Flask', 'Python', 'Scikit-learn', 'TensorFlow'],
    webLink: null,
    gitLink: "https://github.com/amaldevcm/FlockFinder"
  }, {
    title: 'FarmGo App',
    category: 'app',
    image: '/mobile-app.jpg',
    description: 'A mobile-first application to support farmers in achieving fair pricing for their agricultural produce by eliminating the need for middlemen and ensuring transparent transactions',
    technologies: ['Android Studio', 'Java', 'Firebase'],
    webLink: null,
    gitLink: "https://github.com/SibiChakravarthy7311/FarmGoApp"
  }, {
    title: 'Career Compass App',
    category: 'app',
    image: '/mobile-app.jpg',
    description: 'A user-friendly Android mobile app designed to guide high school students in exploring potential engineering career paths.',
    technologies: ['Android Studio', 'Java', 'Firebase'],
    webLink: null,
    gitLink: "https://github.com/amaldevcm/CareerCompass"
  }, {
    title: 'Skin Disease Classifier',
    category: 'ai',
    image: '/AI.jpg',
    description: 'Built a CNN model for multi-class skin disease classification using 10,000+ images from the DermNet dataset, achieving 90% validation accuracy through data preprocessing, class balancing, and image augmentation.',
    technologies: ['Python', 'Deep Learning', 'Scikit-learn'],
    webLink: null,
    gitLink: null
  }];

  const filters = [{
    id: 'all',
    label: 'All Projects'
  }, {
    id: 'web',
    label: 'Web Development'
  }, {
    id: 'app',
    label: 'App Development'
  }, {
    id: 'ai',
    label: 'Artificial Intelligence'
  }];

  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.category === activeFilter);
  return <section id="projects" className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="font-mono text-accent text-sm mb-2">04. Work</p>
        <h2 className="text-3xl font-bold mb-2">My Projects</h2>
        <p className="max-w-2xl mx-auto text-slate-400">
          Check out some of my recent work. I've worked on a variety of
          projects, from web applications to mobile apps and UI design.
        </p>
      </div>
      <div className="flex justify-center mb-12">
        <div className="inline-flex flex-wrap justify-center gap-2 font-mono text-sm">
          {filters.map(filter => <button key={filter.id} onClick={() => setActiveFilter(filter.id)} className={`px-4 py-2 rounded-full font-medium transition-colors ${activeFilter === filter.id ? 'bg-accent text-slate-950' : 'bg-slate-800/70 text-slate-300 hover:bg-slate-800'}`}>
            {filter.label}
          </button>)}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => <div key={index} className="bg-slate-900/60 rounded-lg overflow-hidden border border-slate-800 hover:border-accent/40 transition-all hover:-translate-y-1">
          <div className="h-48 overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform hover:scale-105" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-slate-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6 font-mono">
              {project.technologies.map((tech, index) => <span key={index} className="px-2 py-1 bg-slate-800/80 text-xs rounded text-slate-300">
                {tech}
              </span>)}
            </div>
            <div className="flex justify-between">
              {project.gitLink &&
                <a href={project.gitLink} className="text-slate-300 hover:text-accent flex items-center gap-1 text-sm transition-colors" target='_blank' rel='noreferrer'>
                  <GithubIcon size={16} />
                  Source Code
                </a>
              }

              {project.webLink &&
                <a href={project.webLink} className="text-accent hover:text-accent-soft flex items-center gap-1 text-sm transition-colors" target='_blank' rel='noreferrer'>
                  <ExternalLinkIcon size={16} />
                  Live Demo
                </a>
              }
            </div>
          </div>
        </div>)}
      </div>
    </div>
  </section>;
}