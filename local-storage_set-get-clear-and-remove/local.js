// console.log('clear a local storage');
// localStorage.clear();
const Names= localStorage.setItem('Name', 'Shakib Khan');
const age= localStorage.setItem('Age', '21');

const x =localStorage.getItem('Name');
const y =localStorage.getItem('Age');
console.log(x);
console.log(y);

const RemoveItemName =localStorage.removeItem('Name');
const RemoveItemAge =localStorage.removeItem('Age');

// set a localStorage object
const Objects={firstName: 'Abraham', lastName: 'Linkon'}
const convartSting=JSON.stringify(Objects)
console.log(convartSting);
const setObject = localStorage.setItem('Name', convartSting);

// Practice task (level-2)
let num=0;
const IncriceBtn =()=>{
    num++;
    const counter =document.getElementById('count');
    counter.innerText=num;
    localStorage.setItem('Number', num);
    showDisplay('Number')
}

const showDisplay=Number=>{
    const counter =document.getElementById('count');
   const count= localStorage.getItem(Number);
   counter.textContent=count;
   
}
showDisplay('Number');

