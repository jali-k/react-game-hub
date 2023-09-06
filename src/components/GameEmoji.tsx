import thumbsUp from "../assets/thumbsUp.jpg";
import bullsEye from "../assets/bullsEye.png";
import star from "../assets/start.jpg";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}
const GameEmoji = ({ rating }: Props) => {
  if (rating < 3) return;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: thumbsUp, alt: "thumbsup" },
    4: { src: bullsEye, alt: "bulls eye" },
    5: { src: star, alt: "star" },
  };

  return <Image {...emojiMap[rating]} boxSize="25px" />;
};

export default GameEmoji;
