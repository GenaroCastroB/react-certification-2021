import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Button, LinkButton, FavoritesButton } from '../Button.component';

describe('Test Button component', () => {
  it('expect Button to render correctly', () => {
    const { getByText } = render(<Button label="button" />);

    expect(getByText('button').tagName).toBe('BUTTON');
  });

  it('expect LinkButton to render correctly', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <LinkButton label="linkButton" pathname="./" />
      </Router>
    );

    expect(getByText('linkButton').tagName).toBe('A');
  });

  it('expect Favorites Button to render correctly', () => {
    const { getByText } = render(
      <FavoritesButton label="favorites" handleClick={jest.fn} />
    );

    expect(getByText('favorites').tagName).toBe('DIV');
  });
});
