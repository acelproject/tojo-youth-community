import {motion} from "framer-motion"

export default function LineTitle({ color }) {
  return (
    <>
      <motion.div
        className={`line h-1 w-16 my-4 rounded-full ${color} mx-auto`}
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 100 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
      ></motion.div>
    </>
  );
}
