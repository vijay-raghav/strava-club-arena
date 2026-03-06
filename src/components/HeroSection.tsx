import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(220 20% 8%) 0%, hsl(220 25% 14%) 50%, hsl(18 40% 15%) 100%)",
      }}
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none' stroke='%23fff' stroke-width='.5'/%3E%3C/svg%3E\")",
      }} />

      <div ref={ref} className={cn(
        "relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        <p className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-6">
          B2B2C Product Strategy Proposal
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6">
          Strava Club{" "}
          <span className="text-primary">Battlegrounds</span>
          <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-white/70 mt-3">
            The Sponsored Series
          </span>
        </h1>
        <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto mb-4 font-medium">
          A B2B2C Product Strategy Proposal by [Your Name]
        </p>
        <p className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
          Strava has mastered the individual social graph. But what happens when we weaponize the
          fastest-growing demographic on the platform—real-world run clubs—to unlock a massive new
          B2B revenue stream?
        </p>
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 py-6 text-base rounded-full shadow-lg shadow-primary/30"
          onClick={() => document.getElementById("prototype")?.scrollIntoView({ behavior: "smooth" })}
        >
          View the Prototype ↓
        </Button>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
