// Polymorphism হল OOP-এর একটি pillar যেখানে একই method name ভিন্ন class/object-এ ভিন্ন আচরণ করে। এটি মূলত method overriding-এর মাধ্যমে achieve করা হয়।


class Person {

    getSleep(){
        console.log("I am normal person, i sleep in 8 hour")
    }
}

class Student extends Person {

    getSleep(){
        console.log("I am student, i sleep in 7 hour")
    }

}

class NextLevelStudent  extends Person {
    getSleep(){
        console.log("I am programmer, i am sleep in 6 hour")
    }
}


const SleepHourCount = (person : Person)=>{
    person.getSleep()
}



// const instance1 = new Person()
// const instance2= new Student()
// const instance3 = new NextLevelStudent()

// SleepHourCount(instance3)









class Shape {

    getArea(){
        return 0
    }
}

class Cirle extends Shape {

    radius : number;

    constructor(radius : number){
        super()
        this.radius =radius
    }
    getArea(){
        return Math.PI * this.radius * this.radius

    }
    
}


class Reactangle extends Shape {
    height : number;
    width : number;
    constructor(height:number , width :number){
        super()
        this.height = height;
        this.width =width
    }

    getArea(){
        return this.height * this.width
    }
}


const Area = (param : Shape) => {
    console.log(param.getArea())
}


const instance1 = new Shape()
const instance2 = new Cirle(10)
const instance3 = new Reactangle(10,20)


Area(instance3)