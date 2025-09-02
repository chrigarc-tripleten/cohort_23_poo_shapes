export const popup = document.querySelector(".popup");

export function openPopup(message) {
  popup.classList.add("popup_show");
  popup.querySelector(".popup__text").textContent = message;
}


popup.querySelector('.popup__close').addEventListener('click', () => {
    popup.classList.remove("popup_show");
})