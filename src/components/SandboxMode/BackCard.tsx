import { Box } from "@mui/material";

interface BackCardProps {
  imgSrc: string;
  name: string;
}

const BackCard = ({ imgSrc, name }: BackCardProps) => {
  return (
    <Box
      sx={{
        position: "absolute",
        backfaceVisibility: "hidden",
        padding: 1.5,
        width: 325,
        height: 425,
        borderRadius: 4,
        overflow: "hidden",
      }}
    >
      <img
        src={imgSrc}
        alt={name}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </Box>
  );
};

export default BackCard;
