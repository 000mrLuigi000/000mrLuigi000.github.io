/**
 * Класс компонента Ships.
 * Служит для создания пузырика
 */
export class Ships extends Inferno.Component {
    constructor(props) {
        super(props);
        this.state = {
            x1: props.x1 ?? 0,
            y1: props.y1 ?? 0,
            x2: props.x2 ?? 0,
            y2: props.y2 ?? 0,
            rotate: props.rotate ?? 0,
            deck: props.deck ?? 0,
            visible: props.visible ?? 1
        };
        this.life = props.deck ?? 0;
    }

    _drawIcon() {
        if (this.state.rotate) {
            return Inferno.createElement('div', {
                className: 'fleetContainer__ship__icon',
                style: {
                    'transform': `rotate(-90deg)`,
                    'width': `${55 * (this.state.y2 - this.state.y1)}px`,
                    'height': `${55 * (this.state.x2 - this.state.x1)}px`,
                    'background-image': `url(../img/${this.state.deck}.svg)`,
                    'opacity': this.state.visible
                }
            });
        } else {
            return Inferno.createElement('div', {
                className: 'fleetContainer__ship__icon',
                style: {
                    'transform': `rotate(0deg)`,
                    'width': `${55 * (this.state.x2 - this.state.x1)}px`,
                    'height': `${55 * (this.state.y2 - this.state.y1)}px`,
                    'background-image': `url(../img/${this.state.deck}.svg)`,
                    'opacity': this.state.visible
                }
            });
        }
    }

    render() {
        return Inferno.createElement('div', {
            className: 'fleetContainer__ship',
            style: {
                'grid-area': `${this.state.y1}/${this.state.x1}/${this.state.y2}/${this.state.x2}`
            }
        }, this._drawIcon());
    }
}