import { useState } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";


import img1 from "../../assets/img/gallery1.jpg"
import img2 from "../../assets/img/gallery2.jpg"
import img3 from "../../assets/img/gallery3.jpg"
import img4 from "../../assets/img/gallery4.jpg"
import img5 from "../../assets/img/gallery5.jpg"
import img6 from "../../assets/img/gall1.jpg"

const imgs =[
  {
    img : img1,
    delayAnimate :0.2
  },
  {
    img : img2,
    delayAnimate :0.4
  },
  {
    img : img3,
    delayAnimate :0.6
  },
  {
    img : img4,
    delayAnimate :0.8
  },
  {
    img : img5,
    delayAnimate :1
  },
  {
    img : img6,
    delayAnimate :1.2
  },
]

export default function GalleryFoto() {
  return (
    <>
      <div className="gallery md:flex flex-wrap w-10/12 rounded-br-[80px] rounded-tl-[80px] overflow-hidden mx-auto mt-12">
        
        {imgs.map((img)=>(
          <motion.div
          className=" md:w-1/3 "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: img.delayAnimate,
            type: "spring",
            stiffness: 300,
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          <Gallery img={img.img}/>
        </motion.div>
        ))}
      </div>
    </>
  );
}

const GalleryFotoDetail = ({ img, detailShow, onCloseDetail }) => {
  return (
    <div
      className={`fixed ${
        detailShow ? "" : "hidden"
      } top-0 left-0 h-[100vh] md:w-full w-full overflow-hidden bg-black z-[9999] flex justify-center items-center `}
    >
      <AnimatePresence>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0 ,opacity: 0 }}
          transition={{
            delay: 0,
            type: "spring",
            stiffness: 100,
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="bg-white md:w-7/12 w-9/12 mx-auto relative"
          >
          <img src={img} className="w-full" alt="" />
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={onCloseDetail}
            className="absolute -top-5 -right-5 z-40 bg-red-600 p-5 rounded-full flex justify-center items-center"
          >
            <div className="absolute text-white font-poppins font-bold">x</div>
          </motion.button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};




function Gallery({ img,gallery, category, title, onClick }) {
  const [isShown, setIsShown] = useState(false);
  const [detailShow, setDetailShow] = useState(false);

  const closeDetailHandle = () => {
    setDetailShow(!detailShow);
  };

  return (
    <>
      <div
        className="img-wrap relative w-full h-60 flex justify-center items-center cursor-pointer"
        onClick={() => setDetailShow(!detailShow)}
      >
        <img src={img} alt="" className="w-full h-full"/>
        <div
          className="desc flex justify-center items-center text-center"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          {isShown && (
            <div className={`absolute text-center`}>
              <span className="text-md uppercase font-bold text-gray-200">
                <p>kerja bakti</p>
              </span>
              <p className="text-2xl font-serif font-medium text-white">{`Example`}</p>
            </div>
          )}
        </div>
      </div>
      <div className="relative w-full">
      <GalleryFotoDetail
        img={img}
        detailShow={detailShow}
        onCloseDetail={closeDetailHandle}
      />
      </div>
    </>
  );
}
