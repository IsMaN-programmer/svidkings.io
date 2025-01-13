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
const translations = {
    "ru": {
        "home": "Главная",
        "tournaments": "Турниры",
        "help": "Помощь",
        "news": "Новости",
        "tournament_title": "PUBG mobile",
        "entry_fee": "Стоимость участия",
        "entry_fee_value": "10 000 сум за человека",
        "date": "Дата турнира",
        "date_value": "12.01.2024",
        "prize_pool": "Призовой фонд",
        "prize_pool_value": "500 000 сум",
        "tournament_type": "Тип турнира",
        "tournament_type_value": "Склад (4 человека)",
        "join_button": "Участвовать",
        "footer_text": "&copy; 2025 IsMaN. Все права защищены."
    },
    "uz": {
        "home": "Bosh sahifa",
        "tournaments": "Turnirlar",
        "help": "Yordam",
        "news": "Yangiliklar",
        "tournament_title": "PUBG mobile",
        "entry_fee": "Ishtirok to'lovi",
        "entry_fee_value": "10 000 sum har bir kishi uchun",
        "date": "Turnir sanasi",
        "date_value": "12.01.2024",
        "prize_pool": "Mukofot jamg'armasi",
        "prize_pool_value": "500 000 sum",
        "tournament_type": "Turnir turi",
        "tournament_type_value": "Squad (4 kishi)",
        "join_button": "Ishtirok etish",
        "footer_text": "&copy; 2025 IsMaN. Barcha huquqlar himoyalangan."
    },
    "en": {
        "home": "Home",
        "tournaments": "Tournaments",
        "help": "Help",
        "news": "News",
        "tournament_title": "PUBG mobile",
        "entry_fee": "Entry fee",
        "entry_fee_value": "10,000 sum per person",
        "date": "Tournament date",
        "date_value": "12.01.2024",
        "prize_pool": "Prize pool",
        "prize_pool_value": "500,000 sum",
        "tournament_type": "Tournament type",
        "tournament_type_value": "Squad (4 people)",
        "join_button": "Join",
        "footer_text": "&copy; 2025 IsMaN. All rights reserved."
    }
};

// Функция для смены языка
function changeLanguage(language) {
    localStorage.setItem('language', language); // Сохраняем язык в localStorage

    // Переводим все элементы с атрибутом data-translate
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}

// При загрузке страницы устанавливаем язык, сохраненный в localStorage
window.addEventListener('load', () => {
    const savedLanguage = localStorage.getItem('language') || 'ru'; // По умолчанию русский
    changeLanguage(savedLanguage);
});
let currentIndex = 0;
const images = document.querySelectorAll('.slider-image');
const totalImages = images.length;

// Показываем первое изображение сразу
images[currentIndex].classList.add('active');

function changeImage() {
    // Снять класс 'active' с текущего изображения
    images[currentIndex].classList.remove('active');

    // Перейти к следующему изображению
    currentIndex = (currentIndex + 1) % totalImages;

    // Добавить класс 'active' к новому изображению
    images[currentIndex].classList.add('active');
}

// Начать смену изображений каждую секунду
setInterval(changeImage, 4000); // Интервал 3 секунды
