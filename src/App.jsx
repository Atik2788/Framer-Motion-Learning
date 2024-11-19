import { motion } from "framer-motion";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const gridSquireVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const App = () => {
  return (
    <div className="fex fex-col gap-10 overflow-auto">
      <motion.section
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 gap-10 p-10"
      >
        <motion.div
          variants={gridSquireVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center items-center gap-10"
        ></motion.div>

        <motion.div
          variants={gridSquireVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center items-center gap-10"
        ></motion.div>

        <motion.div
          variants={gridSquireVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center items-center gap-10"
        ></motion.div>
        
        <motion.div
          variants={gridSquireVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center items-center gap-10"
        ></motion.div>

        <motion.div
          variants={gridSquireVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center items-center gap-10"
        ></motion.div>

        <motion.div
          variants={gridSquireVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center items-center gap-10"
        ></motion.div>

      </motion.section>
    </div>
  );
};

export default App;
