const Blockchain = require('./blockchain');

class BlockchainManager {
  constructor() {
    this.blockchain = new Blockchain();
  }

  async addBlock(data) {
    const block = this.blockchain.addBlock(data);
    return block;
  }

  async getBlockchain() {
    return this.blockchain.chain;
  }
}

module.exports = BlockchainManager;