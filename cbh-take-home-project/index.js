const {deterministicPartitionKey} = require("./dpk");

console.log(deterministicPartitionKey());
console.log(deterministicPartitionKey({partitionKey:50}));
console.log(deterministicPartitionKey({data:"test"}));