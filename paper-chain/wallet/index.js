const ChainUtil = require('../chain-util');
const {INIT_BAL} = require('../config');
const Transaction = require('./transaction');

class Wallet{
    constructor(){
        this.balance = INIT_BAL;
        this.keyPair = ChainUtil.genKeyPair();
        this.publicKey = this.keyPair.getPublic().encode('hex');
    }

    toString(){
        return `Wallet -
            publicKey: ${this.publicKey.toString()}
            balance  : ${this.balance}
        `;
    }

    sign(dataHash){
        return this.keyPair.sign(dataHash);
    }

    createTransaction(recipient, amount, transactionPool){
        if(amount > this.balance){
            console.log(`Amount: ${amount} exceeds balance: ${this.balance}`);
            return;
        }
        
        let transaction = transactionPool.existingTransaction(this.publicKey);

        if(transaction){
            transaction.update(this, recipient, amount);
        }
        else{
            transaction = Transaction.newTransaction(this, recipient, amount);
            transactionPool.updateOrAddTransaction(transaction);
        }

        return transaction
    }
}

module.exports = Wallet;