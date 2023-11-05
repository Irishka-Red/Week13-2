const button = document.querySelector('.button');
const message = document.querySelector('.message');
const error = document.querySelector('.error');
function birthday (){
    const date = document.querySelector('.input').value;
    const date1 = Date.parse(date);
    const now = new Date();  
    const result = date1 - now;
    if (date==""){
        error.innerHTML = "Пожалуйста, введите дату рождения";
    } else{
        error.innerHTML = "";
        const result2 = Math.floor(result/(1000*60*60*24));
        if (result2==0){
        message.innerHTML = "Поздравляем с Днем Рождения!!!";  
        }
        else if (result2==1){
            message.innerHTML = `До вашего дня рождения остался ${result2} день`;
        }
        else if (result2>=2&&result2<=4){
            message.innerHTML = `До вашего дня рождения осталось ${result2} дня`;
        }
        else if (result2>=5&&result2<=365){
            message.innerHTML = `До вашего дня рождения осталось ${result2} дней`;  
        }
    }
}
button.addEventListener('click', birthday);
