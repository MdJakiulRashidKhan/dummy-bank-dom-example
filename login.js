document.getElementById('submit').addEventListener('click',function(){
    const inputEmail = document.getElementById('inputEmail');
    const emailText =inputEmail.value;
    const inputPassword = document.getElementById('inputPassword');
    const passwordText =inputPassword.value;

    if(emailText==="a@gmail.com" && passwordText==='123')
    {
        window.location.href ='bank.html';
    }
    else{
        alert('Invalid Password');
        // console.log('invalid user');
        inputEmail.value='';
        inputPassword.value='';
    }
})