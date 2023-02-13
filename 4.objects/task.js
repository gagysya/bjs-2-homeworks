function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
    if(this.marks === undefined){
        this.marks = [mark];
    } else {
        this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...marks) {
    if (this.marks === undefined) {
        this.marks = [];
    }
    
    for (let mark of marks) {
        this.marks.push(mark);
    }
}

Student.prototype.getAverage = function () {
    return this.marks.reduce((a, b) => a + b) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
    delete(this.marks);
    delete(this.subject);

    this.excluded = reason;
}


let studentOne = new Student("Лев", "мужской", 21);
studentOne.setSubject("Biology");
studentOne.addMark(3);
studentOne.addMark(5);
studentOne.addMark(5);
console.log(studentOne.getAverage());
console.log(studentOne);

let studentTwo = new Student("Полина", "женский", 20);
studentTwo.setSubject("Chemistry");
studentTwo.addMark(3);
studentTwo.addMark(2);
studentTwo.addMark(2);
console.log(studentTwo.getAverage());
studentTwo.exclude('Bad study')
console.log(studentTwo)

let studentThree = new Student("Максим", "мужской", 22);
studentThree.setSubject("Chemistry");
studentThree.addMark(5);
studentThree.addMark(4);
studentThree.addMark(5);
console.log(studentThree.getAverage());
console.log(studentThree);