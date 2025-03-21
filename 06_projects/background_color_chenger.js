let buttons = document.querySelectorAll('button');
let body = document.querySelector('body');

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click',function (event){
        if(event.target.id === 'gray'){
            body.style.backgroundColor=event.target.id;
        }
        if(event.target.id === 'white'){
            body.style.backgroundColor=event.target.id;
        }
        if(event.target.id === 'blue'){
            body.style.backgroundColor=event.target.id;
        }
        if(event.target.id === 'yellow'){
            body.style.backgroundColor=event.target.id;
        }
    });
});
