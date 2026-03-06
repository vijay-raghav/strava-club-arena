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
          <p className="text-primary font-bold text-sm tracking-[0.15em] uppercase mb-3">Section 02</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6 leading-tight">
            The Context <span className="text-primary">&</span> The Gap
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            As a Product Management graduate student at Carnegie Mellon University, I was challenged
            to identify an entirely unserved user segment within a mature digital product.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <Eye className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">The Observation</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Strava's marketing brilliantly leverages individual storytelling. However, it
                  underutilizes team dynamics. Generation Z is the fastest-growing demographic, and
                  their usage represents a fundamental shift toward organized run clubs. In 2025, the
                  number of new clubs nearly quadrupled, pushing the total past{" "}
                  <strong className="text-foreground">1 million Strava Clubs</strong>.
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
                  Currently, leaderboards are fiercely individual, leaving these 1 million+ clubs
                  without a native way to compete collectively against each other.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right – Image placeholder */}
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-secondary flex items-center justify-center overflow-hidden border border-border">
            <div className="text-center px-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏃‍♂️</span>
              </div>
              <p className="text-muted-foreground text-sm font-medium">
                Diverse Gen Z Run Club Image
              </p>
              <p className="text-muted-foreground/60 text-xs mt-1">Replace with your photo</p>
            </div>
          </div>
          {/* Decorative accent */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-primary/10 -z-10" />
        </div>
      </div>
    </section>
  );
}
