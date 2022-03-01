function Student(name, gender, age) {
  
 this.name = name;
 this.gender = gender;
 this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
 if(this.marks === undefined){ 
    this.marks = [mark]; 
    } else {
      this.marks.push(mark);
    }
}

Student.prototype.getAverage = function() {
  let sum = 0;
  for(let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
    }
  
  let avg = sum / this.marks.length;
  avg = +avg.toFixed(4);

  return avg;
}

Student.prototype.addMarks = function(mark1, mark2, mark3, ...marks) {
  this.marks.push();
}

Student.prototype.exclude = function(reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
  if (this.avg < 3) {
    reason = 'low grades'
  }
  
}

let student2 = new Student("Buzz", "female", 35);
student2.setSubject("Geometry");
student2.addMark(2);
student2.addMark(3);
student2.addMark(2);
student2.exclude('low grades')
console.log(student2)