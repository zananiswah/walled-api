class TransactionResponse{
    constructor(transaction){
        this.date = transaction.date;
        this.type = transaction.type;
        this.fromTo = transaction.fromTo;
        this.description = transaction.description;
        this.amount = transaction.amount;
    }
}

module.exports = {TransactionResponse};