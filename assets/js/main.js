const group = document.querySelector('.nav__group')
const nav = document.querySelector('.nav')
const chk = document.querySelector('#chk')
const container = document.querySelector('.container')
const coll1 = document.querySelector('#coll1')
const coll2 = document.querySelector('#coll2')
const coll3 = document.querySelector('#coll3')
const details1 = document.querySelector('.detail__collapse-details-1')
const details2 = document.querySelector('.detail__collapse-details-2')
const details3 = document.querySelector('.detail__collapse-details-3')

chk.addEventListener('change', () => {
  nav.classList.toggle('pad')
  group.classList.toggle('disgrd')
})

coll1.addEventListener('change', () => {
  details1.classList.toggle('collapse')

  if (details2.classList.contains('collapse') == true || details3.classList.contains('collapse') == true) {
    details2.classList.remove('collapse')
    details3.classList.remove('collapse')
  }
})

coll2.addEventListener('change', () => {
  details2.classList.toggle('collapse')

  if (details1.classList.contains('collapse') == true || details3.classList.contains('collapse') == true) {
    details1.classList.remove('collapse')
    details3.classList.remove('collapse')
  }
})

coll3.addEventListener('change', () => {
  details3.classList.toggle('collapse')
  if (details2.classList.contains('collapse') == true || details1.classList.contains('collapse') == true) {
    details2.classList.remove('collapse')
    details1.classList.remove('collapse')
  }
})

