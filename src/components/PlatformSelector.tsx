import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import { Platform } from "../hooks/useGames";

interface Props {
  onPlatformSelect: (platfoorm: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onPlatformSelect, selectedPlatform }: Props) => {
  const { data } = usePlatform();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform?.name : "Platform"}
      </MenuButton>
      <MenuList>
        {data.map((eachPlatform) => (
          <MenuItem
            onClick={() => {
              onPlatformSelect(eachPlatform);
            }}
            key={eachPlatform.id}
          >
            {eachPlatform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
