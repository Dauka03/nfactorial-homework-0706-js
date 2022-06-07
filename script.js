import {printHello} from "./script2.js"

//1 const, let. 2 String
const personName = 'Dalida'
let personBuisness = 'Shop'
//2 number, boolean
let personAge = 18
let isShop = true
let isFootball = false
//3 Object
let personInfo = {
    name: personName,
    age:  personAge,
    printInfo: function(){
        return (`${this.name} has ${personBuisness} buisness. And she is ${this.age}`)
    }
}
personInfo['buisness'] = personBuisness
console.log(personInfo.name)
console.log(personInfo['age'])
console.log(personInfo['buisness'])
console.log(personInfo.printInfo())
//4 for loop, array
let arr = []
for(let i=0;i<personBuisness.length;i++){
    arr.push(personBuisness[i])
    console.log(arr[i])
}
console.log(arr)
let sliceArr = arr.slice(0,2)
console.log(sliceArr)
//4 object array, map method
let buisnessInfo = [
    {
        street: 'Al-Farabi',
        buisness: 'shop'
    },
    {
        street: 'Abay',
        buisness: 'cafe'
    },
    {
        street: 'Momyshuly',
        buisness: 'computer-club'
    }
]
let buisnessStreet = buisnessInfo.map((buisness)=>buisness.street)
for(let i=0;i<buisnessStreet.length;i++){
    console.log(buisnessStreet[i])
}
///5 strong comparisons, 4 filter method, rest and spread, arrow functions
let isShopBuisness = buisnessInfo.filter((buisnes) => buisnes.buisness === 'shop')
console.log(isShopBuisness[0]['buisness'])
//7 function, arrow functions above
function showInfo(name, age, ...titles){
    console.log(`She is name ${name} and she is ${age} old. And ${titles}`)
}
showInfo(personInfo.name,personInfo.age, 'WOW', '()_()')
console.log([...buisnessStreet])
console.log([...buisnessStreet[0]])

//5 switch
let age = (parseInt)(prompt("How old is Dalida"))
console.log(typeof(age))
switch(age){
    case 19:
        console.log("NO NO NO");
        break;
    case 17:
        console.log("0_0");
        break;
    case 18:
        console.log("good job");
        break;
    default:
        alert( "Нет таких значений" );       
}
//5 zero merge to check has she buisness
console.log(personBuisness?true:false)

let {age:a,name:n}=personInfo
console.log(a)
console.log(n)

//8 importted function, 1 line I use import
printHello()