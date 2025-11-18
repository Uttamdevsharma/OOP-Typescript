

class BankAccount {
    readonly userId : number;
    name : string;
    // private userBalance : number;
    protected userBalance : number;

    constructor(userId : number , name : string , userBalance : number){
        this.userId =userId
        this.name = name
        this.userBalance=userBalance
    }

    // addBalance(amount : number) {
    //     this.userBalance = this.userBalance + amount
    // }


    //use setter
    set addBalance(amount : number){
        this.userBalance = this.userBalance + amount
    }


    // getBalance(){
    //     return this.userBalance
    // }


    //use getter
    get getBalance(){
        return this.userBalance
    }



}




const user1 = new BankAccount (123,"Uttam Sharma",20)
// user1.addBalance(100)
// user1.addBalance(50)

//use setter
user1.addBalance = 220
console.log(user1)


console.log(user1.getBalance)