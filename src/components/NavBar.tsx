import { ColorModeContext, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import { px } from 'framer-motion'
import SearchInput from './SearchInput'
import { CiSearch } from "react-icons/ci";

interface Props {
  onSearch: (searchText: string) => void;
}

const navBar = ({onSearch}: Props) => {
  return (
    <HStack padding={'12px'}>
        <Image boxSize={'60px'} src={logo} /> 
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch /> 
    </HStack>
  )
}

export default navBar
