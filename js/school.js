export class SchoollFactory {
    'use strict';
    
    constructor() {
        this.studentList = [];
        this.teacherList = [];
    }

    addStudent(student) {
        this.studentList.push(student);
        console.log(`Студент ${student.name} зачислен на ${student.course} курс`);
    }

    addTeacher(teacher) {
        this.teacherList.push(teacher);
        console.log(`Преподователь ${teacher.name} назначен на предмет: ${teacher.work}`);
    }

    removePerson(property) {
        switch (property.tag) {
            case 'student':
                this.studentList.forEach((person, id) => {
                    if ((person.name === property.name) && (person.course === property.course)) {
                        this.studentList.splice(id, 1);
                        alert(`Студент ${person.name} отчислен`);
                        return 0;
                    }
                });
                break;
            case 'teacher':
                this.teacherList.forEach((person, id) => {
                    if ((person.name === property.name) && (person.work === property.work)) {
                        this.teacherList.splice(id, 1);
                        alert(`Преподователь ${person.name} уволен`);
                        return 0;
                    }
                });
                break;
            default:
                console.log('Не все поля введены верно.');
        }
    }

    getPerson(property) {
        let searchPerson = null;
        switch (property.tag) {
            case 'student':
                this.studentList.forEach((person) => {
                    if ((person.name === property.name) && (person.course === property.course)) {
                        console.log(`обнаружен ${person.name}`);
                        searchPerson = person;
                    }
                });
                break;
            case 'teacher':
                this.teacherList.forEach((person) => {
                    if ((person.name === property.name) && (person.work === property.work)) {
                        console.log(`обнаружен ${person.name}`);
                        searchPerson = person;
                    }
                });
                break;
            default:
                console.log('Не все поля введены верно.');
        }
        return searchPerson;
    }
}