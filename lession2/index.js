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
var array2 = ["a", 1];
//tsc index.ts --watch
var obj = {
    name: "chinhpd5",
    age: 18,
    gt: false
};
obj.gt = true;
var people = [
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
];
function showData(data) {
    return data.map(function (item) {
        return "\n            <div>\n                <h3>".concat(item.name, "</h3>\n                <h4>").concat(item.age, "</h4>\n                <p>").concat((item.gt ? 'Nam' : 'Nữ'), "</p>\n            </div>\n        ");
    }).join('');
}
function addData(data) {
    people.push(data);
}
var peo = {
    name: "long",
    age: 8,
    gt: false
};
addData(peo);
console.log(showData(people));
