interface User {
    name: string;
    age: number;
};

function isLegal(user: User): boolean {
    if(user.age > 18) {
        return true
    }else{
        return false
    }
}

function greet(user: User) : void {
    console.log("Hello" + user.name);
}

console.log(isLegal({
    name: "Blake",
    age: 14
}))