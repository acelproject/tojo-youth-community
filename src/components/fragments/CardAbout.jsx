import { motion } from "framer-motion";
export default function CardAbout({ title, desc }) {
  return (
    <div className="p-5 md:w-6/12 w-full">
      <motion.h2 className="text-3xl font-bold mb-2 text-secondary2"
      initial={{ opacity: 0 }}
      whileInView={{opacity: 1 }}
      transition={{
        delay: 0.3,
        type: "spring", stiffness: 60,
        opacity: { duration: 1 },
        ease: "easeIn",
        duration: 1,
      }}
      >{title}</motion.h2>
      <motion.p className="text-2xl  font-poppins text-gray-500"
      initial={{ opacity: 0 }}
      whileInView={{opacity: 1 }}
      transition={{
        delay: 0.5,
        type: "spring", stiffness: 300,
        opacity: { duration: 1 },
        ease: "easeIn",
        duration: 1,
      }}
      >{desc}</motion.p>
    </div>
  );
}
