
var botaoBusca = $('.search-button')
var botaoMenu = $('.menu-button')
var btnBusca = $('.icon-search')

botaoBusca.addEventListener('click', function() {
  $('.header-menu').classList.remove('show')
  $('.header-search-form').classList.toggle('show')
})

botaoMenu.addEventListener('click', function() {
  $('.header-search-form').classList.remove('show')
  $('.header-menu').classList.toggle('show')
})

btnBusca.addEventListener('click', function() {
  $('.header-search-form').classList.toggle('show')
})