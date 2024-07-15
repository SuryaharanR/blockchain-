const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
app.use(bodyParser.json());

let blockchain = [];

// Create the genesis block
const createGenesisBlock = () => {
  return {
    index: 0,
    timestamp: new Date().toISOString(),
    data: 'Genesis Block',
    prevHash: '0',
    hash: crypto.createHash('sha256').update('Genesis Block').digest('hex')
  };
};

// Initialize blockchain with genesis block
blockchain.push(createGenesisBlock());

app.post('/add-block', (req, res) => {
  const data = req.body.data;
  const prevBlock = blockchain[blockchain.length - 1];
  const newBlock = {
    index: prevBlock.index + 1,
    timestamp: new Date().toISOString(),
    data: data,
    prevHash: prevBlock.hash,
    hash: crypto.createHash('sha256').update(data).digest('hex')
  };
  blockchain.push(newBlock);
  res.json(newBlock);
});

app.get('/blockchain', (req, res) => {
  res.json(blockchain);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
