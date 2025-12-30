import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      number: "01",
      title: "Paid Media Strategy & Buying",
      description: "Channel selection, budget allocation, and execution across platforms. Not impressions—outcomes."
    },
    {
      number: "02",
      title: "Performance Creative Direction",
      description: "Creative that converts. Strategy-led production for ads that perform, not just impress."
    },
    {
      number: "03",
      title: "Tracking & Attribution",
      description: "Account architecture and measurement systems that reveal what actually drives revenue."
    },
    {
      number: "04",
      title: "Scaling Systems & Governance",
      description: "Frameworks for scaling spend without losing efficiency or control."
    }
  ];

  return (
    <section id="services" className="py-32 md:py-40 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6 block">
              Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight max-w-3xl">
              A cohesive system,
              <br />
              <span className="text-muted-foreground">not a menu.</span>
            </h2>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-background p-8 md:p-12 group hover:bg-card transition-colors duration-300"
              >
                <span className="text-primary text-sm font-medium tracking-wider mb-6 block">
                  {service.number}
                </span>
                <h3 className="text-xl md:text-2xl font-medium mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
