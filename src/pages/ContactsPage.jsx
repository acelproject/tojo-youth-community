import Navbar from "../components/Navbar";
import Input from "../components/elements/input/Input";
import TextArea from "../components/elements/input/TextArea";
import FormLayouts from "../components/layouts/FormLayouts";
import Section from "../components/layouts/Section";
import { MdLocalPhone} from "react-icons/md";
import {IoMdMail} from "react-icons/io";
import { GoLocation } from "react-icons/go";
import { motion } from "framer-motion";
import { Button } from "flowbite-react";

const location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127629.38164103616!2d120.84709306333497!3d-1.517959319241869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d8f019742ba0349%3A0x6d677fdf8a51c38a!2sMatako%2C%20Kec.%20Tojo%20Bar.%2C%20Kabupaten%20Tojo%20Una-Una%2C%20Sulawesi%20Tengah!5e0!3m2!1sid!2sid!4v1698817036067!5m2!1sid!2sid"

export default function ContactPage() {
  return (
    <>
      <Navbar type={`kontak`} />

      <Section bg={`bg-white`} padding={`md:py-20`} height={`h-[100vh]`}>
        <div className="md:w-10/12 w-11/12 md:mt-0 mt-14">
          <div className="text-center">
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
              Kontak Kami
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
              Berikan Pesan,Saran,tanggapan dan feedback anda pada kami.
            </motion.p>
          </div>
          <FormLayouts action={``}>
            <motion.div className="form-input my-4 "

            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,}}
            >
              <Input type="text" placeholder={`Nama Lengkap`} name={`nama`} />
            </motion.div>
            <motion.div className="form-input my-4 "
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            >
              <Input type="email" placeholder={`Email`} name={`email`} />
            </motion.div>
            <motion.div className="form-input my-4 "
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.8,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            >
              <TextArea
                type="text"
                placeholder={`Pesan, Saran, dan tanggapan`}
                name={`feedback`}
              />
            </motion.div>

            <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 1.6,
            type: "spring",
            stiffness: 300,
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          <Button
            gradientDuoTone="purpleToBlue"
            className="uppercase mt-8 py-2 px-6 w-5/12 mx-auto rounded-full"
          >
            Kirim
          </Button>
        </motion.div>
          </FormLayouts>
        </div>
      </Section>
      <Section bg={`bg-mydark`} padding={`py-20`} height={`md:h-[100vh]`}>
        <div className="md:w-10/12 w-11/12 md:flex justify-center gap-10 mx-auto">
          <div className="md:w-[60%] w-full bg-blue-500">
            <motion.div className="w-full"
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
              <iframe
                className="w-full"
                src={location}
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
          <div className="md:w-[40%] flex justify-center ">
            <motion.div className="bg-slate-900 p-10 rounded-lg w-full"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            >
              <div className="text-slate-300 flex flex-col gap-10 w-full h-max ">
                <div className="flex gap-5 w-full">
                  <div>
                    <IoMdMail className="md:text-2xl text-lg" />
                  </div>
                  <p className="font-poppins md:text-lg text-sm">
                    tojoyouthcommunity@gmail.com
                  </p>
                </div>
                <div className="flex gap-5 w-full">
                  <div>
                    <MdLocalPhone className="md:text-2xl text-lg" />
                  </div>
                  <p className="font-poppins md:text-lg text-sm">
                    +628 2293 3565 71
                  </p>
                </div>
                <div className="flex gap-5 w-full ">
                  <div>
                    <GoLocation className="md:text-2xl text-lg" />
                  </div>
                  <p className="font-poppins md:text-lg text-sm">
                    Gereja GPDI Agape, Desa Matako, Kec.Tojo Barat, Kab.Tojo
                    Una-una, sulawesi tengah.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
}
