import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Eye, AlertTriangle } from "lucide-react";
import runClubImage from "@/assets/run-club.png";

export default function ProblemSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="problem" className="py-24 sm:py-32 bg-background">
      <div
        ref={ref}
        className={cn(
          "max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        {/* Left – Text */}
        <div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6 leading-tight">
            The Context
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            During one of my courses at Carnegie Mellon, a user segmentation exercise challenged me
            to identify an underserved cohort within a mature, high-scale product. That's when a
            massive opportunity within Strava struck me: we typically view the total addressable
            market as individual athletes, but the rapidly expanding ecosystem of clubs represents a
            distinct, highly actionable growth segment of its own.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <Eye className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">The Observation</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Strava's growth engine brilliantly leverages individual storytelling and
                  peer-to-peer validation. However, the platform currently underutilizes collective
                  team dynamics. Gen Z is now the fastest-growing demographic on the platform, and
                  their behavior reveals a fundamental shift away from passive social media and toward
                  in-person, organized fitness communities. Reflecting this cultural wave, the number
                  of new clubs created on the platform nearly quadrupled in 2025, pushing the total
                  number of Strava Clubs past the{" "}
                  <strong className="text-foreground">1 million mark</strong>.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">The Gap</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Despite this massive sociological shift, Strava's core competitive
                  infrastructure—the Segment leaderboard—remains fiercely individual. This leaves
                  over 1 million active digital clubs without a native, gamified way to compete
                  collectively against one another, representing a massive untapped opportunity for
                  both community engagement and B2B monetization.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right – Image placeholder */}
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border">
            <img
              src={runClubImage}
              alt="Diverse Gen Z runners competing in a Schenley Park Run Club 5K race"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Decorative accent */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-primary/10 -z-10" />
        </div>
      </div>
    </section>
  );
}
