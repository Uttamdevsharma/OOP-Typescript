

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

    addBalance(amount : number) {
        this.userBalance = this.userBalance + amount
    }
}

class studentAccount extends BankAccount {
    test(){
    
    }
}


const user1 = new BankAccount (123,"Uttam Sharma",20)
user1.addBalance(100)
console.log(user1)