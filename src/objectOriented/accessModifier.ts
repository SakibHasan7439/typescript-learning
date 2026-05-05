class BankAccount {
    readonly userId: number;
    userName: string;
    protected userBalance:  number;

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    addNewBalance(balance : number){
        this.userBalance += balance;
    }
}

class StudentAccount extends BankAccount {
    test(){
        this.userBalance
    }
}

const sakibAccount = new BankAccount(130, "Sakib", 500);
sakibAccount.addNewBalance(500);

console.log(sakibAccount);