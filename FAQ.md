## 常见问题

- [为什么代码片段有时带分号，有时不带？](#为什么代码片段有时带分号有时不带)
- [像 _（ramda）或 $（jquery）这样的外部库，不会让调用变得不纯吗？](#像-_ramda或-jquery这样的外部库不会让调用变得不纯吗)
- [类型签名里的 `f a` 是什么意思？](#类型签名里的-f-a-是什么意思)
- [有没有什么“真实世界”的例子？](#有没有什么真实世界的例子)
- [这本书为什么用 ES5？有 ES6 版本吗？](#这本书为什么用-es5有-es6-版本吗)
- [那个 reduce 函数到底是什么鬼？](#那个-reduce-函数到底是什么鬼)
- [你们就不能用简化英语吗，非得用现在这种文风？](#你们就不能用简化英语吗非得用现在这种文风)
- [Either 是什么？Future 是什么？Task 是什么？](#either-是什么future-是什么task-是什么)
- [map、filter、compose……这些方法是从哪来的？](#mapfiltercompose这些方法是从哪来的)

### 为什么代码片段有时带分号，有时不带？

> 见 [#6]

JavaScript 有两大流派：用分号的，和不用分号的。我们在这里选择了用分号，并且努力跟这个选择保持一致。要是哪里漏了分号，请告诉我们，我们会把这个疏漏补上。

### 像 _（ramda）或 $（jquery）这样的外部库，不会让调用变得不纯吗？

> 见 [#50]

这些依赖就当作语言的一部分，仿佛存在于全局上下文里。所以，不会，调用仍然可以看作纯的。
想深入的话，可以看看[这篇关于 CoEffects 的文章](http://tomasp.net/blog/2014/why-coeffects-matter/)。

### 类型签名里的 `f a` 是什么意思？

> 见 [#62]

在像这样的签名里：

`map :: Functor f => (a -> b) -> f a -> f b`

`f` 指的是一个`函子`（functor），比如 Maybe 或 IO。于是，签名用类型变量抽象掉了函子的具体选择，这基本上意味着：只要所有 `f` 都是同一个类型，`f` 所在的位置可以用任何函子（如果签名里第一个 `f a` 表示 `Maybe a`，那么第二个就**不能**指向 `IO b`，而应该是 `Maybe b`）。比如：

```javascript
let maybeString = Maybe.of("Patate")
let f = function (x) { return x.length }
let maybeNumber = map(f, maybeString) // Maybe(6)

// 用下面这个“精化”过的签名：
// map :: (string -> number) -> Maybe string -> Maybe number
```

### 有没有什么“真实世界”的例子？

> 见 [#77]、[#192]

如果你还没读到那儿，可以看看[第 6 章](https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/ch06.md)，里面演示了一个简单的 flickr 应用。
其他例子以后大概还会有。顺便说一句，欢迎跟我们分享你的经验！

### 这本书为什么用 ES5？有 ES6 版本吗？

> 见 [#83]、[#235]

这本书的目标是尽可能让更多人读得懂。它动笔的时候 ES6 还没发布；现在新标准越来越被接受，我们正在考虑出两个分开的版本，一个 ES5、一个 ES6。社区成员已经在做 ES6 版本了（更多信息见 [#235]）。

### 那个 reduce 函数到底是什么鬼？

> 见 [#109]

Reduce、accumulate、fold、inject 都是函数式编程里常见的函数，用来把一个数据结构的元素逐个合并起来。你可以看看[这个演讲](https://www.youtube.com/watch?v=JZSoPZUoR58&ab_channel=NewCircleTraining)，对 reduce 函数会有更多了解。

### 你们就不能用简化英语吗，非得用现在这种文风？

> 见 [#176]

这本书有它自己的风格，这风格让全书保持统一。要是你对英语不熟，就把它当成一种很好的训练。不过，如果你有时候需要帮助才能理解意思，现在已经有[好几个译本](https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/TRANSLATIONS.md)了，多半能帮上忙。

### Either 是什么？Future 是什么？Task 是什么？

> 见 [#194]

这些结构我们会在书里逐一介绍。所以，你不会遇到任何之前没定义过的结构。要是对这些类型感到别扭，别犹豫，回去把前面的部分再读一遍。
最后会有一个术语表/随身手册，把这些概念汇总起来。

### map、filter、compose……这些方法是从哪来的？

> 见 [#198]

大多数时候，这些方法都定义在特定的第三方库里，比如 `ramda` 或 `underscore`。你也应该看看[附录 A](./appendix_a.md)、[附录 B](./appendix_b.md) 和[附录 C](./appendix_c.md)，我们在那里定义了几个练习里用到的实现。这些函数在函数式编程里非常常见，虽然实现可能略有不同，但它们在各个库之间的含义相当一致。

[#6]: https://github.com/MostlyAdequate/mostly-adequate-guide/issues/6
[#50]: https://github.com/MostlyAdequate/mostly-adequate-guide/issues/50
[#62]: https://github.com/MostlyAdequate/mostly-adequate-guide/issues/62
[#77]: https://github.com/MostlyAdequate/mostly-adequate-guide/issues/77
[#83]: https://github.com/MostlyAdequate/mostly-adequate-guide/issues/83
[#109]: https://github.com/MostlyAdequate/mostly-adequate-guide/issues/109
[#176]: https://github.com/MostlyAdequate/mostly-adequate-guide/issues/176
[#192]: https://github.com/MostlyAdequate/mostly-adequate-guide/issues/192
[#194]: https://github.com/MostlyAdequate/mostly-adequate-guide/issues/194
[#198]: https://github.com/MostlyAdequate/mostly-adequate-guide/issues/198
[#235]: https://github.com/MostlyAdequate/mostly-adequate-guide/pull/235
