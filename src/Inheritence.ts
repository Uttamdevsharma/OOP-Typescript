class parent {
    name : string;
    age : number;
    address : string

    constructor(name : string , age : number , address : string){
        this.name =name;
        this.age =age;
        this.address = address
    }

   
}


class student extends parent {

    getSleep(hour : number){
        console.log(`${this.name} daily sleep ${hour} hour`)
    }

}


class Teacher extends parent {
    designation : string

    constructor(name:string,age :number,address:string , designation:string){
        super(name,age,address)
        this.designation =designation
    }

    getClass(classTake : number){
        console.log(`${this.name} take class in ${classTake} hour`)
    }
}

const student1 = new student("Uttam Sharma" , 25 , "Bangladesh")
student1.getSleep(10)

const teacher = new Teacher("Umme Habiba",27 , "Bangladesh" , "Senior Teacher")
teacher.getClass(15)