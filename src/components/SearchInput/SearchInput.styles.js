import styled from 'styled-components';

const StyledSearchInput = styled.input`
  width: 100%;
  padding: 10px;
  outline: none;
  border-radius: 5px;
  border-color: white;
  font-size: large;
`;

export const InputContainer = styled.div`
  display: -ms-flexbox;
  display: flex;
  width: 45%;
  margin: 0 auto;
  line-height: 1em;
`;

export const InputIcon = styled.i`
  padding: 10px;
  background: dodgerblue;
  color: white;
  min-width: 50px;
  text-align: center;
  background: inherit;
  font-size: 1.5rem;
`;

export default StyledSearchInput;
