import { motion } from "framer-motion";
import { useState } from "react";
import defaultImg from "./../assets/img/gall1.jpg"
import img2 from "./../assets/img/gall2.jpg"
import img3 from "./../assets/img/gall3.jpg"

export default function LastEvent (){

  const [upCommingImg, setUpCommingImg] = useState(
    defaultImg
  );
  const [cardUpCommingClick, setCardUpCommingClick] = useState(1);

  const handleClick = (id) => {
    setCardUpCommingClick(id);
    setUpCommingImg(`./src/assets/img/gall${id}.jpg`);
  };
    return(
        <>
        <div className="text-primary w-11/12 relative md:pt-0 pt-20 md:top-0 top-40  mx-auto text-center ">
            <h1 className="md:text-7xl text-2xl font-poppins font-bold">
              <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              >Kegiatan </motion.div><motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              >sebelumnya</motion.div>
            </h1>
          </div>
          <div className="md:w-10/12 w-11/12 flex md:flex-row flex-col md:gap-16 relative z-30 mx-auto md:top-20 top-52 pb-20">
            <motion.div className="md:w-1/2 w-full md:p-4 md:bg-primary md:rounded-none md:rounded-br-[50px] md:rounded-tl-[50px]"
            
            >
              {cardUpCommingClick===1 && (
                <motion.img
                initial={{scale:0, opacity: 0 }}
                whileInView={{scale:1, opacity: 1 }}
                transition={{
                  delay: 0,
                  type: "spring",
                  stiffness: 60,
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                  src={defaultImg}
                  className="w-full md:rounded-none md:rounded-br-[50px] md:rounded-tl-[50px] rounded-t-md"
                  alt=""
                />
              )}
              {cardUpCommingClick===2 && (
                <motion.img
                initial={{scale:0, opacity: 0 }}
                whileInView={{scale:1, opacity: 1 }}
                transition={{
                  delay: 0,
                  type: "spring",
                  stiffness: 60,
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                  src={img2}
                  className="w-full md:rounded-none md:rounded-br-[50px] md:rounded-tl-[50px] rounded-t-md"
                  alt=""
                />
              )}
              {cardUpCommingClick===3 && (
                <motion.img
                initial={{scale:0, opacity: 0 }}
                whileInView={{scale:1, opacity: 1 }}
                transition={{
                  delay: 0,
                  type: "spring",
                  stiffness: 60,
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                  src={img3}
                  className="w-full md:rounded-none md:rounded-br-[50px] md:rounded-tl-[50px] rounded-t-md"
                  alt=""
                />
              )}
            </motion.div>
            <div className="md:w-1/2 w-full flex flex-wrap md:flex-col mx-auto md:gap-5 gap-5 md:items-center md:justify-start">
              <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{
                 delay: 0.2,
                 type: "spring",
                 stiffness: 200,
                 opacity: { duration: 1 },
                 ease: "easeIn",
                 duration: 1,
               }}
                className={`py-3 px-5 shadow-lg border-l-[8px] md:block md:rounded-md  rounded-b-lg bg-white transition-all duration-150 ${
                  cardUpCommingClick === 1 ? "border-primary block" : "hidden"
                } cursor-pointer md:w-full w-full`}
                onClick={() => handleClick(1)}
              >
                <h1 className="text-xl font-poppins font-semibold mb-2">
                  Menanam kacang di lahan Kebun wilayah 1
                </h1>
                <p>
                  kegiatan menanam kacang pemuda GPDI di wilayah Tojo,dengan di
                  hadiri pengurus dan anggota-anggota pemuda wilayah
                </p>
              </motion.div>
              <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.4,
                type: "spring",
                stiffness: 200,
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
                className={`py-3 px-5 shadow-lg border-l-[8px] md:block md:rounded-md  rounded-b-lg bg-white transition-all duration-150 ${
                  cardUpCommingClick === 2 ? "border-primary block" : "hidden"
                } cursor-pointer md:w-full w-full`}
                onClick={() => handleClick(2)}
              >
                <h1 className="text-xl font-poppins font-semibold mb-2">
                  Menanam kacang di lahan Kebun wilayah 2
                </h1>
                <p>
                  kegiatan menanam kacang pemuda GPDI di wilayah Tojo,dengan di
                  hadiri pengurus dan anggota-anggota pemuda wilayah
                </p>
              </motion.div>
              <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.6,
                type: "spring",
                stiffness: 200,
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
                className={`py-3 px-5 shadow-lg border-l-[8px] md:block md:rounded-md  rounded-b-lg bg-white transition-all duration-150 ${
                  cardUpCommingClick === 3 ? "border-primary block" : "hidden"
                } cursor-pointer md:w-full w-full`}
                onClick={() => handleClick(3)}
              >
                <h1 className="text-xl font-poppins font-semibold mb-2">
                  Menanam kacang di lahan Kebun wilayah 3
                </h1>
                <p>
                  kegiatan menanam kacang pemuda GPDI di wilayah Tojo,dengan di
                  hadiri pengurus dan anggota-anggota pemuda wilayah
                </p>
              </motion.div>
            </div>

            {/* <div className="flex gap-10 mt-10 mx-auto md:hidden">
              <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 200,
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
                className="p-5 h-10 w-10 rounded-full flex justify-center items-center font-bold text-white bg-primary"
                onClick={() => handleClick(1)}
              >
                1
              </motion.div>
              <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.4,
                type: "spring",
                stiffness: 200,
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
                className="p-5 h-10 w-10 rounded-full flex justify-center items-center font-bold text-white bg-primary"
                onClick={() => handleClick(2)}
              >
                2
              </motion.div>
              <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.6,
                type: "spring",
                stiffness: 200,
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
                className="p-5 h-10 w-10 rounded-full flex justify-center items-center font-bold text-white bg-primary"
                onClick={() => handleClick(3)}
              >
                3
              </motion.div>
            </div> */}
          </div>
        </>
    )
}