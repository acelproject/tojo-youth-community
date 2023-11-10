import GalleryBodySection from "./GalleryBodySection";
import { Card, Button } from "flowbite-react";
import { BsArrowRightShort } from "react-icons/Bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function GalleryLayouts({ children }) {
  return (
    <div className=" justify-start text-start md:pb-28 pb-20 md:mt-80 mt-72 bg-mydark relative left-0 w-12/12">
      {children}
    </div>
  );
}

const GalleryHeader = () => {
  return (
    <>
      <div className="md:flex w-full">
        <div className=" relative md:-top-56 -top-60 md:left-20 md:px-0 px-5 md:w-1/2 w-full ">
          <div className="mb-7 md:hidden ">
            <h1 className="font-poppins md:text-[100px] text-5xl font-extrabold text-gray-300 md:text-start md:mb-16">
              Our
            </h1>
            <h1 className="font-poppins md:text-[80px] text-5xl font-extrabold text-gray-300 md:ml-24">
              Gallery
            </h1>
          </div>
          <motion.img
            src={`../src/assets/img/main-gallery.jpg`}
            className="w-full"
            alt=""
            initial={{scale:0, opacity: 0 }}
            whileInView={{scale:1, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 100,
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          />
        </div>
        <div className="relative hidden md:left-36 md:-top-36 md:pt-3 -top-20 md:block flex-col justify-center items-center ">
          <motion.h1 className="font-poppins md:text-[100px] text-5xl font-extrabold text-gray-300 md:text-start md:mb-16"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          >
            Our
          </motion.h1>
          <motion.h1 className="font-poppins md:text-[80px] text-5xl font-extrabold text-gray-300 md:ml-24"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          >
            Gallery
          </motion.h1>
        </div>
      </div>
    </>
  );
};

const GalleryBody = () => {
  return (
    <>
      <GalleryBodySection
        title={`Pengurus Inti`}
        marginTop={`-mt-36 md:-mt-24`}
      >
        <motion.div className="teams md:w-36 md:h-36 w-40 h-40  overflow-hidden flex justify-center items-center bg-secondary2 p-3 rounded-full relative shadow-lg shadow-secondary2  "
        initial={{ scale:0, opacity: 0 }}
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
            className=" object-cover object-center absolute top-0"
            alt=""
          />
        </motion.div>
        <motion.div className="teams md:w-36 md:h-36 w-40 h-40  overflow-hidden flex justify-center items-center bg-secondary2 p-3 rounded-full relative shadow-lg shadow-secondary2  "
        initial={{ scale:0, opacity: 0 }}
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
          <img
            src={`../src/assets/img/acel.png`}
            className=" object-cover object-center absolute top-0"
            alt=""
          />
        </motion.div>
        <motion.div className="teams md:w-36 md:h-36 w-40 h-40  overflow-hidden flex justify-center items-center bg-secondary2 p-3 rounded-full relative shadow-lg shadow-secondary2  "
        initial={{ scale:0, opacity: 0 }}
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
          <img
            src={`../src/assets/img/acel.png`}
            className=" object-cover object-center absolute top-0"
            alt=""
          />
        </motion.div>
      </GalleryBodySection>

      <GalleryBodySection title={`Kegiatan`} marginTop={`mt-28 md:mt-48`}>
        <div className="flex flex-wrap justify-center md:gap-10 gap-5 mx-5  h-max">
          <motion.div 
          className="md:w-1/4 w-full "
          initial={{ scale:0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
              delay: 0,
              type: "spring",
              stiffness: 100,
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          >
          <Card
            imgAlt="Kerja Bakti, menanam Kacang di lahan perkebunan pelprap wilayah"
            imgSrc="../src/assets/img/gall1.jpg"
            className="border-2 border-secondary2 shadow-secondary2 shadow-lg rounded-xl"
          >
            <div className="font-normal text-gray-700 dark:text-gray-400">
              <p>26 Oktober 2023</p>
            </div>
            <h5 className="text-lg  font-bold font-poppins  text-gray-900 dark:text-white">
              <p>
                Kerja Bakti, menanam Kacang di lahan perkebunan pelprap wilayah
              </p>
            </h5>
          </Card>
          </motion.div>
          <motion.div className="md:w-1/4 w-full "
           initial={{ scale:0, opacity: 0 }}
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
          <Card
            imgAlt="Kerja Bakti, menanam Kacang di lahan perkebunan pelprap wilayah"
            imgSrc="../src/assets/img/gall2.jpg"
            className="border-2 h-full border-secondary2 shadow-secondary2 shadow-lg rounded-xl"
          >
            <div className="font-normal text-gray-700 dark:text-gray-400">
              <p>26 Oktober 2023</p>
            </div>
            <h5 className="text-lg  font-bold font-poppins  text-gray-900 dark:text-white">
              <p>Kerja Bakti, Mebersikan lahan perkebunan wilayah</p>
            </h5>
          </Card>
          </motion.div>
          <motion.div className="md:w-1/4 w-full "
           initial={{ scale:0, opacity: 0 }}
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
          <Card
            imgAlt="Kerja Bakti, menanam Kacang di lahan perkebunan pelprap wilayah"
            imgSrc="../src/assets/img/kegiatan3.jpg"
            className="border-2 h-full border-secondary2 shadow-secondary2 shadow-lg rounded-xl"
          >
            <div className="font-normal text-gray-700 dark:text-gray-400">
              <p>26 Oktober 2023</p>
            </div>
            <h5 className="text-lg  font-bold font-poppins  text-gray-900 dark:text-white">
              <p>
                Ibadah Pemuda wilayah Tojo Barat di GPDI Gandalari
              </p>
            </h5>
          </Card>
          </motion.div>
        </div>
        <div className="md:mt-10">
          <Link to={"/agenda-kegiatan"}>
            <Button gradientDuoTone="purpleToBlue">
              <p>Lebih lengkap</p>
              <BsArrowRightShort className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </GalleryBodySection>
    </>
  );
};

GalleryLayouts.Header = GalleryHeader;
GalleryLayouts.Body = GalleryBody;
