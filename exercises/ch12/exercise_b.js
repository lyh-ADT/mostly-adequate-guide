// 用 traversable 和 `validate` 函数改写 `startGame`（连同它的签名），
// 让游戏只在所有玩家都合法时才开局。
//
//   // validate :: Player -> Either String Player
//   validate = player => (player.name ? Either.of(player) : left('must have name'));

// startGame :: [Player] -> [Either Error String]
const startGame = compose(map(map(always('game started!'))), map(validate));
