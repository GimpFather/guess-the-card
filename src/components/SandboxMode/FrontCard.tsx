import { Box } from "@mui/material";

interface FrontCardProps {
  imgSrc: string;
  name: string;
}

const FrontCard = ({ imgSrc, name }: FrontCardProps) => {
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
        transform: "rotateY(180deg)",
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

export default FrontCard;
