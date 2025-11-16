import React, { useState } from "react";

const memories = [
  {
    id: 1,
    title: "Kyoto, Japan",
    date: "Summer 2023",
    desc: "A journey through ancient temples and serene gardens.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWLWUIRGHDAvV9uCv85tsIBhvxQTeVLXR52SEXpCHUgtg3gTaplYfKIaqeVK4R3PyYizjCQOlnzcywHCjdQEku8oR51qBsIRPPJkZTQ6IP7qi0BHKGKjfYvrgXQ2C1YCwQ9OG03PvhX7rGDnvCHx02TcdT7gP6BsDw6r0HE5KD1B6s8RudZWOI9x9BUHS5qNfNzf_Z6Y60tH-yA-gVPKvstV6Lq71PPpFcO8Jtxg_4k3JvyfSPmXjXEt7wuDe37IIdavF4Ioz95yJJ"
  },
  {
    id: 2,
    title: "Patagonia",
    date: "Spring 2023",
    desc: "Unforgettable trek through amazing landscapes.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbKOB-HyoHbPLGr_5w1E86Jzi0jPdFIlmR1M2cosTE_PdSKK_8Vbdp3aOZuK69kH9CBNqF_zdovgHPHoBkUCepfbAohlRV-Ms9sLcS1_6WG7Kg9dCZwnS6-XgZCUFHpB9jvC7WhF0ZUkVVrJ4cc1j2hgY4y_6RgjQk2XxEED17yWW7KEKvxWzV5fXCLLemFityWEV_KRNYF5bsXriWgRs5S2mYED3AnobvGhCXy0lCsUbztfeWpukrJ4NoBLcKwFn3skd2UW8YUmm5"
  }
];

const Timeline = ({ onAdd = () => {}, onEdit = () => {}, onLogout = () => {} }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen p-6 bg-gray-50 text-gray-900">

      {/* HEADER */}
      <header className="flex justify-between items-center mb-8">

        {/* LOGO */}
        <div className="flex items-center gap-2 text-blue-600">
          <svg width="32" height="32" fill="currentColor" viewBox="0 0 48 48">
            <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" />
          </svg>
          <h1 className="text-xl font-bold text-gray-900">Nomad</h1>
        </div>

        {/* PROFILE */}
        <div className="relative">
          <div
            className="w-10 h-10 rounded-full bg-cover bg-center cursor-pointer border-2 border-gray-200"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA5VNIH3rHhoxAEmbnMWAyoDQBojG79PxL9570V9xS5m-xwqdN7Ei_HwS66hCnR4fXP4o_CIrBhVtc4hbDQrAl9WIFABZkv-mJ6VNkuaLC14jMCjmka9jMQwrf7D8shE2VhtX6I-OshDiqXpyA_ex9pePOgbJJcH7bUBpbYWBx5Vzb2mtMzLMsezETqD8lLyZDT3ISroXvDtfMQ3sK-r2RvTNdPVAdVnx4fxovZrtkRpD6RSek8aZuo06MyzLptSs7RtCbtXSmclI_7")'
            }}
            onClick={() => setOpen(!open)}
          />

          {open && (
            <div 
              className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg w-36 shadow-lg z-10"
              onMouseLeave={() => setOpen(false)}
            >
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={onLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      {/* TITLE */}
      <h2 className="text-3xl font-bold mb-6">Your Travel Timeline</h2>

      {/* MEMORY GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {memories.map((m) => (
          <div key={m.id} className="flex flex-col gap-3 pb-4">

            {/* IMAGE */}
            <div
              className="w-full aspect-[3/4] rounded-xl bg-cover bg-center shadow-md hover:shadow-lg transition-shadow"
              style={{ backgroundImage: `url(${m.img})` }}
            />

            {/* TEXT */}
            <div>
              <p className="text-lg font-semibold text-gray-900">{m.title}</p>
              <p className="text-sm text-gray-600">{m.date}</p>
              <p className="text-sm text-gray-600 mt-1">{m.desc}</p>

              {/* VIEW BUTTON */}
              <button
                onClick={() => onEdit(m.id)}
                className="mt-3 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FLOATING ADD BUTTON */}
      <button
        onClick={onAdd}
        className="fixed bottom-8 right-8 flex items-center gap-2 px-5 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all"
      >
        <svg width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12h14" />
        </svg>
        Add Memory
      </button>
    </div>
  );
};

export default Timeline;