const hash = require("hash.js");

class Block {
  constructor(data) {
    this.index = data.index; // block number
    this.preHash = data.preHash; // 이전블록헤더해시
    this.timestamp = data.timestamp; // 타임스탬프
    this.nonce = data.nonce; // 해시퍼증정답
    this.difficulty = data.difficulty; // 난이도
    this.hash = data.hash; // 현재블록해시
    this.transactions = data.transactions; // 트랜잭션 리스트
  }

  static getGenesis() {
    const genesisData = {
      index: 0,
      preHash: 0,
      timestamp: Date.now(),
      transactions: ["제2의 구제금융"],
      difficulty: 1,
      nonce: 0,
      hash: "GENESIS BLOCK",
    };
    const genesisBlock = new Block(genesisData);
    return genesisBlock;
  }

  getHash() {
    const resultHash = hash
      .sha256()
      .update(
        this.index +
          this.preHash +
          this.timestamp +
          this.transactions +
          this.nonce
      )
      .digest("hex");
    return resultHash;
  }
}

const data = { index: 123, preHash: "hello", timestamp: "123" };
const block1 = new Block(data);
const result = block1.getHash();

console.log(Block.getGenesis());
// console.log(result);

module.exports = Block;
