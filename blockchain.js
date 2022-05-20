const Block = require("./block");
const Transaction = require("./transaction");
const { BN } = require("bn.js");

// 블록체인 설계도
class Blockchain {
  constructor(blockchain) {
    this.blockchain = blockchain || [Block.getGenesis()]; // 기존 블록체인이 존재하지 않으면 제네시스 블록을 넣어서 초기화 한다.
    this.mempool = [];
  }

  // 트랜잭션 멤풀에 추가
  addTx(tx) {
    this.mempool.push(tx);
  }

  // 블록을 블록체인에 추가
  addBlock(block) {
    // 유효성 검증
    const valid = new Validation();
    const lastBlock = this.blockchain[this.blockchain.length - 1];
    if (
      valid.isValidLenght(this.blockchain, block) &&
      valid.isValidBlock(lastBlock, block)
    ) {
      this.blockchain.push(block);
      console.log("추가된 블록", block);
    }
  }
  //채굴
  mining() {
    console.log("채굴");
    // 멤풀의 트랜잭션리스트를 블록에 담기 위해 가져옴
    const transactions = [...this.mempool];
    // 멤풀 초기화
    this.mempool = [];
    // 마지막 블록 가져오기
    const lastBlock = this.blockchain[this.blockchain.length - 1];
    // 마지막 블록 해시는 새로 만들어질 블록의 이전해시
    const preHash = lastBlock.hash;
    // 목표값을 위한 난이도
    const difficulty = lastBlock.difficulty;
    // 블록 넘버
    const index = lastBlock.index;
    // 새로운 블록 만들기
    const newBlock = new Block({
      index: index + 1,
      preHash: preHash,
      timestamp: Date.now(),
      transactions: transactions,
      nonce: 0,
    });
    // 해시값과 목표값을 비교해서 목표값보다 해시값이 작을경우 블록을 생성하도록 되어 있다.
    const target = this.getTarget(difficulty);
    // 반복문 종료하기 위해서 target
    while (!(newBlock.getHash() <= target)) {
      // nonce를 증가 시킨다
      newBlock.nonce++;
      // console.log("hash", newBlock.getHash());
      // console.log("target", target);
      // console.log("nonce ", newBlock.nonce);
    }
    // 정답 해시 받기
    console.log("target", target);
    console.log("통과해시", newBlock.getHash());

    // 난이도 조절 필요
    newBlock.hash = newBlock.getHash();
    const newDifficulty = this.getDifficulty(difficulty);
    newBlock.difficulty = newDifficulty;
    this.addBlock(newBlock);
  }

  getDifficulty(difficulty) {
    const lastBlock = this.blockchain[this.blockchain.length - 1]; // lastblock 확인
    // lastblock index = 0는 제내시스 블록
    // 10개 단위로 평균 생성 시간을 비교한다.
    if (lastBlock.index > 0 && lastBlock.index % 10 == 0) {
      // 라스트 블록 기준으로 10개 전의 블록 타임스탬프
      let prevTime = this.blockchain[this.blockchain.length - 10].timestamp;
      let lastTime = lastBlock.timestamp;
      // 평균 블록 생성 시간
      let avgTime = (lastTime - prevTime) / 10 / 1000;
      // 평균시간이 20초보다 빠르면 난이도를 올려주고, 20초 보다 느리면 난이도를 낮춘다
      let multiple = avgTime < 20 ? 4 : 1 / 4;
      // 난이도 변경
      difficulty = difficulty * multiple;
      console.log("변경된 난이도", difficulty);
    }
    return difficulty;
  }

  getTarget(difficulty) {
    const HADICAP = 0x4000000;
    let bits = this.difficultyToBits(difficulty);
    bits = bits + HADICAP;
    let bits16 = parseInt("0x" + bits.toString(16), 16);
    let exponent = bits16 >> 24;
    let mantissa = bits16 & 0xffffff;
    let target = mantissa * 2 ** (8 * (exponent - 3));
    let target16 = target.toString(16);
    let k = Buffer.from("0".repeat(64 - target16.length) + target16, "hex");
    return k.toString("hex");
  }

  // 난이도를 이용해서 비트구하기
  difficultyToBits(difficulty) {
    const maximumTarget = "0x00000000ffff" + "0".repeat(64 - 12);
    const difficulty16 = difficulty.toString(16);
    let target = parseInt(maximumTarget, 16) / parseInt(difficulty16, 16);
    let num = new BN(target.toString(16), "hex");
    let compact, nSize, bits;
    nSize = num.byteLength();
    if (nSize <= 3) {
      compact = num.toNumber();
      compact <<= 8 * (3 - nSize);
    } else {
      compact = num.ushrn(8 * (nSize - 3)).toNumber();
    }
    if (compact & 0x800000) {
      compact >>= 8;
      nSize++;
    }
    bits = (nSize << 24) | compact;
    if (num.isNeg()) {
      bits |= 0x800000;
    }
    bits >>>= 0;
    return parseInt(bits.toString(10));
  }
}

const bc = new Blockchain();
// bc.mining();

// while (true) {
//   bc.mining();
// }
