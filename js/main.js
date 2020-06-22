'use strict';
import { Sort } from './sort.js';
import { Bubles } from './bubles.js';
import { Root } from './root.js';

const sort = new Sort();

const arr = [];
let arrComp = [];
const length = 10;
let promise = [];
const time = 1000;

function delay(time) {
    return new Promise((r, e) => {
        setTimeout(() => { return r(); }, time);
    });
}

function spawn(i, flag, container) {
    promise.push(delay(time / 10 * i)
        .then(() => {
            (flag) ? arr.push(Math.round(Math.random() * 9 + 1)) : undefined;
            arrComp.push(Inferno.createElement(Bubles, {
                number: arr[i],
                style: { 'animation-name': 'spawn' }
            }));
            Inferno.render(
                Inferno.createElement('div', { className: 'bublesContainer' }, arrComp),
                container
            );
        }));
}

function swap(time, i, j, isSwap, end) {
    promise.push(delay(time).then(() => {
        if (isSwap) {
            arrComp[i].children.setState({ anim: 'swapR' });
            arrComp[j].children.setState({ anim: 'swapL' });
        } else {
            arrComp[i].children.setState({ anim: 'idle' });
            arrComp[j].children.setState({ anim: 'idle' });
        }
        delay(900).then(() => {
            if (isSwap) {
                let x = arrComp[i].children.state.number;
                arrComp[i].children.setState({
                    anim: 'none',
                    number: arrComp[j].children.state.number
                });
                arrComp[j].children.setState({
                    anim: 'none',
                    number: x
                });
            } else {
                arrComp[i].children.setState({ anim: 'none' });
                arrComp[j].children.setState({ anim: 'none' });
            }
            (end) ? arrComp[end].children.setState((prevState) => ({
                className: prevState.className + ' bublesContainer__bubles__content_freez'
            })) : undefined;
        });
    }));
}

Inferno.render(Inferno.createElement(Root), document.getElementById('body'));

for (let i = 0; i < length; i++) {
    spawn(i, true, document.getElementById('oldContainer'));
}

Promise.all(promise).then(() => {
    promise = [];
    arrComp = [];
    let newArr = sort.buble(arr);
    arr.forEach((item, i) => {
        spawn(i, false, document.getElementById('newContainer'));
    });
    Promise.all(promise).then(() => {
        promise = [];
        console.log(newArr);
        newArr.callback.forEach((item, i) => {
            swap(time * i, item[0], item[1], item[2], item[3]);
        });
        Promise.all(promise).then(() => {
            delay(time).then(() => {
                arrComp.forEach((item) => {
                    item.children.setState((prevState) => ({
                        className: prevState.className + ' bublesContainer__bubles__content_freez'
                    }));
                });
            });
        });
    });
});