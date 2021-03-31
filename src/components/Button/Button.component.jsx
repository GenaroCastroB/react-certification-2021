import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import Styled from './Button.styles';

export function Button({ label, handleClick }) {
  return <Styled.Button onClick={handleClick}>{label}</Styled.Button>;
}

export function LinkButton({ label, pathname }) {
  return (
    <Styled.LinkButton
      to={{
        pathname,
      }}
    >
      {label}
    </Styled.LinkButton>
  );
}

export function FavoritesButton({ label, handleClick }) {
  return (
    <Styled.PointerDiv onClick={handleClick}>
      <FaRegStar /> {label}
    </Styled.PointerDiv>
  );
}
