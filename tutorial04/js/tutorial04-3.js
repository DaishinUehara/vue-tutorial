let app = new Vue({
    el: '#app',
    data: {
        book :{
            name : '英文法'
        },
        auther :{
            name : ''
        },
        publisher:{}
    },
    created: function(){
        let that = this;
        // 起動時にタイマー設定
        // 1000ミリ秒後にプロパティ追加
        this.timer = setTimeout(function(){
            //that.publisher = '英和出版社'; // これだと反映されない
            Vue.set(that.publisher,'name','英和出版社'); // これだと反映される
        },1000);
    },
    // 終了前のタイマー破棄
    beforeDestroy: function(){
        clearInterval(this.timer);
    }
});
