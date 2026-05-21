import HeroSlider from "../components/HeroSlider";

export default function Home() {
  const products = [
    {
      title: "Packaging Premium",
      image:
        "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Label & Sticker",
      image:
        "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Mockup Design",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <main className="bg-white text-black overflow-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-10 w-auto"
            />

            <h1 className="text-2xl font-bold tracking-tight">
              Rumah Teduh
            </h1>
          </div>

          {/* MENU */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#" className="hover:text-yellow-500 transition">
              Home
            </a>

            <a href="#" className="hover:text-yellow-500 transition">
              Produk
            </a>

            <a href="#" className="hover:text-yellow-500 transition">
              Marketplace
            </a>

            <a href="#" className="hover:text-yellow-500 transition">
              Tools
            </a>

            <a href="#" className="hover:text-yellow-500 transition">
              Artikel
            </a>
          </div>

          {/* BUTTON */}
          <div className="flex gap-3">
            <button className="border border-black px-4 py-2 rounded-xl hover:bg-black hover:text-white transition">
              Login
            </button>

            <button className="bg-yellow-400 px-4 py-2 rounded-xl font-semibold hover:scale-105 transition">
              Registrasi
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SLIDER */}
      <section className="pt-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <HeroSlider />
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section className="py-24 px-6 bg-gray-50">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-yellow-500 font-semibold mb-3 uppercase tracking-[4px]">
              Our Services
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              Produk & Layanan
            </h2>

            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Solusi modern untuk packaging, stiker, label, dan kebutuhan brand
              bisnis Anda.
            </p>

          </div>

          {/* CARD */}
          <div className="grid md:grid-cols-3 gap-8">

            {products.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300"
              >

                <div className="h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-8">

                  <h3 className="text-2xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 leading-relaxed mb-6">
                    High quality printing and professional visual branding for
                    modern businesses.
                  </p>

                  <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-yellow-400 hover:text-black transition">
                    Explore
                  </button>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-black text-white text-center">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-5xl font-bold mb-6">
            Build Your Brand With Premium Packaging
          </h2>

          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            Tingkatkan kualitas visual produk Anda dengan desain modern,
            printing berkualitas, dan packaging profesional.
          </p>

          <a
            href="https://wa.me/62858827421910"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-black px-10 py-4 rounded-2xl font-bold hover:scale-105 transition"
          >
            Konsultasi Sekarang
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200 py-10 px-6">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <h2 className="text-2xl font-bold">
              Rumah Teduh
            </h2>

            <p className="text-gray-500 mt-2">
              Modern Packaging & Printing Solution
            </p>
          </div>

          <div className="flex gap-6 text-sm text-gray-500">

            <a href="#" className="hover:text-black transition">
              Home
            </a>

            <a href="#" className="hover:text-black transition">
              Produk
            </a>

            <a href="#" className="hover:text-black transition">
              Contact
            </a>

          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/62858827421910"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition z-50"
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