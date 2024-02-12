const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  if (process.argv.length !== 3) {
    console.error('expected 1 argument, received', process.argv.length - 2);
    process.exit(1);
  }

  const leafName = process.argv[2];
  const leafIndex = niceList.indexOf(leafName);

  const merkleTree = new MerkleTree(niceList);
  const proof = merkleTree.getProof(leafIndex);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    leafName,
    proof,
  });

  console.log({ gift });
}

main();
