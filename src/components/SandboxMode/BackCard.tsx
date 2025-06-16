import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import CursorFollower from "../General/CursorFollower";
import { useState, useCallback, memo } from "react";

interface BackCardProps {
  imgSrc: string;
  name: string;
}

interface MousePosition {
  x: number;
  y: number;
}

const CLASSIC_CARD_BACK =
  "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/556d677acbb31fececd42912cf003aabeb3bb6efb571bb43de83e6b763763f2c.png";

const cardContainerStyles: SxProps<Theme> = {
  position: "absolute",
  backfaceVisibility: "hidden",
  padding: 1.5,
  width: 325,
  height: 425,
  borderRadius: 4,
  overflow: "visible",
  cursor: "pointer",
  transition: "transform 0.1s ease-out",
};

const imageContainerStyles: SxProps<Theme> = {
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  borderRadius: 4,
};

const cursorFollowerStyles: SxProps<Theme> = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none",
};

const BackCard = memo(({ imgSrc, name }: BackCardProps) => {
  const [hovered, setHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  }, []);

  const handleMouseEnter = useCallback(() => setHovered(true), []);
  const handleMouseLeave = useCallback(() => setHovered(false), []);
  const handleClick = useCallback(() => {
    if (!isClicked) {
      setIsClicked(true);
    }
  }, [isClicked]);

  const transform =
    hovered && !isClicked
      ? `perspective(1000px) rotateX(${
          (mousePosition.y - 0.5) * -10
        }deg) rotateY(${(mousePosition.x - 0.5) * 10}deg)`
      : "perspective(1000px) rotateX(0) rotateY(0)";

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      sx={{
        ...cardContainerStyles,
        transform,
        cursor: isClicked ? "default" : "pointer",
      }}
    >
      <Box sx={imageContainerStyles}>
        <img
          src={isClicked ? imgSrc : CLASSIC_CARD_BACK}
          alt={name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box sx={cursorFollowerStyles}>
        <CursorFollower isActive={hovered && !isClicked} />
      </Box>
    </Box>
  );
});

export default BackCard;
