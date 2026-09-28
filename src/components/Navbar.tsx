import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { navLinks } from '@/data';
import { useActiveSection } from '@/hooks';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(navLinks.map((l) => l.href.slice(1)));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-deep/90 backdrop-blur-md border-b border-azure/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => handleClick('#home')}
          className="flex items-center gap-2 font-mono text-sm font-bold text-white group"
        >
          <span className="flex items-center justify-center w-8 h-8 bg-azure/20 rounded-lg group-hover:bg-azure/40 transition-colors">
            <Terminal className="w-4 h-4 text-cyan-bright" />
          </span>
          <span className="hidden sm:inline">abdul_basir<span className="text-cyan-bright">.ps1</span></span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-cyan-bright bg-azure/15'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <button
            onClick={() => handleClick('#contact')}
            className="ml-2 px-5 py-2 bg-azure hover:bg-azure-light text-white rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-azure/30"
          >
            Get In Touch
          </button>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 bg-navy-deep/95 backdrop-blur-md border-t border-azure/20 flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-left px-4 py-3 rounded-lg text-slate-300 hover:text-cyan-bright hover:bg-azure/10 transition-colors font-medium"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
