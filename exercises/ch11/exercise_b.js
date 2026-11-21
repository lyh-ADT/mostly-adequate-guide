// 用 `eitherToTask` 简化 `findNameById`，去掉嵌套的 `Either`。
//
//   // eitherToTask :: Either a b -> Task a b
//   const eitherToTask = either(Task.rejected, Task.of);

// findNameById :: Number -> Task Error (Either Error User)
const findNameById = compose(map(map(prop('name'))), findUserById);
