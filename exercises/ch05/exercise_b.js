// 考虑下面这个函数：
//
//   const average = xs => reduce(add, 0, xs) / xs.length;
//
// 用辅助函数 `average` 把 `averageDollarValue` 重构成一个组合。

// averageDollarValue :: [Car] -> Int
const averageDollarValue = (cars) => {
  const dollarValues = map(c => c.dollar_value, cars);
  return average(dollarValues);
};
