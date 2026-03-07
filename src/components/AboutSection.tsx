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
          <div className="flex flex-col items-center md:items-start shrink-0">
            <img src={profilePhoto} alt="Vijay Raghavan after a 10K race" className="w-48 h-48 rounded-3xl object-cover" />
            <p className="text-sm text-muted-foreground mt-3 italic text-center">Two 10Ks down. A 21K ahead.</p>
          </div>

          {/* Text */}
          <div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
              Hi, I'm <span className="text-primary">Vijay Raghavan</span>.
            </h2>
            <p className="text-lg text-muted-foreground mb-2 font-medium">
              Let's build the future of human movement.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I started my career as a software engineer, but I quickly realized my true passion wasn't just writing the code, it was defining what we build, why we build it, and who we build it for. Today, I am an AI-native Product Manager pursuing my Tech MBA (Master of Science in Product Management) at Carnegie Mellon University's{" "}
              <a href="https://www.cmu.edu/tepper" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:opacity-80">Tepper School of Business</a>. While I have substantial experience spearheading 0-to-1 launch of intelligence products at enterprise scale, my core philosophy always comes back to deep user empathy.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              When I was tapped to direct the product roadmap for the{" "}
              <a href="https://USOpen.com" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:opacity-80">US Open</a>{" "}
              Digital Platform at Deloitte, I knew looking at engagement analytics wouldn't be enough. To truly build for golf fans, I needed to understand their obsession. I spent my weekends out on the course, studying the legends of the game, and getting my handicap. That on-the-ground user empathy allowed me to guide a cross-functional unit of 50 engineers and designers to launch immersive features that drove a 12% YoY engagement lift across 350K concurrent users. It was a proud moment when the US Open app hit #1 in the sports category and #5 on the App Store when my team went live.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="rounded-full font-bold px-6" asChild>
                <a href="https://www.linkedin.com/in/vijayraghavans/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
              <Button variant="outline" className="rounded-full font-bold px-6" asChild>
                <a href="https://drive.google.com/file/d/1pyZlHYCqhcxrwzZdSox-K_GDKFiAM5hA/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <FileDown className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
