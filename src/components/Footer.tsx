import { Mail, Linkedin, Github, Terminal, Heart } from 'lucide-react';
import { personalInfo, navLinks } from '@/data';

export default function Footer() {
  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-navy-deep border-t border-azure/20 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-mono text-sm font-bold text-white mb-3">
              <span className="flex items-center justify-center w-8 h-8 bg-azure/20 rounded-lg">
                <Terminal className="w-4 h-4 text-cyan-bright" />
              </span>
              abdul_basir<span className="text-cyan-bright">.ps1</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              IT Support Specialist specializing in Microsoft 365, Azure Cloud, networking, and cybersecurity.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3 font-mono">Navigation</h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-sm text-slate-400 hover:text-cyan-bright transition-colors text-left w-fit"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3 font-mono">Connect</h4>
            <div className="flex gap-3">
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
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-azure/20 hover:border-azure/60 bg-navy-light/50 hover:bg-azure/15 text-slate-300 hover:text-cyan-bright transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-azure/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 font-mono">
            &copy; {new Date().getFullYear()} Abdul Basir Serat. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 flex items-center gap-1.5">
            Built with <Heart className="w-3 h-3 text-azure" /> and React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
