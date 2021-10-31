const Wallet = require('./wallet')
// const Blockchain = require('./blockchain/index');


// const bc = new Blockchain();

// for(let i=0; i<10; i++){
//     console.log(bc.addBlock(`foo ${i}`).toString())
// }


const wallet = new Wallet();
console.log(wallet.toString())