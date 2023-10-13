// Задание 1
// Создать html-страницу с трекбаром.
// Предоставить пользователю возможность изменять положение
// синего указателя. 

$(".exercise1__pointer").draggable({ axis: "x", containment:'.exercise1__range'});


// Задание 2
// Создать html-страницу с галереей.
// В один момент времени на экране отображается одно изображение и две кнопки: Назад и Вперед. При нажатии на кнопки
// изображения должны переключатся в указанном порядке. Когда
// следующего/предыдущего изображения нет, то соответствующую
// кнопку необходимо блокировать. Изображения хранить в заранее
// подготовленном массиве.

let nextButton = document.querySelector('.right-arrow');
let prevButton = document.querySelector('.left-arrow');
let i = 1;

nextButton.addEventListener('click', function() {
    if (i < 4) {
        i++ ;
        let image = document.querySelector(`.image${i}`);
        let imagePrev = document.querySelector(`.image${i-1}`);
        image.classList.add("imageActive");
        imagePrev.classList.remove("imageActive");
        console.log(i)
    }
});

prevButton.addEventListener('click', function() {
    if (i > 1) {
        i-- ;
        let image = document.querySelector(`.image${i}`);
        let imageNext = document.querySelector(`.image${i+1}`);
        image.classList.add("imageActive");
        imageNext.classList.remove("imageActive");
        console.log(i)
    }    
});

// Задание 3
// Создать html-страницу с блоками информации, которые открываются по щелчку на заголовок. В один момент времени может
// быть развернут только один блок информации.

let title1 = document.querySelector('.title1');
let content1 = document.querySelector('.content1')
let title2 = document.querySelector('.title2');
let content2 = document.querySelector('.content2')
let title3 = document.querySelector('.title3');
let content3 = document.querySelector('.content3')
let title4 = document.querySelector('.title4');
let content4 = document.querySelector('.content4')
title1.addEventListener('click', function() {
    closeAll();
    content1.classList.remove("noContent");
})
title2.addEventListener('click', function() {
    closeAll();
    content2.classList.remove("noContent");
})
title3.addEventListener('click', function() {
    closeAll();
    content3.classList.remove("noContent");
})
title4.addEventListener('click', function() {
    closeAll();
    content4.classList.remove("noContent");
})
function closeAll() {
    for (let i=1; i<5; i++) {
        let content = document.querySelector(`.content${i}`);
        content.classList.add("noContent");
        console.log(content);
    }
}

// Задание 4
// Создать html-страницу с новостями.
// Необходимо отлавливать, когда скролл доходит до конца страницы, и догружать еще новости в список. Новости для подгрузки
// хранить в заранее подготовленном массиве.
// Облегченный вариант: вместо отлова, когда скролл дойдет до
// конца страницы, используйте кнопку в конце списка новостей.

let nextNews = document.querySelector('.exercise4__button-btn');
let news1 = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
let news2 = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
let news3 = 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
let newsArray = [news1, news2, news3];
let number = 0;
let newsDiv = document.querySelector('.exercise4__content1');
if (number < newsArray.length) {
    nextNews.addEventListener('click', function() {
        newsDiv.innerHTML += newsArray[number];
        number++ ;
    });
};


// Задание 5 Создать html-страницу, на которой пользователь может ввести
// номер месяца, год, и получить календарь на указанный месяц. 
// Календарь можно генерировать с помощью таблицы. Начальный день недели
// всегда должен быть понедельник.