import { motion } from "framer-motion";

export default function TestDetail ({show,onClick,children}) {
    return <div className={`h-full flex justify-center items-center bg-primary ${show? '':'hidden'} fixed w-full top-0 left-0 z-[999]`}>
        {children}
    </div>;
  };
  