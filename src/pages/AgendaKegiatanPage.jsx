import { useState } from "react";
import Navbar from "../components/Navbar";
import UpComming from "../components/Upcomming";
import Section from "../components/layouts/Section";
import Form from "../components/Form";
import { motion } from "framer-motion";
import LastEvent from "../components/LastEvent";

export default function AgendaKegiatanPage() {
  


  return (
    <>
      <Navbar type={`agenda`} />
      <Section bg={`bg-mydark`} padding={``} height={`md:h-[100vh] `}>
        {/* <div className="absolute h-full w-7/12 bg-mydark right-0 md:top-0 top-60 z-10 rounded-tl-[1000px]"></div> */}
        <div className="h-full w-full md:pt-20 md:pb-28 rounded-b-[100px] bg-white">
          <UpComming />
        </div>
      </Section>
      <Section bg={`bg-mydark`} padding={`md:pt-20 md:pb-24 pb-40`} height={``}>
        {/* <div className="absolute h-full w-5/12 bg-white left-0 z-10 rounded-br-[500px]"></div> */}

        <div className="md:w-full w-11/12 md:-mt-0 ">
          <LastEvent />
        </div>
      </Section>
      <Section bg={`bg-mydark z-10`} padding={``} height={`h-max`} id={"regis"}>
        {/* <div className="absolute right-0 h-full w-7/12 bg-white rounded-tl-[1000px]"></div> */}
        <div className="w-full h-full bg-white rounded-t-[100px] md:pt-20 md:pb-20 pt-20 pb-20 relative md:top-0 top-10">
          <div className="lg:w-10/12 w-11/12 text-center mx-auto">
            <motion.h1 className="text-4xl font-semibold text-primary mb-5"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            >
              Ikuti Kegiatan
            </motion.h1>
            <motion.p className="text-lg font-medium font-serif text-mydark w-90"
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
              Untuk bisa bergabung, mohon di isi formulir berikut ini.
            </motion.p>
            <Form />
          </div>
        </div>
      </Section>
    </>
  );
}
