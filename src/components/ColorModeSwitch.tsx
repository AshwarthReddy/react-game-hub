import { HStack, Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="red"
        size="md"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      >
        {" "}
        Dark Mode
      </Switch>
    </HStack>
  );
};
export default ColorModeSwitch;
