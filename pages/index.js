import React from "react";
import Blockchain from "../result/blockchain";

const bc = new Blockchain();

const Index = () => {
  let isStop = false;
  const startMining = async () => {
    console.log("채굴 시작");
    isStop = false;
    while (!isStop) {
      await bc.mining();
    }
  };
  const stopMining = () => {
    console.log("채굴 정지");
    isStop = true;
  };
  return (
    <div>
      <button onClick={startMining}>시작</button>
      <button onClick={stopMining}>정지</button>
    </div>
  );
};

export default Index;
