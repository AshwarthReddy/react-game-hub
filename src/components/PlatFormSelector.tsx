import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { PaltForm } from "../hooks/usePlatForms";

interface Props {
  selectedPlatForm: (platForm: PaltForm) => void;
}

const PlatFormSelector = ({ selectedPlatForm }: Props) => {
  const { data, error } = useGenres();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        PlatForms{" "}
      </MenuButton>
      <MenuList>
        {data?.map((i) => (
          <MenuItem onClick={() => selectedPlatForm(i)} key={i.id}>
            {i.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatFormSelector;
