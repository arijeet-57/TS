type User = {
    name: string;
    age: number;
}

//union
type Greetings = number | string; //so both the types of data can be input here in this type
function greet(id: Greetings) {

}
greet(1); 
greet("1");

//intersection
