import { Button } from "flowbite-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import vidHero from "./../assets/vid-homepage.mp4";
export default function Banner() {
  return (
    <div className="bg-mydark relative w-full h-[100vh] flex justify-center items-center overflow-hidden">
      <div className="w-12/12 md:h-full h-[100vh] md:scale-110 scale-[3.5] absolute vid-banner">
        <video
          src={vidHero}
          className="md:h-full h-[100vh] w-full  -z-0"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className="md:w-8/12 text-center relative z-10">
        <h1 className="md:text-4xl text-2xl text-gray-300 ">
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
            <Link to={`/kontak-kami`}>
              <Button
                gradientDuoTone="purpleToBlue"
                className="mt-6 p-2 rounded-full mx-auto"
              >
                JOIN SEKARANG
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
