const userName = document.getElementById('name')
const userPassword = document.getElementById('password')
const userForm = document.getElementById('form')
const errorElement = document.getElementById('error')

// prevents form from submitting if there are errors
userForm.addEventListener('submit', (e) => {
    let messages = []
    if (userName.value === '' || userName.value == null){
        messages.push('Name is required !')
    }

    if (userPassword.value.length <=6){
        messages.push('Passwords should be longer than 6 chars')
    }

    if (userPassword.value.length >= 20){
        messages.push('Passwords should be less than 20 chars')
    }

    if (userPassword.value == 'password'){
        messages.push('Passwords cannot be password')
    }
    if (messages.length>0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    
})