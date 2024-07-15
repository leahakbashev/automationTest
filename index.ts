/*Lesson 1
let myName:string="Leah Akbashev";
let firstName: string = myName.substring(0,myName.indexOf(" "));
let lastName:string = myName.substring(myName.indexOf(" "));
console.log(`My first name is: ${firstName}`);
console.log(`My last name is: ${lastName}`);

let longString:string = "FourFive";
let connectionString:string = "*";
let stringHalfLength:number = longString.length/2;
let newString:string = connectionString+longString.substring(0,stringHalfLength)+connectionString+longString.substring(stringHalfLength)+connectionString;
console.log(newString);

if(lastName.charAt(1)=="A" || lastName.charAt(1)=="B"){
    console.log(true);
} else {console.log(false);}

let price:string = "$55";
//let price:string = "₪52";

let currency:string = price.charAt(0);

if (currency == "$"){
    console.log(price.substring(1)+" dollar");
}
else if (currency == "₪") {
    console.log(price.substring(1)+" shekel");
} else console.log("wrong currency");
*/
/*Lesson 2
let sum:number=0;
for(let i:number=1; i<=105; i++){
        sum+= i;
}
console.log(sum);

let str: string ="abc abc abc abc abc";
let counter: number=0;
for (let i=0; i <= str.length-1; i++){
        let character = str.charAt(i);
        if(character ===" "){
                counter++;
        }
}
console.log(`Number of spaces in the string is ${counter}`);

str = "abcd";
let newStr: string="";
for(let i=str.length-1; i>=0; i--){
        newStr = newStr+str.charAt(i);
}
console.log(newStr);

function numberOfOccurances(str:string, char:string):number{
        let count = 0;
        for(let i=0; i<str.length; i++){
                if(str.charAt(i)===char){
                        count++;
                }
        }
        return count;
}
console.log(numberOfOccurances("abc avc abc", "a"));
 */
/*lesson 3
function studentAvg (studentArr: {name: string, grades: number[]}[]):
    {name:string, avg: number}[]{
    let result:{name: string, avg:number}[]=[];
    for(let i: number = 0; i<studentArr.length; i++){
            let sum:number =0;
            for (let j:number = 0; j< studentArr[i].grades.length; j++){
                    sum+=studentArr[i].grades[j];
            }
            let temp:{name:string, avg: number}={name:studentArr[i].name, avg:sum/studentArr[i].grades.length}
            result.push(temp);
    }
    return result;
}

let stdArr=[{name: "A", grades:[90,40]},{name: "B", grades:[80,70]}];
    console.log(studentAvg(stdArr);
*/
    /*lesson 4
// function divideTwoNumbers(num1:number,num2:number):number{
//     if(num2==0)
//         throw "error: cannot divide by 0";
//     if(num1==0)
//         throw "error: number 1 can not be 0";
//     return num1/num2;
// }
// try{divideTwoNumbers(5,0);}
// catch(e){
//     console.log(e);
// }
//
// console.log("keep running tests");
//
async function getUserName():Promise<void>{
        let res: Response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        let data = await res.json();
        if (data.length == 0){
            throw "error: no response";
        }
        console.log(data.name);
        console.log(data.email);
    };

function getFirstLetterOfEveryElement(arr: string[]):void {
    if (arr.length == 0)
        throw "error: array is empty";
    for (let i: number = 0; i < arr.length; i++) {
        if (arr[i].length == 0)
            throw "error: string is empty";
        console.log(arr[i].substring(0, 1));
    }
}
try{
    const arr: string[]=["one", "two", "three"];
    getFirstLetterOfEveryElement(arr);
}
catch(e){
    console.log(e);
};
try{
    const arr: string[]=["one", "two", ""];
    getFirstLetterOfEveryElement(arr);
}
catch(e){
    console.log(e);
};
try{
    const arr: string[]=[];
    getFirstLetterOfEveryElement(arr);
}
catch(e){
    console.log(e);
};

//tuples
function getTupleNumberOfTestsFailed(tuplesList: [string, boolean][]):[string[], number]{
    let failedTests:string[]=[];
    let numberOfFailedTests:number=0;
    for(let i:number=0; i<tuplesList.length; i++){
        if(tuplesList[i][0]==null || tuplesList[i][1]==null)
            throw "error: test name is empty";
        if(tuplesList[i][1]==false){
            failedTests.push(tuplesList[i][0]);
            numberOfFailedTests++;
        }
    }
    return [failedTests, numberOfFailedTests];
}

try{
    let tuplesList:[string, boolean][]=[["test1", true],["test2", false],["test3", false],["test4", false]];
    console.log(getTupleNumberOfTestsFailed(tuplesList));
}
catch(e){
    console.log(e);
}

//Class

class Car{
    private _model:string;
    private _year:number;
    private _price:number;

    constructor(model:string, year:number, price:number){
        this._model=model;
        this._year=year;
        this._price=price;
    }
    get getModel(): string {
        return this._model;
    }

    set setModel(value: string) {
        this._model = value;
    }
    get getYear(): number {
        return this._year;
    }

    set setYear(value: number) {
        this._year = value;
    }
    get getPrice(): number {
        return this._price;
    }

    set setPrice(value: number) {
        this._price = value;
    }

    public printCarDetails():void{
        console.log(`Model: ${this._model}, Year: ${this._year}, Price: ${this._price}`);
    }
}

let car1:Car = new Car("Toyota", 2021, 20000);
let car2:Car = new Car("Honda", 2020, 15000);
car1.printCarDetails();
car1.getYear;
car1.setYear=2022;
car1.printCarDetails();
car2.printCarDetails();

//write a class for bank account contains full name, user name, amount, added amount and adds to the amount, withdrawal amount and withdraws from the amount
class BankAccount{
    private _fullName:string;
    private _userName:string;
    private _balance:number;

    constructor(fullName:string, userName:string, balance:number){
        this._fullName=fullName;
        this._userName=userName;
        this._balance=balance;
    }
    getBalance(): number {
        return this._balance;
    }
    deposit(value: number) {
        this._balance += value;
    }
    withdraw(value: number) {
        //check if enough money in the account
        if(this._balance<value)
            throw "error: not enough money in the account";
        this._balance -= value;
    }
}
let user1:BankAccount = new BankAccount("Leah Akbashev", "leahak", 1000);
console.log(user1.getBalance());
user1.deposit(500);
console.log(user1.getBalance());
try{
    user1.withdraw(2000);
}
catch(e){
    console.log(e);
}
user1.withdraw(200);
console.log(user1.getBalance());

//write a class user which has full name, id and email, which are all private. Write a contractor. Write a method that changes the email to a new email and verify that has @. Write a method that changes ID and verify 9 digits
class User{
    private fullName:string;
    private id:string;
    private email:string;

    constructor(fullName:string, id:string, email:string){
        this.fullName=fullName;
        this.id=id;
        this.email=email;
    }
    changeEmail(newEmail:string){
        if(newEmail.includes("@"))
            this.email=newEmail;
        else
            throw "error: email is not valid";
    }
    getEmail(): string {
        return this.email;
    }
    changeId(newId:string){
        if(newId.length==9)
            this.id=newId;
        else
            throw "error: ID is not valid";
    }
    getId(): string {
        return this.id;
    }
}
let user2:User = new User("Leah Akbashev", "123456789", "leah.akbashev@gmail.com");
user2.changeEmail("test@Email.com");
console.log(user2.getEmail());
user2.changeId("123456788");
console.log(user2.getId());

//write a class StoreItem with variables name, price and quantity. Write methods: 1. purchase which subtracts the number of items purchased and make sure it is has enough in stock. 2. price update method receives a number and updates price with a new price. 3. "New stock" method recei
class StoreItem{
    private productName:string;
    private price:number;
    private quantity:number;

    constructor(name:string, price:number, quantity:number){
        this.productName=name;
        this.price=price;
        this.quantity=quantity;
    }
    purchase(numberOfItemsPurchased:number){
        if(this.quantity<numberOfItemsPurchased)
            throw "error: not enough items in stock";
        this.quantity-=numberOfItemsPurchased;
    }
    updatePrice(newPrice:number){
        this.price=newPrice;
    }
    newStock(newQuantity:number){
        this.quantity+=newQuantity;
    }
    printItemDetails(){
        console.log(`Item: ${this.productName}, Price: ${this.price}, Quantity: ${this.quantity}`);
    }
}
let item1:StoreItem = new StoreItem("Shirt", 20, 100);
let item2:StoreItem = new StoreItem("Pants", 30, 50);
item1.purchase(10);
item1.printItemDetails();
item1.updatePrice(25);
item1.printItemDetails();
item1.newStock(50);
item1.printItemDetails();
item2.purchase(40);
item2.printItemDetails();
item2.updatePrice(35);
item2.printItemDetails();
item2.newStock(100);
item2.printItemDetails();
*/
/*Lesson 5
//Enums
enum Days{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
};
let today:Days = Days.Sunday;
console.log(today);

//arrow functions
const sum = (a:number, b:number):number => a + b;
console.log(sum(5, 6));

//forEach sum up all numbers in an array
let arr:number[]=[2,13,43,6,7,8];
let total:number=0;
//argument is a value
arr.forEach((element:number):void => {
    total+=element;
});
console.log(total);

//argument is a value and an index
// arr.forEach((element:number, index:number):void => {
//     console.log(element, index);
// });
//argument is a value, index and array
// arr.forEach((element:number, index:number, array:number[]):void => {
//     console.log(element, index, array);
// });

let cars:{model:string, year:number}[]=[{model:"Toyota", year:2020},{model:"Honda", year:2021},{model:"Ford", year:2019}];
cars.forEach((car:{model:string, year:number}):void => {
    console.log(car.model, car.year);
});

//write a function that accepts the arguments of students: name and grade and function returns the student with highest grade and it's index. User forEach
const studentsHighestGrade = (students:{name:string, grade:number}[]):{name:string, grade:number, index:number} => {
    let result:{name:string, grade:number, index:number}={name:"", grade:0, index:0};
    students.forEach((student:{name:string, grade:number}, index:number):void => {
        if(!student.grade || student.grade<0){
            throw "error: grade is not valid";
        }
        if(student.grade>result.grade){
            result.grade=student.grade;
            result.index=index;
        }
    });
    return result;
}
let students:{name:string, grade:number}[]=[{name:"Leah", grade:90},{name:"David", grade:80},{name:"Rachel", grade:95}];
console.log(studentsHighestGrade(students));
*/

// const fs = require('fs');
// Create a new file
// function createFile(fileName:string):void {
//     fs.writeFile(fileName, 'This is the test file to read how many words are in the file', (err: Error) => {
//         if (err)
//             throw 'Error while creating file';
//         console.log('File created');
//     });
// };

// Read the file

// function howManyWords(fileName: string):void {
//     fs.readFile(fileName, (err: Error, data:string) => {
//         if (err)
//             throw 'Error while reading file';
//     console.log(`Number of words in the file: ${data.toString().split(' ').length}`);
//     });
// }

//call functions I created
// createFile('newFile.txt');
// howManyWords('newFile.txt');

// function addUserToFile(fileName: string, userName: string, password:string):void {
//     fs.appendFile(fileName, `${userName} ${password}\n`, (err: Error) => {
//         if (err)
//             throw 'Error while adding user to file';
//         console.log(`User: ${userName} and Pass: ${password} was added to file`);
//     });
// };
//
// addUserToFile('newFile.txt', 'Leah', '1234');
// addUserToFile('newFile.txt', 'David', '5678');
// addUserToFile('newFile.txt', 'Rachel', '91011');

//delete all in the file
// function deleteDataFile(fileName: string):void {
//     fs.writeFile(fileName, '', (err: Error) => {
//         if (err)
//             throw 'Error while deleting file';
//         console.log('File deleted');
//     });
// };
//
// deleteDataFile('newFile.txt');

// function convertFile(fileName: string): Promise<{ Name:string, Pass:string }> {
//     return new Promise((resolve, reject) => {
//         fs.readFile(fileName, (err: Error, data: string) => {
//             if (err)
//                 throw 'Error while reading file';
//             let arr: string[] = data.toString().split('\n');
//             console.log(arr);
//             let newArr: string[] = [];
//             // for (let i: number = 0; i < arr.length; i++) {
//             //     let temp: string[] = arr[i].split(' ');
//             //     newArr.push(`User: ${temp[0]} Pass: ${temp[1]}`);
//             // }
//             arr.forEach((element: string): void => {
//                 let temp: string[] = element.split(' ');
//                 newArr.push(`User: ${temp[0]} Pass: ${temp[1]}}`);
//             });
//             // fs.writeFile(fileName, newArr.join('\n'), (err: Error) => {
//             //     if (err)
//             //         throw 'Error while writing to file';
//             //     console.log('File converted');
//             // });
//             console.log(newArr);
//             return newArr;
//         });
//     });
// };
//
// async function getConvertedFile(){
//     let result = await convertFile('newFile.txt');
//     console.log(result);
// }
// getConvertedFile()
//
// getConvertedFile().then((result) => {
//     console.log(result);
// };


//python given a number n, for each integer i in the range from 1 to n inclusive, print one value per line as follows:
//if i is multiple of both 3 and 5, print FizzBuzz
//if i is multiple of 3(but not 5), print Fizz
//if i is multiple of 5(but not 3), print Buzz
//if i is not multiple of 3 or 5, print the value of i
function fizzBuzz(n:number):void{
    for(let i:number=1; i<=n; i++){
        if(i%3==0 && i%5==0)
            console.log("FizzBuzz");
        else if(i%3==0)
            console.log("Fizz");
        else if(i%5==0)
            console.log("Buzz");
        else
            console.log(i);
    }
}