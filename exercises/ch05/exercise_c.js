// 用 `compose()` 和其他函数以无值风格（pointfree）重构 `fastestCar`。

// fastestCar :: [Car] -> String
const fastestCar = (cars) => {
  const sorted = sortBy(car => car.horsepower, cars);
  const fastest = last(sorted);
  return concat(fastest.name, ' is the fastest');
};
