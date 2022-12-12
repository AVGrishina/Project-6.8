const consolelog = document.querySelector('#consoleLog');
const promp = document.querySelector('#prompt');
const aler = document.querySelector('#alert');



consolelog.addEventListener('click', function () {
    console.log('Вывод текста в консоль');
});


aler.addEventListener('click', function () {
    alert('Показывает диалоговое окно с сообщением и кнопкой закрыть');
    console.log(alert);
});
    
promp.addEventListener('click', function () {
        prompt('Отображает диалоговое окно с запросом на ввод текста');  

    });


