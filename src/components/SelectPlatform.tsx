import React from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDoubleDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatfroms";
import { Platform } from "../hooks/useGames";

interface onSelectPlatform {
  onSelectPlatform: (platfrom: Platform) => void;
  selectedPlatform: Platform | null;
}
const SelectPlatform = ({selectedPlatform, onSelectPlatform}: onSelectPlatform) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDoubleDown />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        { data.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}> {platform.name} </MenuItem>) }
      </MenuList>
    </Menu>
  );
};

export default SelectPlatform;
