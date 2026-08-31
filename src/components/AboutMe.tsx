import { CodeIcon, ZapIcon, CloudIcon } from 'lucide-react'

const SERVICES = [
    {
        icon: CodeIcon,
        title: 'Full-Stack Development',
        description: 'Building responsive, production-grade web and mobile applications with React, TypeScript, and modern frameworks.',
    },
    {
        icon: ZapIcon,
        title: 'Real-Time Systems',
        description: 'Designing sub-1s WebSocket platforms and event-driven architectures that hold up under heavy concurrent load.',
    },
    {
        icon: CloudIcon,
        title: 'Cloud & Infra',
        description: 'Shipping scalable Python/Java backends on AWS, from Lambda orchestration to CI/CD pipelines.',
    },
]

const STATS = [
    { value: '2', suffix: '+', label: 'Years of\nExperience' },
    { value: '40', suffix: '%+', label: 'Retention Impact\nDriven' },
    { value: '500', suffix: '+', label: 'Clients Served\n(POS Platform)' },
]

export default function AboutMe() {
    return (
        <section id="about" className="py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    {/* Left: service timeline */}
                    <div className="lg:col-span-5 relative pl-8 border-l-2 border-slate-800">
                        <div className="absolute w-3 h-3 rounded-full bg-accent -left-[7px] top-4 shadow-[0_0_10px_rgba(255,122,92,0.5)]"></div>
                        <div className="absolute w-3 h-3 rounded-full bg-accent -left-[7px] top-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(255,122,92,0.5)]"></div>
                        <div className="absolute w-3 h-3 rounded-full bg-accent -left-[7px] bottom-8 shadow-[0_0_10px_rgba(255,122,92,0.5)]"></div>
                        <div className="space-y-8 py-4">
                            {SERVICES.map(({ icon: Icon, title, description }) => (
                                <div key={title} className="group flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center text-accent group-hover:bg-accent/10 transition-colors border border-slate-800 flex-shrink-0">
                                        <Icon size={22} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-slate-100 mb-2">{title}</h3>
                                        <p className="text-slate-400">{description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: bio, stats, CTA */}
                    <div className="lg:col-span-7 space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6 flex items-center gap-4">
                                About me
                                <span className="h-0.5 w-16 bg-accent hidden md:block rounded-full"></span>
                            </h2>
                            <div className="space-y-4 text-slate-400 text-lg">
                                <p>
                                    I'm a full-stack engineer with over 2 years of experience shipping production, real-time
                                    systems: sub-1-second WebSocket platforms, React/TypeScript interfaces, and scalable
                                    Python/Java backends on AWS. I own features end-to-end, from idea to launch, and work
                                    closely with product and design along the way.
                                </p>
                                <p>
                                    Currently, I'm pursuing a Master's in Computer Science at Binghamton University (SUNY),
                                    building on a Post Graduate Data Science Certification in statistical modeling and
                                    machine learning from VIT. When I'm not coding, you can find me travelling, watching
                                    sci-fi shows, or creating 3D models.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8 border-t border-slate-800">
                            {STATS.map(stat => (
                                <div key={stat.label}>
                                    <div className="text-3xl md:text-4xl font-bold text-slate-100 mb-1">
                                        {stat.value} <span className="text-accent">{stat.suffix}</span>
                                    </div>
                                    <div className="text-slate-400 text-sm tracking-wider uppercase whitespace-pre-line">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* <div className="pt-4">
                            <a
                                href="https://drive.google.com/file/d/1s43aCz31PhOghPAyZZM1PE9XZ1PAjhW6/view?usp=drive_link"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center bg-accent text-slate-950 font-bold py-3 px-6 rounded hover:bg-accent-soft transition-colors duration-200"
                            >
                                Download Resume
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
