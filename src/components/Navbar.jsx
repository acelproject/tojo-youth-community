import { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import brandImg from "../../src/assets/img/logo.jpg"

let tabs = [
  {
    id: 1,
    label: "Beranda",
    href: "/",
    delayAnimated: 0,
    navType: "beranda",
  },
  {
    id: 2,
    label: "Agenda & Kegiatan",
    href: "/agenda-kegiatan",
    delayAnimated: 0.1,
    navType: "agenda",
  },
  {
    id: 3,
    label: "Kontak Kami",
    href: "/kontak-kami",
    delayAnimated: 0.2,
    navType: "kontak",
  },
];

export default function Navbar({ type }) {
  const [openBars, setOpenBars] = useState(false);
  const [onScroll, setOnScroll] = useState(false);

  const [activTab, setActiveTab] = useState(type);

  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 0) {
      setOnScroll(true);
    } else {
      setOnScroll(false);
    }
  });

  const handelOpenBars = () => {
    setOpenBars(!openBars);
  };
  return (
    <nav
      className={`fixed z-50 top-0 w-[100%] transition ease-in-out duration-300  ${
        onScroll ? "bg-white shadow-xl" : ""
      }`}
    >
      <div
        className={`flex  ${
          type === "agenda" ? "md:justify-start" : ""
        } justify-between items-center md:px-24 px-10 py-2`}
      >
        <div
          className={`logo relative  md:flex md:items-center transition-all ease-in-out duration-300 ${
            onScroll ? "md:top-0  top-0 " : "md:top-3 top-4"
          }`}
        >
          <img
            src={brandImg}
            className={`md:rounded-ss-[23px] rounded-ss-[17px] md:rounded-ee-[23px] rounded-ee-[17px] transition-all ease-in-out duration-300  ${
              onScroll
                ? "md:w-16 w-12 shadow-md border border-gray-200"
                : "md:w-20 w-16"
            }`}
            alt=""
          />
        </div>
        <div
          className={`md:flex md:-translate-x-0 transition block md:static absolute md:bg-transparent bg-primary  top-28 rounded-e-xl ${
            openBars ? "-translate-x-10" : "-translate-x-[340px]"
          }`}
        >
          <ul
            className={`md:flex gap-5 md:p-0 pt-20 px-10 ${ 
              type === "agenda" ? " ml-10" : "ml-0"
            }`}
          >
            {tabs.map((tab) => (
              <motion.li
                key={tab.id}
                className="text-md font-semibold md:mb-0 mb-20 relative px-4 py-1"
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: tab.delayAnimated,
                  y: { type: "spring", stiffness: 200 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
              >
                <Link
                  to={tab.href}
                  onClick={() => setActiveTab(tab.navType)}
                  className={` md:hover:text-primary text-white ${type===tab.navType? 'md:hover:text-white md:text-white':'md:text-gray-400'} transition-all duration-150 `}
                >
                  {activTab === tab.navType && (
                    <motion.div
                      layoutId="bubble"
                      className="absolute inset-0 bg-primary rounded-full -z-10"
                      transition={{ type: "spring", duration: 0.6 }}
                    ></motion.div>
                  )}
                  {tab.label}
                </Link>
              </motion.li>
            ))}
            {/* <motion.li
              className="text-md font-semibold md:mb-0 mb-20"
              initial={{ y: -30 ,opacity:0}}
              whileInView={{ y: 0 ,opacity:1}}
              transition={{
                delay: 0,
                y: { type: "spring", stiffness: 200 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
            >
              <Link
                to={`/`}
                className={`md:text-primary text-white  ${
                  onScroll ? "after:bg-primary" : "after:bg-primary"
                }`}
              >
                Beranda
              </Link>
            </motion.li>
            <motion.li className="text-md font-semibold md:mb-0 mb-20"
            initial={{ y: -30 ,opacity:0}}
            whileInView={{ y: 0 ,opacity:1}}
            transition={{
              delay: 0.1,
              y: { type: "spring", stiffness: 200 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            >
              <Link
                to={`/agenda-kegiatan`}
                className={`md:text-primary text-white  ${
                  onScroll ? "after:bg-primary" : "after:bg-primary"
                }`}
              >
                Agenda & Kegiatan
              </Link>
            </motion.li>
            <motion.li className="text-md font-semibold md:mb-0 mb-20"
            initial={{ y: -30 ,opacity:0}}
            whileInView={{ y: 0 ,opacity:1}}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 200 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            >
              <Link
                to={`/kontak-kami`}
                className={`md:text-primary text-white  ${
                  onScroll ? "after:bg-primary" : "after:bg-primary"
                }`}
              >
                Hubungi Kami
              </Link>
            </motion.li> */}
          </ul>
        </div>
        <div className=" md:hidden relative">
          <HiBars3BottomRight
            className={` text-5xl ${
              onScroll ? "text-primary" : "text-primary"
            }`}
            onClick={handelOpenBars}
          />
        </div>
      </div>
    </nav>
  );
}
