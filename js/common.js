const userName = document.getElementById('username');
const userMail = document.getElementById('usermail');
const send     = document.getElementById('send-btn');

const nameBlock = document.getElementById('name-block');
const mailBlock = document.getElementById('mail-block');

const regName =  /^[а-яА-Я]+$/;
const regMail =  /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
const regPhone = /^\(?\d{3}\)?-?\s*-?\d{4}$/;




 function errorMessage(e) {
    
    if(userName.value == '') {
        e.preventDefault();
        userName.style.borderColor = 'red';
        document.getElementById('error-name').innerHTML = "Заполните это поле!";
        
    }
     else if(regName.test(userName.value) == false) {
         e.preventDefault();
         userName.style.borderColor = 'red';
         document.getElementById('error-name').innerHTML = "имя должно содержать только буквы!";
         return true;
     }
     else if(userMail.value == '') {
         e.preventDefault();
         userMail.style.borderColor = 'red';
         document.getElementById('error-mail').innerHTML = "Заполните это поле!";
         return true;
     }
     else if(regMail.test(userMail.value) == false) {
         e.preventDefault();
         userName.style.borderColor = 'red';
         document.getElementById('error-mail').innerHTML = "проверьте правильность написания почты!";
         return true;
     }
     else {
         e.preventDefault();
         userName.style.borderColor = 'green';
         userMail.style.borderColor = 'green';
         document.getElementById('error-name').style.display ="none";
         document.getElementById('error-mail').style.display ="none";
     }
};

send.addEventListener("click", errorMessage);
