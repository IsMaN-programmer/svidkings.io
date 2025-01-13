function openModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Отключаем прокрутку фона

    // Скрыть сообщение об успехе и показать форму
    document.getElementById('successMessage').style.display = 'none';
    document.getElementById('teamForm').style.display = 'block';
}

// Закрытие модального окна
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto'; // Включаем прокрутку фона
}

// Обработка формы
document.getElementById('teamForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем отправку формы

    // Получаем имя команды
    const teamName = document.getElementById('teamName').value;
    alert('Вы приняли участие, команда: ' + teamName); // Для проверки

    // Скрываем форму и показываем сообщение об успехе
    document.getElementById('successMessage').style.display = 'block';
    document.getElementById('teamForm').style.display = 'none';
});