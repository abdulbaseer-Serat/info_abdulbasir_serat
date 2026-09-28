import { Terminal } from 'lucide-react';
import { aboutText, aboutDirection, stats } from '@/data';
import { useScrollReveal } from '@/hooks';

export default function About() {
  const { ref, isActive } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className={`relative py-24 px-6 reveal ${isActive ? 'active' : ''}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-cyan-bright mb-2">01 / About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Who I Am</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Terminal card */}
          <div className="lg:col-span-2">
            <div className="bg-navy-light/40 border border-azure/20 rounded-2xl overflow-hidden shadow-xl">
              <div className="bg-navy-deep/80 px-4 py-3 border-b border-azure/20 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                  <div className="w-3 h-3 rounded-full bg-green-400/70" />
                </div>
                <span className="text-xs text-slate-400 font-mono ml-2">PowerShell — Get-Profile</span>
              </div>
              <div className="p-5 font-mono text-sm space-y-2">
                <p className="text-slate-500">PS C:\Users\AbdulBasir&gt; <span className="text-cyan-bright">Get-Profile</span></p>
                <div className="pl-4 space-y-1.5 text-slate-300">
                  <div className="flex"><span className="text-azure-light w-24">Name</span><span className="text-slate-500">:</span><span className="text-white ml-2">Abdul Basir Serat</span></div>
                  <div className="flex"><span className="text-azure-light w-24">Role</span><span className="text-slate-500">:</span><span className="text-white ml-2">IT Support Specialist</span></div>
                  <div className="flex"><span className="text-azure-light w-24">Company</span><span className="text-slate-500">:</span><span className="text-white ml-2">National &amp; Intl Orgs</span></div>
                  <div className="flex"><span className="text-azure-light w-24">Location</span><span className="text-slate-500">:</span><span className="text-white ml-2">Afghanistan</span></div>
                  <div className="flex"><span className="text-azure-light w-24">Focus</span><span className="text-slate-500">:</span><span className="text-white ml-2">M365, Azure, Security</span></div>
                  <div className="flex"><span className="text-azure-light w-24">Mindset</span><span className="text-slate-500">:</span><span className="text-white ml-2">Secure. Clear. Learning.</span></div>
                </div>
                <p className="text-slate-500 pt-1">PS C:\Users\AbdulBasir&gt; <span className="cursor-blink inline-block w-2 h-4 bg-cyan-bright align-middle" /></p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-navy-light/30 border border-azure/15 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan-bright" />
                Professional Summary
              </h3>
              <p className="text-slate-300 leading-relaxed">{aboutText}</p>
            </div>

            <div className="bg-navy-light/30 border border-azure/15 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Professional Direction</h3>
              <p className="text-slate-300 leading-relaxed">{aboutDirection}</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="card-hover bg-navy-light/30 border border-azure/15 rounded-xl p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-azure/15 rounded-lg mb-3">
                  <Icon className="w-6 h-6 text-cyan-bright" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
