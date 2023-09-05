import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";

interface Props {
  onOrderClick: (ordering: String) => void;
  selectedOrdering: String;
}

const sortOrders = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Release date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average rating" },
];

const SortSelector = ({ onOrderClick, selectedOrdering }: Props) => {
  const currentOrdering = sortOrders.find(
    (order) => order.value == selectedOrdering
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by: {currentOrdering?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((eachOrder) => (
          <MenuItem
            key={eachOrder.value}
            value={eachOrder.value}
            onClick={() => {
              onOrderClick(eachOrder.value);
            }}
          >
            {eachOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
