/*
Calling a Function by fun.call()
 */

let account = {
    name: "Souleymane",
    number: 80778086,
    amount: 100,
    addAmt:function(amt){
        this.amount += amt
    }
}

let accountManager = {
    name: "Abdoulaye",
    managingAccountFor: account.name,
    addAmt:account.addAmt
}

accountManager.addAmt.call(account, 500)

console.log(account)
console.log(accountManager)