var myName = 'Chinhpd5';
var myNumber = 18;
var isCheack = true;
function sum(a, b) {
    return a + b;
}
function showName(name) {
    return "xin ch\u00E0o ".concat(name);
}
var array = ["Nam", "Bắc", "Hồng"];
var array2 = ["a", 1, "b"];
//tsc index.ts --watch
var obj = {
    name: "chinhpd5",
    age: 18,
    gt: false
};
obj.gt = true;
var arr2 = [
    {
        id: 1,
        name: "chinhpd5",
        age: 18,
        gt: false
    },
];
var people = [
    {
        id: 1,
        name: "chinhpd5",
        age: 18,
        gt: false
    },
    {
        id: 2,
        name: "cuong",
        age: 28,
        gt: true
    },
    {
        id: 3,
        name: "long",
        age: 8,
        gt: false
    }
];
function showData(data) {
    return data.map(function (item) {
        return "\n            <div>\n                <h3>".concat(item.id, "</h3>\n                <h3>").concat(item.name, "</h3>\n                <h4>").concat(item.age, "</h4>\n                <p>").concat((item.gt ? 'Nam' : 'Nữ'), "</p>\n            </div>\n        ");
    }).join('');
}
function addData(data) {
    people.push(data);
}
var person = {
    id: 4,
    name: "long",
    age: 8,
    gt: false
};
// addData(person);
var editData = function (id, data) {
    //code
    //b1: lấy vị trí của id
    var index = people.findIndex(function (item) { return item.id == id; });
    //b2 thay thế data vào vị trí của people
    people[index] = data;
};
// editData(3,person);
//deleteData
var deleteData = function (id) {
    //sử dụng hàm splice xóa 1 phần tử trong mảng
    var index = people.findIndex(function (item) { return item.id == id; });
    people.splice(index, 1);
};
console.log(showData(people));
//searchData theo name 
var searchData = function (searchString) {
    // filter ,includes, find, 
    return people.filter(function (item) {
        return item.name.includes(searchString);
    });
};
//tsc index.ts --watch
var tuple = [10, 'chinhpd5'];
// tuple.push('chinh');
var union = "Thất bại";
// union = "Thành công";
