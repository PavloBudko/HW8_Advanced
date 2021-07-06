class Student {
  constructor(university ,course ,fullName, marks = [5, 4, 4, 5] , isActive = true){
      this.university = university,
      this.course = course,
      this.fullName = fullName,
      this.marks = marks,
      this.isActive = isActive
  }
  get getInfo() {
      return `Студент ${this.course}-го курсу ${this.university}, ${this.fullName}`
  }
  get getMarks(){
      return this.marks;
  }
  set setMarks(value){
      if(this.isActive){ 
          this.marks.push(value);
      }
      return this.marks; 
  }
  get getAverageMark(){
      if(!this.isActive){ 
          return this.marks;
      }
      else{
          return (this.marks.reduce((sum, el) => sum += el, 0)/this.marks.length);
      }
  }
  dismiss(){
      this.isActive = false;
      this.marksForRecover = [...this.marks]
      this.marks = null;
  }
  recover(){
      this.isActive = true;   
      this.marks = this.marksForRecover;
  }
}


//1
const Ostap = new Student('Вищої Школи Психотерапії м. Одеса', 1 ,'Остап Бендер');
console.log("new Student('Вищої Школи Психотерапії м. Одеса', 1 ,'Остап Бендер') ==>", Ostap);

//2
console.log('Ostap.getInfo ==>', Ostap.getInfo);

//3
console.log('Ostap.getMarks ==>', Ostap.getMarks);

//4
Ostap.setMarks = 5;
console.log('Ostap.setMarks = 5; Ostap.getMarks ==> ', Ostap.getMarks);

//5
console.log('Ostap.getAverageMark', Ostap.getAverageMark)

//6
Ostap.dismiss();
console.log('Ostap.dismiss() ==> ', Ostap);

Ostap.setMarks = 1;
console.log('Ostap.setMarks = 1; Ostap.getMarks ==>', Ostap.getMarks);
console.log('Ostap.getAverageMark ==>', Ostap.getAverageMark);
console.log('Ostap.marks ==>', Ostap.marks);

//7
Ostap.recover();
console.log('Ostap.recover() ==>', Ostap);

//Advanced

console.log('- Advanced -')

class BudgetStudent extends Student{
    constructor(university ,course ,fullName, isBudget, marks = [5, 4, 4, 5] , isActive = true){
        super(university ,course ,fullName, marks = [5, 4, 4, 5] , isActive = true)
        this.isBugget = isBudget,
        setInterval(this.getScholarship, 3000);
    }
    getScholarship = () => {
        if(this.isActive && (this.getAverageMark >= 4)){
            console.log('Ви отримали 1400 грн. стипендії!');  
        }else if(!this.isActive || this.getAverageMark < 4){
            console.log("Ви не отримали стипендію")
        }
    }
}

const bug = new BudgetStudent('Вищої Школи Психотерапії м. Одеса', 2 ,'Остап Бендер', true);
console.log("new BudgetStudent('Вищої Школи Психотерапії м. Одеса', 2 ,'Остап Бендер', true) ==>",bug);
