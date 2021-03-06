'use strict';
{
  function createNums(n) {
    // ===================================================
    // 1~15,16~30,31~45,46~60,61~75の配列のソースを作る
    // ===================================================
    const source = [];
    for (let i = 0; i < 15; i++) {
      source[i] = i + 1 + 15 * n;
    }
    // ===================================================
    // sourceから５つの要素をランダムで取得する
    // ===================================================
    const column = [];
    for (let i = 0; i < 5; i++) {
      column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
      // spliceで元配列の要素数が減るため *15 だとundefinedありうる
    }　
    return column; // column配列をcreateSheetに渡す
  }
  
  // ===================================================
  // 配列からビンゴシートを作る
  // ===================================================
  const createSheet = []; // 配列の中に配列
  createSheet[0] = createNums(0);
  createSheet[1] = createNums(1);
  createSheet[2] = createNums(2);
  createSheet[3] = createNums(3);
  createSheet[4] = createNums(4);
  createSheet[2][2] = 'Free';
  
  
  // ===================================================
  // 配列を反転させる
  // ===================================================
  const newBingo = [];
  for (let col = 0; col < 5; col++) {
    newBingo[col] = []; // あらかじめ配列として初期化しないと代入できない
    for (let row = 0; row < 5; row++) {
      newBingo[col][row] = createSheet[row][col];
    }
  }

  // ===================================================
  // tableのtextとして追加する -> createElementからループさせる
  // ===================================================
  function createBingo() {
    
    for (let x = 0; x < 5; x++) {
      const tr = document.createElement('tr');
      for (let y = 0; y < 5; y++) {
        const td = document.createElement('td');
        td.textContent = newBingo[x][y];
        tr.appendChild(td);
      }
      document.querySelector('tbody').appendChild(tr);
    }
  }
  
  createBingo();
}