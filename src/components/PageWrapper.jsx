import { motion } from "framer-motion";
import Footer from "./Footer";

function PageWrapper({ children, showFooter = true }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {children}
      {showFooter && <Footer />}
    </motion.div>
  );
}

export default PageWrapper;