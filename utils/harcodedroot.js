const MerkleTree = require('./MerkleTree');
const niceList = require('./niceList');

const merkleTree = new MerkleTree(niceList);
const root = merkleTree.getRoot();

console.log('root', root);
