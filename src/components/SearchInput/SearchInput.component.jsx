import React from 'react';
import { FaSearch } from 'react-icons/fa';
import StyledSearchInput, { InputContainer, InputIcon } from './SearchInput.styles';

function SearchInput({ search }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      search(event.target.value);
    }
  };

  return (
    <InputContainer>
      <InputIcon>
        <FaSearch />
      </InputIcon>
      <StyledSearchInput type="text" placeholder="Search..." onKeyDown={handleKeyDown} />
    </InputContainer>
  );
}

export default SearchInput;
