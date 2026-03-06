import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import StrategySection from "@/components/StrategySection";
import PrototypeSection from "@/components/PrototypeSection";
import ExecutionSection from "@/components/ExecutionSection";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <StrategySection />
      <PrototypeSection />
      <ExecutionSection />
      <AboutSection />

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-background">
        <p className="text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Strava Club Battlegrounds — A Product Strategy Proposal
        </p>
      </footer>
    </div>
  );
};

export default Index;
