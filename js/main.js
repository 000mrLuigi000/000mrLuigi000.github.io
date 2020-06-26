'use strict';
import { GUI } from './gui.js';
import { Ai } from './ai.js';
//Создаем экземпляр класса интерфейс
const gui = new GUI();
const ai = new Ai();

let fleetElem = {};

gui.create(1);

document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
    fleetElem = gui.create(2, [event.srcElement.nameP.value,event.srcElement.nameAi.value || 'Бот'], (coord)=>{ai.moveP(coord);});
    fleetElem['form'] = [event.srcElement.nameP.value,event.srcElement.nameAi.value || 'Бот'];
    ai.init(fleetElem);
});
