import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import PositionSection from '@/components/PositionSection';
import ServicesSection from '@/components/ServicesSection';
import PhilosophySection from '@/components/PhilosophySection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <ProblemSection />
      <PositionSection />
      <ServicesSection />
      <PhilosophySection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
