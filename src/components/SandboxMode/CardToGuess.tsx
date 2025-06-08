import { Box, Stack } from "@mui/material";
import { motion } from "framer-motion";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";

interface CardToGuessProps {
  numberOfEmojies: number;
  guessed: boolean;
  backCardImg: string;
  frontCardImg: string;
  name: string;
}

const CardToGuess = ({
  numberOfEmojies,
  guessed,
  backCardImg,
  frontCardImg,
  name,
}: CardToGuessProps) => {
  return (
    <motion.div exit={{ opacity: 0, scale: 0 }}>
      <Stack
        direction="row"
        justifyContent="center"
        gap={2}
        component={motion.div}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: numberOfEmojies * 0.2 }}
      >
        <Box
          sx={{
            perspective: "1000px",
            width: 325,
            height: 425,
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotateY: guessed ? 180 : 0,
            }}
            transition={{
              duration: 0.6,
              type: "spring",
            }}
            style={{
              transformStyle: "preserve-3d",
              position: "relative",
            }}
          >
            <FrontCard imgSrc={frontCardImg} name={name} />
            <BackCard imgSrc={backCardImg} name={name} />
          </motion.div>
        </Box>
      </Stack>
    </motion.div>
  );
};

export default CardToGuess;
