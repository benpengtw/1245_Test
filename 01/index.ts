

function sumFormula(n:number) {
  let result = 2;
  //邊際問題 +1為-1,加2補回去
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      result += i;
      // console.log(i,'+'+ result);
    } else {
      result -= i;
      // console.log(i,' '+ result);
    }
  }
  return result;
}



console.log(sumFormula(6));