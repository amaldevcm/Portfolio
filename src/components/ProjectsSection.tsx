import { useState } from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const projects = [{
    title: 'ReSello',
    category: 'web',
    image: 'https://github.com/user-attachments/assets/cced1deb-cb99-4f05-bf63-76100bd34982',
    description: 'A full-featured gadget marketplace with product management, cart, and payment processing.',
    technologies: ['Angular', 'Node.js', 'MongoDB', 'Express'],
    webLink: null,
    gitLink: "https://github.com/amaldevcm/E-Commerce"
  },{
    title: 'FlockFinder',
    category: 'ai',
    image: 'https://github.com/user-attachments/assets/19d549dd-e8ab-4d7a-b851-b5037b3cca5f',
    description: 'A user-friendly web application that helps users identify and learn about birds through image recognition. FlockFinder leverages deep learning to classify bird species from uploaded images.',
    technologies: ['Flask', 'Python', 'Scikit-learn', 'TensorFlow'],
    webLink: null,
    gitLink: "https://github.com/amaldevcm/FlockFinder"
  },{
    title: 'FarmGo App',
    category: 'app',
    image: 'https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'A mob to support farmers in achieving fair pricing for their agricultural produce by eliminating the need for middlemen and ensuring transparent transactions',
    technologies: ['Android Studio', 'Java', 'Firebase'],
    webLink: null,
    gitLink: "https://github.com/SibiChakravarthy7311/FarmGoApp"
  },{
    title: 'Skin Disease Classifier',
    category: 'ai',
    image: 'https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Built a CNN model for multi-class skin disease classification using 10,000+ images from the DermNet dataset, achieving 90% validation accuracy through data preprocessing, class balancing, and image augmentation.',
    technologies: ['Python', 'Deep Learning'],
    webLink: null,
    gitLink: null
  }];

  const filters = [{
    id: 'all',
    label: 'All Projects'
  },{
    id: 'web',
    label: 'Web Development'
  },{
    id: 'app',
    label: 'App Development'
  },{
    id: 'ai',
    label: 'Artificial Intelligence'
  }];

  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.category === activeFilter);
  return <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-400">
            Check out some of my recent work. I've worked on a variety of
            projects, from web applications to mobile apps and UI design.
          </p>
        </div>
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-2">
            {filters.map(filter => <button key={filter.id} onClick={() => setActiveFilter(filter.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === filter.id ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}>
                {filter.label}
              </button>)}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          { filteredProjects.map((project, index) => <div key={index} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-all hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  { project.technologies.map((tech, index) => <span key={index} className="px-2 py-1 bg-gray-800 text-xs rounded text-gray-300">
                      {tech}
                    </span>)}
                </div>
                <div className="flex justify-between">
                { project.gitLink && 
                  <a href={project.gitLink} className="text-purple-400 hover:text-purple-300 flex items-center gap-1 text-sm">
                    <GithubIcon size={16} />
                    Source Code
                  </a>
                }

                { project.webLink && 
                  <a href={project.webLink} className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 text-sm">
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