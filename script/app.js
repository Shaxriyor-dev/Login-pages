const h1  = document.getElementById('h1');
const btn = document.getElementById('btn');
const input = document.querySelector('.input');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const label = document.querySelectorAll('label');

// Labels
const age = document.querySelector('.age');
const massage = document.querySelector('.massage');
const pincode = document.querySelector('.pincode');



let ism = " ";
let emails = " ";
let passwords = Number(12345678);

let nextto = input.value;
let nextso = email.value;
let nextli = password.value; 

btn.addEventListener('click' , ()=>{
    if(nextto = ism){
        age.style.color = 'lime';
        input.style.border = "2px solid lime"
    }else{
         age.style.color = 'red'
    };
    if(nextso = emails){
         massage.style.color = 'lime';
        email.style.border = "2px solid lime";
    }else{
          age.style.color = 'red'
    }
});
btn.addEventListener('click' , ()=>{
    if(nextli === passwords){
        pincode.style.color = 'lime';
       window.location.href = '/pages/pages.html'
        password.style.border = "2px solid lime";
    }else{
       pincode.style.color = 'red'
       password.style.border = "2px solid red";
        
    }
})


