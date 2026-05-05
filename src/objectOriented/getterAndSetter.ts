class BankAccount {
    readonly userId: number;
    userName: string;
    protected userBalance:  number;

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    set addNewBalance(balance : number){
        this.userBalance += balance;
    }

    get getBalance(){
        return this.userBalance;
    }
}


const sakibAccount = new BankAccount(130, "Sakib", 500);
sakibAccount.addNewBalance = 1500;
sakibAccount.addNewBalance = 1500;
console.log(sakibAccount.getBalance);
console.log(sakibAccount);