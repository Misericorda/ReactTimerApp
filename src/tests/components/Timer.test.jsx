import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
var $ = require('jQuery');
import ReactTestUtils from 'react-dom/test-utils';

var Timer = require('Timer');

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toBeTruthy()
    });
    it('should start timer on started status', (done) => {
        var timer = ReactTestUtils.renderIntoDocument(<Timer/>);
        timer.handleStatusChange('started');
        expect(timer.state.time).toBe(0);
        setTimeout(() => {
            expect(timer.state.time).toBe(1);
            expect(timer.state.clockStatus).toBe('started');
            done();
        }, 1001)
    });
    it('should pause timer on paused status', (done) => {
        var timer = ReactTestUtils.renderIntoDocument(<Timer/>);
        timer.handleStatusChange('started');
        timer.handleStatusChange('paused');
        setTimeout(() => {
            expect(timer.state.time).toBe(0);
            expect(timer.state.clockStatus).toBe('paused');
            done();
        }, 1001)
    });
    it('should stop and reset timer on stopped status', (done) => {
        var timer = ReactTestUtils.renderIntoDocument(<Timer/>);
        timer.handleStatusChange('started');
        timer.setState({time: 10});
        timer.handleStatusChange('stopped');

        setTimeout(() => {
            expect(timer.state.time).toBe(0);
            expect(timer.state.clockStatus).toBe('stopped');
            done();
        }, 1001)
    });
    // describe('handleSetCountdown', () => {
    //     it('should set state to started and count down', (done) => {
    //         var countdown = ReactTestUtils.renderIntoDocument(<Countdown/>);
    //         countdown.handleSetCountdown(10);
    //         expect(countdown.state.count).toBe(10);
    //         expect(countdown.state.countdownStatus).toBe('started');
    //         setTimeout(() => {
    //             expect(countdown.state.count).toBe(9);
    //             done();
    //         }, 1001);
    //         // expect(countdown.state.countdownStatus).toBe('p');
    //
    //     });
    //     it('should stop at 0 after it reached', (done) => {
    //         var countdown = ReactTestUtils.renderIntoDocument(<Countdown/>);
    //         countdown.handleSetCountdown(1);
    //         setTimeout(() => {
    //             expect(countdown.state.count).toBe(0);
    //             done();
    //         }, 3001);
    //         // expect(countdown.state.countdownStatus).toBe('p');
    //
    //     });
    //     it('should pause counting on paused status', (done) => {
    //         let countdown = ReactTestUtils.renderIntoDocument(<Countdown/>);
    //         countdown.handleSetCountdown(3);
    //         countdown.handleStatusChange('paused');
    //         setTimeout(() => {
    //             expect(countdown.state.count).toBe(3);
    //             expect(countdown.state.countdownStatus).toBe('paused');
    //             done();
    //         }, 1001)
    //     });
    //     it('should stop countdown and set count to 0', (done) => {
    //         let countdown = ReactTestUtils.renderIntoDocument(<Countdown/>);
    //         countdown.handleSetCountdown(3);
    //         countdown.handleStatusChange('stopped');
    //         setTimeout(() => {
    //             expect(countdown.state.count).toBe(0);
    //             expect(countdown.state.countdownStatus).toBe('stopped');
    //             done();
    //         }, 1001)
    //     })
    // });
});

