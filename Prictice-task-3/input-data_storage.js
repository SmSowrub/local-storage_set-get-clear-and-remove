console.log('object');

document.getElementById('SubmitName').addEventListener('click', function(){
    const inputName=document.getElementById('exampleFormControlInput1').value;
    localStorage.setItem('Name', inputName);
    console.log(inputName);
})
document.getElementById('deleteName').addEventListener('click', function(){
    const inputName=document.getElementById('exampleFormControlInput1').value;
    document.getElementById('exampleFormControlInput1').value='';
    localStorage.removeItem('Name', inputName);
    console.log(inputName);
})
document.getElementById('SubmitEmail').addEventListener('click', function(){
    const inputName=document.getElementById('exampleFormControlInput2').value;
    localStorage.setItem('email', inputName);
    console.log(inputName);
})
document.getElementById('deleteEmail').addEventListener('click', function(){
    const inputName=document.getElementById('exampleFormControlInput2').value;
    document.getElementById('exampleFormControlInput2').value='';
    localStorage.removeItem('email', inputName);
    console.log(inputName);
})
document.getElementById('SubmitMessage').addEventListener('click', function(){
    const inputName=document.getElementById('exampleFormControlTextarea1').value;
 
    localStorage.setItem('Massage', inputName);
    console.log(inputName);
})
document.getElementById('deleteMessage').addEventListener('click', function(){
    const inputName=document.getElementById('exampleFormControlTextarea1').value;
    document.getElementById('exampleFormControlTextarea1').value='';
    inputName.value='';
    localStorage.removeItem('Massage', inputName);
    console.log(inputName);
})
// AllClear btn
document.getElementById('AllClear').addEventListener('click', function(){
    localStorage.clear()
    document.getElementById('exampleFormControlTextarea1').value='';
    document.getElementById('exampleFormControlInput1').value='';
    document.getElementById('exampleFormControlInput2').value='';
})

const AllDataStore =()=>{
   const inputName= document.getElementById('exampleFormControlTextarea1').value;
  const inputEmail=  document.getElementById('exampleFormControlInput1').value;
  const inputMassage=  document.getElementById('exampleFormControlInput2').value;
  console.log(inputName, inputEmail, inputMassage);
  saveToLocalStorage('name', {inputName,inputEmail,inputMassage})
}

const getToLocalStorage=()=>{
    let cart ={};
    const getstoreCart=localStorage.getItem('data');
    if(getstoreCart){
        cart=JSON.parse(getstoreCart);
    }
    return cart;
}
const saveToLocalStorage=(data, value)=>{
    const setCart = getToLocalStorage();
    setCart[data]=value;
   const stingToCart= JSON.stringify(setCart)
   console.log(stingToCart);
   localStorage.setItem('data', stingToCart)
}

// const getToLocalStorage=()=>{
//     let cart={};
//     const GetStoreCart=localStorage.getItem('cart');
//     if(GetStoreCart){
//         cart=JSON.parse(GetStoreCart);
//     }
//     return cart;
// }
// const saveToLocalStorage=(product, Quantity)=>{
//     const setCart=getToLocalStorage();
//     setCart[product]=Quantity;
//     const stingToCart=JSON.stringify(setCart);

//     console.log(stingToCart);
//     localStorage.setItem('cart', stingToCart)
    
    
// }