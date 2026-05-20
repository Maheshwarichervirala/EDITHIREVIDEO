import { motion } from "framer-motion";

function FadeIn({ children, delay = 0, direction = "up" }) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up"   ?  30 : 0,
      x: direction === "left" ?  30 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;