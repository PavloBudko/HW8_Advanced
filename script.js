/* basic */

class Student {
    constructor (university, course, fullName, marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
        this.isActiveStudent = true;
    }

    getInfo() {
        if (this.isActiveStudent) {
            return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}.`;
        }
        return `Дана особа не навчається Вищому навчальному закладі.`;
    }
    
    get allMarks() {
        if (this.isActiveStudent) {return this.marks;}
        return null;
    }
    
    set mark(number) {
        if (this.isActiveStudent) {return this.marks.push(number);}
        return null;
    }

    getAverageMark() {
        let averageMarks = this.marks.reduce((a, b) => a + b)
        return averageMarks / this.marks.length
    }
    
    dismiss() {
        this.isActiveStudent = false;
    }

    recover() {
        this.isActiveStudent = true;
    }

}

/* Advance */

class BudgetStudent extends Student {
    constructor (university, course, fullName, marks) {
        
        super(university, course, fullName, marks);
        this.getScholarship = setInterval(() => {
                if (this.getAverageMark() >= 4 && this.isActiveStudent) {
                    console.log(`Ви отримали 1400 грн. стипендії.`);
                }        
            }, 10000);
    }
}
       

const ostap = new Student("Вищої Школи Психотерапії м.Одеса", 1,
                          "Остап Родоманський Бендер", [5, 4, 4, 5]);

const roman = new BudgetStudent("Вища Школа Психотерапії м.Одеса", 5,
                          "Остап Бендер", [5, 5, 5, 5]);


console.log('Виводимо інформацію про студента : ', ostap.getInfo());
ostap.mark = 5;
console.log('Виводимо інформацію про оцінки студента : ', ostap.allMarks);
console.log('Виводимо інформацію про середню оцінку студента : ', ostap.getAverageMark());

ostap.dismiss();
console.log(`Виводимо інформацію після виключення студента : `, ostap.getInfo());


ostap.recover();
console.log(`Виводимо інформацію після поновлення студента : `, ostap.getInfo());


console.log('Новий студент : ', roman)
