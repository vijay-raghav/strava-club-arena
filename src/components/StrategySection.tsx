import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Heart, DollarSign, Cpu } from "lucide-react";

const columns = [
  {
    icon: Heart,
    title: "Desirability",
    body: "Directly taps into the massive cultural shift of Gen Z seeking organized, in-person fitness communities. It gives the 1 million+ clubs a reason to engage daily.",
  },
  {
    icon: DollarSign,
    title: "Viability",
    body: "Drives immense B2B revenue by offering brands participatory marketing. By enabling fragmented groups to compete, it creates a powerful micro-network effect and peer pressure that acts as an incredibly high psychological and social friction barrier to churn, much like Strava's Family Plan.",
  },
  {
    icon: Cpu,
    title: "Feasibility",
    body: 'Relies on Strava\'s existing tech. It utilizes the ML-enabled "Leaderboard Integrity" system (evaluating 57 distinct variables) to detect anomalous activities like e-bikes. It also leverages the "Quick Edit" feature to allow users to hide exact start and end geographic locations, ensuring safety.',
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
          <p className="text-primary font-bold text-sm tracking-[0.15em] uppercase mb-3">Section 04</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Product Strategy <span className="text-primary">(DVF Framework)</span>
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
