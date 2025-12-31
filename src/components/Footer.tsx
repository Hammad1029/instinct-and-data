import amdLogo from '@/assets/amd-logo.png';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex flex-col gap-4">
            <img 
              src={amdLogo} 
              alt="Avenue Michigan Digital" 
              className="h-20 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              AI with Instinct.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 text-sm">
            <a href="#problem" className="text-muted-foreground hover:text-foreground transition-colors">
              Problem
            </a>
            <a href="#approach" className="text-muted-foreground hover:text-foreground transition-colors">
              Approach
            </a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Avenue Michigan Digital. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Performance-driven digital agency.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
