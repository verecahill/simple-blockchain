class Validation {
  // 1. 블록체인의 길이 - 1 === 인덱스(블록넘버)
  isValidLenght(blockchain, newBlock) {
    const result = blockchain.length === newBlock.index;
    if (!result) {
      console.log("길이가 유효하지 않습니다.");
    } else {
      console.log("길이가 유효한 블록입니다.");
    }
    return result;
  }
  // 2. 이전블록의 해시 === 새로운 블록의 이전해시
  isValidBlock(prevBlock, newBlock) {
    const result = prevBlock.hash === newBlock.preHash;
    if (!result) {
      console.log("블록이 유효하지 않습니다.");
    } else {
      console.log("유효한 블록입니다.");
    }
    return result;
  }
  // 3. 블록체인 내부의 모든 블록이 서로 연결이 잘 되었는지? -> 초기화
}

module.exports = Validation;
