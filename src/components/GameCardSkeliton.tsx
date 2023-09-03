import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GameCardSkeliton = () => {
  return (
    <Card width={"230px"} borderRadius={12} overflow={"hidden"}>
      <Skeleton height={"200px"}></Skeleton>
      <SkeletonText></SkeletonText>
    </Card>
  );
};

export default GameCardSkeliton;
