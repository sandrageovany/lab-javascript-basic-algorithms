// Iteration 1: Names and Input
const hacker1= "dalia";
console.log(`the driver's name is ${hacker1}`);
const hacker2= "sandra";
console.log(`the navigators name is ${hacker2}`);


// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}else if(hacker2.length > hacker1.length){
    console.log(`it seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
// driver's name print

let string1= "";
for(let i=0; i<hacker1.length; i++){
  
    string1+= hacker1[i].toUpperCase() + " ";
}
console.log(string1);

//Navigator's name print

let string2="";
for(let i = hacker2.length-1; i>=0; i--){
string2 += hacker2[i];
}
console.log(string2);

// lexicographic order of the strings

let lexicographicalCompare= hacker1.localeCompare(hacker2);
if(lexicographicalCompare< 0){
    console.log('The driver\'s name goes first');
}else if(lexicographicalCompare>0){
    console.log('Yo, the navigator goes first definitely');
}else{
    console.log('What?! You both have the same name?');
}

//Bonus 1
const paragraph= "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit";
let counter =0;
let counter2 =0;
for(let i =0; i<paragraph.length; i++){
    if(paragraph[i]=== " "){
        counter ++;
    } else if(paragraph[i]=== "et"){
        counter2 ++;
    }else
    continue;
}
console.log(counter);
console.log(counter2);