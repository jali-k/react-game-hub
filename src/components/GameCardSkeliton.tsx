import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeliton = () => {
  return (
    <Card>
      <Skeleton height={"200px"}></Skeleton>
      <SkeletonText></SkeletonText>
    </Card>
  );
};

export default GameCardSkeliton;
