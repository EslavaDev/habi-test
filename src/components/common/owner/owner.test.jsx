import { cleanup, render } from '@testing-library/react';
import * as React from 'react';
import { Owner } from '.';

let props = null;

describe('Owner', () => {
  beforeEach(() => {
    props = {
      fullname: 'carlos',
      phone: '1111111',
      email: 'carlos@mail.com',
    };
  });

  afterEach(() => {
    cleanup();
  });

  test('Should render the component', () => {
    const { container } = render(<Owner {...props} />);
    expect(container).toMatchSnapshot();
  });

  test('Should render the correct fields', () => {
    const { getByTestId } = render(<Owner {...props} />);

    const fullName = getByTestId('owner-name');
    const phone = getByTestId('owner-phone');
    const contact = getByTestId('owner-contact');

    expect(fullName).toBeTruthy();
    expect(phone).toBeTruthy();
    expect(contact).toBeTruthy();
  });
  test('Should render the correct fields by text', () => {
    const { getByText } = render(<Owner {...props} />);

    const fullName = getByText('carlos');
    const phone = getByText('1111111');
    const contact = getByText('carlos@mail.com');

    expect(fullName).toBeTruthy();
    expect(phone).toBeTruthy();
    expect(contact).toBeTruthy();
  });
});
