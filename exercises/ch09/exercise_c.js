// 这道练习里，我们考虑具有以下类型签名的辅助函数：
//
//   validateEmail :: Email -> Either String Email
//   addToMailingList :: Email -> IO([Email])
//   emailBlast :: [Email] -> IO ()
//
// 用 `validateEmail`、`addToMailingList` 和 `emailBlast` 写一个函数：
// 如果邮箱合法，就把它加进邮件列表，然后通知整个列表。

// joinMailingList :: Email -> Either String (IO ())
const joinMailingList = undefined;
