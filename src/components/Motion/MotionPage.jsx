import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MotionPage({ children, id, ...props }) {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    if (header && footer) {
      setHeaderHeight(header.getBoundingClientRect().height);
      setFooterHeight(footer.getBoundingClientRect().height);
    }
  }, []);

  return (
    <AnimatePresence mode='exit'>
      <motion.section
        key={id}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={{ ease: "easeInOut", duration: 1, delayChildren: 0.5 }}
        {...props}
        style={{
          minHeight: `calc(100vh - ${headerHeight}px - ${footerHeight}px)`,
        }}>
        {children}
      </motion.section>
    </AnimatePresence>
  );
}
