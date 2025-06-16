import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { FormattedMessage } from "react-intl";

interface CursorFollowerProps {
  isActive: boolean;
}

const CursorFollower = ({ isActive }: CursorFollowerProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    if (isActive) {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setPosition({
          x: rect.width / 2,
          y: rect.height / 2,
        });
      }
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isActive]);

  return (
    <AnimatePresence>
      {isActive && (
        <Box
          ref={containerRef}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              pointerEvents: "none",
              zIndex: 10000,
            }}
          >
            <motion.div
              initial={position}
              animate={position}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 200,
                mass: 0.5,
              }}
            >
              <Typography
                variant="body2"
                color="white"
                sx={{
                  background: "rgba(0, 0, 0, 0.85)",
                  padding: 2,
                  borderRadius: 6,
                  whiteSpace: "nowrap",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <FormattedMessage id="CURSOR_FOLLOWER.SHOW_ME_EXPANSION" />
              </Typography>
            </motion.div>
          </motion.div>
        </Box>
      )}
    </AnimatePresence>
  );
};

export default CursorFollower;
