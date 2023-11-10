import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { CiMobile2 } from "react-icons/Ci";
import { Button } from "flowbite-react";
import Input from "./elements/input/Input";
import FormLayouts from "./layouts/FormLayouts";
import { motion } from "framer-motion";

export default function Form({}) {
  const [dissabled, setDissabled] = useState(false);
  const inputRef = useRef("inputref");
  useEffect(() => {
    if (inputRef.value === "") {
      setDissabled(true);
    } else {
      setDissabled(false);
    }
  }, []);

  const klikdisabled = () => {
    alert("ok");
  };
  return (
    <>
      <FormLayouts action={``}>
        <motion.div
          className="form-input my-4 "
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          <Input type="text" placeholder={`Nama Lengkap`} name={`name`} />
        </motion.div>
        <motion.div
          className="form-input my-4 "
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
          <Input type={`text`} placeholder={`Email address`} name={`email`} />
        </motion.div>
        <motion.div
          className="form-input my-4 "
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
          <Input type={`number`} placeholder={`Phone number`} name={`phone`} />
        </motion.div>

        <motion.div
          className="form-input my-4"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 1,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          <select
            name="wilayah"
            id="wilayah"
            className="border w-full text-mydark placeholder:font-serif placeholder:text-lg border-none py-4 px-6 rounded-md bg-gray-300"
          >
            <option value="">Wilayah</option>
            <option value="">Matako</option>
            <option value="">Gandalari</option>
            <option value="">Malino</option>
          </select>
        </motion.div>
        <motion.div
          className="form-input my-4"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 1.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          <select
            name="gereja"
            id="gereja"
            className="border w-full text-mydark placeholder:font-serif placeholder:text-lg border-none py-4 px-6 rounded-md bg-gray-300"
          >
            <option value="">Gereja</option>
            <option value="">GPDI Agape Matako</option>
            <option value="">GPDI Gandalari</option>
            <option value="">GPDI Petra Malino</option>
          </select>
        </motion.div>
        <motion.div
          className="form-input my-4"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 1.4,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          <select
            name="gembala"
            id="gembala"
            className="border w-full text-mydark placeholder:font-serif placeholder:text-lg border-none py-4 px-6 rounded-md bg-gray-300"
          >
            <option value="">Gembala</option>
            <option value="">Pdt.Ruddy Lumimpah, S.th</option>
            <option value="">Pdt. , S.th</option>
            <option value="">Pdt.Denny, S.th</option>
          </select>
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
            className="uppercase mt-8 py-4 px-6 w-full rounded-full"
          >
            Kirim
          </Button>
        </motion.div>

        <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 1.8,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        >
        <span className="inline-flex mx-auto text-4xl text-gray-500 mt-8">
          <CiMobile2 />
        </span>
        <div className="text-lg font-serif text-gray-700">
          +62 822 9335 6571
        </div>
        </motion.div>

        
      </FormLayouts>
    </>
  );
}
