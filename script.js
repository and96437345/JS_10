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
    }
});

prevButton.addEventListener('click', function() {
    if (i > 1) {
        i-- ;
        let image = document.querySelector(`.image${i}`);
        let imageNext = document.querySelector(`.image${i+1}`);
        image.classList.add("imageActive");
        imageNext.classList.remove("imageActive");
    }    
});

// Задание 3
// Создать html-страницу с блоками информации, которые открываются по щелчку на заголовок. В один момент времени может
// быть развернут только один блок информации.

let titleList = document.querySelectorAll('.exercise3__title');
let contentList = document.querySelectorAll('.exercise3__title-content');
for (let i=0; i<4; i++) {
    titleList[i].addEventListener('click', function() {
        closeAll();
        contentList[i].classList.remove("noContent");
    })
}

function closeAll() {
    for (let i=1; i<5; i++) {
        let content = document.querySelector(`.content${i}`);
        content.classList.add("noContent");
    }
}

// Задание 4
// Создать html-страницу с новостями.
// Необходимо отлавливать, когда скролл доходит до конца страницы, и догружать еще новости в список. Новости для подгрузки
// хранить в заранее подготовленном массиве.
// Облегченный вариант: вместо отлова, когда скролл дойдет до
// конца страницы, используйте кнопку в конце списка новостей.

let nextNews = document.querySelector('.exercise4__button-btn');
let news1 = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
let news2 = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).';
let news3 = 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.';
let newsArray = [news1, news2, news3];
let number = 0;
let newsDiv = document.querySelector('.exercise4__content1');
if (number < newsArray.length) {
    nextNews.addEventListener('click', function() {
        newsDiv.innerHTML += newsArray[number];
        if (number == newsArray.length) {
            number = 0;
        }
    });
};


// Задание 5 Создать html-страницу, на которой пользователь может ввести
// номер месяца, год, и получить календарь на указанный месяц. 
// Календарь можно генерировать с помощью таблицы. Начальный день недели
// всегда должен быть понедельник.

let generateButton = document.querySelector('.exercise5__input-btn');
generateButton.addEventListener('click', function calendar() {
    let inputMonth = document.querySelector('.input__month');
    let month = inputMonth.value - 1;
    let inputYear = document.querySelector('.input__year');
    let year = inputYear.value;
    let dateInput = new Date(year, month, 1);
    if (year == 0 || month == -1) {
        dateInput = new Date;
    }
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    let dayShift = dateInput.getDay()-1;
    if (dayShift == -1) {
        dayShift = 6;
    }
    let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let dateTitle = document.querySelector(`.exercise5__calendar-title`);
    dateTitle.innerHTML = `${monthNames[dateInput.getMonth()]}, ${dateInput.getFullYear()}`;
    for (let i=1; i<43; i++) {
        let day = document.querySelector(`.day${i}`);
        day.innerHTML = null;
    }
    for (let i=1; i<=daysInMonth; i++) {
        let day = document.querySelector(`.day${i+dayShift}`);
        day.innerHTML = i;
    }
});

// Задание 6
// Создать html-страницу со списком ссылок.
// Ссылки на внешние источники (которые начинаются с http://)
// необходимо подчеркнуть пунктиром.
// Искать такие ссылки в списке и устанавливать им дополнительные стили необходимо с помощью JS.

for (let i=1; i<7; i++) {
    let link = document.querySelector(`.link${i}`);
    let str = link.innerHTML;
    let result = (str.indexOf('http'));
    if (result == 0) {
        link.style.textDecoration = "underline dashed";
    }
}

// Задание 7
// Создать html-страницу со списком книг.
// При щелчке на элемент, цвет текста должен меняться на оранжевый. При повторном щелчке на другую книгу, предыдущей - необходимо возвращать прежний цвет.
// Если при клике мышкой была зажата клавиша Ctrl, то элемент
// добавляется/удаляется из выделенных. Если при клике мышкой
// была зажата клавиша Shift, то к выделению добавляются все
// элементы в промежутке от предыдущего кликнутого до текущего.

let book = document.querySelectorAll('.exercise7__list-item');
for (let i=0; i<7 ; i++) {
    book[i].addEventListener('click', function(e){
        if (e.ctrlKey) {
            book[i].classList.toggle('activeColor');
          } else {
            clear();
        this.classList.add('activeColor');
        }
    });
}

function clear() {
    for (let i=1; i<8; i++) {
        let bookClear = document.querySelector(`.item${i}`);
        bookClear.classList.remove('activeColor');
    }
}

// Задание 8
// Создать html-страницу для отображения/редактирования текста.
// При открытии страницы текст отображается с помощью тега
// div. При нажатии Ctrl+E, вместо div появляется textarea с тем
// же текстом, который теперь можно редактировать. При нажатии
// Ctrl+S, вместо textarea появляет div с уже измененным текстом.
// Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.

let div = document.querySelector('.divContent');
let textarea = document.querySelector('.textareaContent');
let contentIn = div.innerHTML;
document.addEventListener('keydown', function(event) {
    if(event.ctrlKey && ['E','e'].includes(event.key)) {
        event.preventDefault();
        div.style.display = "none";
        textarea.innerHTML = contentIn;
        textarea.classList.remove('textareaEdit');
    }
});
document.addEventListener('keydown', function(event) {
    if(event.ctrlKey && ['S','s'].includes(event.key)) {
        event.preventDefault();
        div.innerHTML = textarea.value;
        textarea.classList.add('textareaEdit');
        div.style.display = "block";
    }
})

// Задание 9
// Создать html-страницу с большой таблицей.
// При клике по заголовку колонки, необходимо отсортировать
// данные по этой колонке. Например: на скриншоте люди отсортированы по возрасту. Учтите, что числовые значения должны
// сортироваться как числа, а не как строки.

class Man {
    constructor(firstName, lastName, age, company) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.company = company;
    }
}

let man1 = new Man('Mark', 'Zuckerberg', '34', 'Facebook');
let man2 = new Man('Larry', 'Page', '45', 'Google');
let man3 = new Man('Timothy', 'Cook', '57', 'Apple');
let man4 = new Man('Bill', 'Gates', '62', 'Microsoft');
let manArray = [man1, man2, man3, man4];
let table = document.querySelector('.man__table');

function makeTable(array) {
    table.innerHTML = '';
    for (let i=0; i<array.length; i++) {
        let firstName = array[i].firstName;
        let lastName = array[i].lastName;
        let age = array[i].age;
        let company = array[i].company;
        let tableRow = `<tr>
                        <td>${firstName}</td>
                        <td>${lastName}</td>
                        <td>${age}</td>
                        <td>${company}</td>
                        <tr/>`
        table.innerHTML += tableRow;
    }
}

makeTable(manArray);
let header = document.querySelectorAll('.th');
for (let i=0; i<header.length; i++) {
    header[i].addEventListener('click', () => {
        if (i == 0) {
            manArray.sort(function(a, b) {
                let textA = a.firstName.toUpperCase();
                let textB = b.firstName.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
        }
        if (i == 1) {
            manArray.sort(function(a, b) {
                let textA = a.lastName.toUpperCase();
                let textB = b.lastName.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
        }
        if (i == 2) {
            manArray.sort(function(a, b) {
                return parseFloat(a.age) - parseFloat(b.age);
            });
        }
        if (i == 3) {
            manArray.sort(function(a, b) {
                let textA = a.company.toUpperCase();
                let textB = b.company.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
        }
        makeTable(manArray);
        console.log('Нажато '+i);
    });
}