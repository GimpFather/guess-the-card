import { Box, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { useIntl } from "react-intl";

const EmojiSliderRow = () => {
  const { breakpoints } = useTheme();
  const { formatMessage } = useIntl();
  const isMobile = useMediaQuery(breakpoints.down("md"));
  const textRef = useRef<HTMLDivElement>(null);
  const [textWidth, setTextWidth] = useState(0);

  const emojiText =
    formatMessage({ id: "HERO.EMOJI.TITLE.1" }) +
    formatMessage({ id: "HERO.EMOJI.TITLE.2" });

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, [emojiText]);

  return (
    <Box
      sx={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        width: "100%",
        position: "relative",
        height: isMobile ? "2rem" : "3rem",
      }}
    >
      <motion.div
        ref={textRef}
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          fontSize: isMobile ? "1.5rem" : "2rem",
          position: "absolute",
          willChange: "transform",
          visibility: "hidden",
        }}
      >
        {emojiText}
      </motion.div>
      <motion.div
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          fontSize: isMobile ? "1.5rem" : "2rem",
          position: "absolute",
          willChange: "transform",
        }}
        animate={{
          x: [0, -textWidth, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: isMobile ? 30 : 100,
          ease: "linear",
          times: [0, 0.5, 1],
        }}
      >
        {emojiText}
        {emojiText}
        {emojiText}
        {emojiText}
      </motion.div>
    </Box>
  );
};

export default EmojiSliderRow;
