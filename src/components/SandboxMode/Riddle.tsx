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
      {riddle.map((line, index) => (
        <Typography
          component={motion.div}
          key={index}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          variant="h3"
        >
          {line}
        </Typography>
      ))}
    </Stack>
  );
};

export default Riddle;
