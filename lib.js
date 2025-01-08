//預設的輸出
let x="Hello";
//export default x;

//非預設的輸出
let data=[5,6,7];
let obj={x:10,y:1,};
//export {data, obj};

//預設與非預設一起輸出
export {x as default ,data,obj};

//function輸出
let add =(n1,n2)=>{
    console.log(n1+n2);
};

let multiply=(n1,n2)=>{
    console.log(n1*n2);
};

let math={add:add, multiply:multiply};

export {math};