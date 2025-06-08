import { Box, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import CARD_BACKS from "../../coreFiles/cardBacks";
import { useState } from "react";

const StackedCards = () => {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down("md"));

  const [hovered, setHovered] = useState(false);

  const getTransforms = (count: number, spread = 140, rotateSpread = 8) =>
    Array.from({ length: count }, (_, i) => {
      const middle = (count - 1) / 2;
      return {
        x: (i - middle) * spread,
        y: Math.abs(i - middle) * 10,
        scale: i === Math.floor(middle) ? (hovered ? 1.05 : 1) : 1,
        rotate: (i - middle) * rotateSpread,
        zIndex: i === Math.floor(middle) ? 10 : 5 - Math.abs(i - middle),
      };
    });

  const transforms = getTransforms(
    CARD_BACKS.length,
    hovered ? 150 : 100,
    hovered ? 16 : 8
  );

  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: "120px", sm: "260px", md: "320px" },
        height: { xs: "180px", sm: "340px", md: "420px" },
        margin: "auto",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {CARD_BACKS.map((card, index) => (
        <motion.div
          key={card.name}
          initial={transforms[index]}
          animate={!isMobile ? transforms[index] : {}}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: transforms[index]?.zIndex,
          }}
        >
          <img
            src={card.img}
            alt={card.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </motion.div>
      ))}
    </Box>
  );
};

export default StackedCards;
