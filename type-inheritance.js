// オブジェクト変数
// 関数が”定義”されないといけない。呼び出しじゃなく
// パラメータに文字列が入るのを保障するためはここでも定義するしかない。
var myDog = {
    name: 'Buddy',
    bark: function (sound) {
        console.log(sound);
    }
};
