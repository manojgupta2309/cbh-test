const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the encrypted key when given input", () => {
    const trivialKey = deterministicPartitionKey({
      data:"test"
    });
    expect(trivialKey).toHaveLength(128);
  });

  it("Returns the partition key when given in input", () => {
    const trivialKey = deterministicPartitionKey({
      data:"test",
      partitionKey : 10000000000
    });
    expect(trivialKey).toBe("10000000000");
  });



});