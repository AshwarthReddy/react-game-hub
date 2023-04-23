import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const PlatFormSelector = () => {
  const { data, error } = useGenres();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        PlatForms{" "}
      </MenuButton>
      <MenuList>
        {data?.map((i) => (
          <MenuItem key={i.id}>{i.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatFormSelector;
