import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const PhilosophySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 md:py-40 border-t border-border relative overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(var(--amd-orange)/0.05)_0%,_transparent_60%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div ref={ref} className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 block"
          >
            Philosophy
          </motion.span>

          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-4 md:-left-8 top-0 w-1 h-full bg-primary" />
            <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed pl-8 md:pl-12">
              AI handles pattern detection.
              <br />
              Data keeps us honest.
              <br />
              <span className="text-primary">Instinct decides when it matters.</span>
            </p>
          </motion.blockquote>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-muted-foreground mt-12 pl-8 md:pl-12 max-w-xl"
          >
            This balance is rare and difficult to replicate. AMD intentionally sits between 
            performance dashboards with no soul and creative agencies with no accountability.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
