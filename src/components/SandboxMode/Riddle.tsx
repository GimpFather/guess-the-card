import { Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface RiddleProps {
  riddle: string[];
}

const Riddle = ({ riddle }: RiddleProps) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      gap={0.25}
    >
      <motion.div
        style={{ display: "flex", gap: "0.25rem" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {riddle.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Typography variant="h3">{line}</Typography>
          </motion.div>
        ))}
      </motion.div>
    </Stack>
  );
};

export default Riddle;
