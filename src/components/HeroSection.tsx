import { ArrowDownIcon, GithubIcon, LinkedinIcon, TwitterIcon, } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen w-full flex items-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-indigo-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"></div>
      <div className="container mx-auto px-6 z-10 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
                Amal Dev
              </span>
            </h1>
            </div>

            <p className="text-gray-400 text-lg mb-8">
              I create stunning digital experiences with modern technologies.
              Specialized in building responsive websites and applications that
              deliver exceptional user experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-indigo-600/20"
              >
                Get in Touch
              </a>
              <a
                href="#experience"
                className="px-6 py-3 border border-gray-700 hover:border-indigo-500 rounded-lg font-medium transition-all duration-300 group"
              >
                View My Work
              </a>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Developer illustration/avatar placeholder */}
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-transparent border border-indigo-500/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center animate-pulse">
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center animate-pulse">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 animate-pulse"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-600/30 rounded-full filter blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-600/30 rounded-full filter blur-xl"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/3 flex flex-col items-center animate-bounce">
          <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
          <ArrowDownIcon size={20} className="text-gray-400" />
        </div>
      </div>
    </section>
  )
}
