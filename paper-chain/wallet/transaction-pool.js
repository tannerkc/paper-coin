class TransactionPool{
    constructor(){
        this.transactions = []; 
    }

    updateOrAddTransaction(transaction){
        let transactiionWithId = this.transactions.find(t => t.id === transaction.id);

        if(transactiionWithId){
            this.transactions[this.transactions.indexOf(transactiionWithId)] = transaction;
        }else{
            this.transactions.push(transaction);
        }
    }

    existingTransaction(address){
        return this.transactions.find(t => t.input.address === address);
    }
}

module.exports = TransactionPool;