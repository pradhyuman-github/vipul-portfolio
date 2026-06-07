import { motion } from "motion/react";

const companies = [
  "Marsh & Mclennan",
  "S&P Global",
  "Honeywell",
  "Gilead",
  "Boeing",
  "CBRE",
  "KPMG",
  "WTW",
];

export default function Companies() {
  return (
    <section
      className="bg-[#D6CCC2] text-white py-24 overflow-hidden"
    >
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeIn" }} 
        className="max-w-7xl mx-auto px-6 md:px-16"
      >

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#7F5539] uppercase tracking-[0.3em] text-sm mb-4">
            Clients & Companies
          </p>

          <h2 className="text-[#3E2C23] text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Trusted By Industry Leaders
          </h2>

          {/* Subheading */}
          <p className="text-[#7B5E57] text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Collaborating with innovative brands, startups, and companies to identify high-quality business opportunities
            and drive consistent lead generation.
          </p>
        </div>

        {/* Logo Slider */}
        <div className="relative w-full overflow-hidden">

          {/* Gradient Blur Left */}
          <div className="absolute left-0 top-0 h-full w-8 sm:w-32 bg-linear-to-r from-black to-transparent z-10"></div>

          {/* Gradient Blur Right */}
          <div className="absolute right-0 top-0 h-full w-8 sm:w-32 bg-linear-to-l from-black to-transparent z-10"></div>

          <motion.div
            className="flex gap-8 w-max"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="w-20 sm:min-w-55 h-12 sm:h-27 rounded-xl sm:rounded-3xl text-center border-2 border-[#6F4518] sm:border-4 sm:border-zinc-700 bg-zinc-950 flex items-center justify-center hover:border-[#6F4518] transition-all duration-300"
              >
                <h3 className="text-sm sm:text-2xl font-semibold text-white transition">
                  {company}
                </h3>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}