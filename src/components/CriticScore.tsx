import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let scoreColor = score > 85 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge
      colorScheme={scoreColor}
      borderRadius={"3px"}
      paddingX={2}
      fontSize={12}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
