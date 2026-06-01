import { useState } from "react";
import { motion } from "motion/react";

const experiences = [
    {
        id: 1,
        role: "Business Process Executive",
        company: "Aykva Managemnet Pvt Ltd",
        location: "Mumbai, Maharashtra, India | Remote",
        duration: "Jan 2025 - Present",
        short: "Business Process Executive",
        description:
            "Managed B2B lead generation and prospect research using tools like LinkedIn and LinkedIn Sales Navigator to identify high-quality business opportunities. Focused on lead scraping, data analysis, and targeted outreach strategies to support business growth and improve lead conversion efficiency.",
    },
    {
        id: 2,
        role: "Team Lead Manager",
        company: "Fidelis Consortium",
        location: "Remote",
        duration: "Jan 2022 - Jan 2025",
        short: "Team Lead Manager",
        description:
            "Specialized in B2B lead generation through targeted prospect research, lead scraping, and outreach strategies using LinkedIn and LinkedIn Sales Navigator. Leveraged data-driven decision making to identify qualified leads and support business growth initiatives.",
    },
    {
        id: 3,
        role: "Business Development Manager",
        company: "NextBits Group",
        location: "Ahemdabad, Gujarat, India | On-site",
        duration: "Mar 2020 - Dec 2021",
        short: "Business Development Manager",
        description:
            "Managed lead generation activities including LinkedIn prospecting, B2B outreach, and email list building to connect businesses with relevant potential clients and support outreach campaigns.",
    },
    {
        id: 4,
        role: "Business Development Executive",
        company: "DataPierce Consulting",
        location: "Greater Ahemdabad Area, India | On-site",
        duration: "Nov 2018 - Feb 2020",
        short: "Business Development Executive",
        description:
            "Assisted in B2B lead generation by conducting lead scraping, prospect research, and data collection to identify potential business opportunities and maintain organized lead databases.",
    },
];

export default function Experience() {
    // 1st card visible by default
    const [active, setActive] = useState(experiences[0]);

    return (
        <section
            id="experience"
            className="bg-[#F5EFE6] text-white py-20 sm:py-24 px-6 md:px-16"
        >
            <div className="max-w-7xl mx-auto">

                {/* HEADING */}
                <div className="mb-20">
                    <p className="text-[#7F5539] uppercase tracking-[0.3em] text-sm mb-4">
                        Experience
                    </p>

                    <h2 className="text-[#3E2C23] text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                        Professional Journey
                    </h2>

                    {/* SUB HEADING */}
                    <p className="text-[#7B5E57] max-w-2xl text-sm sm:text-lg leading-relaxed">
                        A timeline of my professional experience, showcasing the roles,
                        projects, and impact I’ve created through design and development.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-14">

                    {/* LEFT SIDE */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.2 }}
                        className="relative"
                    >

                        {/* Timeline Line */}
                        <div className="absolute left-4 top-0 w-0.5 h-full bg-zinc-800"></div>

                        <motion.div
                            variants={{
                                hidden: { x: -80, opacity: 0, filter: "blur(8px)" },
                                visible: { x: 0, opacity: 1, filter: "blur(0px)" }
                            }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="flex flex-col gap-8"
                        >
                            {experiences.map((item) => (
                                <div key={item.id} className="relative">
                                    {/* Clickable Row */}
                                    <div
                                        onClick={() => setActive(item)}
                                        className="relative flex items-center gap-2 sm:gap-6 cursor-pointer group"
                                    >
                                        {/* Dot */}
                                        <div
                                            className={`w-8 h-8 rounded-full border-4 z-10 transition-all duration-300 shrink-0
                                                ${active.id === item.id
                                                    ? "bg-[#FFF8F0] border-[#D6CCC2] shadow-[0_10px_30px_rgba(127,85,57,0.8)]"
                                                    : "bg-black border-zinc-600"
                                                }`}
                                        ></div>

                                        {/* Card */}
                                        <div
                                            className={`flex-1 rounded-2xl border p-3 sm:p-6 transition-all duration-300
                                                ${active.id === item.id
                                                    ? "bg-linear-to-br from-[#E6CCB2] to-[#FFF8F0] border-[#B08968]"
                                                    : "bg-zinc-950 border-zinc-800 hover:border-zinc-600"
                                                }`}
                                        >
                                            <h3 className="text-[#D4A373] text-base sm:text-xl font-semibold mb-2">
                                                {item.short}
                                            </h3>

                                            <p className="text-[#B08968] text-sm">
                                                {item.company}
                                            </p>

                                            <p className="text-[#7F5539] text-xs sm:text-sm mt-2">
                                                {item.duration}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Mobile Expand */}
                                    <div
                                        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out
                                            ${active.id === item.id
                                                ? "max-h-200 opacity-100 mt-4"
                                                : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <div className="ml-10 rounded-2xl border border-[#B08968] bg-zinc-950 p-5 wrap-break-word overflow-hidden">

                                            <p className="hidden sm:block text-[#D4A373] text-sm mb-2">
                                                {item.company}
                                            </p>

                                            <h3 className="hidden sm:block text-[#B08968] text-xl font-bold mb-4">
                                                {item.role}
                                            </h3>

                                            <div className="hidden sm:flex flex-col gap-1 text-sm text-[#7B5E57] mb-5">
                                                <span>{item.location}</span>
                                                <span>{item.duration}</span>
                                            </div>

                                            <p className="text-zinc-500 text-sm leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* RIGHT SIDE */}
                    <motion.div
                        initial={{ x: 120, opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                        whileInView={{ x: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeIn" }}
                        className="hidden lg:flex items-center "
                    >
                        <div className="w-full rounded-3xl border-4 border-[#B08968] bg-zinc-950 p-8 md:p-10 transition-all duration-500">

                            {/* Top */}
                            <div className="mb-8">
                                <p className="text-[#D4A373] text-lg font-medium mb-3">
                                    {active.company}
                                </p>

                                <h3 className="text-[#B08968] text-4xl font-bold mb-5">
                                    {active.role}
                                </h3>

                                <div className="flex flex-wrap gap-4 text-[#7B5E57]">
                                    <span>{active.location}</span>
                                    <span>•</span>
                                    <span>{active.duration}</span>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="w-full h-px bg-zinc-800 mb-8"></div>

                            {/* Description */}
                            <p className="text-zinc-500 text-lg leading-relaxed">
                                {active.description}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}