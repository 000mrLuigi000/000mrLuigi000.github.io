'use strict';
/**
 * Класс компонента root.
 * Служит созданию ядра контента.
 */
export class Page1 extends Inferno.Component {
    constructor(props) {
        super(props);
    }

    render() {
        /**
         * В пустышку помещается:
         *  текст приветствия,
         *  контейнер старого массива
         *  вспомогательный текст
         *  контейнер отсортированного массива
         */
        return Inferno.createElement('form', { className: 'start', id: 'form', action: '#' },
            Inferno.createElement('input', {
                className: 'start__text',
                type: 'text',
                maxlength: 20,
                name: 'nameP',
                required: true,
                'placeholder': 'Введите ваше имя'
            }),
            Inferno.createElement('input', {
                className: 'start__text',
                type: 'text',
                maxlength: 20,
                name: 'nameAi',
                'placeholder': 'Введите имя противника'
            }),
            Inferno.createElement('input', {
                className: 'start__button',
                type: 'submit',
                value: 'Начать игру'
            })
        );
    }
}