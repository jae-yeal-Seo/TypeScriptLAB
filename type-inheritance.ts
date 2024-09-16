interface Animal{
    name:string
}

interface Dog extends Animal{
    bark(sound:string):void
}

interface Cat extends Animal{
    meow(sound:string):void
}

// オブジェクト変数
// 関数が”定義”されないといけない。呼び出しじゃなく
// パラメータに文字列が入るのを保障するためはここでも定義するしかない。
let myDog: Dog = {
    name: 'Buddy',
    bark: (sound:string) => {
      console.log(sound);
    }
};
