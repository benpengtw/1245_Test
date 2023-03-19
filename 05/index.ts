// 如何用 js 實現 sql group by https://juejin.cn/post/7052101407826477092
// 不知如何計算每個地區的當選機率，所以沒有做

const candidates = [
  { name: 'A', city: 'Taipei', probability: 0.1, population: 3000000 },
  { name: 'B', city: 'New Taipei', probability: 0.2, population: 4000000 },
  { name: 'C', city: 'Taoyuan', probability: 0.3, population: 2000000 },
  { name: 'D', city: 'Hsinchu', probability: 0.15, population: 1000000 },
  { name: 'E', city: 'Miaoli', probability: 0.25, population: 500000 },
  { name: 'F', city: 'Taipei', probability: 0.05, population: 2000000 },
  { name: 'G', city: 'Taoyuan', probability: 0.1, population: 1500000 },
 ];
 

 type candidatesType = {
  name: string,
  city: string,
  probability: number,
  population: number
};


function groupByCity (n: candidatesType[]) {
  return n.reduce((group:any, candidates) => {
    const { city } = candidates;
    group[city] = group[city] ?? [];

    group[city].push(candidates);
    // 移除重複標籤
    group[city].forEach((object:any) => {
      delete object['city'];
    });
    return group;
  }, {})

}


console.log(groupByCity(candidates));