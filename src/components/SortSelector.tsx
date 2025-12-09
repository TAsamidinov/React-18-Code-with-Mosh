import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDoubleDown } from 'react-icons/bs'

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDoubleDown />}>
        Order by Relevance
      </MenuButton>
      <MenuList>
        <MenuItem> Date </MenuItem>
        <MenuItem> Size </MenuItem>
        <MenuItem> Name </MenuItem>
        <MenuItem> History </MenuItem>
        
      </MenuList>
    </Menu>
  )
}

export default SortSelector
