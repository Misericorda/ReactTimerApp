import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
// var $ = require('jQuery');
import Controls from 'Controls';
import ReactTestUtils from 'react-dom/test-utils';

describe('Controls', () => {
    it('should exist', () => {
        expect(Controls).toBeTruthy();
    });

    describe('render', () => {
        it('should render pause when started', () => {
            let controls = ReactTestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
            let $el = $(ReactDOM.findDOMNode(controls));
            let $pauseButton = $el.find('button:contains(Pause)');

            expect($pauseButton.length).toBe(1);
        });
        it('should render start when paused', () => {
            let controls = ReactTestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
            let $el = $(ReactDOM.findDOMNode(controls));
            let $startButton = $el.find('button:contains(Start)');

            expect($startButton.length).toBe(1);
        });
    })
});