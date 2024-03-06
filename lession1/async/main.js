// 

// + Promise

function getDataPromise(url, resolve) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            resolve(xhttp);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

let myPromise = new Promise((resolve, reject)=>{
    getDataPromise('https://picsum.photos/200/300',resolve);
})

let myPromise1 = new Promise((resolve, reject)=>{
    getDataPromise('https://picsum.photos/200/300',resolve);
})
let myPromise2 = new Promise((resolve, reject)=>{
    getDataPromise('https://picsum.photos/200/300',resolve);
})

// myPromise
//     .then(data=>{
//         document.getElementById('img_1').setAttribute('src',data.responseURL)
//         return myPromise1;
//     })
//     .then(data=>{
//         document.getElementById('img_2').setAttribute('src',data.responseURL)
//         return myPromise2;
//     })
//     .then(data=>{
//         document.getElementById('img_3').setAttribute('src',data.responseURL)

//     })








// + async/ await

let getDataAsync = async ()=>{
    const data =  await myPromise;
    document.getElementById('img_1').setAttribute('src',data.responseURL)

    const data1 = await myPromise1;
    document.getElementById('img_2').setAttribute('src',data1.responseURL)

    const data2= await myPromise2;
    document.getElementById('img_3').setAttribute('src',data2.responseURL)
    
}

getDataAsync();


// + Callback
function getData(url, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(xhttp);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

// getData('https://picsum.photos/200/300',function(data){
//     document.getElementById('img_1').setAttribute('src',data.responseURL)
    
//     getData('https://picsum.photos/200/300',function(data){
        
//         document.getElementById('img_2').setAttribute('src',data.responseURL)
        
//         getData('https://picsum.photos/200/300',function(data){
//             document.getElementById('img_3').setAttribute('src',data.responseURL)
//         })
//     })

    
// })

