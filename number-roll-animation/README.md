#### 前言

基于jquery的数字滚动效果，支持千位分号分隔符。

#### 使用方法

安装依赖：
```
npm install number-roll-animation --save
```

引用示例：
```
HTML示例：
    <div class="list"></div>
    

CSS示例：
    .list {
        height: 0.84rem;
        font-size: 0;
        letter-spacing: -5px;
        white-space: nowrap;
        margin: 0.3rem;
    }
    .list i {
        position: relative;
        display: inline-block;
        width: 0.62rem;
        height: 0.84rem;
        text-align: center;
        color: #e8cd92;
        font-size: 0.28rem;
        letter-spacing: 0;
        overflow: hidden;
        margin-right: 0.07rem;
    }
    .list span {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 8.4rem;
        background: url('../images/number.png') no-repeat;
        background-size: 100% 100%;
    }
    .list b {
        display: inline-block;
        font-size: 0.28rem;
        margin-right: 0.07rem;
    }


JS调用示例：
    numberRoll( selecotr, number, speed, hasComma );
    [selecotr] 必需。css选择器
    [number] 必需。数字或数字字符串
    [speed] 可选。默认1000毫秒滚动一次
    [hasComma] 可选。true表示需要添加分号分隔符

    例： numberRoll( '.list', 568945465, 1000, true );

```


#### 更新历史：
 - 【2018-06-11】 v1.0.7 修改git仓库地址。
 - 【2018-06-05】 v1.0.1 基于jquery的数字滚动效果，支持千位分号分隔符。