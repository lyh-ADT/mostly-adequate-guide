// 考虑下面这些元素：
//
//   // httpGet :: Route -> Task Error JSON
//   // routes :: Map Route Route
//   const routes = new Map({ '/': '/', '/about': '/about' });
//
// 用 traversable 接口改变 `getJsons` 的类型签名。
//
//   getJsons :: Map Route Route -> Task Error (Map Route JSON)

// getJsons :: Map Route Route -> Map Route (Task Error JSON)
const getJsons = map(httpGet);
