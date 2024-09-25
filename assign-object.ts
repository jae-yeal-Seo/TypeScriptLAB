// interface A : 狭い型
interface A {
    name:string
}
// interface B : 広い型
interface B {
    name:string,
    age:number
}

const Aobj = {
    name:"재열",
}

const Bobj = {
    name:"나나",
    age:25
}

// オブジェクトをリテラルで変数に入れたらタイプのプロパティとリテラルのプロパティが
// 異なるとエラーになるけど、オブジェクトを変数にして値を入れたらタイプチェックをしない。
// オブジェクトを変数にして入れる場合、BobjはAタイプより狭い型（詳しい型）なのでconst b3:A = Bobjしてもエラーにならない。
const b4:A = {
    name:"나나",
    age:25
}
const b3:A = Bobj

// 以下のように広い型のオブジェクトを狭いタイプの変数に入れようとしたらオブジェクトを変数に入れてもえらーになる
const b5:B = Aobj

// 結論：オブジェクトの代入する時は狭い型オブジェクを広い型タイプの変数に入れることしかできない。

