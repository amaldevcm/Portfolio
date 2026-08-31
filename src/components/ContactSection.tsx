import { MapPinIcon, MailIcon, PhoneIcon, SendIcon, GithubIcon, Linkedin } from "lucide-react";
import emailjs from 'emailjs-com'

const CONTACT_ITEMS = [
  { icon: MapPinIcon, label: 'Binghamton, New York', href: null },
  { icon: MailIcon, label: 'amalcheepramail@gmail.com', href: 'mailto:amalcheepramail@gmail.com' },
  { icon: PhoneIcon, label: '+1 (607) 352-0414', href: 'tel:+16073520414' },
  { icon: GithubIcon, label: 'Github', href: 'https://github.com/amaldevcm' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/amaldevcm' },
];

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
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: header & intro */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-3">
                <div className="h-0.5 w-16 bg-accent"></div>
                <span className="font-mono text-xs text-slate-400 tracking-widest uppercase">Contacts</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-4">
                Have a project?
                <br />
                Let&apos;s talk!
              </h2>
              <p className="text-lg text-slate-400 max-w-md">
                Have a project in mind or just want to say hello? Feel free to reach out to me.
                I&apos;m always open to discussing new projects and opportunities.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {CONTACT_ITEMS.map(({ icon: Icon, label, href }) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    className="flex items-center gap-4 text-slate-400 hover:text-accent transition-colors w-fit"
                  >
                    <Icon size={20} className="text-accent" />
                    <span>{label}</span>
                  </a>
                ) : (
                  <div key={label} className="flex items-center gap-4 text-slate-400 w-fit">
                    <Icon size={20} className="text-accent" />
                    <span>{label}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-slate-900/60 p-8 rounded-lg border border-slate-800 shadow-2xl shadow-black/40 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 relative z-10">
              <div>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  className="w-full bg-transparent border-0 border-b border-slate-700 py-3 focus:outline-none focus:border-accent text-slate-100 placeholder:text-slate-500 transition-colors"
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  className="w-full bg-transparent border-0 border-b border-slate-700 py-3 focus:outline-none focus:border-accent text-slate-100 placeholder:text-slate-500 transition-colors"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full bg-transparent border-0 border-b border-slate-700 py-3 focus:outline-none focus:border-accent text-slate-100 placeholder:text-slate-500 transition-colors"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="h-32">
                <textarea
                  id="message"
                  name="message"
                  className="w-full h-full resize-none bg-transparent border-0 border-b border-slate-700 py-3 focus:outline-none focus:border-accent text-slate-100 placeholder:text-slate-500 transition-colors"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="self-start bg-accent text-slate-950 font-bold px-8 py-3 rounded hover:bg-accent-soft transition-colors duration-300 shadow-lg shadow-accent/20 hover:scale-105 active:scale-95 transform flex items-center gap-2"
              >
                Submit
                <SendIcon size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
