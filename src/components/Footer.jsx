export default function Footer() {
    return (
        <footer className="bg-[#CDBBA7] border-t border-[#B08968] py-10 px-6 md:px-16">

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                {/* left */}
                <div className="flex items-center justify-center gap-6 flex-wrap">

                    {/* Gmail */}
                    <a
                        href="mailto:hello@example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ri-mail-line text-4xl text-[#7B5E57] hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                    >
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ri-linkedin-box-fill text-4xl text-[#7B5E57] hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                    >
                    </a>

                    {/* Instagram */}
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ri-instagram-line text-4xl text-[#7B5E57] hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                    >
                    </a>
                </div>

                {/* Right */}
                <div>
                    <p className="text-[#7B5E57] text-sm">
                        © {new Date().getFullYear()} Vipul Toshniwal
                    </p>
                </div>
            </div>

        </footer>
    );
}