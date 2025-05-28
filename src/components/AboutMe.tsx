import { RocketIcon, BrainCircuitIcon, GlobeIcon } from "lucide-react";

const AboutMe = () => {
    return (
        <section id="about" className="py-24 bg-gray-900/50 relative">
            {/* Subtle background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="w-full md:w-1/2 space-y-8">
                        <div className="inline-block">
                            <h2 className="text-3xl font-bold mb-2">
                                About Me
                            </h2>
                            <div className="h-1 w-1/3 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                        </div>
                        <div className="backdrop-blur-sm bg-white/5 border border-gray-800 rounded-xl p-6 space-y-6">
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                                Transforming Complex Problems into Elegant
                                Solutions
                            </h3>
                            <p className="text-gray-300">
                                With a passion for clean code and innovative
                                approaches, I specialize in developing
                                sophisticated applications that solve real-world
                                problems. My journey in software development has
                                equipped me with a diverse skill set and a deep
                                understanding of various technologies.
                            </p>
                            <p className="text-gray-300">
                                I thrive in collaborative environments where
                                creativity meets technical excellence. My
                                approach combines analytical thinking with
                                creative problem-solving to deliver solutions
                                that exceed expectations.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-4 rounded-lg flex flex-col items-center text-center">
                                <RocketIcon
                                    className="text-indigo-400 mb-3"
                                    size={24}
                                />
                                <h4 className="font-medium">Innovation</h4>
                                <p className="text-sm text-gray-400">
                                    Pushing boundaries with forward-thinking
                                    solutions
                                </p>
                            </div>
                            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-4 rounded-lg flex flex-col items-center text-center">
                                <BrainCircuitIcon
                                    className="text-purple-400 mb-3"
                                    size={24}
                                />
                                <h4 className="font-medium">Problem Solving</h4>
                                <p className="text-sm text-gray-400">
                                    Tackling complex challenges with strategic
                                    approaches
                                </p>
                            </div>
                            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-4 rounded-lg flex flex-col items-center text-center">
                                <GlobeIcon
                                    className="text-blue-400 mb-3"
                                    size={24}
                                />
                                <h4 className="font-medium">Adaptability</h4>
                                <p className="text-sm text-gray-400">
                                    Evolving with emerging technologies and
                                    methodologies
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative">
                            <div className="w-full max-w-md aspect-[4/5] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-transparent backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                                    alt="Developer working"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-600/20 rounded-full filter blur-xl"></div>
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-600/20 rounded-full filter blur-xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default AboutMe;
