// 考虑下面这个函数：
//
//   const keepHighest = (x, y) => (x >= y ? x : y);
//
// 用辅助函数 `keepHighest` 重构 `max`，让它不再显式引用任何参数。

// max :: [Number] -> Number
const max = xs => reduce((acc, x) => (x >= acc ? x : acc), -Infinity, xs);
