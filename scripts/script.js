const email = document.querySelector('.input-email')
const errorImg = document.querySelector('.error-img')
const errorEmpty = document.querySelector('.msg-error-empty')
const form = document.querySelector('#form')
const errorEmail = document.querySelector('.msg-error-email')
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


form.addEventListener('submit', (e)=>{
e.preventDefault()
validateLength()
})

function validateLength(){
if(email.value === ''){
    email.style.border = '1px solid red'
    errorImg.style.opacity = '1'
    errorEmpty.style.opacity = '1'
    
} else{
    email.style.border= ''
    errorImg.style.opacity = '-1'
    errorEmpty.style.opacity = '-1'
    
    if(!emailRegex.test(email.value) ){
        errorImg.style.opacity = '1'
        errorEmail.style.opacity = '1'
        email.style.border = '1px solid red'
    }
    else {
        errorImg.style.opacity = '-1'
        errorEmail.style.opacity = '-1'
        email.style.border = ''
    }
}
}



