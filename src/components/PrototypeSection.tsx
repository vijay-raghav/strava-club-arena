import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Megaphone, UserCheck, Activity, Award, ShoppingCart, MousePointerClick } from "lucide-react";

const steps = [
  {
    icon: Megaphone,
    number: 1,
    label: "Discovery",
    subtitle: "The Hook",
    desc: "The journey begins natively in the algorithmic feed. Users encounter a seamless sponsored card highlighting a hyper-local turf war between their club and a rival, generating organic, peer-to-peer virality.",
  },
  {
    icon: UserCheck,
    number: 2,
    label: "Opt-In",
    subtitle: "The Briefing",
    desc: "Tapping the card directs users to the Battleground Challenge Page. Here, they view the live, head-to-head aggregate team scores and the tangible reward offered by the sponsoring brand.",
  },
  {
    icon: Activity,
    number: 3,
    label: "Execution",
    subtitle: "The Workout",
    desc: "Users track their physical activity using their preferred device. During upload, the ML-enabled Leaderboard Integrity system automatically evaluates biometric and spatial data in the background to prevent anomalous activities (like e-bikes) from corrupting the club average. Users can also apply Quick Edit privacy filters to obscure their start and end locations, ensuring a safe experience.",
  },
  {
    icon: Award,
    number: 4,
    label: "Validation",
    subtitle: "The Social Loop",
    desc: "The completed activity hits the public feed with an exclusive Battleground banner. This triggers a massive influx of community Kudos and comments, solidifying the social bond and driving daily active usage.",
  },
  {
    icon: ShoppingCart,
    number: 5,
    label: "Conversion",
    subtitle: "The ROI",
    desc: "At the end of the month, the winning club receives a celebratory push notification. This flow pushes highly qualified, victorious athletes directly to the brand's e-commerce ecosystem to claim their reward, driving immediate and attributable sales conversions.",
  },
];

export default function PrototypeSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="prototype" className="py-24 sm:py-32 bg-secondary/50">
      <div ref={ref} className={cn(
        "max-w-7xl mx-auto px-6 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            The User Flow: <span className="text-primary">Concept to Conversion</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            A successful product feature must balance a frictionless user experience with clear business outcomes. Explore the interactive Figma prototype below to experience the end-to-end journey of a Sponsored Club Battleground, from the initial social hook to the final B2B conversion.
          </p>
        </div>

        {/* 5-Step Flow */}
        <div className="space-y-4 mt-12 mb-16 max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={step.label}
              className="rounded-2xl border border-border bg-card p-6 hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {step.number}. {step.label}{" "}
                    <span className="text-primary font-semibold">({step.subtitle})</span>
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
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

        {/* Figma embed */}
        <div className="flex justify-center">
          <div className="w-full max-w-[420px] rounded-[2.5rem] bg-foreground/5 border border-border shadow-2xl overflow-hidden p-3">
            <div className="rounded-[2rem] overflow-hidden bg-background" style={{ height: '780px' }}>
              <iframe
                src="https://dairy-title-54358583.figma.site/"
                className="w-full border-0"
                style={{ height: '780px', overflow: 'hidden' }}
                allowFullScreen
                loading="lazy"
                scrolling="yes"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
