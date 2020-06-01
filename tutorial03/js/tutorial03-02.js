let app = new Vue({
    el: '#app',
    data: {
        birthYear: 1972
    },

    // methodsの中が関数としてbindされる。
    // このmethodsの中をメソッドという
    // このとき呼び出しには()がいる
    // メソッドと算出プロパティの違いは引数をもてるかどうかなどがある
    // またメソッドは更新用途にも用いることができる
    methods:{
        age: function(){
            var now=new Date();
            return now.getFullYear() - this.birthYear;
        }
    }
});
