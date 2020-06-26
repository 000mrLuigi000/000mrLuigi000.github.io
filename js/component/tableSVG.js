'use strict';
/**
 * Класс компонента root.
 * Служит созданию ядра контента.
 */
export class TableSVG extends Inferno.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return Inferno.createElement('svg', { className: 'arena', xmlns: 'http://www.w3.org/2000/svg' },
            Inferno.createElement('path', { className: 'arena__line', d: 'M399.5 0.5V399.5H0.5V0.5H200H399.5Z' }),
            Inferno.createElement('path', {
                className: 'arena__line',
                d: 'M40.2902 400L40.2902 0M280.29 400V360M280.29 360V320M280.29 360H240.29M280.29 360H320.29M280.29 320V280M280.29 320H240.29M280.29 320H320.29M280.29 280V240M280.29 280H240.29M280.29 280H320.29M280.29 240L280.29 200M280.29 240H240.29M280.29 240H320.29M280.29 200V160M280.29 200H240.29M280.29 200H320.29M280.29 160V120M280.29 160H240.29M280.29 160H320.29M280.29 120V80M280.29 120H240.29M280.29 120H320.29M280.29 80V40M280.29 80H240.29M280.29 80H320.29M280.29 40V0M280.29 40H240.29M280.29 40H320.29M160.29 400V360M160.29 360V320M160.29 360H120.29M160.29 360H200.29M160.29 320V280M160.29 320H120.29M160.29 320H200.29M160.29 280V240M160.29 280H120.29M160.29 280H200.29M160.29 240L160.29 200M160.29 240H120.29M160.29 240H200.29M160.29 200V160M160.29 200H120.29M160.29 200H200.29M160.29 160V120M160.29 160H120.29M160.29 160H200.29M160.29 120V80M160.29 120H120.29M160.29 120H200.29M160.29 80V40M160.29 80H120.29M160.29 80H200.29M160.29 40V0M160.29 40H120.29M160.29 40H200.29M120.29 400V360M120.29 360V320M120.29 360H80.2902M120.29 320L120.29 280M120.29 320H80.2902M120.29 280V240M120.29 280H80.2902M120.29 240V200M120.29 240H80.2902M120.29 200V160M120.29 200H80.2902M120.29 160V120M120.29 160H80.2902M120.29 120L120.29 80M120.29 120H80.2902M120.29 80V40M120.29 80H80.2902M120.29 40V0M120.29 40H80.2902M200.29 400V360M200.29 360V320M200.29 360H240.29M200.29 320V280M200.29 320H240.29M200.29 280V240M200.29 280H240.29M200.29 240L200.29 200M200.29 240H240.29M200.29 200V160M200.29 200H240.29M200.29 160V120M200.29 160H240.29M200.29 120V80M200.29 120H240.29M200.29 80V40M200.29 80H240.29M200.29 40V0M200.29 40H240.29M80.2902 400V360M80.2902 360V320M80.2902 360H0M80.2902 320L80.2902 280M80.2902 320H0M80.2902 280V240M80.2902 280H0M80.2902 240V200M80.2902 240H0M80.2902 200V160M80.2902 200H3.05176e-05M80.2902 160V120M80.2902 160H3.05176e-05M80.2902 120L80.2902 80M80.2902 120H3.05176e-05M80.2902 80V40M80.2902 80H3.05176e-05M80.2902 40V0M80.2902 40H3.05176e-05M240.29 400V360M240.29 360V320M240.29 320V280M240.29 280V240M240.29 240L240.29 200M240.29 200V160M240.29 160V120M240.29 120V80M240.29 80V40M240.29 40V0M360.29 400V360M360.29 360V320M360.29 360H320.29M360.29 360H400M360.29 320V280M360.29 320H320.29M360.29 320H400M360.29 280V240M360.29 280H320.29M360.29 280H400M360.29 240L360.29 200M360.29 240H320.29M360.29 240H400M360.29 200V160M360.29 200H320.29M360.29 200H400M360.29 160V120M360.29 160H320.29M360.29 160H400M360.29 120V80M360.29 120H320.29M360.29 120H400M360.29 80V40M360.29 80H320.29M360.29 80H400M360.29 40V0M360.29 40H320.29M360.29 40H400M320.29 400V360M320.29 360V320M320.29 320V280M320.29 280V240M320.29 240L320.29 200M320.29 200V160M320.29 160V120M320.29 120V80M320.29 80V40M320.29 40V0',
                'stroke-dasharray': '2 2'
            })
        );
    }
}