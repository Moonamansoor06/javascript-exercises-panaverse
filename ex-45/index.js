function  cars(model,manufacturer) {

  this.model=model,
  this.manufacturer=manufacturer
 
  
  
  }
  
  let corolla = new cars ("2020","Toyota")
  let Audi = new cars("2019","Audi")
  let revo = new cars("2021","Toyota")
  
  Audi.colour="blue"
  corolla.regNumber="AMX-100"
  
  let fourth = new cars('abc','xyz' )
  fourth.colour="red"


  console.log(corolla)
  console.log(Audi)
  console.log(revo)
  console.log(fourth)
  
  console.log(fourth.colour)