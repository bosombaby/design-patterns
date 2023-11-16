# 前言
[前端的设计模式系列](https://pattern.windliang.wang/)
[JavaScript 设计模式](https://www.freecodecamp.org/chinese/news/javascript-design-patterns-explained/#behavioral-design-patterns)

- 大部分的设计模式都是使用 Java、C++ 这样以类为基础的静态语言，js这种基于原型的动态语言，主要以函数式编程为主。
- 所以在现实场景中，设计模式可能会有所不同

争取一天学一个设计模式，可以先从经常在业务场景使用的学起，主要以函数式编程为主，对于类编程可以先大概了解一下这种思维模式。

**设计模式分类如下：**

- 创建型
   - 单例模式
   - 建造者模式
- 结构型
   - 代理模式
- 行为型
   - 策略模式

# 单例模式
![1.png](https://cdn.nlark.com/yuque/0/2023/png/27367619/1700047799698-3d357785-ba09-4e0f-93e3-831d3d928042.png#averageHue=%23fefefe&clientId=udcae6dba-a39b-4&from=ui&id=u5df0d158&originHeight=470&originWidth=787&originalType=binary&ratio=2&rotation=0&showTitle=false&size=51412&status=done&style=none&taskId=ubbc00cd5-ff09-40a1-a262-1a5d1b229b3&title=)

**概述：保证全局对象唯一，如：限制用户在同一时刻只能调用一个全局 loading 加载框**
```javascript
// singleton.js
let instance = null;

function Singleton() {
  const somePrivateState = [];

  function privateMethod() {
    // ...
  }

  function method1() {
    // ...
  }

  function method2() {
    // ...
  }

  return {
    method1,
    method2,
  };
}

export default function () {
  if (!instance) {
    instance = Singleton();
  }
  return instance;
}

```

- 使用 ES6 模块化语法 + 函数闭包 实现单例模式
# 建造者模式
**概述：通过解构赋值为函数设置默认值，不需要在意传递值的位置、个数、是否为空等等**
```javascript
function getPhone({
  size,
  type = "iOS",
  screen = "OLED",
  price = 100,
  discount,
} = {}) {
  console.log("size", size);
  console.log("type", type);
  console.log("screen", screen);
  console.log("price", price);
  console.log("discount", discount);
}

getPhone({ size: 4, discount: 0.1, type: "android" }); // 只需要传递需要的参数

```


# 代理模式
代理模式就是对原有对象进行扩展，从而实现对原对象的控制或者进行额外的操作，不同场景下代理模式又可以细分出很多类别：

1. 远程代理：通过代理模式，实现像操作本地对象一样的操作远程对象。
2. 虚拟代理：In place of a complex or heavy object, a skeleton representation may be advantageous in some cases. 常见的比如大图的加载，我们可以通过引入代理对象，先加载一张小图，大图加载完毕后再显示大图。
3. 保护代理：将原有对象的属性访问进行权限控制。
4. 缓存代理：引入缓存，将之前的结果进行缓存，常见的比如斐波那契数列

```javascript
// src/util/requestNew.js

import { post as Post, get as Get } from './request.js';

let graytype = -1;

const getNewParams = (params) => {
  	let newParams = {
        ...params,
    };
    // 将 graytype 加入
    if (graytype !== -1) {
        newParams = {
            ...params,
            headers: {
                ...params.headers,
                graytype,
            },
        };
    }
    return newParams;
};
export const get = async (params) => {
    const response = await Get(getNewParams(params));
    const res = response.data;
    if (res.graytype !== undefined && res.graytype !== null) {
        graytype = res.graytype;
    }
    return response;
};
export const post = async (params) => {
    const response = await Post(getNewParams(params));
    const res = response.data;
    if (res.graytype !== undefined && res.graytype !== null) {
        graytype = res.graytype;
    }
    return response;
};
```

- 将原有的 post 、get 方法导出，在这个基础上面在外面包一层逻辑，并且保持和原对象一致的行为
# 策略模式
**前言：为了解决3层以上的if/else、switch判断，屎山代码如下：**

![1.png](https://cdn.nlark.com/yuque/0/2023/png/27367619/1700119718257-a8045ca6-0e5e-4842-9514-850ab665956b.png#averageHue=%237fa49e&clientId=u5d53c528-c68b-4&from=ui&id=ufb6c40f5&originHeight=661&originWidth=890&originalType=binary&ratio=2&rotation=0&showTitle=false&size=142053&status=done&style=none&taskId=ue320b344-fcb3-4fcb-be20-f4da81cc78a&title=)
**概述：对象有某个行为，但是在不同的场景中，该行为有不同的实现算法，案例如下：**
```javascript
const { role } = { role: "ADMIN" };

function AdminUser() {
  console.log("ADMIN");
}

function EmployeeUser() {
  console.log("EMPLOYEE");
}

function NormalUser() {
  console.log("NormalUser");
}
const components = {
  ADMIN: AdminUser,
  EMPLOYEE: EmployeeUser,
  USER: NormalUser,
};

const Component = components[role];
Component();
```
# 迭代器模式
