"use client";
// pages/index.tsx
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export default function Home() {

  return (
    <>
      <Head>
        <title>Uncia Studio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <style>{`body { font-family: 'Barlow', sans-serif; }`}</style>
      </Head>

      <main className="min-h-screen pt-28 p-6 bg-white text-black">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">Bienvenue chez Uncia Studio</h1>

        <div className="max-w-screen-lg mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {/* Présentation */}
          <div className="md:col-span-2 bg-black text-white rounded-2xl p-6 flex flex-col justify-between hover:scale-[1.01] transition-transform">
            <div>
              <h2 className="text-2xl font-bold mb-2">Qui sommes-nous ?</h2>
              <p>
                Studio danimation 3D spécialisé dans la création de contenus visuels dynamiques et immersifs pour les marques, studios et créateurs.
              </p>
            </div>
            <p className="text-sm text-gray-300 mt-4">Explorons de nouvelles dimensions.</p>
          </div>

          {/* Image */}
          <div className="md:col-span-2 bg-gray-200 rounded-2xl overflow-hidden">
            <Image
              src="/images/Leopard-Des-Neiges.png"
              alt="3D visuel"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Services */}
          <div id="services" className="bg-white border rounded-2xl p-6 shadow hover:shadow-md hover:scale-[1.01] transition-transform">
            <h3 className="text-xl font-semibold mb-2">Nos Services</h3>
            <ul className="text-sm space-y-1">
              <li>✔️ Animation 3D de personnages</li>
              <li>✔️ Motion design narratif</li>
              <li>✔️ Rendus cinématographiques</li>
              <li>✔️ Prévisualisation (previz)</li>
            </ul>
          </div>

          {/* Portfolio CTA */}
          <div id="portfolio" className="bg-gray-100 rounded-2xl p-6 flex flex-col justify-between hover:scale-[1.01] transition-transform">
            <div>
              <h3 className="text-xl font-semibold mb-2">Portfolio</h3>
              <p className="text-sm">Découvrez nos projets récents et notre univers visuel.</p>
            </div>
            <Link href="#portfolio" className="text-sm mt-4 text-blue-600 hover:underline">Voir les projets →</Link>
          </div>

          {/* Image */}
          <div className="bg-gray-200 rounded-2xl overflow-hidden">
            <Image
              src="images/Leopard-Des-Neiges.png"
              alt="Portfolio 3D"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Rendez-vous CTA */}
          <div className="md:col-span-2 bg-blue-600 text-white rounded-2xl p-6 flex flex-col justify-between hover:scale-[1.01] transition-transform">
            <div>
              <h3 className="text-xl font-semibold mb-2">Travaillons ensemble</h3>
              <p className="text-sm">Discutons de votre projet autour d’un appel ou d’un café visio ☕</p>
            </div>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-700 mt-4 py-2 px-4 rounded hover:bg-gray-200 text-sm w-fit"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
