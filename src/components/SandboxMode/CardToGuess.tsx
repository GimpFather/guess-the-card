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
  mode: string | null;
}

const CardToGuess = ({
  numberOfEmojies,
  guessed,
  backCardImg,
  frontCardImg,
  name,
  mode,
}: CardToGuessProps) => {
  const isChallenge = mode === "challenge";
  const CLASSIC_CARD_BACK =
    "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/556d677acbb31fececd42912cf003aabeb3bb6efb571bb43de83e6b763763f2c.png";

  const cardTail = isChallenge ? CLASSIC_CARD_BACK : backCardImg;

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
            <BackCard imgSrc={cardTail} name={name} />
          </motion.div>
        </Box>
      </Stack>
    </motion.div>
  );
};

export default CardToGuess;
