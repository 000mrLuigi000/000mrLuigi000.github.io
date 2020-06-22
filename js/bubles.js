/**
 * Класс компонента bubles.
 * Служит для создания пузырика
 */
export class Bubles extends Inferno.Component {
    constructor(props){
        super(props);
        this.state = {
            /*
            Сюда записывается:
                название анимации
                номер в пузырике
                имя стандартного класса (впоследствии изменяется при "замораживании")
            */
            anim: props.style['animation-name'] || 'up',
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