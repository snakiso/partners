const buttons = document.querySelectorAll('.partner__card-button')
const info = document.querySelectorAll('.partner__card-information')
console.log(buttons)
for (let i = 0; i<buttons.length; i++){
 buttons[i].addEventListener('click', openText(i),false)
}
function openText(i){
 return function(e){
  buttons[i].classList.toggle('partner__card-button_active')
  info[i].classList.toggle('partner__card-information_active')
  let button = buttons[i]
  if (button.classList == 'partner__card-button partner__card-button_active'){
   return button.innerHTML='свернуть <p></p>'
 }else{
   return button.innerHTML = 'подробнее <p></p>'
 }}
}