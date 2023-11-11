import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import NotFound from '.';

describe('Not found page', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>,
    );
  });
  it('should be have text explanation', () => {
    expect(screen.getByText('404 not found')).toBeInTheDocument();
  });
  it('should be have back home button', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
