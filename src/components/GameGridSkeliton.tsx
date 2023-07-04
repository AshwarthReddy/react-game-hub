import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameGridSkeliton = () => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default GameGridSkeliton;
