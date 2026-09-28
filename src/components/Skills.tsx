import { Cpu } from 'lucide-react';
import { skills, focusAreas } from '@/data';
import { useScrollReveal } from '@/hooks';

export default function Skills() {
  const { ref, isActive } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="skills"
      ref={ref}
      className={`relative py-24 px-6 bg-navy/30 reveal ${isActive ? 'active' : ''}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-cyan-bright mb-2">02 / Technology Stack</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills &amp; Expertise</h2>
        </div>

        {/* Skill bars */}
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 mb-16">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div key={skill.name} className="group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-azure-light" />
                    <span className="text-slate-200 font-medium">{skill.name}</span>
                  </div>
                  <span className="text-sm font-mono text-slate-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-navy-deep rounded-full overflow-hidden border border-azure/10">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out group-hover:brightness-125"
                    style={{
                      width: isActive ? `${skill.level}%` : '0%',
                      background: `linear-gradient(90deg, ${skill.color}, #00bfff)`,
                      transitionDelay: `${i * 100}ms`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Focus areas */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-white flex items-center justify-center gap-2">
            <Cpu className="w-5 h-5 text-cyan-bright" />
            Current Focus Areas
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {focusAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <div
                key={i}
                className="card-hover gradient-border rounded-xl p-6 group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-azure/15 group-hover:bg-azure/25 rounded-lg mb-4 transition-colors">
                  <Icon className="w-6 h-6 text-cyan-bright" />
                </div>
                <h4 className="text-base font-semibold text-white mb-2">{area.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{area.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
