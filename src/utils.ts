type BackgroundGradientType = {
  intensity: 10 | 25 | 50 | 75 | 100;
  backgroundColor: string;
};

export const handleGradient = (
  color1: string,
  color2: string,
  color3: string
) => {
  return `linear-gradient(90deg, ${color1} 0%, ${color2} 35%, ${color3}) 100%`;
};

export const handleBackgroundGradient = ({
  intensity,
  backgroundColor,
}: BackgroundGradientType) => {
  switch (intensity) {
    case 10:
      return `linear-gradient(0deg, ${backgroundColor}1A 0%, ${backgroundColor}1A 100%), #FFF;`;
    case 25:
      return `linear-gradient(0deg, ${backgroundColor}40 0%, ${backgroundColor}40 100%), #FFF;`;
    case 50:
      return `linear-gradient(0deg, ${backgroundColor}7F 0%, ${backgroundColor}7F 100%), #FFF;`;
    case 75:
      return `linear-gradient(0deg, ${backgroundColor}BF 0%, ${backgroundColor}BF 100%), #FFF;`;
    case 100:
      return `linear-gradient(0deg, ${backgroundColor} 0%, ${backgroundColor} 100%), #FFF;`;
    default:
      return `linear-gradient(0deg, ${backgroundColor}40 0%, ${backgroundColor}40 100%), #FFF;`;
  }
};
