const fs=require("fs"); //this create a module of file system (fs)
let x=10;
let y=20;
let sum=x+y;
let product=x*y;

let data=`Sum ${sum}\nProduct: ${product}`; // this creates the formatted string
console.log(data); //prints the data in console

fs.writeFile('output.txt', data, (err)=>{ //uses writeFile method in the module fs to create a output.txt with data value in it
  if(err) throw err;
  console.log("data written to file");
})

fs.writeFile('newFile.txt', data, (err)=>{
  if(err) throw err;
  console.log('new file successfully created')
})