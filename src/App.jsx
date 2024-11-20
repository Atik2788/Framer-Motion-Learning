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
      {/***************** 01. Div showing slowly using >>> motion.div/section >  gridContainerVariants,  gridSquireVariants********************/}
      <motion.section
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 gap-10 p-10"
      >
        {/************  02. Fade Up Start ***************/}
        <motion.div
          variants={gridSquireVariants}
          className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
        >
          <motion.div
            className="w-20 h-20 bg-stone-100 rounded-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          />
          <motion.div
            className="w-20 h-20 bg-stone-100 rounded-full"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          />
        </motion.div>
        {/************  02 Fade Up End ***************/}

        {/************  03. Animate div> scale, rotate, border-redious Start ***************/}
        <motion.div
          variants={gridSquireVariants}
          className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
        >
          <motion.div 
            className="w-1/3 h-1/3 shadow-md bg-rose-400"
            animate={{  
              scale: [1, 2, 2, 1],
              rotate: [0, 90, 90, 0],
              borderRadius:["10%", "10%", "50%", "10%"]
            }}
            transition={{duration: 5, ease: "easeOut", repeat: Infinity, repeatDelay: 1}}
            />
        </motion.div>
            {/************  03. Animate div> scale, rotate, border-redious End ***************/}

        <motion.div
          variants={gridSquireVariants}
          className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
        ></motion.div>

        <motion.div
          variants={gridSquireVariants}
          className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
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
