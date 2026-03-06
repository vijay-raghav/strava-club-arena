import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Megaphone, UserCheck, Activity, Award, ShoppingCart, MousePointerClick } from "lucide-react";

const steps = [
  { icon: Megaphone, label: "Discovery", desc: "Native in-feed sponsored card highlighting the local rivalry." },
  { icon: UserCheck, label: "Opt-In", desc: "A Challenge Page showing live aggregate team scores." },
  { icon: Activity, label: "Execution", desc: "The workout, protected by Quick Edit privacy and ML Integrity checks." },
  { icon: Award, label: "Validation", desc: "Automatic feed banners and explosive team kudos." },
  { icon: ShoppingCart, label: "Conversion", desc: "Winning push notification driving users to the sponsor's checkout page." },
];

export default function PrototypeSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="prototype" className="py-24 sm:py-32 bg-secondary/50">
      <div ref={ref} className={cn(
        "max-w-7xl mx-auto px-6 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        <div className="text-center mb-16">
          <p className="text-primary font-bold text-sm tracking-[0.15em] uppercase mb-3">Section 05</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">The User Flow</h2>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-5 gap-4 mb-16">
          {steps.map((step, i) => (
            <div key={step.label} className="relative text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-bold text-foreground text-sm mb-1">{step.label}</p>
              <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden sm:block absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-border" />
              )}
            </div>
          ))}
        </div>

        {/* Prototype prompt */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full mb-4">
            <MousePointerClick className="w-5 h-5" />
            <span className="font-semibold text-sm">Interactive Prototype</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Click through the experience below</h3>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm">Tap and swipe through each screen to see the full Sponsored Club Battlegrounds user journey.</p>
        </div>

        {/* Figma embed – frameless, tall, no inner scroll */}
        <div className="flex justify-center">
          <div className="w-full max-w-[420px] rounded-[2.5rem] bg-foreground/5 border border-border shadow-2xl overflow-hidden p-3">
            <div className="rounded-[2rem] overflow-hidden bg-background" style={{ height: '780px' }}>
              <iframe
                src="https://dairy-title-54358583.figma.site/"
                className="w-full border-0"
                style={{ height: '780px', overflow: 'hidden' }}
                allowFullScreen
                loading="lazy"
                scrolling="no"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
