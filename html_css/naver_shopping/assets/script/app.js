const dimmedLayer = document.querySelector('.dimmed-layer');
const orderTypePopup = document.querySelector('.order-type-popup');
const btnToggle = document.querySelectorAll('.btn-toggle');

window.onload = function () {
  popupOpen();
};

const popupOpen = () => {
  dimmedLayer.classList.remove('hidden');
  orderTypePopup.classList.remove('hidden');
};

const popupClose = () => {
  dimmedLayer.classList.add('hidden');
  orderTypePopup.classList.add('hidden');
};

// 메뉴 리스트 토글
const toggleMenuList = (e) => {
    e.currentTarget.closest('.menu-list-area').classList.toggle('is-closed');
}

btnToggle.forEach(function (e) {
    e.addEventListener('click', toggleMenuList);
})
