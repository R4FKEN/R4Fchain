const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();


const bc1 = 
{
"chain": [
{
"index": 1,
"timestamp": 1532621793313,
"transactions": [],
"nonce": 100,
"hash": "0",
"previousBlockHash": "0"
},
{
"index": 2,
"timestamp": 1532621825962,
"transactions": [],
"nonce": 18140,
"hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
"previousBlockHash": "0"
},
{
"index": 3,
"timestamp": 1532621886781,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "4328c91090ef11e880dc7904e1cf6cf4",
"transactionId": "56a1fc0090ef11e880dc7904e1cf6cf4"
},
{
"amount": 10,
"sender": "RAFRAFRAF",
"recipient": "EEFEEFEEF",
"transactionId": "6d8c12c090ef11e880dc7904e1cf6cf4"
},
{
"amount": 20,
"sender": "RAFRAFRAFRAF",
"recipient": "EEFEEFEEFEEF",
"transactionId": "74e135a090ef11e880dc7904e1cf6cf4"
},
{
"amount": 30,
"sender": "RAFRAFRAFRAF",
"recipient": "EEFEEFEEFEEF",
"transactionId": "77cf54e090ef11e880dc7904e1cf6cf4"
}
],
"nonce": 125785,
"hash": "000090710157419b18d7b1a7629488c196cc92236ad6d7a954591f9d15fde28a",
"previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
},
{
"index": 4,
"timestamp": 1532621930487,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "4328c91090ef11e880dc7904e1cf6cf4",
"transactionId": "7adf540090ef11e880dc7904e1cf6cf4"
},
{
"amount": 40,
"sender": "RAFRAFRAFRAF",
"recipient": "EEFEEFEEFEEF",
"transactionId": "8961514090ef11e880dc7904e1cf6cf4"
},
{
"amount": 50,
"sender": "RAFRAFRAFRAF",
"recipient": "EEFEEFEEFEEF",
"transactionId": "8c4fbea090ef11e880dc7904e1cf6cf4"
},
{
"amount": 60,
"sender": "RAFRAFRAFRAF",
"recipient": "EEFEEFEEFEEF",
"transactionId": "8e9764b090ef11e880dc7904e1cf6cf4"
},
{
"amount": 70,
"sender": "RAFRAFRAFRAF",
"recipient": "EEFEEFEEFEEF",
"transactionId": "9200323090ef11e880dc7904e1cf6cf4"
}
],
"nonce": 34501,
"hash": "000030c0d160f3bb019b8bd296e469ee971e84979d2c5c987fec97945bf3a242",
"previousBlockHash": "000090710157419b18d7b1a7629488c196cc92236ad6d7a954591f9d15fde28a"
},
{
"index": 5,
"timestamp": 1532621945487,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "4328c91090ef11e880dc7904e1cf6cf5",
"transactionId": "94ec55a090ef11e880dc7904e1cf6cf4"
}
],
"nonce": 47577,
"hash": "0000c04f52cfbbc35317d2198ae23f76c4cc4c59e6afe28c83feb2612a9ce6ad",
"previousBlockHash": "000030c0d160f3bb019b8bd296e469ee971e84979d2c5c987fec97945bf3a242"
},
{
"index": 6,
"timestamp": 1532621947774,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "4328c91090ef11e880dc7904e1cf6cf4",
"transactionId": "9ddd001090ef11e880dc7904e1cf6cf4"
}
],
"nonce": 64081,
"hash": "0000a11d20142180899af0371eea5653e34ba4fea5bd08b905421e2802c9c6d0",
"previousBlockHash": "0000c04f52cfbbc35317d2198ae23f76c4cc4c59e6afe28c83feb2612a9ce6ad"
}
],
"pendingTransactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "4328c91090ef11e880dc7904e1cf6cf4",
"transactionId": "9f3bccc090ef11e880dc7904e1cf6cf4"
}
],
"currentNodeUrl": "http://localhost:3001",
"networkNodes": []
};






console.log('VALID: ', bitcoin.chainIsValid(bc1.chain));