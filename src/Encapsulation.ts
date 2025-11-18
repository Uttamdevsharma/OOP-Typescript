// “Encapsulation কি private আর protected দিয়েই করা হয়?”
// ✔ Encapsulation মূলত data hide করে method এর মাধ্যমে access control করার প্রক্রিয়া।
// 🔹 private, protected → hide করার উপায়
// 🔹 getter/setter বা method → control করার উপায়

// 👉 তাই encapsulation = data hiding (private/protected) + controlled access (methods)



class BankAccount {
   readonly userId : number;
   name : string;
   private userBalance : number;
   
    constructor(userId:number,name :string,userBalance:number){
        this.userId = userId;
        this.name = name;
        this.userBalance =userBalance
    }

   private set addBalance(amount : number){
        this.userBalance = this.userBalance + amount
    }

   private get UserBalance(){
        return this.userBalance
    }

    setHiddenBalance(amount : number){
        this.addBalance = amount

    }

    getHiddenBalance(){
        this.UserBalance
    }
}

// const user1 = new BankAccount(123,"Uttam Sharma",20)
// user1.addBalance = 100
// console.log(user1)
// console.log(user1.UserBalance)


//hidden method use 
const user1 = new BankAccount(123,"Uttam sharma",200)
user1.getHiddenBalance()
console.log(user1)

user1.setHiddenBalance(500)
console.log(user1)

