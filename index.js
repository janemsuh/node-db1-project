const express = require('express');
const cors = require('cors');
const server = express();
const PORT = process.env.PORT || 5000;

const accountRouter = require('./routers/accountRouter');

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.json({
    message: 'The node-db1-project API is up!'
  });
});

server.use('/accounts', accountRouter);

server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`);
});
