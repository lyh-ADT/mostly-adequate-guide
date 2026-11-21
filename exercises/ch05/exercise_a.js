// 我们考虑下面这种形状的 Car 对象：
//
//   {
//     name: 'Aston Martin One-77',
//     horsepower: 750,
//     dollar_value: 1850000,
//     in_stock: true,
//   }
//
// 用 `compose()` 重写下面的函数。


// isLastInStock :: [Car] -> Boolean
const isLastInStock = (cars) => {
  const lastCar = last(cars);
  return prop('in_stock', lastCar);
};
