let guests=['Kiran','Sahar','Masroor']
let deletedGuest


for(let i=0;i<guests.length;i++){
    console.log(`Dear ${guests[i]} you are cordially invited for a dinner`)
    if(guests[i]==='Sahar'){
        deletedGuest='Sahar'
        }
  
}
console.log(`\n ${deletedGuest} is not able to make it `)

for(let i=0;i<guests.length;i++){
       if(guests[i]==='Sahar'){
       guests[i]='Atiya'  
      }
  
         console.log(`Dear ${guests[i]} you are cordially invited for a dinner`)
    
}
console.log("\n I finally got a bigger dinning table so i can invite more friends \n")

guests.push('Rushda')
guests.unshift('Farheen')
let middle=Math.round(guests.length/2)

guests.splice(middle,0,'Sabeen')
for(let i=0;i<guests.length;i++){
    console.log(`Dear ${guests[i]} you are cordially invited for a dinner`)
   
  
}