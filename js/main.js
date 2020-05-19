'use strict';

import { FactoryElements } from '../js/component.js';
import { PersonFactory } from '../js/personLib.js';
import { DataBase } from '../js/db.js';
import { SchoollFactory } from '../js/school.js';
import { SuperVisor } from '../js/supervisor.js';

const factoryElements = new FactoryElements();
const personFactory = new PersonFactory();
const schoollFactory = new SchoollFactory();
const db = new DataBase();
const supervisor = new SuperVisor();

supervisor.addElement(schoollFactory, 'scholl');
supervisor.addElement(db, 'db');
supervisor.addElement(factoryElements, 'factoryElements');

factoryElements.createElement('header', document.body, { id: 'header' }, supervisor);
factoryElements.createElement('content', document.body, { id: 'content' }, supervisor);

db.getStudentList.forEach((property) => {
    const student = personFactory.createPerson(property);
    schoollFactory.addStudent(student);
    factoryElements.createElement('person', document.getElementById('student-container'), student, supervisor);
});
db.getTeacherList.forEach((property) => {
    const teacher = personFactory.createPerson(property);
    schoollFactory.addTeacher(teacher);
    factoryElements.createElement('person', document.getElementById('teacher-container'), teacher, supervisor);
});
