class Person {
    'use strict';

    constructor(person) {
        for (let key in person) {
            this[key] = person[key];
        }
        this.status;
    }

    get getBirthDateStr() {
        const month = [
            'Января', 'Февраля',
            'Марта', 'Апреля', 'Мая',
            'Июня', 'Июля', 'Августа',
            'Сентября', 'Октября', 'Ноября',
            'Декабря'
        ];
        return `${this.birthDate.getDate()} ${month[this.birthDate.getMonth()]}, ${this.age}`;
    }

    get age() {
        let curDate = new Date;
        let ages = curDate.getFullYear() - this.birthDate.getFullYear();
        let before = '';
        if (ages % 10 == 1) { before = 'год' }
        else if ((ages % 10 > 1) && (ages % 10 < 5)) { before = 'года' }
        else { before = 'лет' };
        return `${ages} ${before}`;
    }

    get getUniversity() { }
}

class Student extends Person {
    'use strict';

    constructor(person) {
        super(person);
        this.status = 'live';
    }
    get getUniversity() {
        return `${this.university} ${this.course} курс`;
    }
    upCourse() {
        (this.course < 6) ? this.course ++ : alert('Студент и так на последнем курсе');
    }
}

class Teacher extends Person {
    'use strict';

    constructor(person) {
        super(person);
        this.status = 'live';
    }
    get getUniversity() {
        return `${this.university} ${this._getWorkStatus()}`;
    }
    _getWorkStatus() {
        return `Преподает: ${this.work}`;
    }
}

export class PersonFactory {
    'use strict';

    createPerson(person) {
        switch (person.tag) {
            case 'student':
                return new Student(person);
            case 'teacher':
                return new Teacher(person);
        }
    }
}