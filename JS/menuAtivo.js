const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLength = menuItem.length;
for(let i = 0; i < menuLength; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].classList.add('active')
  }
  else {
    menuItem[i].classList.remove('active')
  }
}