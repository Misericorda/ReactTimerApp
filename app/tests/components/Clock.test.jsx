import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
var $ = require('jQuery');
// var expect = require('expect')
import ReactTestUtils from 'react-dom/test-utils';

var Clock = require('Clock');

describe('Clock', () => {
    it('should exist', () => {
        expect(Clock).toBeTruthy()
    });

    describe('formatSeconds', () => {
        it('should format seconds', () => {
            var clock = ReactTestUtils.renderIntoDocument(<Clock/>);
            var seconds = 615;
            var expected = '10:15';
            var actual = clock.formatSeconds(seconds);
            expect(actual).toBe(expected);
        })
        it('should format seconds when min/sec are less than 10', () => {
            var clock = ReactTestUtils.renderIntoDocument(<Clock/>);
            var seconds = 61;
            var expected = '01:01';
            var actual = clock.formatSeconds(seconds);
            expect(actual).toBe(expected);
        })
    });

    describe('render', () => {
        it('should render clock to output', () => {
            var clock = ReactTestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
            var $el = $(ReactDOM.findDOMNode(clock));
            var actualText = $el.find('.clock-text').text();

            expect(actualText).toBe('01:02');
        })
    })
});

