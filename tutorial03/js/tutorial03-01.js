let app = new Vue({
    el: '#app',
    data: {
        birthYear: 1972,
    },

    // computedの中が評価されてbindされる。
    // このcomputedの中のプロパティを算出プロパティという
    computed:{
        age: function(){
            var now=new Date();
            return now.getFullYear() - this.birthYear;
        }
    }
});
