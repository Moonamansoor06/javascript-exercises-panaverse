


let numbers=[9,4,5,8,6,1,3,2,7]
let numbers2=numbers.sort()
    for ( var i = 0; i < numbers2.length; i++ ) {
       if(numbers2[i]===1){console.log("1st")}
       else if(numbers2[i]===2){console.log("2nd")}
       else if(numbers2[i]===3){console.log("3rd")}
       else {console.log(`${numbers2[i]}th`)}

    }
