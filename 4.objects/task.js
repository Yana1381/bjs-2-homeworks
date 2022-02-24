function Student(name, gender, age) {
  
 this.name = name;
 this.gender = gender;
 this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
  //console.log("subject: " + subjectName);
}

Student.prototype.addMark = function(mark) {
 if(this.marks === undefined){ 
    this.marks = [mark]; 
    } else {
      this.marks.push(mark);
    }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  for(let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
    }
  
  avg = sum / this.marks.length;
  //avg = +avg.toFixed(2);

  this.avg = getAverage;

}

let student1 = new Student("Аny", "female", 17);
student1.setSubject("Algebra");
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);
console.log(student1.getAverage()); 
console.log(student1);

//let student2 = new Student("Sony", "male", 20);
//let student3 = new Student("Bony", "female", 22);
//let student4 = new Student("Lony", "male", 21);