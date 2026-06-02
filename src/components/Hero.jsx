import { motion } from "motion/react"

export default function Hero() {

    return (
        <div>
            {/* hero section */}
            <section
                id="home"
                className="min-h-screen bg-[#EDE0D4] text-white flex items-center px-5 sm:px-8 md:px-16 py-24"
            >
                <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ x: -80, opacity: 0, filter: "blur(10px)" }}
                        whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.9}}
                        viewport={{ once: true }}
                    >
                        <p className="text-[#7F5539] uppercase tracking-[4px] mb-4 text-sm sm:text-base">
                            Welcome
                        </p>

                        <h1 className="text-[#3E2C23] text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
                            Lead Generation <br />
                            Specialist
                        </h1>

                        <p className="text-[#7B5E57] text-sm sm:text-lg leading-relaxed max-w-xl">
                            I find decision-makers. At scale. With <strong className="text-[#D4A373] italic"> 98.9% </strong> accuracy. <br />
                            <strong className="text-[#D4A373] italic"> 5+ years </strong> in B2B lead generation and business development. <br />
                            I deliver <i> 1,500–2,000 verified </i>, <i>C-level</i> and <i>VP-level</i> leads per month — clean, formatted, and ready for your sales team to act on immediately.
                        </p>
                        <p className="text-[#7B5E57] text-sm sm:text-base mt-4 max-w-lg">
                            Focused on generating qualified leads
                            and building scalable growth opportunities for modern brands.
                        </p>


                        <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8">

                            <a
                                href={`${import.meta.env.BASE_URL}resume.pdf`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#7F5539] text-white font-semibold rounded-full hover:bg-[#6F4518] transition"
                            >
                                <p className="ri-eye-line"> </p>
                                View Resume
                            </a>

                            <a
                                href={`${import.meta.env.BASE_URL}resume.pdf`}
                                download
                                className="flex items-center justify-center gap-2 px-8 py-4 border border-[#7F5539] text-[#7F5539] rounded-full hover:bg-white hover:text-black transition"
                            >
                                <p className="ri-download-2-line"></p>
                                Download
                            </a>

                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ x: 80, opacity: 0, filter: "blur(10px)" }}
                        whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.9}}
                        viewport={{ once: true }}
                        className="flex justify-center md:justify-end"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                            alt="Lead Generation Specialist"
                            className="w-full max-w-125 h-[60vh] md:h-[85vh] object-cover rounded-3xl shadow-2xl"
                        />
                    </motion.div>

                </div>
            </section>

        </div>
    )
}