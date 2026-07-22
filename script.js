// 1. Находим кнопку-луну по её ID
const themeBtn = document.querySelector("#theme-toggle-btn");

// 2. Вешаем на неё «слушатель» кликов
themeBtn.addEventListener("click", function() {
  
  // 3. Творим магию: включаем/выключаем класс dark-theme у всего body!
  document.body.classList.toggle("dark-theme");

  // 4. Меняем смайлик на кнопке: если тема темная — показываем
  //  солнце, если светлая — луну
  if (document.body.classList.contains("dark-theme")) {
    themeBtn.textContent = "☀️"; // Включилась темная тема -> показываем солнышко
  } else {
    themeBtn.textContent = "🌙"; // Выключилась темная тема -> возвращаем луну
  }
});





// 1. Находим в HTML кнопку-три полоски и само меню навигации
const burgerBtn = document.querySelector("#burger-btn");
const navMenu = document.querySelector("#nav-menu");

// 2. Вешаем «слушатель» кликов на кнопку-бургер
burgerBtn.addEventListener("click", function() {
  
  // 3. Творим ту же магию: включаем/выключаем класс "active" у меню навигации!
  navMenu.classList.toggle("active");
});