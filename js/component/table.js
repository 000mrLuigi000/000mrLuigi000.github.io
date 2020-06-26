'use strict';
import { InputCell } from './inputCell.js';
/**
 * Класс компонента root.
 * Служит созданию ядра контента.
 */
export class Table extends Inferno.Component {
    constructor(props) {
        super(props);
    }

    _createTable(rowCount, className, props) {
        let row = [];
        for (let i = 0; i < rowCount; i++) {
            let cell = [];
            for (let j = 0; j < props[0]; j++) {
                cell.push(Inferno.createElement(InputCell, {
                    clas: className,
                    i: (this.props.coord) ? i : '',
                    j: (this.props.coord) ? j : '',
                    func: (this.props.coord) ? this.props.func : '',
                    cont: props[1] ?? ''
                }));
                props.splice(1, 1);
            }
            row.push(Inferno.createElement('tr', {}, cell));
        }
        return row;
    }

    render() {
        return Inferno.createElement('table', { className: this.props.classTable },
            this._createTable(this.props.row, this.props.classCell, this.props.props)
        );
    }
}