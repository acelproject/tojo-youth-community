import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Section from "../components/layouts/Section";
import LineTitle from "../components/partials/LineTitle";
import AboutLayouts from "../components/layouts/AboutLayouts";
import SectionTitle from "../components/elements/SectionTitle";
import GalleryFoto from "../components/fragments/GalleryFoto";
import Footer from "../components/Footer";
import Latest from "../components/Latest";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <>
      <Navbar type={`beranda`} />
      <Banner />
      <Section >
        <div className="py-14 lg:w-full text-center w-12/12">
          <SectionTitle main={`Tentang`} secondary={`kami`} />
          <LineTitle color="bg-primary" />
          <AboutLayouts/>
        </div>
      </Section>
      <Section
        bg="bg-white"
        id={`gallery`}
        padding={`md:pt-5 md:mb-36 mb-20  py-5`}
      >
        <div className=" lg:w-full text-center">
          <SectionTitle
            main={`Gallery`}
            secondary={`foto`}
            color={`text-black`}
          />
          <LineTitle color="bg-primary" />
          <GalleryFoto />
        </div>
      </Section>
      <Section padding={`md:pb-24`}>
        <Latest />
      </Section>
      <Section bg="bg-white" id={`kutipan`} padding={`md:py-5 md:mb-36  py-16`}>
        <div className=" lg:w-full text-center">
          <SectionTitle
            main={`Kutipan`}
            secondary={`Rohani`}
            color={`text-mydark`}
          />
          <LineTitle color="bg-primary" />
          <div className=" text-gray-800 font-poppins md:w-10/12 mx-auto md:flex flex-wrap justify-center md:mt-20 gap-10 px-5 md:px-0">
            <motion.div
              className="bg-gray-200 md:w-[500px] flex md:flex-row flex-col p-5 mb-5 md:mb-0 rounded-md items-center justify-center"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 100,
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
            >
              <img
                src={`../src/assets/img/acel.png`}
                className="w-24 mx-auto md:mb-0  mb-5"
                alt=""
              />
              <div className="kutipan  text-center">
                <p>
                  "  Pergaulan yang buruk merusakkan kebiasaan yang baik. Janganlah tertipu: “Pergaulan yang buruk menghancurkan kebiasaan-kebiasaan yang baik.”
                </p>{" "}
                <br />
                <p className="font-semibold">- Marchel Lumimpah -</p>
              </div>
            </motion.div>
            <motion.div className="bg-gray-200 card-right md:w-[500px] flex md:flex-row flex-col p-5 mb-5 md:mb-0 rounded-md items-center justify-center"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.4,
              type: "spring",
              stiffness: 100,
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            >
              <div className="kutipan order-2 md:order-1">
                <p>
                  "Siapa yang mempunyai hikmat? Biarlah ia berpegang pada semuanya ini, dan memperhatikan segala kemurahan Tuhan." 
                </p>{" "}
                <br />
                <p className="font-semibold">- Marchel Lumimpah -</p>
              </div>
              <img
                src={`../src/assets/img/acel.png`}
                className="w-24 mx-auto md:order-2 order-1 md:mb-0  mb-5"
                alt=""
              />
            </motion.div>
            <motion.div className="bg-gray-200 card-right md:w-[500px] flex md:flex-row flex-col p-5 mb-5 md:mb-0 rounded-md items-center justify-center"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.6,
              type: "spring",
              stiffness: 100,
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            >
              <div className="kutipan order-2 md:order-1">
                <p>
                  " Permulaan hikmat adalah takut akan Tuhan, dan mengenal Yang Mahakudus adalah pengertian."
                </p>{" "}
                <br />
                <p className="font-semibold">- Marchel Lumimpah -</p>
              </div>
              <img
                src={`../src/assets/img/acel.png`}
                className="w-24 mx-auto md:order-2 order-1 md:mb-0  mb-5"
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </Section>
      <Section bg={`bg-mydark`} padding={``} id={`footer`}>
        <Footer />
      </Section>
    </>
  );
}
