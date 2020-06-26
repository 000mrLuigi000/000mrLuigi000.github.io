'use strict'
import { GUI } from './gui.js';
const gui = new GUI();

export class Ai {
    constructor() {
        this.moveP = this.moveP.bind(this);
    }

    _dealy(time) {
        return new Promise((r) => {
            setTimeout(() => { r() }, time);
        });
    }

    _moveList() {
        let arr = [];
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                arr.push({ i, j });
            }
        }
        return arr;
    }

    _find(coord) {
        for (let i = 0; i < (this.moveListAi.length - 1); i++) {
            if (this.moveListAi[i].i === coord.i && this.moveListAi[i].j === coord.j) {
                return i;
            }
        }
    }

    _losePast(arr, input, shipNumber, ships, movelist) {
        let props = ships.children[shipNumber].children.props;
        for (let i = props.y1 - 2; i < props.y2; i++) {
            for (let j = props.x1 - 2; j < props.x2; j++) {
                if (i >= 0 &&
                    i <= 9 &&
                    j >= 0 &&
                    j <= 9 &&
                    ((i < props.y1 - 1 || i > props.y2 - 2) ||
                        (j < props.x1 - 1 || j > props.x2 - 2))
                ) {
                    if (arr[i + 1][j + 1] !== -1) {
                        input.children.$LI.children[i].children[j].children.setState({ img: 'lose.svg' });
                        arr[i + 1][j + 1] = -1;
                        if (movelist) {
                            this.moveListAi.splice(this._find({ i, j }), 1);
                        }
                    }
                }

            }
        }
        ships.children[shipNumber].children.setState({ visible: 1 });
    }

    init(fleet) {
        this.fleet = fleet;
        this.lifeP = 20;
        this.lifeAi = 20;
        this.player = 'p';
        this.moveListAi = this._moveList();
    }

    moveP(coord) {
        if (this.player === 'p') {
            (this.lifeAi > 0 && this.lifeP > 0) ? this._dealy(0).then(() => {
                let deck = this.fleet.fleetAiCoord.arr[coord[0] + 1][coord[1] + 1];
                if (deck !== -1) {
                    if (deck === 0) {
                        this.player = 'ai';
                        this.fleet.fleetAiCoord.arr[coord[0] + 1][coord[1] + 1] = -1;
                        this.fleet.fleetAiInput.children.$LI.children[coord[0]].children[coord[1]].children.setState({ img: 'lose.svg' });
                        this.fleet.player.children.setState({
                            animP: 'stay',
                            animAi: 'play'
                        });
                        let pos = Math.round(Math.random() * (this.moveListAi.length - 1));
                        coord = this.moveListAi[pos];
                        this.moveAi(coord, pos);
                    } else {
                        this.fleet.fleetAiCoord.arr[coord[0] + 1][coord[1] + 1] = -1;
                        this.fleet.fleetAiInput.children.$LI.children[coord[0]].children[coord[1]].children.setState({ img: 'explosion.gif' });
                        let i = coord[0];
                        let j = coord[1];
                        setTimeout(() => {
                            this.fleet.fleetAiInput.children.$LI.children[i].children[j].children.setState({ img: 'dead.svg' });
                        }, 400);
                        this.lifeAi--;
                        if (!this.lifeAi) {
                            this._dealy(510).then(() => {
                                if (confirm('Ура вы попедили, хотите повторить?')) {
                                    Inferno.render(Inferno.createElement('div'), document.getElementById('body'));
                                    let fleetElement = gui.create(2, [this.fleet.form[0], this.fleet.form[1] || 'Бот'], (coord) => { this.moveP(coord); });
                                    fleetElement['form'] = this.fleet.form;
                                    this.init(fleetElement);
                                }
                            });
                        }
                        let ship = this.fleet.fleetAiCoord.fleet[coord[0]][coord[1]];
                        this.fleet.fleetAiTable.children[ship].children.life--;
                        (!this.fleet.fleetAiTable.children[ship].children.life) ?
                            this._losePast(
                                this.fleet.fleetAiCoord.arr,
                                this.fleet.fleetAiInput,
                                ship,
                                this.fleet.fleetAiTable) :
                            '';
                    }
                }
            }) : '';
            ;
        }
    }

    moveAi(coord, pos) {
        (this.lifeAi > 0 && this.lifeP > 0) ? this._dealy(200).then(() => {
            let deck = this.fleet.fleetPCoord.arr[coord.i + 1][coord.j + 1];
            if (deck === 0) {
                this.moveListAi.splice(pos, 1);
                this.player = 'p';
                this.fleet.fleetPCoord.arr[coord.i + 1][coord.j + 1] = -1;
                this.fleet.fleetPInput.children.$LI.children[coord.i].children[coord.j].children.setState({ img: 'lose.svg' });
                this.fleet.player.children.setState({
                    animP: 'play',
                    animAi: 'stay'
                });
            } else {
                this.moveListAi.splice(pos, 1);
                this.fleet.fleetPCoord.arr[coord.i + 1][coord.j + 1] = -1;
                this.fleet.fleetPInput.children.$LI.children[coord.i].children[coord.j].children.setState({ img: 'explosion.gif' });
                let i = coord.i;
                let j = coord.j;
                setTimeout(() => {
                    this.fleet.fleetPInput.children.$LI.children[i].children[j].children.setState({ img: 'dead.svg' });
                }, 400);
                this.lifeP--;
                if (!this.lifeP) {
                    this._dealy(510).then(() => {
                        if (confirm('Увы вы проиграли, хотите повторить?')) {
                            Inferno.render(Inferno.createElement('div'), document.getElementById('body'));
                            let fleetElement = gui.create(2, [this.fleet.form[0], this.fleet.form[1] || 'Бот'], (coord) => { this.moveP(coord); });
                            fleetElement['form'] = this.fleet.form;
                            this.init(fleetElement);
                        }
                    });
                }
                let ship = this.fleet.fleetPCoord.fleet[coord.i][coord.j];
                this.fleet.fleetPTable.children[ship].children.life--;
                (!this.fleet.fleetPTable.children[ship].children.life) ?
                    this._losePast(
                        this.fleet.fleetPCoord.arr,
                        this.fleet.fleetPInput,
                        ship,
                        this.fleet.fleetPTable,
                        true
                    ) :
                    '';
                pos = Math.round(Math.random() * (this.moveListAi.length - 1));
                coord = this.moveListAi[pos];
                this.moveAi(coord, pos);
            }
        }) : '';
    }
}