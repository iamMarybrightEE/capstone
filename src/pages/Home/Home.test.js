import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Home from '.';

describe('Home page', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
  });

  it('should have Little Lemon tex', () => {
    const title = screen.getAllByText('Little Lemon', {
      textContent: true,
      exact: true,
    });
    expect(title[0]).toBeInTheDocument();
  });
  it('should be have article', () => {
    expect(screen.getAllByRole('article').length).toBeGreaterThanOrEqual(1);
  });
});
