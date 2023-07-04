import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

const GameCardSkeliton = ({ children }: { children: ReactNode }) => {
  return (
    <Box borderRadius={6} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardSkeliton;
