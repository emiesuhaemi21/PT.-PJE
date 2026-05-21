export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center text-black"
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
    >

      {/* Overlay */}
      <div className="min-h-screen bg-white/60">

        {/* NAVBAR */}
        <nav className="flex items-center justify-between px-10 py-6">

          {/* Logo */}
          <img
  src="/Logo rumah teduh invitation.png"
  alt="Logo"
  className="h-15 w-auto"
/>

          {/* Menu */}
          <div className="flex gap-8 text-sm font-medium">

            <a href="#" className="hover:text-yellow-400 transition">
              Home
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              Harga
              </a>

            <a href="#" className="hover:text-yellow-400 transition">
              Contoh
            </a>

            <a href="#" className="hover:text-yellow-400 transition">
              Tools
            </a>

            <a href="#" className="hover:text-yellow-400 transition">
              Marketplace
            </a><div className="relative group">

  <button className="hover:text-yellow-400 transition">
    Template
  </button>

  {/* Dropdown */}
  <div className="absolute top-8 left-0 hidden group-hover:flex flex-col bg-white text-black rounded-xl shadow-xl min-w-[180px] overflow-hidden z-50">

    <a
      href="#"
      className="px-5 py-3 hover:bg-yellow-100 transition"
    >
      Undangan
    </a>

    <a
      href="#"
      className="px-5 py-3 hover:bg-yellow-100 transition"
    >
      Kalender
    </a>

    <a
      href="#"
      className="px-5 py-3 hover:bg-yellow-100 transition"
    >
      Layout
    </a>

  </div>

</div>

            <a href="#" className="hover:text-yellow-400 transition">
              Tutorial
            </a>

            <a href="#" className="hover:text-yellow-400 transition">
              Artikel
            </a>

          </div>

          {/* Auth */}
          <div className="flex gap-4">

            <button className="border border-white px-4 py-2 rounded-xl hover:bg-white hover:text-black transition">
              Registrasi
            </button>

            <button className="bg-white text-black px-4 py-2 rounded-xl hover:bg-gray-300 transition">
              Login
            </button>

          </div>

        </nav>

        {/* HERO */}
        <section className="h-[80vh] flex flex-col items-center justify-center text-center px-6">

          <h1 className="text-6xl font-bold mb-6">
            Innovative Packaging Solution
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl">
            Flexible packaging, premium printing, and modern mockup technology
            for your brand.
          </p>

          <a
  href="https://wa.me/62858827421910"
  target="_blank"
  className="mt-8 bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-400 transition inline-block"
>
  WhatsApp Kami
</a>


        </section>

      </div>
<a
  href="https://wa.me/65858827421910"
  target="_blank"
  className="fixed bottom-6 right-6 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition z-50"
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp"
    className="w-9 h-9"
  />
</a>
    </main>
    
  );
}
