//預設的輸入，名稱可以和輸出的不一樣
//import x from"./lib.js";
console.log(x);

//非預設的輸入
//import{data, obj} from "./lib.js";
console.log (data);
console.log(obj);

//預設與非預設一起輸入
import x,{data,obj} from "./lib.js";

//function輸入
import{math} from "./lib.js";
math.add(2,6);
math.multiply(8,-2);