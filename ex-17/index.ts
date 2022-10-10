let guests13 = ["Kiran", "Sahar", "Masroor"];
let deletedGuest3:string|undefined;

for (let i = 0; i < guests13.length; i++) {
  console.log(`Dear ${guests13[i]} you are cordially invited for a dinner`);
  if (guests13[i] === "Sahar") {
    deletedGuest3 = "Sahar";
  }
}
console.log(`\n ${deletedGuest3} is not able to make it `);

for (let i = 0; i < guests13.length; i++) {
  if (guests13[i] === "Sahar") {
    guests13[i] = "Atiya";
  }

  console.log(`Dear ${guests13[i]} you are cordially invited for a dinner`);
}
console.log(
  "\n I finally got a bigger dinning table so i can invite more friends \n"
);

guests13.push("Rushda");
guests13.unshift("Farheen");
let middle = Math.round(guests13.length / 2);

guests13.splice(middle, 0, "Sabeen");
for (let i = 0; i < guests13.length; i++) {
  console.log(`Dear ${guests13[i]} you are cordially invited for a dinner`);
}

console.log(
  `\n \n i am sorry my table is not coming in time so i have to go back to two guests`
);

let editedLength=guests13.length-2
for (let i = 0; i < guests13.length; i++) {
   if(i<editedLength){
   
     guests13.splice(i,0,);
 console.log( `sorry ${guests13[i]} your are removed from the guests` )
   }
   else
   console.log(`dear ${guests13[i]} you are invited for the dinner`)
    
  }
 

  guests13.splice(0, guests13.length)
  console.log('the guests list is now empty',guests13)

/* for (let j = 2; j < guests.length; j++) {
  let deleted = guests[j];
  
 
  console.log(`sorry'${deleted} you cannot be invited due to lack of space`);
} */