const express = require('express');
const app = express();
const BlockchainManager = require('./blockchain-manager');

const manager = new BlockchainManager();

app.use(express.json());

app.post('/add-block', async (req, res) => {
  const data = req.body.data;
  const block = await manager.addBlock(data);
  res.json(block);
});

app.get('/blockchain', async (req, res) => {
  const blockchain = await manager.getBlockchain();
  res.json(blockchain);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});