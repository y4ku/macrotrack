jest.dontMock('../src/components/Macros');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Macros from '../src/components/Macros';

describe('Macros', () => {

    it('should exist', () => {
        const macrosProps = [
            'protein',
            'fats',
            'carbs'
        ];

        // Render a checkbox with label in the document
        var macroReactElement = TestUtils.renderIntoDocument(
            <Macros macros={macrosProps} />
        );

        var macroNode = ReactDOM.findDOMNode(macroReactElement);

        expect(macroNode).toBeDefined();

    });

});