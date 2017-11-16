import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
var $ = require('jQuery');
// var expect = require('expect');
import ReactTestUtils from 'react-dom/test-utils';

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
    it('should exist', () => {
        expect(CountdownForm).toBeTruthy()
    });

    it('should call onSetCountdown if valid seconds entered', () => {
        let spy = expect.createSpy();
        let countdownForm = ReactTestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>); // Renders component into document
        let $el = $(ReactDOM.findDOMNode(countdownForm));
        countdownForm.seconds.value = '109';
        ReactTestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith(109)
    });
    it('should not call onSetCountdown if invalid seconds entered', () => {
        let spy = expect.createSpy();
        let countdownForm = ReactTestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>); // Renders component into document
        let $el = $(ReactDOM.findDOMNode(countdownForm));
        countdownForm.seconds.value = 'a43';
        ReactTestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();
    });
});

