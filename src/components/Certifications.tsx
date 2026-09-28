import { CheckCircle2, Clock, Target, Award } from 'lucide-react';
import { certifications } from '@/data';
import { useScrollReveal } from '@/hooks';

export default function Certifications() {
  const { ref, isActive } = useScrollReveal<HTMLElement>();

  const sections = [
    {
      title: 'Completed',
      icon: CheckCircle2,
      items: certifications.completed,
      color: 'green',
      border: 'border-green-400/30',
      bg: 'bg-green-400/10',
      text: 'text-green-400',
    },
    {
      title: 'In Progress',
      icon: Clock,
      items: certifications.inProgress,
      color: 'azure',
      border: 'border-azure/30',
      bg: 'bg-azure/10',
      text: 'text-cyan-bright',
    },
    {
      title: 'Future Targets',
      icon: Target,
      items: certifications.future,
      color: 'gold',
      border: 'border-gold/30',
      bg: 'bg-gold/10',
      text: 'text-gold',
    },
  ];

  return (
    <section
      id="certifications"
      ref={ref}
      className={`relative py-24 px-6 reveal ${isActive ? 'active' : ''}`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-cyan-bright mb-2">03 / Certification Roadmap</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Certifications</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {sections.map((section, i) => {
            const Icon = section.icon;
            return (
              <div
                key={i}
                className={`rounded-2xl border ${section.border} bg-navy-light/30 p-6 card-hover`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`inline-flex items-center justify-center w-10 h-10 ${section.bg} rounded-lg`}>
                    <Icon className={`w-5 h-5 ${section.text}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                  <span className={`ml-auto text-sm font-mono ${section.text}`}>{section.items.length}</span>
                </div>

                <ul className="space-y-3">
                  {section.items.map((cert, j) => (
                    <li key={j} className="flex items-start gap-3 group">
                      <span className={`mt-1 text-xs font-mono ${section.text} font-bold w-6 shrink-0`}>
                        {String(j + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <div className="text-sm text-slate-200 font-medium leading-snug">{cert.name}</div>
                        <div className={`text-xs font-mono ${section.text} mt-0.5`}>{cert.short}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Quote */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-azure/10 border border-azure/20 rounded-xl">
            <Award className="w-5 h-5 text-gold" />
            <p className="text-slate-300 text-sm font-medium italic">
              "Secure systems. Clear communication. Continuous learning."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
