class parent {
    name : string;
    age : number;
    address : string

    constructor(name : string , age : number , address : string){
        this.name =name;
        this.age =age;
        this.address = address
    }

    getSleep(hour : number){
        console.log(`${this.name} daily sleep ${hour} hour`)
    }

   
}


class student extends parent {

    getStudy(hour : number){
        console.log(`${this.name} daily study in ${hour} hour`)
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


// const getUserInfo = (user: parent) => {
//     if(user instanceof student){
//         user.getSleep(10)
//     }else if(user instanceof Teacher){
//         user.getClass(14)
//     }else{
//         user.getSleep(8)
//     }

// }


const isStudent =(user: parent) =>{
    return user instanceof student

}

const isTeacher = (user:parent)=>{
    return user instanceof Teacher
}
//senior developer like
const getUserInfo = (user: parent) => {
    if(isStudent(user)){
        user.getSleep(10)
    }else if(isTeacher(user)){
        user.getClass(14)
    }else{
        user.getSleep(8)
    }

}


const student1 = new student("Uttam Sharma" , 25 , "Bangladesh")
getUserInfo(student1)


