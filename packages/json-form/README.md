# 

json => ui 
其实最关键的就是加上uitag 和具体方法

form 关心的ui 有众多表单组件 和错误提示
- ui 组件的参数都需要配置
  - 基础样式
  - 数据国际化显示 meta dict
  - 
- ui 更新 这个可以研究一下 dom 节点的增删改查和移动
  - ui 在数据校验错误时应显示错误
具体的方法则包括了以下功能
- 数据初始值
- 数据校验 json 中可以定义各种rule（这个rule实际上也可以用 pattern进行匹配）还有常见的诸如 required 等，数据类型等 （大部分都通过 ajv 直接秒杀）
- 数据联动，一个东西的变更应该引起另一个的变化，这个注册回调和触发回调就行 或者有的也可以双向绑定
- 数据联动也包括了远程获取等其他变化的手段

## 一个表单组件通常有什么结构呢
- 最为基本的
  - label 提示是什么
  - input 提示怎么输入
- 其他的
  - 错误提示 errorMessage warnMessage
  - 输入提示 placeholder 其他提示
  - 输入统计 字数等等
  - 清除输入 reset
  - 
- 逻辑上 最为基本的
  - 只要能输入就行了（可以万物皆文本框）
- 逻辑上 其他的
  - 判断输入是否正确（这可太多了） 这个可以都交给 ajv 判断是无穷无尽的，ajv 有时候用起来太过复杂 则可以使用函数进行解决 所以提供一个注册判断函数的组件
  - 限制输入 除了判断也可以限制输入（限制输入不限于定制表单组件）
  - 是否可以为空
  - 其他联动
    - 远程获取
    - 表单组件之间的影响
## 数据之间有什么关系呢
- 数据的结构可以使用 jsonschema 直接完成（虽然较为繁琐但可以完成）
- 数据可能是有关联性的，一个数据可以影响另一个数据（调用 get set即可解决）
x
数据变更的生命周期包括了 初始赋值 用户赋值（可能频繁变动） 校验 校验正确 校验错误 重置
## 表单排版
表单排版感觉就很不属于表单本身的范围
但是有颜值也是很重要的，所以还需要搞一个排版设计器，我觉得这一部分可以相互剥离