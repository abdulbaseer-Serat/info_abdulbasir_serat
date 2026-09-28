import { useEffect, useState } from 'react';
import { Mail, Github, Linkedin, ArrowDown, MapPin } from 'lucide-react';
import { personalInfo, typedRoles } from '@/data';

function TypedText({ roles }: { roles: string[] }) {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex % roles.length];
    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setText(current.substring(0, text.length - 1));
        } else {
          setText(current.substring(0, text.length + 1));
        }

        if (!isDeleting && text === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && text === '') {
          setIsDeleting(false);
          setRoleIndex(roleIndex + 1);
        }
      },
      isDeleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex, roles]);

  return (
    <span className="text-cyan-bright font-mono">
      {text}
      <span className="cursor-blink inline-block w-0.5 h-5 bg-cyan-bright ml-1 align-middle" />
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/95 to-navy-deep" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-azure/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-bright/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left: Text */}
        <div className="animate-fade-in-up text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-azure/10 border border-azure/30 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-sm text-slate-300 font-mono">Available for opportunities</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3">
            {personalInfo.name}
          </h1>

          <p className="text-lg sm:text-xl text-azure-light font-semibold mb-4">
            {personalInfo.title}
          </p>

          <p className="text-sm text-slate-400 font-mono mb-2">
            <TypedText roles={typedRoles} />
          </p>

          <p className="text-base text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0">
            {personalInfo.tagline}
          </p>

          <div className="flex items-center gap-2 text-slate-400 text-sm mb-8 justify-center lg:justify-start">
            <MapPin className="w-4 h-4 text-azure" />
            <span>{personalInfo.location}</span>
          </div>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-azure hover:bg-azure-light text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-azure/40 hover:-translate-y-0.5"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 border border-azure/40 hover:border-azure text-slate-200 hover:text-white rounded-lg font-semibold transition-all duration-300 hover:bg-azure/10"
            >
              View Projects
            </a>
          </div>

          <div className="flex gap-3 mt-8 justify-center lg:justify-start">
            {[
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
              { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: Github, href: personalInfo.github, label: 'GitHub' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 flex items-center justify-center rounded-lg border border-azure/20 hover:border-azure/60 bg-navy-light/50 hover:bg-azure/15 text-slate-300 hover:text-cyan-bright transition-all duration-300 hover:-translate-y-1"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Right: Photo */}
        <div className="animate-fade-in flex justify-center lg:justify-end">
          <div className="relative">
            {/* Decorative rings */}
            <div className="absolute -inset-4 rounded-3xl border border-azure/20 animate-pulse-glow" />
            <div className="absolute -inset-8 rounded-3xl border border-azure/10" />

            {/* Photo container */}
            <div className="relative w-72 h-96 sm:w-80 sm:h-[28rem] rounded-3xl overflow-hidden border-2 border-azure/30 shadow-2xl shadow-azure/20">
              <img
                src={personalInfo.photo}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent" />

              {/* Bottom badge */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy-deep to-transparent">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-slate-300 font-mono">IT Support Specialist</span>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -left-6 top-12 animate-float bg-navy-light/90 backdrop-blur-md border border-azure/30 rounded-xl px-4 py-3 shadow-xl" style={{ animationDelay: '0s' }}>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-cyan-bright">8+</span>
                <span className="text-xs text-slate-400 leading-tight">Years<br />Experience</span>
              </div>
            </div>

            <div className="absolute -right-4 bottom-20 animate-float bg-navy-light/90 backdrop-blur-md border border-azure/30 rounded-xl px-4 py-3 shadow-xl" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-cyan-bright">4</span>
                <span className="text-xs text-slate-400 leading-tight">Pro<br />Certs</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-cyan-bright transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}
