//Code to not to change the object properties
const user={
  name: "Shivam",
  Age: "28",
  DOB: "23-11-1995"
}
const propertyDescriptor={
  value: user.DOB,
  writable:false
}
Object.defineProperty(user,"DOB",propertyDescriptor);

user.DOB="21-11-1995";
console.log(user);

//Code to check the scope of let and var

console.log(x);

var x=2;
{
  let x=5;
}

console.log(x);
