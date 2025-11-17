//typeof guard
type Both = number | string

const add = (param1 : Both , param2 : Both)=>{
    if(typeof param1 === 'number' && typeof param2 === 'number'){
        return param1 + param2
    }else{
        return param1.toString() + param2.toString()
    }
}

const res = add(2,3)
console.log(res)
const res1 = add('2',3)
console.log(res1)





//in guard

type NormalUser = {
    name :string
}

type AdminUser = {
    name :string,
    role : string
}

const getUserInfo = (user: NormalUser | AdminUser)=>{
    if("role" in user){
        console.log(` Username is ${user.name} and role ${user.role}`)
    }else {
        console.log(`username is ${user.name}`)
    }

}

getUserInfo({name : "Uttam Sharma",role: "Admin"})