import autoPlayMusic from 'autoplay-music'

autoPlayMusic({
    element: '.musicBtn', // 必选。 元素节点，包含音乐的父元素（id或class都可以）。
    media: '#music', // 必选。 音乐节点，<audio>（id或class都可以）。
    autoPlay: true, // 可选。 控制自动播放，true: 自动播放, false: 不自动播放，默认是true。
    canPause: true, // 可选。 是否支持暂停，true: 支持暂停， false: 不支持暂停，默认是true。（值为false，不显示图标）
    onClass: 'musicBtnOn', // 若canPause值定义为false，无需定义此属性；否则必选。
    offClass: 'musicBtnOff' // 若canPause值定义为false，无需定义此属性；否则必选。
});
