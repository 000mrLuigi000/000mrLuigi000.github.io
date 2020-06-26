'use strict';
/**
 * Класс компонента root.
 * Служит созданию ядра контента.
 */
export class Page2 extends Inferno.Component {
    constructor(props) {
        super(props);
        this.state = {
            animP: 'play',
            animAi: ''
        };
    }

    render() {
        return Inferno.createElement('div', {},
            Inferno.createElement('div', { className: 'nameContainer' },
                Inferno.createElement('h3', {
                    className: 'nameContainer__name',
                    style: { 'animation-name': this.state.animP }
                },this.props.name[0]),
                Inferno.createElement('h3', { 
                    className: 'nameContainer__name',
                    style: { 'animation-name': this.state.animAi }
                }, this.props.name[1])
            ),
            Inferno.createElement('div', { id: 'main' })
        );
    }
}