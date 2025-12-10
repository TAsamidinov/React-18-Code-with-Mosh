import { Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({onSearch}: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if (ref.current) onSearch(ref.current.value)
    }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={ref} borderRadius={20} placeholder='Seach games...' variant={'filled'} />
      </InputGroup>
    </form>
   
  )
}

export default SearchInput
