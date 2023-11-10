import { BsArrowRightShort } from "react-icons/bs";
import { motion } from "framer-motion";
import TestDetail from "./elements/detail";
import { useState } from "react";


export default function UpComming() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="md:w-10/12 w-11/12  my-auto md:flex justify-between relative z-20 md:top-0 top-36 mx-auto ">
        <div className="text-center md:w-1/2 w-full flex items-start justify-center flex-col gap-5 md:mb-0 mb-12">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-primary font-poppins md:text-6xl text-4xl  font-bold text-start"
          >
            Kegiatan <br /> Mendatang
          </motion.h1>
          <div className=" flex items-center gap-5">
            <motion.p
              className="md:text-4xl text-xl font-semibold text-secondary2"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
            >
              Ikuti Kegiatan
            </motion.p>
            <motion.a
              className={`md:p-5 relative p-2 border ${
                show ? "border-transparent" : "border-gray-400"
              } rounded-full overflow-hidden`}
              onClick={() => setShow(!show)}
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
              initial={{  opacity: 0 }}
              whileInView={{  opacity: 1 }}
              transition={{
                delay: 0.7,
                type: "spring",
                stiffness: 100,
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              href="#regis"
            >
              <motion.div
                className={`w-full absolute transition-all duration-200  -z-40 top-0 h-full rounded-full bg-primary ${
                  show ? "translate-x-[-20px]" : "translate-x-[-90px]"
                }`}
              ></motion.div>
              <div className="relative z-50">
                <BsArrowRightShort
                  className={`text-3xl transition-all  z-40 ${
                    show ? "text-white" : "text-primary"
                  }`}
                />
              </div>
            </motion.a>
          </div>
        </div>
        <motion.div className="md:w-[40%] h-max w-full p-5 bg-primary  rounded-tr-[50px] rounded-bl-[50px] overflow-hidden"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        >
          <div className="text-center w-full flex flex-col  gap-5 rounded-tr-[50px] rounded-bl-[50px] overflow-hidden">
            <div className="bg-white w-full h-max rounded-md text-start py-5 px-10"
            
            >
              <h1 className="font-semibold text-lg font-poppins text-gray-700">
                Ibadah Natal Wilayah Umum 
              </h1>
              <p className="italic text-gray-500 text-sm font-medium">
                12 Desember 2023
              </p>
              <p className=" text-secondary2">
                Ibadah natal yang dihadiri oleh seluru jemaat GPDI di wilayah tojo.
              </p>
            </div>
            <div className="bg-white w-full h-max rounded-md text-start py-5 px-10">
              <h1 className="font-semibold text-lg font-poppins text-gray-700">
                Ibadah Natal Tojo Youth Community
              </h1>
              <p className="italic text-gray-500 text-sm font-medium">
                17 Desember 2023
              </p>
              <p className=" text-secondary2">
                Ibadah natal yang dihadiri oleh seluru anggota Tojo Youth comunity.
              </p>
            </div>
            <div className="bg-white w-full h-max rounded-md text-start py-5 px-10">
              <h1 className="font-semibold text-lg font-poppins text-gray-700">
                Tahun Baru bersama
              </h1>
              <p className="italic text-gray-500 text-sm font-medium">
                3 February 2024
              </p>
              <p className=" text-secondary2">
                Perayaan tahun baru oleh seluruh anggota tojo youth comunity,yang dirangkaikan dengan ibadah tahun baru dan acara santai lainnya
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
