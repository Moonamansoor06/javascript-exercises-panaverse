let country="Pakistan"
let myCountry="Pakistan"

console.log("Country Pakistan is",country===myCountry)

let city="karachi"
console.log("Karachi is",city===city.toLowerCase())

let number=48
console.log("Number is 48",number===48)

let number2=48

console.log("number is greater than 48",number2>40)

let number3=48

console.log("Number no equal to 50 is",number3!==50)

let number6=88

console.log("Number greater than 50 is",number6<50)

let mycity="Karachi"
let newNumber=60
console.log("city is karachi or number is 40",mycity==="Karachi" || newNumber===40)
console.log("city is karachi and number is 40",mycity==="Karachi" && newNumber===40)

let str1=["i", "love", "my", "Pakistan"]
let numList=[1,2,3,4,5]
console.log("string includes my",str1.includes("my"))
console.log("number list inclludes 8",numList.includes(8))

let str2=["i", "love", "my", "Pakistan"]
let numList2=[1,2,3,4,5]
console.log("string doesnot include my",!str1.includes("my"))
console.log("number list doesnot incllude 8",!numList.includes(8))
