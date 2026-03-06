import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { BarChart3, Rocket } from "lucide-react";

const metrics = [
  { label: "Active Club Participation Rate", desc: "% of clubs actively joining Battlegrounds per month" },
  { label: "Brand Conversion Rate", desc: "% of participants clicking through to sponsor checkout" },
  { label: "ML Flagging Accuracy", desc: "Precision of the Leaderboard Integrity system" },
];

const phases = [
  { phase: "Phase 1 — Beta", desc: "Hyper-local pilot (e.g., NYC) sponsored by Nike. Validate engagement and brand ROI.", color: "bg-primary/20 text-primary" },
  { phase: "Phase 2 — Evangelism", desc: 'Targeted outreach to Gen Z "Club Admins." Expand to 10 cities with diverse sponsors.', color: "bg-primary/40 text-primary" },
  { phase: "Phase 3 — Global", desc: "Self-serve B2B portal rollout. Scaled worldwide ahead of the anticipated IPO.", color: "bg-primary text-primary-foreground" },
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
