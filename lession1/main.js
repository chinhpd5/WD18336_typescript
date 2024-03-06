// Biến var, let, const

{
    const a = {
        ten: 'chinhpd5',
        tuoi: 18
    };
    {
        // a ='Trần Văn a';
        // console.log(a);
    }
}

//template string
var ten = 'Trần văn a'
console.log(`họ và tên:
 ${ten}`);


//arrow function

function logger(log){
    console.log(log);
}

var log1 = function(log){
    console.log(log);
}

var log2 = log => console.log(log)


// - Class
// - Hàm với array (foreach, map, fliter, reduce, some, every,...)

// - Destructuring

let array =[1,2,3,4];

let [a,,,d] = array

// console.log(d);

let obj ={
    name: "Nguyễn Văn A",
    age : 18,
    child : {
        name: 'Nguyễn Văn B'
    }
}

let {name,age, child:{name: childName}} = obj

console.log(childName);

// - Rest Parameter
let array1 =[1,2,3,4];

let [...rest] = array1

function show(a,...rest) {
    console.log(a,rest);
}
show(1,2,3,4,5,6)

// - Spread

let arr1 =[1,2];
let arr2 =[3,4];
// console.log([...arr1,...arr2]);

let obj1 ={
    url : "https://abc.com",
    method: 'get'
}

let obj2 ={
    url : "https://xyz.com",
}

// console.log({...obj1,...obj2});
