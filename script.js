// Frontend 24

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById('header')
  const hamburger = document.getElementById('hamburger')
  const main = document.getElementById('main')
  hamburger.onclick = e => {
    if (header.classList.contains('expanded')) {
      header.classList.remove('expanded')
    } else {
      header.classList.add('expanded')
    }
  }

  document.onclick = (e) => {
    if (!e.target.closest('#header')) {
      header.classList.remove('expanded')
    }
  }

});