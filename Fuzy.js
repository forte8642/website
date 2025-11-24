const buttons = document.querySelectorAll('.tab-btn');
const galleries = document.querySelectorAll('.gallery');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Убираем класс active у всех кнопок
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Скрываем все галереи
    galleries.forEach(g => g.style.display = 'none');

    // Показываем выбранную
    const target = document.getElementById(btn.dataset.target);
    target.style.display = 'flex';
  });
});
