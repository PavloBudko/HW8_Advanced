//1.У стдентів повинні бути наступні властивост

class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [5, 4, 4, 5]
        this.dismiss = false;
    }
    //2.Створіть метод this.getInfo()

    get getInfo() {
        return `Student ${this.course} cours, from ${this.university}, ${this.fullName}`;
    }
    //3.Створіть геттер оцінок this.marks
    get getMarks() {
        if (this.dismiss) return null
        return this.marks
    }
    //4.Створіть сеттер оцінок this.marks = 5
    set setMarks(newMark) {
        if (this.dismiss) return null
        return this.marks.push(newMark);
    }
    //5.Створіть метод отримання середнього балу this.getAverageMark()
    get getAverageMark() {
        let averageMarks = this.marks.reduce((a, b) => a + b)
        return averageMarks / this.marks.length
    }
    //6.Створіть метод this.dismiss, який "виключить" студента
    setDismiss() {
        return this.dismiss ? this.dismiss = false : this.dismiss = true;
    }
}

//Advanced

class BudgetStudent extends Student {
    constructor(university, course, fullName,scholarship) {
        super(university, course, fullName)
        this.scholarship = scholarship;
        this.interval = setInterval(this.getScolarShip.bind(this), 5000)
    }

    getScolarShip() {
        
        if (!this.dismiss && this.getAverageMark >= 4) return console.log(`Ви отримали стиепндію ${this.scholarship} UAH `)
        return
    }

}

const ostap = new Student('Вища Школа Психотерапії м.Одеса', 1, 'Остап Бендер')
console.log('Task 2 : ',ostap.getInfo)
ostap.setMarks=5
console.log('Task 4 : ',ostap.getMarks)
console.log('Task 5 : ',ostap.getAverageMark)
ostap.setDismiss()
console.log('Task 6 : ',ostap.getMarks)
ostap.setDismiss()
console.log('Task 6 : ',ostap.getMarks)


const budgetOstap = new BudgetStudent('Вища Школа Психотерапії м.Одеса', 5, 'Остап Бендер',1400)
console.log('Новий студент : ',budgetOstap)
