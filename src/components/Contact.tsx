import { Mail, Linkedin, Github, MapPin, Target, Send } from 'lucide-react';
import { personalInfo, goals } from '@/data';
import { useScrollReveal } from '@/hooks';

export default function Contact() {
  const { ref, isActive } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="contact"
      ref={ref}
      className={`relative py-24 px-6 reveal ${isActive ? 'active' : ''}`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-cyan-bright mb-2">05 / Let's Connect</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Get In Touch</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact cards */}
          <div className="space-y-4">
            <p className="text-slate-400 leading-relaxed mb-6">
              I'm always open to discussing new opportunities, collaboration on IT and
              cloud projects, or sharing knowledge. Feel free to reach out through any of
              these channels.
            </p>

            {[
              {
                icon: Mail,
                label: 'Email',
                value: personalInfo.email,
                href: `mailto:${personalInfo.email}`,
                color: 'text-azure-light',
                bg: 'bg-azure/10',
              },
              {
                icon: Linkedin,
                label: 'LinkedIn',
                value: 'Connect with me',
                href: personalInfo.linkedin,
                color: 'text-cyan-bright',
                bg: 'bg-cyan-bright/10',
              },
              {
                icon: Github,
                label: 'GitHub',
                value: 'View my repositories',
                href: personalInfo.github,
                color: 'text-slate-200',
                bg: 'bg-slate-500/10',
              },
              {
                icon: MapPin,
                label: 'Location',
                value: personalInfo.location,
                href: undefined,
                color: 'text-gold',
                bg: 'bg-gold/10',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              const content = (
                <div className="card-hover gradient-border rounded-xl p-5 flex items-center gap-4 group">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${item.bg} rounded-lg shrink-0`}>
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">{item.label}</div>
                    <div className="text-sm text-slate-200 font-medium truncate group-hover:text-cyan-bright transition-colors">
                      {item.value}
                    </div>
                  </div>
                </div>
              );

              return item.href ? (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                  {content}
                </a>
              ) : (
                <div key={i}>{content}</div>
              );
            })}
          </div>

          {/* Goals */}
          <div className="bg-navy-light/30 border border-azure/20 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-cyan-bright" />
              Professional Goals
            </h3>
            <ul className="space-y-3">
              {goals.map((goal, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-bright shrink-0" />
                  <span className="text-sm text-slate-300 leading-relaxed">{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA button */}
        <div className="text-center mt-12">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-azure hover:bg-azure-light text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-azure/40 hover:-translate-y-0.5"
          >
            <Send className="w-5 h-5" />
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  );
}
