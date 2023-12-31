import React from 'react';
import {mountWithApp} from 'tests/utilities';

// eslint-disable-next-line import/no-deprecated
import {LegacyStack} from '../LegacyStack';

describe('<LegacyStack />', () => {
  const renderChildren = () => [0, 1].map((i) => <div key={i}>Child {i}</div>);

  it('renders its children', () => {
    const legacyStack = mountWithApp(
      <LegacyStack>{renderChildren()}</LegacyStack>,
    );
    // eslint-disable-next-line import/no-deprecated
    expect(legacyStack).toContainReactComponentTimes(LegacyStack.Item, 2);
  });
});
