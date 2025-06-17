import React from "react";
import { MapPinIcon, MailIcon, PhoneIcon, SendIcon, GithubIcon, Linkedin } from "lucide-react";
export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-400">
            Have a project in mind or just want to say hello? Feel
            free to reach out to me. I'm always open to discussing
            new projects and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                  <MapPinIcon
                    className="text-purple-500"
                    size={24}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">
                    Location
                  </h3>
                  <p className="text-gray-400">
                    Binghamton, New York
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                  <MailIcon
                    className="text-cyan-500"
                    size={24}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">
                    Email
                  </h3>
                  <p className="text-gray-400">
                    amalcheepramail@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                  <PhoneIcon
                    className="text-purple-500"
                    size={24}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">
                    Phone
                  </h3>
                  <p className="text-gray-400">
                    +1 (607) 352-0414
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                  <GithubIcon
                    className="text-cyan-500"
                    size={24}
                  />
                </div>
                <div>
                  <a className="text-lg font-medium mb-1" href="https://github.com/amaldevcm" target="blank">
                    Github
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                  <Linkedin
                    className="text-purple-500"
                    size={24}
                  />
                </div>
                <div className="items-center">
                  <a className="text-lg font-medium mb-1" href="https://www.linkedin.com/in/amaldevcm" target="blank">
                    LinkedIn
                  </a>
                  {/* <p className="text-gray-400">
                    +1 (607) 352-0414
                  </p> */}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-800 p-8 rounded-lg border border-gray-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white resize-none"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                Send Message
                <SendIcon size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
