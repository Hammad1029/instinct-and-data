import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const PositionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pillars = [
    {
      label: "Strategy-led",
      description: "Every decision traces back to commercial outcomes."
    },
    {
      label: "Creative-driven",
      description: "Performance creative that converts, not just content."
    },
    {
      label: "Data-designed",
      description: "Architecture that reveals signal, not noise."
    }
  ];

  return (
    <section id="approach" className="py-32 md:py-40 border-t border-border relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_hsl(var(--amd-orange)/0.03)_0%,_transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div ref={ref} className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 block"
          >
            Our Position
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6"
          >
            We don't pick sides.
            <br />
            <span className="text-primary">That's the point.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16"
          >
            AMD combines AI pattern recognition, data-backed systems, and operator instinct 
            to make fast, grounded, commercially sane decisions.
          </motion.p>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="text-left"
              >
                <div className="w-12 h-px bg-primary mb-6" />
                <h3 className="text-xl font-medium mb-3">{pillar.label}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PositionSection;
