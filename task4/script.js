const currenUrl = document.querySelector('#currenUrl');
addEventListener('click', (event)=> {
    const newUrl = prompt ('Введите новый текст для ссылки');
    currenUrl.textContent = newUrl;
    event.preventDefault()
})