let myName: string = 'Chinhpd5';
let myNumber: number = 18;
let isCheack: boolean = true;


function sum(a: number, b: number){
    return a+b;
}

function showName(name:string): string{ //void
    return `xin chào ${name}`
}

let array: string[] = ["Nam", "Bắc", "Hồng"]

let array2: (string|number)[] = ["a",1,"b"]

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

type myType ={
    id: number,
    name: string,
    age: number, 
    gt: boolean
}

interface ImyType {
    id: number,
    name: string,
    age: number, 
    gt: boolean
}

interface ImyType2 extends ImyType {
    description?: string
}

let arr2: ImyType2[] = [
    {
        id:1,
        name: "chinhpd5",
        age: 18,
        gt: false
    },
]

let people: myType[] =[
    {
        id:1,
        name: "chinhpd5",
        age: 18,
        gt: false
    },
    {
        id:2,
        name: "cuong",
        age: 28,
        gt: true
    },
    {
        id:3,
        name: "long",
        age: 8,
        gt: false
    }

]

function showData(data: myType[]):string{
    return data.map(item=>{
        return `
            <div>
                <h3>${item.id}</h3>
                <h3>${item.name}</h3>
                <h4>${item.age}</h4>
                <p>${(item.gt?'Nam':'Nữ')}</p>
            </div>
        `
    }).join('');
    
}  

function addData(data: myType):void{
    people.push(data);
}

let person: myType={
    id:4,
    name: "long",
    age: 8,
    gt: false
}

// addData(person);


const editData = (id:number, data: myType ):void =>{
    //code
    //b1: lấy vị trí của id
    const index:number = people.findIndex( item => item.id == id);
    
    //b2 thay thế data vào vị trí của people
    people[index] = data;
}
// editData(3,person);


//deleteData
const deleteData = (id: number):void=>{
    //sử dụng hàm splice xóa 1 phần tử trong mảng
    const index:number = people.findIndex( item => item.id == id);

    people.splice(index,1);
}
console.log(showData(people));

//searchData theo name 
const searchData =(searchString: string):any =>{
    // filter ,includes, find, 
    return people.filter(item=>{
        return item.name.includes(searchString);
    });
}
//tsc index.ts --watch

let tuple: [number,string] = [10,'chinhpd5']

// tuple.push('chinh');

let union: number | string = "Thất bại";

// union = "Thành công";






