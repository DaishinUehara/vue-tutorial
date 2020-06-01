let app = new Vue({
    el: '#app',
    data: {
        birthYear: 1972,
        year: new Date().getFullYear()
    },

    // methodsの中が関数としてbindされる。
    // このmethodsの中をメソッドという
    // このとき呼び出しには()がいる
    // メソッドと算出プロパティの違いは引数をもてるかどうかなどがある
    // またメソッドは更新用途にも用いることができる
    methods:{

        onclick: function(){
            var rnd = Math.round(Math.random() * 45);
            this.year=(new Date().getFullYear() - rnd)
        },

        age: function(){
            return this.year - this.birthYear;
        }
    }
});
