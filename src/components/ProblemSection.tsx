import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" className="py-32 md:py-40 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - The Problem */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6 block">
              The Problem
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8">
              Data without judgment.
              <br />
              <span className="text-muted-foreground">Instinct without accountability.</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                The industry is split. On one side, performance dashboards that optimize 
                for metrics no one can explain. On the other, creative agencies that burn 
                money chasing awards.
              </p>
              <p>
                Both approaches miss what actually drives commercial outcomes: the rare 
                ability to read patterns, trust judgment, and make decisions that compound.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Data side */}
              <div className="border border-border p-8 bg-card">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2" />
                  <div>
                    <h3 className="text-lg font-medium mb-2">Data-Only Approach</h3>
                    <p className="text-sm text-muted-foreground">
                      Optimizes for metrics. Loses human judgment. Misses context that 
                      machines cannot see.
                    </p>
                  </div>
                </div>
                
                <div className="h-px bg-border my-6" />
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2" />
                  <div>
                    <h3 className="text-lg font-medium mb-2">Instinct-Only Approach</h3>
                    <p className="text-sm text-muted-foreground">
                      Trusts gut feeling. No accountability. Burns budget on untested 
                      assumptions.
                    </p>
                  </div>
                </div>
                
                <div className="h-px bg-border my-6" />
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-primary">AMD Approach</h3>
                    <p className="text-sm text-muted-foreground">
                      AI handles pattern detection. Data keeps us honest. 
                      Instinct decides when it matters.
                    </p>
                  </div>
                </div>
              </div>

              {/* Subtle glow */}
              <div className="absolute -inset-px bg-gradient-to-b from-primary/10 to-transparent pointer-events-none opacity-50 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
