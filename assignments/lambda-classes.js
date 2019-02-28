// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }

    greeting() {
        return `Hello, my name is ${this.name}, I am from ${this.location}.`
    }
} // Person

class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}.`
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }

    instructorGrade(student) {
        let randomScore = Math.round(100 * Math.random());
        let operator = ['+', '-'];
        return student.grade = parseInt(`${randomScore} ${operator[Math.round(Math.random())]} ${student.grade}`);
    }
} // Instructor

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.grade = studentAttributes.grade;
    }

    listsSubjects() {
        return this.favSubjects.join(', ');
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }

    graduate() {
        if(this.grade > 70) {
            return `You are graduating!`;
        } else {
            return `You need to study more`;
        }
    }
} // Student

class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
} // Project Manager



// New People

const jim = new Person({
    name: 'Jim',
    location: 'New York',
    age: 25,
    gender: 'male'
})

const jenny = new Person({
    name: 'Jenny',
    location: 'California',
    age: 21,
    gender: 'female'
})

// New Instructors

const bob = new Instructor({
    name: 'Bob',
    location: 'California',
    age: 30,
    gender: 'male',
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: 'You can buy a man a turkey, but you can\'t sell him a fish for two cents.'
})

const mary = new Instructor({
    name: 'Mary',
    location: 'Boston',
    age: 29,
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'User experience',
    catchPhrase: 'So much code, so little time'
})

// New Students

const brian = new Student({
    name: 'Brian',
    location: 'New York',
    age: 30,
    gender: 'male',
    previousBackground: 'app development',
    className: 'Web18',
    favSubjects: ['Java', 'Python'],
    grade: 60
})

const michelle = new Student({
    name: 'Michelle',
    location: 'California',
    age: 25,
    gender: 'female',
    previousBackground: 'graphic design',
    className: 'Web18',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
    grade: 70
})

// New Project Managers

const sara = new ProjectManager({
    name: 'Sara',
    location: 'Texas',
    age: 32,
    gender: 'female',
    gradClassName: 'Web15',
    favInstructor: 'Bob',
})

const tom = new ProjectManager({
    name: 'Tom',
    location: 'New Orleans',
    age: 31,
    gender: 'male',
    gradClassName: 'Web12',
    favInstructor: 'Mary'
})

// Tests

// Person
console.log(jim.greeting());
console.log(jenny.greeting());

// Instructors
console.log(bob.demo('React'));
console.log(mary.grade(michelle, 'JavaScript'));

// Students
console.log(brian.listsSubjects());
console.log(brian.PRAssignment('CSS'));
console.log(michelle.sprintChallenge('HTML'));

// Project Managers
console.log(sara.standUp('#web18'));
console.log(tom.debugsCode(brian, 'JavaScript'));

// Stretch Problem

console.log(mary.instructorGrade(brian));
console.log(tom.instructorGrade(michelle));

console.log(brian.graduate())
console.log(michelle.graduate());