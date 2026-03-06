import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Swords } from "lucide-react";

export default function SolutionSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="solution" className="py-24 sm:py-32 bg-secondary/50">
      <div
        ref={ref}
        className={cn(
          "max-w-4xl mx-auto px-6 text-center transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <p className="text-primary font-bold text-sm tracking-[0.15em] uppercase mb-3">Section 03</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6">
          Enter <span className="text-primary">Sponsored Club Battlegrounds</span>
        </h2>

        {/* Feature card */}
        <div className="relative mt-12 rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-xl shadow-primary/5 text-left">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
            <Swords className="w-6 h-6 text-primary-foreground" />
          </div>
          <p className="text-foreground leading-relaxed text-base sm:text-lg mt-4">
            We turn neutral, high-traffic local segments into{" "}
            <strong>gamified battlegrounds</strong> for real-world clubs (e.g., Brooklyn Track Club
            vs. Queens Distance Runners). Instead of Strava footing the bill, consumer brands pay to
            host these hyper-local challenges, leveraging Strava's highly lucrative{" "}
            <strong>"Sponsored Challenges"</strong> B2B framework.
          </p>
        </div>
      </div>
    </section>
  );
}
