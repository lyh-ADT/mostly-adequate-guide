// 重构一下，通过部分应用这些函数来去掉所有参数。

// filterQs :: [String] -> [String]
const filterQs = xs => filter(x => x.match(/q/i), xs);
