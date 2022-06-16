import { render, screen } from '@testing-library/react';
import Header from './Header';

// Use 'describe' to group together similar tests
describe('Header', () => {
  // Use 'it' to test a single attribute of a target
  it('shows h1 heading', () => {
    // Create an instance of an App
    const component = render(Header);

    // Use 'expect' to make an 'assertion' about a target
    expect(component).to.contain('Redux Auth');
  });
});
