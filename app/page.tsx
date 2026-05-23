"use client";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
import HeroSlider from "../components/HeroSlider";
import { FiSearch } from "react-icons/fi";

export default function Home() {

  const [search, setSearch] = useState("");

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
              alt="logo"
              className="h-10 w-auto"
            />

            <h1 className="text-2xl font-bold tracking-tight">
              
            </h1>
          </div>
{/* SEARCH */}
<div className="hidden md:flex relative w-full max-w-md">
  
  <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />

  <input
  type="text"
  placeholder="Cari produk..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="
    w-full
    py-3
    pl-12
    pr-4
    rounded-full
    border
    border-gray-200
    outline-none
    focus:ring-2
    focus:ring-yellow-400
  "
  />

</div>
          {/* MENU */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#" className="hover:text-red-500 transition">
              Home
            </a>

            <a href="#" className="hover:text-red-500 transition">
              Produk
            </a>

            <a href="#" className="hover:text-red-500 transition">
              Marketplace
            </a>

            <a href="#" className="hover:text-red-500 transition">
              Tools
            </a>

            <a href="#" className="hover:text-red-500 transition">
              Artikel
            </a>
          </div>

          {/* BUTTON */}
          <div className="flex gap-3">
            <button className="border border-red px-4 py-2 rounded-xl hover:bg-black hover:text-white transition">
              Login
            </button>

            <button className="bg-red-400 px-4 py-2 rounded-xl font-semibold hover:scale-105 transition">
              Registrasi
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SLIDER */}
      <section className="pt-32 px-6 bg-white">
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

            {products
  .filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )
  .map((item, index) => (
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
      {/* FOOTER */}
<footer className="bg-[#f5f5f5] pt-20 pb-10 px-6">

  <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12">

    {/* KOLOM 1 */}
    <div>

      <img
        src="/logo.png"
        alt="logo"
        className="h-16 mb-6"
      />

      <p className="text-gray-600 leading-relaxed mb-8">
        Solusi flexible packaging berkualitas untuk kebutuhan makanan,
        minuman, personal care, dan industri.
      </p>

      {/* JAM */}
      <h3 className="font-bold text-xl mb-4">
        Jam Operasional
      </h3>

      <div className="text-gray-600 space-y-2 text-sm">
        <p>Senin - Jumat: 08:00 - 17:00 WIB</p>
        <p>Sabtu: 08:00 - 12:00 WIB</p>
        <p>Minggu: Tutup</p>
      </div>

      {/* LOKASI */}
      <h3 className="font-bold text-xl mt-10 mb-4">
        Lokasi Kami
      </h3>

      <p className="text-gray-600 mb-5">
        PT Primajaya Eratama, Indonesia
      </p>

      <a
  href="https://maps.app.goo.gl/9VJf5Xb9coZhbFt18"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
>
  Lihat Google Maps
</a>

      {/* SOSMED */}
      <h3 className="font-bold text-xl mt-10 mb-4">
        Hubungi Kami
      </h3>

      <div className="flex gap-4">

        <a
  href="https://instagram.com/primajayaeratama.official"
  target="_blank"
  rel="noopener noreferrer"
  className="w-20 h-16 rounded-2xl bg-white shadow flex items-center justify-center text-3xl hover:scale-105 transition"
>
  <FaInstagram className="text-pink-500" />
</a>

        <a
  href="https://facebook.com/emiesuhaemi85"
  target="_blank"
  rel="noopener noreferrer"
  className="w-20 h-16 rounded-2xl bg-white shadow flex items-center justify-center text-3xl hover:scale-105 transition"
>
  <FaFacebookF className="text-blue-600" />
</a>

        <a
  href="mailto:emiesuhaemi21@gmail.com"
  className="w-20 h-16 rounded-2xl bg-white shadow flex items-center justify-center text-3xl hover:scale-105 transition cursor-pointer"
>
  <MdEmail className="text-red-500" />
</a>

      </div>

    </div>

    {/* KOLOM 2 */}
    <div>

      <h3 className="font-bold text-2xl mb-6">
        Kategori Produk
      </h3>

      <div className="space-y-4 text-gray-700">

        <p>ITP Sheet</p>
        <p>Trashbag</p>
        <p>Amplop Lem</p>
        <p>Bag On Roll</p>

      </div>

    </div>

    {/* KOLOM 3 */}
    <div>

      <h3 className="font-bold text-2xl mb-6">
        Perusahaan
      </h3>

      <div className="space-y-4 text-gray-700">

        <p>Tentang Kami</p>
        <p>Hubungi Kami</p>
        <p>Minta Penawaran</p>

      </div>

    </div>

    {/* KOLOM 4 */}
    <div>

      <h3 className="font-bold text-2xl mb-6">
        Lainnya
      </h3>

      <div className="space-y-4 text-gray-700">

        <p>Help Center</p>
        <p>Syarat Ketentuan</p>
        <p>Kebijakan Privasi</p>

      </div>

    </div>

    {/* KOLOM 5 */}
    <div>

      <h3 className="font-bold text-2xl mb-6">
        Metode Pembayaran
      </h3>

      <div className="grid grid-cols-3 gap-4">

        <div className="bg-white rounded-2xl shadow p-4 flex items-center justify-center">
  <img
    src="/bca.png"
    alt="BCA"
    className="h-8 object-contain"
  />
</div>

        <div className="bg-white rounded-2xl shadow p-4 flex items-center justify-center">
  <img
    src="/mandiri.png"
    alt="MANDIRI"
    className="h-8 object-contain"
  />
</div>

        <div className="bg-white rounded-2xl shadow p-4 flex items-center justify-center">
  <img
    src="/BRI.png"
    alt="BRI"
    className="h-8 object-contain"
  />
</div>

        <div className="bg-white rounded-2xl shadow p-4 flex items-center justify-center">
  <img
    src="/bni.png"
    alt="BNI"
    className="h-8 object-contain"
  />
</div>

        <div className="bg-white rounded-2xl shadow p-4 flex items-center justify-center">
  <img
    src="/qris.png"
    alt="QRIS"
    className="h-8 object-contain"
  />
</div>

        <div className="bg-white rounded-2xl shadow p-4 flex items-center justify-center">
  <img
    src="/ovo.png"
    alt="OVO"
    className="h-8 object-contain"
  />
</div>

      </div>

      {/* QC */}
      <h3 className="font-bold text-2xl mt-12 mb-6">
        Quality Compliance
      </h3>

      <div className="w-24 h-24 rounded-full border-4 border-green-500 flex items-center justify-center font-bold text-green-600">
        QC
      </div>

    </div>

  </div>

  {/* COPYRIGHT */}
  <div className="border-t border-gray-300 mt-20 pt-8 text-center text-gray-600">
    © 2026 PT Primajaya Eratama. All Rights Reserved.
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