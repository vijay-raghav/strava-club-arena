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
        
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6">
          Enter <span className="text-primary">Sponsored Club Battlegrounds</span>
        </h2>

        {/* Feature card */}
        <div className="relative mt-12 rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-xl shadow-primary/5 text-left">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
            <Swords className="w-6 h-6 text-primary-foreground" />
          </div>
          <p className="text-foreground leading-relaxed text-base sm:text-lg mt-4">
            We are turning collective movement into a <strong>B2B growth engine</strong>. By
            leveraging high-traffic neutral segments for club-vs-club competition, we give Strava's
            1 million+ clubs a native way to compete. We monetize this engagement by scaling
            Strava's <strong>"Sponsored Challenges"</strong> framework, allowing localized brands to
            fund these turf wars to drive high-intent, reward-based e-commerce conversions.
          </p>
        </div>
      </div>
    </section>
  );
}
