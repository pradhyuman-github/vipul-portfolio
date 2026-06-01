import { motion } from "motion/react";

export default function ContactSection() {
  return (
    <motion.section 
      id="contact"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }} 
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#EDE0D4] text-white py-12 sm:py-28 px-6 md:px-16"
    >
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <p className="text-[#7F5539] uppercase tracking-[0.3em] text-sm mb-5">
          Contact
        </p>

        <h2 className="text-[#3E2C23] text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-8">
          Let’s Generate
          <br />
          More Opportunities
        </h2>

        {/* Subheading */}
        <p className="text-[#7B5E57] text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-14">
          Looking for a lead generation professional who treats data quality as non-negotiable? 
          You’ve come to the right person.
        </p>

        {/* CTA */}
        <motion.a
          href="mailto:hello@example.com"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex items-center gap-3 bg-[#7F5539] hover:bg-[#6F4518] transition-all duration-300 px-8 py-4 rounded-2xl text-lg font-medium mb-20"
        >
          Let’s Talk
          <span className="text-2xl ri-thumb-up-fill"></span>
        </motion.a>
        
      </div>
    </motion.section>
  );
}