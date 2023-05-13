import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

const sortOrders = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date Added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Release Date" },
  { value: "-metacritic", label: "Popularity" },
];

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
}
function SortSelector({ onSelectSortOrder }: Props) {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Order by : Relavence
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
