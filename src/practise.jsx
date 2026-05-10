
const subtract = (a,b) => {
    return a - b;

}

const divide = (a,b) => {
    return <h1>{   a   /  b }</h1>
}

const fruit = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
console.log(fruit[2]);
//map method
const numbers = [10, 20, 30, 40, 50];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

const users = ["ravi", "suresh", "kumar", "raju"];
function App(){
    return (
        <div>
            {users.map((user) =>
                <h1>{user}</h1>)}
        </div>)
}

const products = [
    {name : "phone ", instock : true},
    {name : "laptop ", instock : false},
    {name : "tablet ", instock : true},
    {name : "monitor ", instock : false}
];
const available = products.filter((products)=>{
    return products.instock;
});


//filter method
const ages = [18, 25, 30, 15, 22];
const adults = ages.filter((age) => {
    return age>18
});
console.log(adults);

export {subtract, divide, App};

// find method 
const datas  =[
    {id : 1,name : "prajwol"},
    {id : 2,name : "suresh"},
    {id : 3,name : "kumar"},
    {id : 4,name : "raju"}
]

const data =datas.find((data)=>{
    return data.id === 2;
})

const favoriteFruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
const allfruit = favouriteFruits.map((fruit)=>{
    return <h1>{fruit}</h1>
})
const numberss = [8, 15, 22, 5, 30];
const n =numberss.filter((number)=>{
    return number>10
})

const students = [
    {id: 1, name: "Alice", grade: 85},
    {id: 2, name: "Bob", grade: 92},
    {id: 3, name: "Charlie", grade: 78},    
    {id: 4, name: "David", grade: 90}
];
const student = students.find((s)=>
{
    return <h1>s.id</h1>
})

