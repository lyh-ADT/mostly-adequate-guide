// 现在我们考虑下面这些函数：
//
//   // validateUser :: (User -> Either String ()) -> User -> Either String User
//   const validateUser = curry((validate, user) => validate(user).map(_ => user));
//
//   // save :: User -> IO User
//   const save = user => new IO(() => ({ ...user, saved: true }));
//
// 写一个函数 `validateName`，检查用户的名字是否超过 3 个字符；
// 否则返回一条错误信息。然后用 `either`、`showWelcome` 和 `save` 写一个 `register`
// 函数，在验证通过时注册用户并欢迎他。
//
// 记住：either 的两个参数必须返回相同的类型。

// validateName :: User -> Either String ()
const validateName = undefined;

// register :: User -> IO String
const register = compose(undefined, validateUser(validateName));
