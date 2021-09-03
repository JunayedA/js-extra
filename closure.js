// const bank = owner =>{
//     balance = 0;
//     return amount =>{
//         // balance = balance + amount;
//         balance += amount;
//         return balance;
//     }
// }
const bank = owner =>{
    balance = 0;
    return {
        deposit:amount =>{
            // balance = balance + amount;
            balance += amount;
            return balance;
        },
        withdraw:amount =>{
            // balance = balance + amount;
            balance -= amount;
            return balance;
        }
    }
}

const mofizBank = bank('mofiz');
console.log(mofizBank.deposit(100));
console.log(mofizBank.deposit(300));
console.log(mofizBank.balance);
console.log(mofizBank.deposit(200));
console.log(mofizBank.withdraw(200));
console.log(mofizBank.withdraw(300));