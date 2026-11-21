// 现在我们考虑下面这些值：
//
//   // getFile :: IO String
//   const getFile = IO.of('/home/mostly-adequate/ch09.md');
//
//   // pureLog :: String -> IO ()
//   const pureLog = str => new IO(() => console.log(str));
//
// 用 getFile 拿到文件路径，去掉目录、只保留文件名，
// 然后用纯函数把它打出来。提示：你可能想用 `split` 和 `last`
// 从文件路径里取出文件名。

// logFilename :: IO ()
const logFilename = undefined;
