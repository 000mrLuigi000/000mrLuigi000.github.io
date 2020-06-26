export class Generate {
    _check(arr, x1, y1, x2, y2) {
        for (let i = y1 - 1; i < y2 + 2; i++) {
            for (let j = x1 - 1; j < x2 + 2; j++) {
                if (arr[i][j] > 0) {
                    return false;
                }
            }
        }
        return true;
    }

    _past(arr, x1, y1, x2, y2, deck) {
        for (let i = y1 - 1; i < y2 + 2; i++) {
            for (let j = x1 - 1; j < x2 + 2; j++) {
                arr[i][j] = -1;
            }
        }
        for (let i = y1; i < y2 + 1; i++) {
            for (let j = x1; j < x2 + 1; j++) {
                arr[i][j] = deck;
            }
        }
    }

    _fleetCoord(arr) {
        let fleet = [];
        for (let i = 0; i < 10; i++) {
            fleet.push([]);
            for (let j = 0; j < 10; j++) {
                fleet[i].push([]);
            }
        }
        arr.forEach((item,index)=>{
            for (let i = item[1]-1; i < item[3]; i++) {
                for (let j = item[0]-1; j < item[2]; j++) {
                    fleet[i][j] = index;  
                }
            }
        });
        return fleet;
    }

    _draw(arr, length, deck) {
        let coord = [];
        while (true) {
            let x = Math.round(Math.random() * 9 + 1);
            let y = Math.round(Math.random() * 9 + 1);
            if (x + length - 1 < arr[y].length - 2 && y + length - 1 < arr.length - 2) {
                let rotate = Math.random();
                if (rotate >= 0.5) {
                    if (this._check(arr, x, y, x + length - 1, y)) {
                        this._past(arr, x, y, x + length - 1, y, deck);
                        coord.push(x, y, x + length - 1, y, true, deck);
                        break;
                    }
                } else {
                    if (this._check(arr, x, y, x, y + length - 1)) {
                        this._past(arr, x, y, x, y + length - 1, deck);
                        coord.push(x, y, x, y + length - 1, false, deck);
                        break;
                    }
                }
            } else if (y + length - 1 < arr.length - 2) {
                if (this._check(arr, x, y, x, y + length - 1)) {
                    this._past(arr, x, y, x, y + length - 1, deck);
                    coord.push(x, y, x, y + length - 1, false, deck);
                    break;
                }
            } else if (x + length - 1 < arr[y].length - 2) {
                if (this._check(arr, x, y, x + length - 1, y)) {
                    this._past(arr, x, y, x + length - 1, y, deck);
                    coord.push(x, y, x + length - 1, y, true, deck);
                    break;
                }
            }
        }
        return coord;
    }

    _clear(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                (arr[i][j] === -1) ? arr[i][j] = 0 : '';
            }
        }
    }

    spawn() {
        let summ = 20;
        let fleetCoord = {coord: [], arr: [], fleet: []};
        let fleetArr = [[4], [3], [2], [1]]
        for (let i = 0; i < 12; i++) {
            fleetCoord.arr.push([]);
            for (let j = 0; j < 12; j++) {
                fleetCoord.arr[i][j] = 0;
            }
        }
        while (summ > 0) {
            let deck = Math.round(Math.random() * 3);
            if (fleetArr[deck] > 0) {
                switch (deck + 1) {
                    case 1: {
                        let coord = this._draw(fleetCoord.arr, 1, deck + 1);
                        fleetCoord.coord.push(coord);
                        summ -= 1;
                        fleetArr[deck]--;
                        break;
                    }
                    case 2: {
                        let coord = this._draw(fleetCoord.arr, 2, deck + 1);
                        fleetCoord.coord.push(coord);
                        fleetCoord.fleet.push(coord.fleet);
                        summ -= 2;
                        fleetArr[deck]--;
                        break;
                    }
                    case 3: {
                        let coord = this._draw(fleetCoord.arr, 3, deck + 1);
                        fleetCoord.coord.push(coord);
                        fleetCoord.fleet.push(coord.fleet);
                        summ -= 3;
                        fleetArr[deck]--;
                        break;
                    }
                    case 4: {
                        let coord = this._draw(fleetCoord.arr, 4, deck + 1);
                        fleetCoord.coord.push(coord);
                        fleetCoord.fleet.push(coord.fleet);
                        summ -= 4;
                        fleetArr[deck]--;
                        break;
                    }
                }
            }
        }
        fleetCoord.fleet = this._fleetCoord(fleetCoord.coord);
        this._clear(fleetCoord.arr);
        return fleetCoord;
    }
}