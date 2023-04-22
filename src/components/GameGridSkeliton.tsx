import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameGridSkeliton = () => {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default GameGridSkeliton;
