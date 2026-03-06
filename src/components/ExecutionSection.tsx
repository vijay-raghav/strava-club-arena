import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { BarChart3, Rocket } from "lucide-react";

const metrics = [
  { label: "Active Club Participation Rate", desc: "The percentage of the 1 million+ active clubs opting into Battlegrounds, and the subsequent lift in Daily Active Users (DAU) during the challenge window." },
  { label: "Attributable Brand Conversion", desc: "Click-through rates to the sponsor's checkout page and the resulting audience growth multiplier for the brand's native Strava Club." },
  { label: "ML Flagging Precision", desc: "The ratio of anomalous activities successfully intercepted by the Leaderboard Integrity system before they artificially inflate the team's aggregate score." },
];

const phases = [
  { phase: "Phase 1 — Closed Beta", desc: "Launch a hyper-local pilot in a high-density urban hub partnering with a legacy B2B sponsor like Nike. Goal: Stress-test UI/UX and validate brand ROI.", color: "bg-primary/20 text-primary" },
  { phase: "Phase 2 — Community Evangelism", desc: 'Execute targeted outreach to Gen Z "Club Admins." Leverage organic, peer-to-peer network effects to expand the feature into 10 new regional markets with diverse, localized sponsors.', color: "bg-primary/40 text-primary" },
  { phase: "Phase 3 — Global B2B Scale", desc: "Launch a self-serve B2B portal allowing local running shops and global brands alike to seamlessly fund turf wars, driving massive ARR expansion.", color: "bg-primary text-primary-foreground" },
];

export default function ExecutionSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="execution" className="py-24 sm:py-32 bg-background">
      <div ref={ref} className={cn(
        "max-w-7xl mx-auto px-6 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        <div className="text-center mb-16">
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Execution: <span className="text-primary">Metrics & GTM</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Metrics */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Key Metrics</h3>
            </div>
            <div className="space-y-4">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-xl border border-border bg-card p-5">
                  <p className="font-semibold text-foreground text-sm">{m.label}</p>
                  <p className="text-muted-foreground text-xs mt-1">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* GTM */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">GTM Strategy</h3>
            </div>
            <div className="space-y-4">
              {phases.map((p) => (
                <div key={p.phase} className="rounded-xl border border-border bg-card p-5">
                  <span className={cn("inline-block text-xs font-bold px-3 py-1 rounded-full mb-2", p.color)}>
                    {p.phase}
                  </span>
                  <p className="text-muted-foreground text-sm">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
