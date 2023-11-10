import { Button } from "flowbite-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function Banner() {
  return (
    <div className="bg-mydark w-full h-[100vh] flex justify-center items-center">
      <div className="md:w-8/12 text-center ">
        <h1 className="md:text-4xl text-3xl text-blueWhite2 ">
          <motion.span
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
            Selamat Datang di Website
          </motion.span>{" "}
          <br />{" "}
          <motion.span
            className="font-bold font-poppins bg-gradient-to-r from-primary via-purple-500  to-blue-700   p-4 text-transparent bg-clip-text relative md:text-6xl text-5xl inline-flex mt-2 "
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
          </motion.span>
        </h1>
        <div className="relative z-10">
          <motion.div
          initial={{ x:100,opacity:0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          >
            <Link to={`/kontak-kami`}>
            <Button
              gradientDuoTone="purpleToBlue"
              className="mt-6 p-2 rounded-full mx-auto"
            >
              JOIN SEKARANG
            </Button></Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
