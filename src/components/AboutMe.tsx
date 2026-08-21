import { CodeIcon, BookOpenIcon, GlobeIcon } from 'lucide-react'

export default function AboutMe() {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <p className="font-mono text-accent text-sm mb-2">01. Introduction</p>
                    <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
                </div>
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2">
                        <p className="text-lg mb-6 text-slate-300">
                            I'm a software engineer with over 2 years of experience building scalable, real-world applications.
                            My expertise lies in full-stack development, with a strong focus on frontend frameworks like Angular and React,
                            and backend technologies like Node.js and Flask.
                        </p>
                        <p className="text-lg mb-6 text-slate-300">
                            Currently, I'm pursuing a Master's in Computer Science at Binghamton University,
                            where I'm deepening my skills in computer vision, algorithms, and machine learning.
                        </p>
                        <p className="text-lg text-slate-300">
                            When I'm not coding, you can find me travelling, watching sci-fi shows, or creating 3D models.
                            I believe in writing clean, maintainable code and creating intuitive user experiences that solve real problems.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-lg flex flex-col hover:border-accent/40 transition-colors duration-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <CodeIcon size={22} className="text-accent" />
                                    <h3 className="text-xl font-semibold">Development</h3>
                                </div>
                                <p className="text-slate-400">
                                    Building robust, scalable applications with modern frameworks
                                    and best practices.
                                </p>
                            </div>
                            <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-lg flex flex-col hover:border-accent/40 transition-colors duration-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <BookOpenIcon size={22} className="text-accent" />
                                    <h3 className="text-xl font-semibold">Learning</h3>
                                </div>
                                <p className="text-slate-400">
                                    Continuously expanding my knowledge and staying up-to-date
                                    with emerging technologies.
                                </p>
                            </div>
                            <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-lg flex flex-col col-span-1 md:col-span-2 hover:border-accent/40 transition-colors duration-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <GlobeIcon size={22} className="text-accent" />
                                    <h3 className="text-xl font-semibold">Problem Solving</h3>
                                </div>
                                <p className="text-slate-400">
                                    Approaching complex challenges with analytical thinking and
                                    creative solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
