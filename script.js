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