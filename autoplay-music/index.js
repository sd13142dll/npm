/**
 * H5音乐播放
 * @method playMusic
 * @param {Object} obj - 对象参数
 * obj.element {String} 元素节点对象
 * obj.media {String} 媒体节点对象
 * obj.autoPlay {Boolean} true: 自动播放, false: 不自动播放
 * obj.canPause {Boolean} true: 可以暂停, false: 不支持暂停
 * obj.onClass {String} 播放时元素样式
 * obj.offClass {String} 暂停时元素样式
 */
function playMusic(obj) {
    const element = document.querySelector(obj.element), // 元素节点
        elemClassList = element.classList,
        media = document.querySelector(obj.media), // 音乐元素
        canPause = typeof obj.canPause === 'undefined' ? true : obj.canPause, // 默认是true - 可以暂停
        onClass = obj.onClass, // 播放样式class
        offClass = obj.offClass, // 暂停样式class
        musicPlay = function(isPlay) {
            if (isPlay && media.paused) {
                media.play();
            }
            if (!isPlay && !media.paused) {
                media.pause();
            }
        };

    let autoPlay = typeof obj.autoPlay === 'undefined' ? true : obj.autoPlay; // 默认是true - 自动播放

    // 自动播放音视频效果，解决微信自动播放问题
    const musicInWeixinHandler = function() {
        musicPlay(autoPlay);
        document.addEventListener('WeixinJSBridgeReady', ()=> {
            musicPlay(autoPlay);
        }, false);
        document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
    };

    document.addEventListener('DOMContentLoaded', musicInWeixinHandler);

    // 自动播放音乐效果，解决浏览器或者APP自动播放问题
    const musicInBrowserHandler = function() {
        musicPlay(autoPlay);
        document.removeEventListener('touchstart', musicInBrowserHandler);
    };

    document.addEventListener('touchstart', musicInBrowserHandler);

    if (autoPlay) {
        // 若允许自动播放，显示播放样式
        elemClassList.add(onClass);
    } else {
        // 若禁止自动播放，显示暂停样式
        elemClassList.add(offClass);
    }

    if (canPause) {
        // 若开启暂停功能，可点击切换
        element.addEventListener('click', ()=> {
            if (autoPlay) {
                autoPlay = false;
                elemClassList.remove(onClass);
                elemClassList.add(offClass);
            } else {
                autoPlay = true;
                elemClassList.remove(offClass);
                elemClassList.add(onClass);
            }
            musicPlay(autoPlay);
        }, false);
    } else {
        // 若禁止暂停功能，隐藏元素
        element.style.display = 'none';
    }
}

export default playMusic;
