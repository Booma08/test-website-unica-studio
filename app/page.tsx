"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, easeInOut } from "framer-motion";

// Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easeInOut,
    },
  },
};

export default function Home() {
  return (
      <main className="min-h-screen bg-white text-black">
        {/* Landing Section */}
        <section className="flex items-center justify-center h-[100vh] bg-white">
          <div className="w-3/4 max-w-md">
            <Image
                src="/logo.svg"
                alt="Uncia Studio Logo"
                width={800}
                height={800}
                className="object-contain w-full h-auto"
            />
          </div>
        </section>

        {/* Grid Section */}
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-screen-lg mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px] md:auto-rows-[250px]"
        >
          {/* Présentation */}
          <motion.div
              variants={itemVariants}
              className="md:col-span-2 bg-black text-white rounded-2xl p-6 flex flex-col justify-between border border-gray-200 shadow transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_40px_rgba(0,0,0,0.4)]"
          >
            <div>
              <h2 className="text-2xl font-bold mb-2">Qui sommes-nous ?</h2>
              <p>
                Studio d’animation 3D spécialisé dans la création de contenus visuels dynamiques et immersifs pour les marques, studios et créateurs.
              </p>
            </div>
            <p className="text-sm text-gray-300 mt-4">Explorons de nouvelles dimensions.</p>
          </motion.div>

          {/* Image 1 */}
          <motion.div
              variants={itemVariants}
              className="relative w-full min-h-[200px] md:h-64 md:col-span-2 bg-gray-200 border border-gray-200 rounded-2xl overflow-hidden shadow-none hover:scale-[1.05] hover:shadow-[0_0_40px_rgba(0,0,0,0.08)] transition-all duration-300"
          >
            <Image
                src="/images/Leopard-Des-Neiges.png"
                alt="3D visuel"
                fill
                className="object-cover"
            />
          </motion.div>

          {/* Services */}
          <motion.div
              variants={itemVariants}
              id="services"
              className="md:col-span-1 rounded-2xl p-6 shadow-none hover:shadow-[0_0_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:scale-[1.05] transition-transform border border-gray-200"
          >
            <h3 className="text-xl font-semibold mb-2">Nos Services</h3>
            <ul className="text-sm space-y-1">
              <li>✔️ Animation 3D de personnages</li>
              <li>✔️ Motion design narratif</li>
              <li>✔️ Rendus cinématographiques</li>
              <li>✔️ Prévisualisation (previz)</li>
            </ul>
          </motion.div>

          {/* Portfolio CTA */}
          <motion.div
              variants={itemVariants}
              id="portfolio"
              className="bg-gray-100 border border-gray-200 rounded-2xl p-6 flex flex-col justify-between shadow-none hover:scale-[1.05] hover:shadow-[0_0_40px_rgba(0,0,0,0.08)] transition-all duration-300"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">Portfolio</h3>
              <p className="text-sm">Découvrez nos projets récents et notre univers visuel.</p>
            </div>
            <Link href="#portfolio" className="text-sm mt-4 text-blue-600 hover:underline">
              Voir les projets →
            </Link>
          </motion.div>

          {/* Image 2 */}
          <motion.div
              variants={itemVariants}
              className="relative w-full min-h-[200px] md:h-64 md:col-span-2 bg-gray-200 border border-gray-200 rounded-2xl overflow-hidden shadow-none hover:scale-[1.05] hover:shadow-[0_0_40px_rgba(0,0,0,0.08)] transition-all duration-300"
          >
            <Image
                src="/images/Snow-Leopard.jpg"
                alt="Portfolio 3D"
                fill
                className="object-cover"
            />
          </motion.div>

          {/* Image 3 */}
          <motion.div
              variants={itemVariants}
              className="relative w-full min-h-[200px] md:h-64 md:col-span-2 bg-gray-200 border border-gray-200 rounded-2xl overflow-hidden shadow-none hover:scale-[1.05] hover:shadow-[0_0_40px_rgba(0,0,0,0.08)] transition-all duration-300"
          >
            <Image
                src="/images/panthera-uncia.png"
                alt="Portfolio 3D"
                fill
                className="object-cover"
            />
          </motion.div>

          {/* Contact CTA */}
          <motion.div
              variants={itemVariants}
              className="md:col-span-2 bg-blue-600 text-white rounded-2xl p-6 flex flex-col justify-between hover:scale-[1.01] transition-transform border border-gray-200"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">Travaillons ensemble</h3>
              <p className="text-sm">
                Discutons de votre projet autour d’un appel ou d’un café visio ☕
              </p>
            </div>
            <Link
                href="/contact"
                className="inline-block bg-white text-blue-700 mt-4 py-2 px-4 rounded hover:bg-gray-200 text-sm w-fit"
            >
              Prendre rendez-vous
            </Link>
          </motion.div>
        </motion.div>
      </main>
  );
}
