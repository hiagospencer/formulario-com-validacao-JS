const form =document.getElementById('form')
const nome =document.getElementById('nome')
const email =document.getElementById('email')
const telefone =document.getElementById('phone')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    

    checkInputs()
})

function checkInputs(){
    const nomeValue = nome.value.trim()
    const emailValue = email.value.trim()
    const telefoneValue = telefone.value.trim()
    const p = document.querySelector('p')

    if(nomeValue === ''){
       alert('Preencha o campo com seu Nome')
        errorValidation(nome,);
        nome.focus()
        return false
        
       
    }else {
        sucessValidation(nome)
    }

    if(emailValue ===''){
        alert('Preencha o campo com seu E-mail')
        errorValidation(email)
        email.focus()
        return false

    } else{
        sucessValidation(email)
    }

    if(telefoneValue ===''){
        alert('Preencha o campo com seu Telefone')
        errorValidation(telefone)
        telefone.focus()
        return false
 
    } else{
        sucessValidation(telefone)
    }

}

function errorValidation(input,message){
    const formControl = input.parentElement;


    formControl.className = 'erro'
}

function sucessValidation(input){
    const formControl = input.parentElement

    formControl.className = 'sucesso'
}

    
