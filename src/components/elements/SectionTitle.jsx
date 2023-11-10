import { motion } from "framer-motion";

export default function SectionTitle({ main, secondary, color }) {
  return (
    <motion.h1
      className={`md:text-5xl text-3xl font-bold ${color}`}
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.1,
        y: { type: "spring", stiffness: 100 },
        opacity: { duration: 1 },
        ease: "easeIn",
        duration: 1,
      }}
    >
      <span className="text-primary">{main} </span>
      {secondary}
    </motion.h1>
  );
}
