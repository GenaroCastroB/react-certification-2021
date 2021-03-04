import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchInput from '../SearchInput.component';

describe('Test SearchInput component', () => {
  it('expect to render correctly', () => {
    const { getByRole } = render(<SearchInput />);

    expect(getByRole('textbox')).toBeTruthy();
  });

  it('expect to search on enter', () => {
    const handleSearch = jest.fn();
    const { getByRole } = render(<SearchInput search={handleSearch}/>);
    fireEvent.keyDown(getByRole('textbox'), { key: 'Enter', code: 'Enter' })
    expect(getByRole('textbox')).toBeTruthy();
    expect(handleSearch).toHaveBeenCalledTimes(1);
  });

  it('expect not to search on key', () => {
    const handleSearch = jest.fn();
    const { getByRole } = render(<SearchInput search={handleSearch}/>);
    fireEvent.keyDown(getByRole('textbox'), { key: 'A', code: 'A' });
    expect(getByRole('textbox')).toBeTruthy();
    expect(handleSearch).toHaveBeenCalledTimes(0);
  });
});
