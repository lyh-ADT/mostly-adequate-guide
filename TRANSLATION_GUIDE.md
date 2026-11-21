# 中译规范：《Professor Frisby's Mostly Adequate Guide to Functional Programming》

本仓库正在被翻译成简体中文。所有参与翻译的人（或 AI）都必须遵守以下规范，以保证全书语气统一、术语一致。

## 一、语气与风格（最重要）

原文是 Frisby 教授唠嗑式、自嘲式、充满吐槽的教程，不是教科书。翻译时必须做到：

1. **口语化，但不油滑。** 用"咱们""你""嘿""呢""罢了""压根儿""天杀的"这类词，避免"本文""笔者""综上所述""值得注意的是"这类论文腔。
2. **保留所有幽默。** 夸张的感叹（"这是 IT 界的无政府状态！"）、自嘲（"如果你没看懂这个程序，没关系，我也没看懂"）、对读者的调侃、括号里的碎碎念、荒诞比喻（海鸥、洋葱、保鲜盒、脏尿布、七月穿派克大衣）——一个都不能丢。宁可译得俏皮，也不要译得正确而无聊。
3. **双关与谐音**：优先在中文里找效果相近的俏皮说法；实在保不住时，可以加一句很短的括注（如"（英语里那句老话说……）"），但每章至多一两处，不要滥用。
4. **不要为了"通顺"删掉语气词和插入语**，也不要把小段落合并；原文的节奏（短句、破折号、反问、突然的一句吐槽）要留住。
5. **技术表述必须准确。** 宁可句子笨一点，也不能把概念译错。

### 语气示例（摘自第 1、2 章，已定稿，可直接模仿）

> 嗨！我是 Franklin Frisby 教授。很高兴认识你。接下来我们要相处一阵子了，因为我要教你一点函数式编程。不过说够我了，你呢？
>
> 到底是谁造出了这么个天杀的怪物？……这是 IT 界的无政府状态！这是野兽派算术！
>
> 就好比七月中旬你裹上最厚的派克大衣，把空调开到最大，然后要一根冰棍。

## 二、术语表（必须统一）

| 英文 | 中文 | 备注 |
| --- | --- | --- |
| functional programming | 函数式编程 | |
| pure function / purity | 纯函数 / 纯粹性 | impure 译"不纯" |
| side effect | 副作用 | |
| first class function | 一等函数 | 首次出现可括注 first class |
| higher-order function | 高阶函数 | |
| currying | 柯里化 | curried 译"柯里化的" |
| partial application | 部分应用 | |
| composition / compose | 组合 | |
| combinator | 组合子 | |
| pointfree | 无值风格 | 首次出现括注 pointfree |
| pointed (functor) | 指向函子 | 接口名 Pointed 保留英文 |
| functor | 函子 | |
| applicative (functor) | 应用函子 | |
| monad | 单子 | |
| monoid | 幺半群 | |
| semigroup | 半群 | |
| algebraic data type | 代数数据类型 | |
| memoization | 记忆化 | |
| referential transparency | 引用透明 | |
| equational reasoning | 等式推理 | |
| immutability / mutable | 不可变性 / 可变的 | |
| predicate | 谓词 | |
| reduce / reduction | 归约 | |
| traverse / sequence | 遍历 / 序列化 | 类型类名 Traversable / Traversable 保留英文 |
| isomorphism / isomorphic | 同构 | |
| natural transformation | 自然变换 | |
| type signature | 类型签名 | |
| identity (function) | 恒等（函数） | Identity 函子保留英文 |
| associative | 结合律 | "associative" 形容性质时译"满足结合律" |
| commutative | 交换律 | |
| distributive | 分配律 | |
| arity | 元数 | |
| container | 容器 | |
| lazy | 惰性 | |
| effect | 效应 | |
| nondeterminism | 不确定性 | |
| lens | 透镜 | |
| law | 定律 | 如 functor laws 译"函子定律" |
| Fantasy Land | Fantasy Land | 规范名保留 |
| Maybe / Either / IO / Task / Future / Identity / Compose / List / Map | 保留英文 | 首次出现可括注中文意思 |
| left / right | 左值 / 右值 | 指 Either 的两侧时保留 left/right 亦可 |

其他术语参照上表类推；同一术语全书只能有一种译法。每章中术语**首次出现**时，用"中文（English）"的形式括注原文（如"函子（functor）"）；同一章内不要重复括注，已有中文括注的地方也不要重复（如"幺半群（monoid，这个后面会学）"）。

## 三、格式规则

- **逐段对应**：一段对一段，不合并、不拆分段落（方便与英文原文对照 diff）。句子可以拆。
- **原样保留**：`<!--BREAK-->`；`{% exercise %}`、`{% initial ... %}`、`{% solution ... %}`、`{% validation ... %}`、`{% context ... %}`、`{% endexercise %}` 等 GitBook 标签及其中的路径；代码块的语言标记（如 ```js）；HTML 注释。
- **代码**：代码本身一个字符都不改（含字符串字面量、缩进、分号风格）；只把 `//` 或 `/* */` 注释译成中文，注释里的标识符、API 名保留英文。
- **行内代码**、标识符、库名（Ramda、lodash、Folktale、Sanctuary）、类型名、Fantasy Land 规范名保持英文。
- **链接**：URL 一字不改，链接文字翻译；章节间相对链接（如 `ch04.md`）不变。如果链接指向某个具体小节，锚点必须随标题一起本地化（例如 `ch08.md#我的第一个函子`），不能留着英文锚点导致断链。
- **图片**：`![alt](images/xxx.png)` 的路径不变，alt 文字可译。
- **标题**：`#` 一级标题使用下面"标准译名"表中的写法；`##`/`###` 小标题意译，保留含义与俏皮感（如 "8th Grade Math" → "八年级数学"）。
- **标点**：正文用中文全角标点（，。：；？！""——……）；中文与英文、中文与行内代码之间不额外加空格。
- **不要**添加译者前言、"译者按"段落、脚注编号或导读式内容（上面允许的短括注除外）。

## 四、章节标准译名（章末"下一章"链接文字也用这些）

| 文件 | 标题 |
| --- | --- |
| ch01.md | 第 01 章：我们到底在干什么？ |
| ch02.md | 第 02 章：一等函数 |
| ch03.md | 第 03 章：纯函数，纯粹的快乐 |
| ch04.md | 第 04 章：柯里化 |
| ch05.md | 第 05 章：用组合来编程 |
| ch06.md | 第 06 章：示例应用 |
| ch07.md | 第 07 章：Hindley-Milner 与我 |
| ch08.md | 第 08 章：保鲜盒 |
| ch09.md | 第 09 章：单子洋葱 |
| ch10.md | 第 10 章：应用函子 |
| ch11.md | 第 11 章：自然而然地再变换 |
| ch12.md | 第 12 章：穿越石头 |
| ch13.md | 第 13 章：幺半群把一切聚拢 |
| appendix_a.md | 附录 A：必备函数支持 |
| appendix_b.md | 附录 B：代数结构支持 |
| appendix_c.md | 附录 C：无值风格工具函数 |

## 五、自检清单

1. 翻译前先用 `git show HEAD:<文件名> | grep -c '^```'` 记录原文的代码围栏数、`grep -c '^#'` 记录标题数、`grep -o '](' | wc -l` 记录链接数；译完后逐一核对（围栏必须是偶数且数量一致）。
2. 通读一遍，确认没有整句英文残留（术语、代码、专有名词除外）。
3. 确认 GitBook 标签、`<!--BREAK-->`、图片路径、链接 URL 完好。
4. 确认读起来像"一个爱开玩笑的教授在讲课"，而不是产品说明书。
