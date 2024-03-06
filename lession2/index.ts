let myName: string = 'Chinhpd5';
let myNumber: number = 18;
let isCheack: boolean = true;


function sum(a: number, b: number){
    return a+b;
}

function showName(name:string): string{
    return `xin chào ${name}`
}

let array: string[] | number[] = ["Nam", "Bắc", "Hồng"]

let array2: (string|number)[] = ["a",1]

//tsc index.ts --watch
let obj:{
    name: string,
    age: number
    gt: boolean
} = {
    name: "chinhpd5",
    age: 18,
    gt: false
}

obj.gt = true

// console.log(obj);


let people: { name: string,age: number, gt: boolean}[] =[
    {
        name: "chinhpd5",
        age: 18,
        gt: false
    },
    {
        name: "cuong",
        age: 28,
        gt: true
    },
    {
        name: "long",
        age: 8,
        gt: false
    }

]

function showData(data: { name: string,age: number, gt: boolean}[])
:string{
    return data.map(item=>{
        return `
            <div>
                <h3>${item.name}</h3>
                <h4>${item.age}</h4>
                <p>${(item.gt?'Nam':'Nữ')}</p>
            </div>
        `
    }).join('');
    
}

console.log(showData(people));






