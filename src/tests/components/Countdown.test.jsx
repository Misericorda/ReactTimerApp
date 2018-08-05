import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
var $ = require('jQuery');
// var expect = require('expect');
import ReactTestUtils from 'react-dom/test-utils';
// import TestUtils from 'react-addons-test-utils';

var Countdown = require('Countdown');

describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toBeTruthy()
    });
    describe('handleSetCountdown', () => {
        it('should set state to started and count down', (done) => {
            var countdown = ReactTestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(10);
            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');
            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001);
            // expect(countdown.state.countdownStatus).toBe('p');

        });
        it('should stop at 0 after it reached', (done) => {
            var countdown = ReactTestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(1);
            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
            }, 3001);
            // expect(countdown.state.countdownStatus).toBe('p');

        });
        it('should pause counting on paused status', (done) => {
            let countdown = ReactTestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('paused');
            setTimeout(() => {
                expect(countdown.state.count).toBe(3);
                expect(countdown.state.countdownStatus).toBe('paused');
                done();
            }, 1001)
        });
        it('should stop countdown and set count to 0', (done) => {
            let countdown = ReactTestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('stopped');
            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                expect(countdown.state.countdownStatus).toBe('stopped');
                done();
            }, 1001)
        })
    });
});

