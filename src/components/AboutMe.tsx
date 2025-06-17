import { CodeIcon, BookOpenIcon, GlobeIcon } from 'lucide-react'

export default function AboutMe() {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
                </div>
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2">
                        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                            I’m a software engineer with over 2 years of experience building scalable, real-world applications.
                            My expertise lies in full-stack development, with a strong focus on frontend frameworks like Angular and React, 
                            and backend technologies like Node.js and Flask.
                        </p>
                        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                            Currently, I’m pursuing Master’s in Computer Science at Binghamton University,
                            where I’m deepening my skills in computer vision, algorithms, and machine learning.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            When I'm not coding, you can find me travelling, watching sci-fi shows, or creating 3D models. 
                            I believe in writing clean, maintainable code and creating intuitive user experiences that solve real problems.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-4 rounded-lg flex flex-col">
                                <div className="flex items-center mb-4">
                                    <CodeIcon size={24} className="text-indigo-400 mr-5" />
                                    <h3 className="text-xl font-semibold">Development</h3>
                                </div>
                                <p className="">
                                    Building robust, scalable applications with modern frameworks
                                    and best practices.
                                </p>
                            </div>
                            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-4 rounded-lg flex flex-col">
                                <div className="flex items-center mb-4">
                                    <BookOpenIcon size={24} className="text-purple-400 mr-5" />
                                    <h3 className="text-xl font-semibold">Learning</h3>
                                </div>
                                <p className="">
                                    Continuously expanding my knowledge and staying up-to-date
                                    with emerging technologies.
                                </p>
                            </div>
                            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-4 rounded-lg flex flex-col col-span-1 md:col-span-2">
                                <div className="flex items-center mb-4">
                                    <GlobeIcon size={24} className="text-blue-400 mr-5" />
                                    <h3 className="text-xl font-semibold">Problem Solving</h3>
                                </div>
                                <p className="">
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
