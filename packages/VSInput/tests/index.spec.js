/* eslint-env node , jest */
import React from 'react';
import renderer from 'react-test-renderer';
import VSInput from '../';


describe('<VSInput />', () => {
  describe('snapshots', () => {
    describe('default props', () => {
      it('should match snapshot', () => {
        const rendered = renderer.create(
          <VSInput
            password
            label="Password"
            autoCorrect={ false }
            defaultValue={ '' }
          />
        ).toJSON();

        expect(rendered).toMatchSnapshot();
      });
    });
  });
});
