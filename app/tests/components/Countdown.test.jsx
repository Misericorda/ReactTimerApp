import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
var $ = require('jQuery');
// var expect = require('expect');
import ReactTestUtils from 'react-dom/test-utils';

var Countdown = require('Countdown');

describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toBeTruthy()
    });
    describe('handleSetCountdown', () => {
        it('should set state to started and count down', () => {
            var countdown = ReactTestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(10);
            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');
            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001);
            // expect(countdown.state.countdownStatus).toBe('p');

        })
    });
    // it('should call onSetCountdown if valid seconds entered', () => {
    //     let spy = expect.createSpy();
    //     console.log(spy);
    //     console.log('el');
    //     let countdownForm = ReactTestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>); // Renders component into document
    //     console.log(spy);
    //     let $el = $(ReactDOM.findDOMNode(countdownForm));
    //     countdownForm.seconds.value = '109';
    //     ReactTestUtils.Simulate.submit($el.find('form')[0]);
    //     expect(spy).toHaveBeenCalledWith(109)
    // });
    // it('should not call onSetCountdown if invalid seconds entered', () => {
    //     let spy = expect.createSpy();
    //     let countdownForm = ReactTestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>); // Renders component into document
    //     let $el = $(ReactDOM.findDOMNode(countdownForm));
    //     countdownForm.seconds.value = 'a43';
    //     ReactTestUtils.Simulate.submit($el.find('form')[0]);
    //     expect(spy).toNotHaveBeenCalled();
    // });
});

