import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function MotionPage({ children, ...props }) {
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
    <motion.section
      initial={{ opacity: 0, y: "50%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      {...props}
      style={{
        minHeight: `calc(100vh - ${headerHeight}px - ${footerHeight}px)`,
      }}>
      {children}
    </motion.section>
  );
}
