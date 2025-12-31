import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import amdLogo from '@/assets/amd-logo.png';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
        }`}
    >
      <nav className="container mx-auto px-6 lg:px-12 h-23 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img
            src={amdLogo}
            alt="Avenue Michigan Digital"
            className="h-20 object-contain"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide">
            Problem
          </a>
          <a href="#approach" className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide">
            Approach
          </a>
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide">
            Services
          </a>
        </div>

        <a
          href="https://calendar.app.google/gxwPNSxqj1GE6ddq5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="minimal" size="lg">
            Book a Call
          </Button>
        </a>
      </nav>
    </motion.header>
  );
};

export default Header;
