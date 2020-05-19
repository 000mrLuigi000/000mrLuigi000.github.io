export class SuperVisor {
    'use strict';

    constructor() {
        this.listElement = [];
    }

    addElement(element, id) {
        this.listElement[id] = element;
    }

    removeElement(id) {
        this.listElement[id].unload();
        this.listElement[id] = undefined;
    }

    getElement(id) {
        return this.listElement[id];
    }
}