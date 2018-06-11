[ DEMO ](http://desaiy.com/npm-demo/autoplay-music/index.html)

![ 示例图 ](http://desaiy.com/npm-demo/autoplay-music/demo.png)


#### Description 描述：

音乐播放插件，可自定义自动播放与否，支持多个音乐播放。


#### Install 安装依赖：
```
npm install autoplay-music --save
```


#### Example 引用示例：
```
HTML示例：
    <a href="javascript:;" class="musicBtn">
        <audio src="media/asMyCat.mp3" id="music" preload="preload" autoplay loop></audio>
    </a>

CSS示例：
    .musicBtn {
        position: absolute;
        z-index: 2;
        top: 0.8rem;
        right: 0.2rem;
        width: 0.56rem;
        height: 0.56rem;
    }
    .musicBtn:before,
    .musicBtn:after {
        content: '';
        position: absolute;
        width: 0.56rem;
        height: 0.56rem;
    }
    .musicBtn:before {
        background: url("images/musicBtnOn.png") no-repeat;
        background-size: 100% 100%;
    }
    .musicBtn:after {
        background: url("images/musicBtnOff.png") no-repeat;
        background-size: 100% 100%;
    }
    .musicBtnOn:before,
    .musicBtnOff:after {
        display: block;
    }
    .musicBtnOn:after,
    .musicBtnOff:before {
        display: none;
    }

JS调用示例：
    playMusic({
        element: ".musicBtn", // 必选。 元素节点，包含音乐的父元素（id或class都可以）。
        media: "#music", // 必选。 音乐节点，<audio>（id或class都可以）。
        autoPlay: true, // 可选。 控制自动播放，true: 自动播放, false: 不自动播放，默认是true。
        canPause: true, // 可选。 是否支持暂停，true: 支持暂停， false: 不支持暂停，默认是true。（值为false，不显示图标）
        onClass: "musicBtnOn", // 若canPause值定义为false，无需定义此属性；否则必选。
        offClass: "musicBtnOff" // 若canPause值定义为false，无需定义此属性；否则必选。
    });

```


#### Update 更新历史：
 - 【2018-06-11】v1.0.2 修改demo图片和链接
 - 【2018-06-11】v1.0.1 封装了音乐播放模块，支持自动播放自定义