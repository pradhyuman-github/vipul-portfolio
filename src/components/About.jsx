import { motion } from "motion/react";

export default function About() {
  const services = [
    {
      number: "01",
      icon: "ri-search-eye-line text-[#9C6644]",
      desc: "LinkedIn Lead Research & C-suite prospecting",
    },
    {
      number: "02",
      icon: "ri-verified-badge-line text-[#5F8B4C]",
      desc: "Verified Email & Contact List building",
    },
    {
      number: "03",  
      icon: "ri-pie-chart-line text-[#5B7B9A]",  
      desc: "Lead scraping, Data mining & Cleaning",
    },
    {
      number: "04",
      icon: "ri-database-2-line text-[#9A6FB0]", 
      desc: "B2B Database building & CRM-ready formatting"
    },
    {
      number: "05",
      icon: "ri-tools-fill text-[#6B7280]", 
      desc: "Multi-source prospecting via LinkedIn SN & Data tools"
    },
    {
      number: "06",
      icon: "ri-survey-line text-[#C9A227]", 
      desc: "Market research & Decision-maker targeting"
    }
  ];

  return (
    <div>
      <section
        id="about"
        className="bg-[#EDE0D4] text-white relative flex flex-col lg:flex-row sm:pt-32 pb-10 sm:pb-32">

        {/* LEFT FIXED SIDE */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="lg:w-1/2 lg:h-[calc(100vh-6rem)] lg:sticky lg:top-24 border-b lg:border-b-0 lg:border-r border-[#7F5539] flex items-center px-6 md:px-16 py-12 sm:py-24"
        >

          <div className="max-w-2xl">
            <p className="uppercase tracking-[5px] text-[#7F5539] mb-6">
              About Me
            </p>

            <h1 className="text-[#3E2C23]  text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
              Helping Brands
              <br />
              Build Meaningful
              <br />
              Connections
            </h1>

            <p className="text-[#7B5E57] text-sm md:text-lg leading-relaxed max-w-xl">
              I specialize in lead generation, outreach strategy, and market
              research focused on helping businesses connect with the right
              audience and generate quality leads.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-8">

              <div>
                <h3 className="text-4xl md:text-5xl font-bold mb-2">
                  1000+
                </h3>

                <p className="text-black text-sm uppercase tracking-wide">
                  Company Data
                </p>
              </div>

              <div>
                <h3 className="text-4xl md:text-5xl font-bold mb-2">
                  300K+
                </h3>

                <p className="text-black text-sm uppercase tracking-wide">
                  Lead Found
                </p>
              </div>

              <div>
                <h3 className="text-4xl md:text-5xl font-bold mb-2">
                  10+
                </h3>

                <p className="text-black text-sm uppercase tracking-wide">
                  Niches Worked
                </p>
              </div>

              <div>
                <h3 className="text-4xl md:text-5xl font-bold mb-2">
                  98.9%
                </h3>

                <p className="text-black text-sm uppercase tracking-wide">
                  Workflow Accuracy
                </p>
              </div>

            </div>
          </div>
        </motion.div>

        {/* RIGHT SCROLLING SIDE */}
        <div className="lg:w-1/2">

          {/* WHO I AM */}
          <motion.section
            initial={{ y: 100, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="sm:min-h-screen bg-[#F5EFE6] flex items-center mx-3 my-2 sm:mx-0 sm:my-0 px-6 md:px-16 py-16 sm:py-24 border-b border-[#7F5539] rounded-3xl sm:rounded-none"
          >
            <div className="max-w-2xl">

              <p className="uppercase tracking-[5px] text-[#7F5539] mb-5">
                Who I Am
              </p>

              <h2 className="text-[#3E2C23] text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 sm:mb-8">
                A Results-Driven
                <br />
                Lead Generation
                <br />
                Specialist
              </h2>

              <div className="w-24 h-0.5 bg-[#7B5E57] mb-5 sm:mb-10" />

              <div className="space-y-4 sm:space-y-8">

                <p className="text-[#7B5E57] text-sm sm:text-xl leading-relaxed">
                  I've worked across Business Development and Business Process roles — consistently 
                  hitting volume and accuracy targets that directly shortened sales cycles for the teams I supported.
                </p>

                <p className="hidden sm:block text-[#7B5E57] text-lg leading-relaxed">
                  My approach focuses on creating organized prospect pipelines,
                  improving outreach consistency, and supporting long-term
                  business growth with scalable lead generation methods.
                </p>

                {/* Mini Cards */}
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-6 sm:pt-6">

                  <div className="border border-[#DDBEA9] rounded-3xl p-3 sm:p-6 hover:border-[#7F5539] hover:bg-[#FAEDCD] bg-[#FAEDCD] sm:bg-transparent transition">
                    <h3 className="text-[#7B5E57] text-lg sm:text-2xl font-semibold mb-3">
                      C-level Targeting
                    </h3>

                    <p className="text-black leading-relaxed text-xs sm:text-base">
                      Focused on finding relevant and high-intent decision makers.
                    </p>
                  </div>

                  <div className="border border-[#DDBEA9] rounded-3xl p-3 sm:p-6 hover:border-[#7F5539] hover:bg-[#FAEDCD] bg-[#FAEDCD] sm:bg-transparent transition">
                    <h3 className="text-[#7B5E57] text-lg sm:text-2xl font-semibold mb-3">
                      Outreach Systems
                    </h3>

                    <p className="text-black leading-relaxed text-xs sm:text-base">
                      Building consistent and scalable outreach workflows.
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </motion.section>


          {/* WHAT I DO */}
          <motion.section 
          initial={{ y: 100, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          className="min-h-screen bg-[#F5EFE6] flex items-center mx-3 my-2 sm:mx-0 sm:my-0 px-6 md:px-16 py-16 sm:py-24 rounded-3xl sm:rounded-none"
          >
            <div className="w-full max-w-3xl">

              {/* Heading */}
              <div className="mb-6 sm:mb-12">

                <p className="uppercase tracking-[5px] text-[#7F5539] mb-5">
                  What I Do
                </p>

                <h2 className="text-[#3E2C23] text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 sm:mb-8">
                  Services &
                  <br />
                  Expertise
                </h2>

                <p className="text-[#7B5E57] text-sm sm:text-lg leading-relaxed max-w-xl mb-4">
                  Combining research, communication, and strategic outreach
                  methods to help businesses create stronger opportunities and
                  meaningful growth.
                </p>            
              </div>

              {/* Service Cards */}
              <div className="space-y-4 sm:space-y-8">
                <p className="text-[#7B5E57] text-base sm:text-xl leading-relaxed mb-4">What I bring to your team: </p>

                {services.map((service, index) => (
                  <div
                    key={index}
                    className="group flex items-center flex-col sm:flex-row sm:gap-8 border border-[#DDBEA9] rounded-2xl sm:rounded-4xl p-2 sm:p-4 hover:border-[#7F5539] hover:bg-[#FAEDCD] bg-[#FAEDCD] sm:bg-transparent transition duration-500"
                  >

                    <div>
                      <span className="text-2xl sm:text-5xl font-bold text-[#B08968] group-hover:text-[#7F5539] transition">
                        {service.number}
                      </span>
                    </div> 

                    <div className="flex items-center gap-2">
                      <p className={`${service.icon} text-2xl sm:text-3xl`}></p>                   

                      <p className="text-black leading-relaxed text-sm sm:text-lg">
                        {service.desc}
                      </p>                  
                    </div>

                  </div>
                ))}

              </div>
            </div>
          </motion.section>

        </div>
      </section>
    </div>
  );
}