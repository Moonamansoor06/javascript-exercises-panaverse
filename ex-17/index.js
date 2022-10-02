let guests = ["Kiran", "Sahar", "Masroor"];
let deletedGuest;

for (let i = 0; i < guests.length; i++) {
  console.log(`Dear ${guests[i]} you are cordially invited for a dinner`);
  if (guests[i] === "Sahar") {
    deletedGuest = "Sahar";
  }
}
console.log(`\n ${deletedGuest} is not able to make it `);

for (let i = 0; i < guests.length; i++) {
  if (guests[i] === "Sahar") {
    guests[i] = "Atiya";
  }

  console.log(`Dear ${guests[i]} you are cordially invited for a dinner`);
}
console.log(
  "\n I finally got a bigger dinning table so i can invite more friends \n"
);

guests.push("Rushda");
guests.unshift("Farheen");
let middle = Math.round(guests.length / 2);

guests.splice(middle, 0, "Sabeen");
for (let i = 0; i < guests.length; i++) {
  console.log(`Dear ${guests[i]} you are cordially invited for a dinner`);
}

console.log(
  `\n \n i am sorry my table is not coming in time so i have to go back to two guests`
);

let editedLength=guests.length-2
for (let i = 0; i < guests.length; i++) {
   if(i<editedLength){
   
     guests.splice(i,0,);
 console.log( `sorry ${guests[i]} your are removed from the guests` )
   }
   else
   console.log(`dear ${guests[i]} you are invited for the dinner`)
    
  }
 

  guests.splice(0, guests.length)
  console.log('the guests list is now empty',guests)

/* for (let j = 2; j < guests.length; j++) {
  let deleted = guests[j];
  
 
  console.log(`sorry'${deleted} you cannot be invited due to lack of space`);
} */