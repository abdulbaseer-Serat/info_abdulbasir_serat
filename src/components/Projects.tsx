import { ArrowUpRight, FolderGit2 } from 'lucide-react';
import { projects } from '@/data';
import { useScrollReveal } from '@/hooks';

export default function Projects() {
  const { ref, isActive } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="projects"
      ref={ref}
      className={`relative py-24 px-6 bg-navy/30 reveal ${isActive ? 'active' : ''}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-cyan-bright mb-2">04 / Featured Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Things I've Built</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            const accentClass = project.accent === 'cyan' ? 'text-cyan-bright' : 'text-azure-light';
            const bgClass = project.accent === 'cyan' ? 'bg-cyan-bright/10' : 'bg-azure/10';

            return (
              <a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover gradient-border rounded-2xl p-7 group relative overflow-hidden block"
              >
                {/* Decorative gradient */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-azure/5 rounded-full blur-2xl group-hover:bg-azure/10 transition-colors" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`inline-flex items-center justify-center w-14 h-14 ${bgClass} rounded-xl`}>
                      <Icon className={`w-7 h-7 ${accentClass}`} />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-bright group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-bright transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 text-xs font-mono bg-navy-deep/60 border border-azure/15 text-slate-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-bright transition-colors font-medium"
          >
            <FolderGit2 className="w-5 h-5" />
            View more on GitHub
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
