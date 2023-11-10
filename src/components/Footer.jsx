import { BsYoutube } from "react-icons/Bs";
import { BiLogoInstagramAlt } from "react-icons/Bi";
import { FaFacebookSquare } from "react-icons/Fa";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

export default function Footer() {
  return (
    <div className="w-full md:px-20 px-10 pt-16 pb-8">
      <div className="mb-10 md:flex">
        <div className="text-5xl w-1/2 font-bold text-primary">
          <motion.div
            className="mb-10"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            Tojo Youth Community
          </motion.div>
          <div className="w-1/2 flex gap-5 text-2xl">
            <a href="" className="text-gray-300  gap-2 font-poppins">
              <motion.div
                className="border p-3 border-gray-700 hover:border-gray-300 transition-all delay-100  rounded-tl-[20px] rounded-br-[20px]"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0,
                  y: { type: "spring", stiffness: 200 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
              >
                <BiLogoInstagramAlt />
              </motion.div>
            </a>
            <a href="" className="text-gray-300  gap-2 font-poppins">
              <motion.div
                className="border p-3 border-gray-700 hover:border-gray-300 transition-all delay-100  rounded-tl-[20px] rounded-br-[20px]"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  y: { type: "spring", stiffness: 200 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
              >
                <BsYoutube />
              </motion.div>
            </a>
            <a href="" className="text-gray-300  gap-2 font-poppins">
              <motion.div
                className="border p-3 border-gray-700 hover:border-gray-300 transition-all delay-100  rounded-tl-[20px] rounded-br-[20px]"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.3,
                  y: { type: "spring", stiffness: 200 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
              >
                <FaFacebookSquare />
              </motion.div>
            </a>
          </div>
        </div>
        <div className="md:w-1/3 w-full text-lg text-gray-300 md:mt-0 mt-10">
          <div className="">
            <motion.p
              className="mb-5"
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
              Hubungi kami lebih lanjut! Dengan senang hati, kami akan membantu
              Anda semakin mengenal Tojo Youth Community.
            </motion.p>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
            >
              <Link to={`/kontak-kami`}>
                <Button gradientDuoTone="purpleToBlue">Contact Us</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="w-full md:flex"></div>
      <AnimatePresence>
        <motion.div
          className="flex justify-center items-center pt-16 text-gray-400 font-poppins text-md"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{
            delay: 0,
            type: "spring",
            stiffness: 100,
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          <p>© 2023 Tojo Youth Community.</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
