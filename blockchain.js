class Blockchain {
    constructor() {
      this.chain = [];
    }
  
    addBlock(data) {
      const block = {
        data,
        timestamp: Date.now(),
        hash: this.calculateHash(data),
      };
      this.chain.push(block);
      return block;
    }
  
    calculateHash(data) {
      // implement your hash function here
      return 'hash-' + data;
    }
  }
  
  module.exports = Blockchain;