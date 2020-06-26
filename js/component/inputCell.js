'use strict';
/**
 * Класс компонента root.
 * Служит созданию ядра контента.
 */
export class InputCell extends Inferno.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: '',
            func: props.func ?? undefined
        };
    }

    render() {
        return Inferno.createElement('td', {
            className: this.props.clas,
            onClick: (this.state.func) ? ()=>{this.state.func([this.props.i,this.props.j]);} : '',
            style: {'background-image':`url(./img/${this.state.img})`}
        }, this.props.cont ?? '');
    }
}