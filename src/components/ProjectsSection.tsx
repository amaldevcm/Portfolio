import { ExternalLinkIcon, GithubIcon } from 'lucide-react';

export function ProjectsSection() {
  const projects = [{
    title: 'Adaptive Meal Planning Engine',
    description: 'A constraint-aware meal planning engine that reconciles dietary restrictions, pantry inventory, and LLM-generated recipes into one weekly plan. A semantic caching layer that detects near-duplicate prompts cut LLM response latency and cost by 40%.',
    technologies: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'LLM'],
    webLink: 'https://meal-plan-generator-frontend.onrender.com/',
    gitLink: null,
    filename: 'meal_planner.py',
    code: [
      [{ t: 'def', c: 'text-purple-400' }, { t: ' plan_week(', c: 'text-sky-300' }, { t: 'pantry, restrictions):', c: 'text-slate-300' }],
      [{ t: '    candidates = retrieve_recipes(restrictions)', c: 'text-slate-300' }],
      [{ t: '    ', c: '' }, { t: 'cache_hit', c: 'text-sky-300' }, { t: ' = semantic_cache.lookup(candidates)', c: 'text-slate-300' }],
      [{ t: '    ', c: '' }, { t: 'if', c: 'text-purple-400' }, { t: ' cache_hit:', c: 'text-slate-300' }],
      [{ t: '        ', c: '' }, { t: 'return', c: 'text-purple-400' }, { t: ' cache_hit  ', c: 'text-slate-300' }, { t: '# -40% latency', c: 'text-slate-500' }],
      [{ t: '    plan = reconcile(candidates, pantry)', c: 'text-slate-300' }],
      [{ t: '    ', c: '' }, { t: 'return', c: 'text-purple-400' }, { t: ' semantic_cache.store(plan)', c: 'text-slate-300' }],
    ],
  }, {
    title: 'ResumeForge',
    subtitle: 'RAG Document Pipeline',
    description: 'A hybrid retrieval pipeline combining Pinecone vector search with PostgreSQL structured filtering to avoid pure-embedding false positives, lifting match relevance 40% over a naive similarity-search baseline.',
    technologies: ['FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Pinecone'],
    webLink: null,
    gitLink: 'https://github.com/amaldevcm/ResumeForge',
    filename: 'retrieval.py',
    code: [
      [{ t: 'def', c: 'text-purple-400' }, { t: ' hybrid_search(', c: 'text-sky-300' }, { t: 'query, filters):', c: 'text-slate-300' }],
      [{ t: '    vectors = pinecone.query(embed(query))', c: 'text-slate-300' }],
      [{ t: '    rows = postgres.filter(vectors, filters)', c: 'text-slate-300' }],
      [{ t: '    ', c: '' }, { t: 'return', c: 'text-purple-400' }, { t: ' rerank(rows)  ', c: 'text-slate-300' }, { t: '# +40% relevance', c: 'text-slate-500' }],
    ],
  }];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-0.5 w-16 bg-accent"></div>
            <span className="font-mono text-xs text-slate-400 tracking-widest uppercase">Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Projects<span className="text-accent">.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 mt-2">
            A couple of things I've built end-to-end, from schema to shipped UI.
          </p>
        </div>

        <div className="flex flex-col gap-24 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                }`}
            >
              {/* Content */}
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                {project.subtitle && (
                  <p className="font-mono text-accent text-xs -mt-2">{project.subtitle}</p>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded bg-slate-800/50 font-mono text-xs text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-slate-400 text-lg">{project.description}</p>
                <div className="flex flex-wrap gap-4 mt-2">
                  {project.gitLink && (
                    <a
                      href={project.gitLink}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-2 bg-accent text-slate-950 rounded font-semibold text-sm hover:scale-105 transition-transform flex items-center gap-2"
                    >
                      <GithubIcon size={16} />
                      View Github
                    </a>
                  )}
                  {project.webLink && (
                    <a
                      href={project.webLink}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2 py-2 flex items-center gap-2 text-slate-100 border-b border-accent hover:text-accent transition-colors text-sm"
                    >
                      View project
                      <ExternalLinkIcon size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Code window */}
              <div className="relative">
                <div
                  className={`absolute -top-4 ${index % 2 === 1 ? '-right-4 left-4' : '-left-4 right-4'
                    } bottom-4 border border-white/10 rounded-lg`}
                  aria-hidden="true"
                ></div>
                <div className="relative rounded-lg overflow-hidden border border-slate-800 shadow-xl shadow-black/50">
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 border-b border-slate-800">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
                    <span className="ml-2 font-mono text-xs text-slate-500">{project.filename}</span>
                  </div>
                  <div className="p-4 bg-slate-950 font-mono text-xs leading-relaxed overflow-x-auto">
                    {project.code.map((line, i) => (
                      <p key={i} className="whitespace-pre">
                        {line.map((seg, j) => (
                          <span key={j} className={seg.c}>{seg.t}</span>
                        ))}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
