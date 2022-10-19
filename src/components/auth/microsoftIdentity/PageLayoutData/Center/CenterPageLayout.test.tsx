import React from 'react';
import TestRenderer from 'react-test-renderer';
import Center from 'components/auth/microsoftIdentity/PageLayoutData/Center/CenterPageLayout';

it('Page layout center component render', () => {
    const tree = TestRenderer.create(<Center />).toJSON()
    expect(tree).toMatchSnapshot();
})