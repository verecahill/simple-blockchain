const Block = require("./block");
const Transaction = require("./transaction");

// 블록체인 설계도
class Blockchain {
  constructor(blockchain) {
    this.blockchain = blockchain || [Block.getGenesis()]; // 기존 블록체인이 존재하지 않으면 제네시스 블록을 넣어서 초기화 한다.
    this.transactions = [];
    this.mempool = [];
  }

  // 트랜잭션 멤풀에 추가
  addTx(tx) {
    this.mempool.push(tx);
  }

  // 블록을 블록체인에 추가
  addBlock(block) {
    this.blockchain.push(block);
  }
  //채굴
  mining() {
    console.log("채굴");
    const transactions = [...this.mempool];
    this.mempool = [];
  }
}
