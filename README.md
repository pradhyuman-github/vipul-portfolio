bg color

- #F5EFE6
- #EDE0D4
- highlight D6CCC2

nav

- bg rgba(255, 248, 240, 0.75)
- border #D6CCC2

text

- primary #3E2C23
- #7B5E57
- light #7F5539

Highlight color
Coffee Gold Accent
#B08968
Espresso Accent
#7F5539
Caramel Accent
#D4A373

img
Border: #C6AC8F
box-shadow: 0 10px 30px rgba(127, 85, 57, 0.15);

Button
Primary Button
Background: #7F5539
Text: #FFF8F0
Hover: #6F4518
Secondary Button
Background: transparent
Border: #7F5539
Text: #7F5539

Cards
Card Background: #FFF8F0
Card Border: #DDBEA9
border hover 7F5539
Card Hover: #FAEDCD

<!-- exp card -->

{experiences.map((item) => (
<div
key={item.id}
onClick={() => setActive(item)}
className="relative flex items-center gap-6 cursor-pointer group" >

                                    {/* Dot */}
                                    <div
                                        className={`w-8 h-8 rounded-full border-4 z-10 transition-all duration-300
                                        ${active.id === item.id
                                                ? "bg-[#FFF8F0] border-[#D6CCC2] shadow-[0_10px_30px_rgba(127,85,57,0.8)]"
                                                : "bg-black border-zinc-600"
                                            }`}
                                    ></div>

                                    {/* Rectangle Card */}
                                    <div
                                        className={`flex-1 rounded-2xl border p-6 transition-all duration-300
                                        ${active.id === item.id
                                                ? "bg-linear-to-br from-[#E6CCB2] to-[#FFF8F0] border-[#B08968]"
                                                : "bg-zinc-950 border-zinc-800 hover:border-zinc-600"
                                            }`}
                                    >
                                        <h3 className="text-[#D4A373] text-xl font-semibold mb-2">
                                            {item.short}
                                        </h3>

                                        <p className="text-[#B08968] text-sm">
                                            {item.company}
                                        </p>

                                        <p className="text-[#7F5539] text-sm mt-2">
                                            {item.duration}
                                        </p>
                                    </div>
