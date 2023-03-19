// 定義獎品類型
type Prize = {
  name: string;
  count: number;
  remain: number;
  probability:number
};
// 獎品列表
const prizes: Prize[] = [
  { name: "一獎", count: 1, remain: 1, probability: 0.03 },
  { name: "二獎", count: 1, remain: 1, probability: 0.07 },
  { name: "三獎", count: 2, remain: 2, probability: 0.3 },
  { name: "四獎", count: 3, remain: 3, probability: 0.2 },
  { name: "五獎", count: 7, remain: 7, probability: 0.4 },
];

// 抽獎函數
function draw(prizes: Prize[]): string {
  // 計算總獎品數量
  const total = prizes.reduce((sum, prize) => sum + prize.count, 0);

  // 如果沒有獎品了，返回“已抽完”的消息
  if (total === 0) {
    return "已抽完";
  }

  // 計算獎項中獎概率總和
  // 權重池
  const probabilitySum = prizes.reduce((sum, prize) => sum + prize.probability, 0);

  // 隨機生成一個 0 到 1 之間的隨機數，表示中獎概率
  const rand = Math.random() * probabilitySum;

  // 根據中獎概率確定抽中的獎品
  // 與權重池比較
  let prize: Prize | null = null;
  let sum = 0;
  for (let i = 0; i < prizes.length; i++) {
    sum += prizes[i].probability;
    if (rand < sum) {
      prize = prizes[i];
      break;
    }
  }

  // 如果該獎品已經抽完，重新抽獎
  if (prize && prize.remain === 0) {
    return draw(prizes.filter(p => p !== prize));
  }

  // 減少該獎品的剩餘數量
  if (prize) {
    prize.remain--;
  }

  // 返回抽中的獎品名稱
  return prize ? prize.name : "";
}

// 抽 10 次獎
for (let i = 0; i < 15; i++) {
  console.log(draw(prizes));
}
