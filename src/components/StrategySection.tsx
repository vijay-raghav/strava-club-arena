import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Heart, DollarSign, Cpu } from "lucide-react";

const columns = [
  {
    icon: Heart,
    title: "User Desirability",
    body: "This aligns perfectly with the massive cultural shift of Gen Z users seeking organized in-person fitness communities. By providing a gamified competitive space, this feature gives the over one million active clubs on the platform a compelling native reason to engage daily.",
  },
  {
    icon: DollarSign,
    title: "Business Viability",
    body: "This generates lucrative B2B revenue by offering brands highly engaging participatory marketing. Enabling fragmented local groups to compete creates a powerful micro-network effect. This dynamic introduces a high psychological friction barrier to churn.",
  },
  {
    icon: Cpu,
    title: "Technical Feasibility",
    body: "This leverages Strava's existing technical architecture and machine learning capabilities. It utilizes the ML-enabled Leaderboard Integrity system to automatically evaluate 57 distinct variables and flag anomalous activities like e-bikes before they corrupt the team average. Furthermore, it heavily promotes the Quick Edit privacy feature to ensure vulnerable users can safely obscure their start and end locations.",
  },
];

export default function StrategySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="strategy" className="py-24 sm:py-32 bg-background">
      <div ref={ref} className={cn(
        "max-w-7xl mx-auto px-6 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            The Strategic Framework
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {columns.map((col, i) => (
            <div
              key={col.title}
              className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <col.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{col.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{col.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
