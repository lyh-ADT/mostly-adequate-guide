// 考虑下面这些函数：
//
//   readfile :: String -> String -> Task Error String
//   readdir :: String -> Task Error [String]
//
// 用 traversable 重新排列并展平嵌套的 Task 和 Maybe。

// readFirst :: String -> Task Error (Maybe (Task Error String))
const readFirst = compose(map(map(readfile('utf-8'))), map(safeHead), readdir);
