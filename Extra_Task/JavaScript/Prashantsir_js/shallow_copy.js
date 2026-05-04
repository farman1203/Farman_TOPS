// Shallow copy me sirf top-level properties copy
//  hoti hain aur nested objects reference share karte hain.

const user1 ={
    name:"farman",
    city:{
        address:"nadiad"
    }
};

const user2 ={...user1}

user2.name="ansari";
user2.city="ahmd";


console.log(user1.name,user1.city);
console.log(user2);