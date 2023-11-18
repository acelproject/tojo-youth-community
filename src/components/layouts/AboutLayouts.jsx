import CardAbout from "../fragments/CardAbout";
import GalleryLayouts from "./GalleryLayouts";
import { motion } from "framer-motion";

export default function AboutLayouts({}) {
  return (
    <div className="md:w-full w-12/12 md:mt-5 mt-0 md:mx-auto ">
      <div className="mx-auto md:w-10/12 w-12/12">
        <div className="flex justify-center text-center mb-3 w-12/12">
          <div className="p-5 md:w-10/12 w-full mx-auto">
            <motion.h2 className="text-3xl font-bold mb-2 text-secondary2"
            initial={{ opacity: 0 }}
            whileInView={{opacity: 1 }}
            transition={{
              delay: 0.3,
              type: "spring", stiffness: 60,
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            >Sejarah</motion.h2>
            <motion.p className="text-2xl  font-poppins text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{opacity: 1 }}
            transition={{
              delay: 0.5,
              type: "spring", stiffness: 300,
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            >
              "Atas karunia Tuhan Yesus, Tojo Youth Community berdiri
              pada tahun 2022. Di bawah kepemimpinan Pdt.Ruddy Lumimpah, S.Th Gembala Dari jemaat GPDI Agape Matako. <br /><br /> Kami
              berkumpul sebagai Pemuda Wilayah Tojo Khususnya wilayah tojo barat dalam upaya untuk membangun relasi antar Pemuda pemudi Gereja GPDI di Wilayah Tojo. <br /><br />Mulai dari memperkenalkan orang kepada Yesus Kristus
              dan kasih-Nya yang luar biasa,
              serta membangun generasi penerus;khuusnya pemuda pemudi kami bersyukur atas tuntunan dan penyediaan Tuhan selama
              ini, dan kami percayakan tahun-tahun yang akan datang di
              tangan-Nya sambil terus melayani Dia dan gereja-Nya."
            </motion.p>
          </div>
        </div>
        <div className="flex justify-center text-center mb-3 w-12/12">
          <CardAbout
            title="Visi & Misi"
            desc="Gereja lokal yang relevan dengan dampak global. Membangun generasi-generasi bintang yang berkenan kepada Allah dan dihormati manusia."
          />
        </div>
      </div>
      <GalleryLayouts>
        <GalleryLayouts.Header />
        <GalleryLayouts.Body />
      </GalleryLayouts>
    </div>
  );
}
