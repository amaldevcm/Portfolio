import { MapPinIcon, MailIcon, PhoneIcon, SendIcon, GithubIcon, Linkedin } from "lucide-react";
import emailjs from 'emailjs-com'

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_zyaa7mb",
      "template_47oz3y4",
      e.target,
      "SxPWVFMJlaCcKVdER"
    ).then(
      (result) => {
        console.log("Email sent:", result.text);
        alert("Message sent successfully!");
      },
      (error) => {
        console.error("Error:", error.text);
        alert("Failed to send message.");
      }
    );
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-mono text-accent text-sm mb-2">05. Contact</p>
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <p className="max-w-2xl mx-auto text-slate-400">
            Have a project in mind or just want to say hello? Feel
            free to reach out to me. I'm always open to discussing
            new projects and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center">
                  <MapPinIcon
                    className="text-accent"
                    size={22}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">
                    Location
                  </h3>
                  <p className="text-slate-400">
                    Binghamton, New York
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center">
                  <MailIcon
                    className="text-accent"
                    size={22}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">
                    Email
                  </h3>
                  <p className="text-slate-400">
                    amalcheepramail@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center">
                  <PhoneIcon
                    className="text-accent"
                    size={22}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">
                    Phone
                  </h3>
                  <p className="text-slate-400">
                    +1 (607) 352-0414
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center">
                  <GithubIcon
                    className="text-accent"
                    size={22}
                  />
                </div>
                <div>
                  <a className="text-lg font-medium mb-1 hover:text-accent transition-colors" href="https://github.com/amaldevcm" target="_blank" rel="noreferrer">
                    Github
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center">
                  <Linkedin
                    className="text-accent"
                    size={22}
                  />
                </div>
                <div className="items-center">
                  <a className="text-lg font-medium mb-1 hover:text-accent transition-colors" href="https://www.linkedin.com/in/amaldevcm" target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-slate-900/60 p-8 rounded-lg border border-slate-800"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="from_name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:outline-none focus:border-accent text-white"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="from_email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:outline-none focus:border-accent text-white"
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
                  name="subject"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:outline-none focus:border-accent text-white"
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
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:outline-none focus:border-accent text-white resize-none"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-slate-950 rounded-lg font-semibold hover:bg-accent-soft transition-colors flex items-center gap-2"
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
