import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Linkedin, FileDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 sm:py-32 bg-secondary/50">
      <div ref={ref} className={cn(
        "max-w-5xl mx-auto px-6 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        <div className="grid md:grid-cols-[auto_1fr] gap-12 items-center">
          {/* Photo placeholder */}
          <img src={profilePhoto} alt="Profile photo" className="w-48 h-48 rounded-3xl object-cover mx-auto md:mx-0 shrink-0" />

          {/* Text */}
          <div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
              Hi, I'm <span className="text-primary">[Your Name]</span>.
            </h2>
            <p className="text-lg text-muted-foreground mb-2 font-medium">
              Let's build the future of human movement.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I am a Product Management student at Carnegie Mellon University. This proposal
              highlights my core PM philosophy: I don't just build cool features; I build strategic
              growth engines. I understand that for Strava to succeed as a public entity, it must
              aggressively monetize its user base while preserving the authentic, community-driven
              social layer.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="rounded-full font-bold px-6" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
              <Button variant="outline" className="rounded-full font-bold px-6">
                <FileDown className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
