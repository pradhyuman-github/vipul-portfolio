import { motion } from "motion/react";

export default function Skills() {
  const skills = [
    "LinkedIn", "Apollo", "HubSpot", "CRM Tools", "Google Sheets", "Lead Tracking", 
    "Email Outreach", "Data Collection", "Audience Targeting", "Prospect Research",
    "Lead Generation", "Client Communication"
  ];

  return (
    <section
      id="skills"
      className="bg-[#F5EFE6] text-white py-12 sm:py-28 px-6 md:px-16 border-b border-white/10"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.08 }}
        className="max-w-7xl mx-auto"
      >

        {/* Heading */}
        <div className="mb-10 sm:mb-20 text-center">

          <p className="uppercase tracking-[5px] text-[#7F5539] mb-5">
            Skills
          </p>

          <h2 className="text-[#3E2C23] text-4xl md:text-6xl font-bold leading-tight">
            Tools &
            <br />
            Expertise
          </h2>

        </div>

        {/* Mobile Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:hidden">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-2 py-2 sm:px-8 sm:py-5 text-center text-sm sm:text-base bg-[#FFF8F0] border border-[#DDBEA9] rounded-2xl text-[#7B5E57]"
            >
              {skill}
            </div>
          ))}
        </div>

        {/* desktop Custom Grid */}
        <div className="hidden lg:flex flex-col items-center gap-6">

          {/* Row 1 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08 }}
            className="flex flex-wrap justify-center gap-5"
          >
            {[
              "LinkedIn",
              "Apollo",
              "HubSpot",
              "CRM Tools",
            ].map((skill, index) => (
              <motion.div
                key={index}
                variants={{ hidden: { y: 40, opacity: 0, scale: 0.9 }, visible: { y: 0, opacity: 1, scale: 1 } }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="px-8 py-5 bg-[#FFF8F0] border border-[#DDBEA9] rounded-2xl text-[#7B5E57] hover:bg-[#FAEDCD] hover:border-[#7F5539] transition duration-150 ease-out"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>

          {/* Row 2 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08 }}
            className="flex flex-wrap justify-center gap-5"
          >
            {[
              "Google Sheets",
              "Email Outreach",
              "Lead Tracking",
              "Data Collection",
              "Audience Targeting",
            ].map((skill, index) => (
              <motion.div
                key={index}
                variants={{ hidden: { y: 40, opacity: 0, scale: 0.9 }, visible: { y: 0, opacity: 1, scale: 1 } }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="px-8 py-5 bg-[#FFF8F0] border border-[#DDBEA9] rounded-2xl text-[#7B5E57] hover:bg-[#FAEDCD] hover:border-[#7F5539] transition duration-150 ease-out"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>

          {/* Row 3 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08 }}
            className="flex flex-wrap justify-center gap-5"
          >
            {[
              "Prospect Research",
              "Lead Generation",
              "Client Communication",
            ].map((skill, index) => (
              <motion.div
                key={index}
                variants={{ hidden: { y: 40, opacity: 0, scale: 0.9 }, visible: { y: 0, opacity: 1, scale: 1 } }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="px-8 py-5 bg-[#FFF8F0] border border-[#DDBEA9] rounded-2xl text-[#7B5E57] hover:bg-[#FAEDCD] hover:border-[#7F5539] transition duration-150 ease-out"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}