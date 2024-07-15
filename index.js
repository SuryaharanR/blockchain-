const BlockchainManager = require('./blockchain-manager');

const manager = new BlockchainManager();

async function main() {
  await manager.addBlock('Block 1');
  await manager.addBlock('Block 2');
  console.log(await manager.getBlockchain());
}

main();