import { useState } from "react";
import { motion } from "motion/react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0, filter: "blur(10px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="fixed top-0 left-1/2 -translate-x-1/2 z-50 bg-[#rgba(255, 248, 240, 0.75)] backdrop-blur-md border-2 border-[#D6CCC2] shadow-lg shadow-[#7F5539]/10 rounded-2xl w-[95%] sm:w-[92%] md:w-[80%] lg:w-[60%] mt-2"
            >
                <div className="flex items-center justify-between px-4 sm:px-5 py-2">
                    <h2 className="font-semibold text-xl sm:text-2xl p-1 sm:p-3 text-[#3E2C23]">Vipul Toshniwal</h2>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <a
                            href="#experience"
                            className="text-[#3E2C23] hover:text-[#7F5539] transition"
                        >
                            Experience
                        </a>

                        <a
                            href="#about"
                            className="text-[#3E2C23] hover:text-[#7F5539] transition"
                        >
                            About
                        </a>

                        <a
                            href="#skills"
                            className="text-[#3E2C23] hover:text-[#7F5539] transition"
                        >
                            Skills
                        </a>

                        <a
                            href="#contact"
                            className="text-[#3E2C23] hover:text-[#7F5539] transition"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Icon */}
                    <button className="md:hidden text-[#3E2C23] text-2xl font-bold ri-menu-fill"
                        onClick={() => setMenuOpen(true)}
                    >                        
                    </button>
                </div>
            </motion.nav>

            {/* overlay */}
            <div
                onClick={() => setMenuOpen(false)}
                className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-200 
                    ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
            </div>

            {/* mobile menu */}
            <div className={`fixed top-0 right-0 h-full w-[75%] max-w-[320px] bg-[#FFF8F0] border-l-2 border-[#D6CCC2] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out 
                ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex items-center justify-between p-5 border-b border-[#EAD7C3]">
                    <h2 className="text-xl font-semibold text-[#3E2C23]">
                        Menu
                    </h2>

                    <button onClick={() => setMenuOpen(false)}
                        className="text-[#3E2C23] font-bold"
                    >
                        ✕
                    </button>
                </div>

                {/* Links */}
                <div className="flex flex-col p-6 gap-6 text-[#3E2C23]">
                    <a
                        href="#home"
                        className="border-b pb-1"
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </a>
                    <a
                        href="#experience"
                        className="border-b pb-1"
                        onClick={() => setMenuOpen(false)}
                    >
                        Experience
                    </a>

                    <a
                        href="#about"
                        className="border-b pb-1"
                        onClick={() => setMenuOpen(false)}
                    >
                        About
                    </a>

                    <a
                        href="#skills"
                        className="border-b pb-1"
                        onClick={() => setMenuOpen(false)}
                    >
                        Skills
                    </a>

                    <a
                        href="#contact"
                        className="border-b pb-1"
                        onClick={() => setMenuOpen(false)}
                    >
                        Contact
                    </a>

                </div>
            </div>

        </>
    );
}