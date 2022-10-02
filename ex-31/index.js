let users = [];
  if(users.length===0){
    console.log(" We need to find some users!")
  }
for(let i=0;i<users.length;i++){

if(users[i]==="admin"){
  console.log(`Hello ${users[i]}, would you like to see a status report?`)
}
else{
  console.log(`Hello ${users[i]}, thanks for logging in again`)
}
}


