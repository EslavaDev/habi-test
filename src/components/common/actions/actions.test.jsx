/* import { cleanup, fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import { Actions } from '.';
import { ApartamentsProvider } from '../../../context/apartaments';

let props = null;
let context = null;

const spy = jest.fn();

describe('Actions', () => {
  beforeEach(() => {
    spy.mockClear();
    props = {
      id: 'apt1',
    };
    context = {
      apartaments: null,
      apartamentsMap: {},
      apartamentsLike: {
        apt1: {},
      },
      dateFilter: null,
      locationFilter: null,
    };
  });

  afterEach(() => {
    cleanup();
  });

  test('Should render the component actions', () => {
    const { container } = render(<Actions {...props} />, { wrapper: ApartamentsProvider, initialState: context });
    expect(container).toMatchSnapshot();
  });

  test('Should render the correct fields', () => {
    const { getByTestId } = render(<Actions {...props} />, { wrapper: ApartamentsProvider, initialState: context });

    const action = getByTestId('action-heart2');

    fireEvent.click(action);

    expect(spy).toHaveBeenCalled();
  });
});
 */
