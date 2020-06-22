export class Bubles extends Inferno.Component {
    constructor(props){
        super(props);
        this.state = {
            anim: props.style['animation-name'] || 'up',
            backgrounColor: props.style['background-color'] || 'red',
            number: props.number || 0,
            className: 'bublesContainer__bubles__content'
        }
    }

    render() {
        return Inferno.createElement('div',{
            className: 'bublesContainer__bubles', 
            style: {'animation-name': this.state.anim}
        },Inferno.createElement('div',{
            className: this.state.className
        }, this.state.number));
    }
}