
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import img1 from "./../assets/img/new1.jpg"
import img2 from "./../assets/img/new2.jpg"
import img3 from "./../assets/img/new3.jpg"
import img4 from "./../assets/img/new4.jpg"

export default function Latest() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="md:w-full w-full">
      <motion.h1 className="md:text-7xl text-5xl w-full md:px-40 text-secondary2 md:text-start text-center mb:mb-16 mb-10 font-poppins font-bold"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        delay: 0.2,
        type: "spring",
        stiffness: 300,
        opacity: { duration: 1 },
        ease: "easeIn",
        duration: 1,
      }}
      >
        Terbaru
      </motion.h1>

      <motion.div className="relative w-11/12  md:ml-auto md:mx-0 mx-auto "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        delay: 0.4,
        type: "spring",
        stiffness: 300,
        opacity: { duration: 1 },
        ease: "easeIn",
        duration: 1,
      }}
      >

        <Carousel responsive={responsive} itemClass="carousel-item-padding-40-px"
        >
          <div className="  ">
            <div className="md:pr-14 pr-28 w-[450px] flex flex-col gap-5">
              <img
                src={img1}
                className="w-full"
                alt=""
              />
              <h1 className="md:text-2xl text-xl font-poppins font-semibold">
                Kegiatan Latihan Tamborin di GPDI Agape Matako
              </h1>
            </div>
          </div>
          <div className="  ">
            <div className="md:pr-14 pr-28 w-[450px] flex flex-col gap-5">
              <img
                src={img2}
                className="w-full"
                alt=""
              />
              <h1 className="md:text-2xl text-xl font-poppins font-semibold">
                Kerja Bakti di Lahan Perkebunan Pemuda Wilayah Tojo
              </h1>
            </div>
          </div>
          <div className="  ">
            <div className="md:pr-14 pr-28 w-[450px] flex flex-col gap-5">
              <img
                src={img3}
                className="w-full"
                alt=""
              />
              <h1 className="md:text-2xl text-xl font-poppins font-semibold">
                Ibadah Wilayah Pelprap Terakhir untuk tahun 2023 di GPDI Malewa
              </h1>
            </div>
          </div>
          <div className="  ">
            <div className="md:pr-14 pr-28 w-[450px] flex flex-col gap-5">
              <img
                src={img4}
                className="w-full"
                alt=""
              />
              <h1 className="md:text-2xl text-xl font-poppins font-semibold">
                Kegiatan "Sehari Sehat" Pemuda Wilayah Tojo di GPDI Agape Matako
              </h1>
            </div>
          </div>
        </Carousel>
      </motion.div>
    </div>
  );
}
