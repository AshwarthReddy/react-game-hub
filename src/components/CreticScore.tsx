import { Badge } from "@chakra-ui/react";

const CreticScore = ({ score }: { score: number }) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge color={color} size="30px" borderRadius={3} paddingX={1}>
      {score}
    </Badge>
  );
};

export default CreticScore;
