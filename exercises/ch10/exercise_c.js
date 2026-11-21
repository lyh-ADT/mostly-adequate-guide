// 这道练习里，我们考虑下面这些辅助函数：
//
//   const localStorage = {
//     player1: { id:1, name: 'Albert' },
//     player2: { id:2, name: 'Theresa' },
//   };
//
//   // getFromCache :: String -> IO User
//   const getFromCache = x => new IO(() => localStorage[x]);
//
//   // game :: User -> User -> String
//   const game = curry((p1, p2) => `${p1.name} vs ${p2.name}`);
//
// 写一个 IO：从缓存里取出 player1 和 player2，然后开始游戏。

// startGame :: IO String
const startGame = undefined;
