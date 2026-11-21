// 给定下面这些辅助函数：
//
//   // showWelcome :: User -> String
//   const showWelcome = compose(concat('Welcome '), prop('name'));
//
//   // checkActive :: User -> Either String User
//   const checkActive = function checkActive(user) {
//     return user.active
//       ? Either.of(user)
//       : left('Your account is not active');
//   };
//
// 写一个函数，用 `checkActive` 和 `showWelcome` 来放行，或者返回错误。

// eitherWelcome :: User -> Either String String
const eitherWelcome = undefined;
