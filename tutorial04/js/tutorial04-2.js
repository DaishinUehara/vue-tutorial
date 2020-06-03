let app = new Vue({
    el: '#app',
    data: {
        current: new Date()
    },
    created: function(){
        let that = this;
        // 起動時にタイマー設定
        // 1000ミリ秒スパンでcurrentを更新
        this.timer = setInterval(function(){
            that.current = new Date();
        },1000)
    },
    // 終了前のタイマー破棄
    beforeDestroy: function(){
        clearInterval(this.timer);
    }
});
